import { getFtourBySlug, getFtours } from "@/lib/markdown";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroDetail from "@/components/HeroDetail";
import MarkdownContent from "@/components/MarkdownContent";
import InfoSidebar from "@/components/InfoSidebar";
import { Clock, DollarSign, Building2, CalendarDays } from "lucide-react";
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { slug } = await params;
    const ftour = getFtourBySlug(slug);

    if (!ftour) return {};

    return {
        title: `${ftour.name} | Ftour Ramadan 2026 Marrakech`,
        description: ftour.description,
    };
}

export async function generateStaticParams() {
    const ftours = getFtours();
    return ftours.map((ftour) => ({
        slug: ftour.slug,
    }));
}

export default async function FtourDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const ftour = getFtourBySlug(slug);

    if (!ftour) notFound();

    const sidebarItems = [
        {
            icon: <Building2 size={16} />,
            label: ftour.hotel
        },
        {
            icon: <Clock size={16} />,
            label: ftour.timing
        },
        {
            icon: <DollarSign size={16} />,
            label: ftour.price
        },
        ...(ftour.ramadanDates ? [{
            icon: <CalendarDays size={16} />,
            label: ftour.ramadanDates
        }] : [])
    ];

    return (
        <main className="min-h-screen">
            <Navbar />

            <HeroDetail
                title={ftour.name}
                subtitle={ftour.hotel}
                image={ftour.image}
                category="Ftour Ramadan"
                height="h-[60vh]"
            />

            {ftour.featured && (
                <div className="bg-gold-500 text-white py-4">
                    <div className="container mx-auto px-6 text-center">
                        <p className="text-xs uppercase tracking-[0.3em] font-bold">
                            🌙 Offre Exclusive Palais Ronsard
                        </p>
                    </div>
                </div>
            )}

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                        <div className="lg:col-span-2">
                            <MarkdownContent content={ftour.content} />
                            
                            {ftour.highlights && ftour.highlights.length > 0 && (
                                <div className="mt-16 p-12 bg-luxury-cream border border-gold-500/20">
                                    <h3 className="text-xs uppercase tracking-[0.3em] text-gold-600 font-bold mb-8">
                                        Points Forts
                                    </h3>
                                    <ul className="space-y-4">
                                        {ftour.highlights.map((highlight, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-stone-700">
                                                <span className="text-gold-500 mr-3">✦</span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="lg:col-span-1">
                            <InfoSidebar
                                title="Réservation"
                                items={sidebarItems}
                                bookingUrl={ftour.bookingUrl}
                                bookingLabel="Réserver mon ftour"
                                showHelpCard={true}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
