import { getSpaBySlug, getSpas } from "@/lib/markdown";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroDetail from "@/components/HeroDetail";
import MarkdownContent from "@/components/MarkdownContent";
import InfoSidebar from "@/components/InfoSidebar";
import { Sparkles as SparklesIcon, MapPin as MapPinIcon } from "lucide-react";

export async function generateStaticParams() {
    const spas = getSpas();
    return spas.map((spa) => ({
        slug: spa.slug,
    }));
}

export default async function SpaDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const spa = getSpaBySlug(slug);

    if (!spa) notFound();

    const sidebarItems = [
        {
            icon: <SparklesIcon size={16} />,
            label: "Expérience Signature"
        },
        {
            icon: <MapPinIcon size={16} />,
            label: spa.hotel
        }
    ];

    return (
        <main className="min-h-screen">
            <Navbar />

            <HeroDetail
                title={spa.name}
                subtitle={spa.hotel}
                image={spa.image}
                category="Bien-être & Spa"
                height="h-[60vh]"
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                        <div className="lg:col-span-2">
                            <MarkdownContent content={spa.content} />
                        </div>

                        <div className="lg:col-span-1">
                            <InfoSidebar
                                title="Réservation"
                                items={sidebarItems}
                                bookingUrl={spa.bookingUrl}
                                bookingLabel="Prendre rendez-vous"
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
