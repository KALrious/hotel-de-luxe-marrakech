import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Utensils } from "lucide-react";
import { getRestaurants } from "@/lib/markdown";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Gastronomie & Tables d'Exception à Marrakech",
    description: "Explorez les meilleures adresses gastronomiques de Marrakech. Du potager bio du Palais Ronsard aux tables impériales de la ville.",
};

export default function GastronomiePage() {
    const restaurants = getRestaurants();

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="pt-40 pb-20 bg-luxury-charcoal text-white text-center">
                <div className="container mx-auto px-6">
                    <span className="text-gold-500 text-xs uppercase tracking-[0.4em] mb-4 block">Art de Vivre</span>
                    <h1 className="text-4xl md:text-6xl font-serif tracking-widest uppercase mb-6">
                        Gastronomie
                    </h1>
                    <p className="text-stone-400 font-sans max-w-2xl mx-auto italic">
                        Une odyssée culinaire à travers les tables les plus prestigieuses de Marrakech.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {restaurants.map((rest, idx) => (
                            <div key={idx} className="group border border-stone-100 p-12 hover:border-gold-500 transition-all duration-500 flex flex-col items-center text-center">
                                <Utensils size={32} className="text-gold-500 mb-8 transform group-hover:scale-110 transition-transform" />
                                <span className="text-[10px] uppercase tracking-widest text-stone-500 mb-4">{rest.hotel}</span>
                                <h3 className="text-2xl font-serif text-luxury-charcoal tracking-widest uppercase mb-4">{rest.name}</h3>
                                <div className="w-10 h-[1px] bg-gold-500 mb-6" />
                                <p className="text-stone-500 text-sm font-sans mb-6 leading-relaxed italic">
                                    "{rest.description}"
                                </p>
                                <div className="mt-8 pt-8 border-t border-stone-50 w-full space-y-2">
                                    <p className="text-[10px] uppercase tracking-widest text-stone-400">Cuisine</p>
                                    <p className="text-xs font-bold text-luxury-charcoal">{rest.cuisine}</p>
                                </div>
                                <Link
                                    href={`/gastronomie/${rest.slug}`}
                                    className="mt-12 text-[10px] uppercase tracking-[0.3em] font-bold text-gold-600 border-b border-gold-600 pb-1 hover:text-luxury-charcoal hover:border-luxury-charcoal transition-colors"
                                >
                                    Découvrir la Table
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
