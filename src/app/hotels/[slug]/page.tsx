import { getHotelBySlug, getHotels } from "@/lib/markdown";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroDetail from "@/components/HeroDetail";
import MarkdownContent from "@/components/MarkdownContent";
import InfoSidebar from "@/components/InfoSidebar";
import { Check } from "lucide-react";
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { slug } = await params;
    const hotel = getHotelBySlug(slug);

    if (!hotel) return {};

    return {
        title: `${hotel.title} | Hôtel de Luxe Marrakech`,
        description: hotel.description,
    };
}

export async function generateStaticParams() {
    const hotels = getHotels();
    return hotels.map((hotel) => ({
        slug: hotel.slug,
    }));
}

export default async function HotelPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const hotel = getHotelBySlug(slug);

    if (!hotel) {
        notFound();
    }

    const sidebarItems = hotel.amenities.map(amenity => ({
        icon: <Check size={16} />,
        label: amenity
    }));

    return (
        <main className="min-h-screen">
            <Navbar />

            <HeroDetail
                title={hotel.title}
                image={hotel.image}
                stars={hotel.stars}
                location={hotel.location}
                category={hotel.category}
            />

            {/* Content Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">

                        {/* Left Column: Markdown Content */}
                        <div className="lg:col-span-2">
                            <MarkdownContent content={hotel.content} />
                        </div>

                        {/* Right Column: Sidebar / Infobox */}
                        <div className="lg:col-span-1">
                            <InfoSidebar
                                title="Services & Atouts"
                                items={sidebarItems}
                                bookingUrl={hotel.bookingUrl}
                                bookingLabel="Réserver mon séjour"
                            />
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
