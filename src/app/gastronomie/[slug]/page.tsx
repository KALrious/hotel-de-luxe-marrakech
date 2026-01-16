import { getRestaurantBySlug, getRestaurants } from "@/lib/markdown";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroDetail from "@/components/HeroDetail";
import MarkdownContent from "@/components/MarkdownContent";
import InfoSidebar from "@/components/InfoSidebar";
import { Utensils, User } from "lucide-react";
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { slug } = await params;
    const rest = getRestaurantBySlug(slug);

    if (!rest) return {};

    return {
        title: `${rest.name} | Gastronomie Marrakech`,
        description: rest.description,
    };
}

export async function generateStaticParams() {
    const restaurants = getRestaurants();
    return restaurants.map((rest) => ({
        slug: rest.slug,
    }));
}

export default async function RestaurantDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const rest = getRestaurantBySlug(slug);

    if (!rest) notFound();

    const sidebarItems = [
        {
            icon: <Utensils size={16} />,
            label: rest.cuisine
        },
        {
            icon: <User size={16} />,
            label: `Chef: ${rest.chef}`
        }
    ];

    return (
        <main className="min-h-screen">
            <Navbar />

            <HeroDetail
                title={rest.name}
                subtitle={rest.hotel}
                image={rest.image}
                category="Gastronomie"
                height="h-[60vh]"
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                        <div className="lg:col-span-2">
                            <MarkdownContent content={rest.content} />
                        </div>

                        <div className="lg:col-span-1">
                            <InfoSidebar
                                title="Réservation"
                                items={sidebarItems}
                                bookingUrl={rest.bookingUrl}
                                bookingLabel="Réserver une table"
                                showHelpCard={false}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
