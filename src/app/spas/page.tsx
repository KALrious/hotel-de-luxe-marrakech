import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles } from "lucide-react";
import { getSpas } from "@/lib/markdown";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Bien-être & Spas de Luxe à Marrakech | Sanctuaires de Sérénité",
    description: "Les meilleurs spas et hammams de luxe à Marrakech pour une expérience de détente absolue et de soins orientaux raffinés.",
};

export default function SpasPage() {
    const spas = getSpas();

    return (
        <main className="min-h-screen bg-white">
            <Navbar dark={true} />

            <section className="pt-40 pb-20 bg-stone-50 border-b border-stone-100">
                <div className="container mx-auto px-6 text-center">
                    <span className="text-gold-600 text-[10px] uppercase tracking-[0.4em] mb-4 block font-bold">Bien-être</span>
                    <h1 className="text-4xl md:text-6xl font-serif tracking-widest uppercase mb-6 text-luxury-charcoal">
                        Spas & Sérénité
                    </h1>
                    <p className="text-stone-500 font-sans max-w-2xl mx-auto italic">
                        Découvrez notre sélection des sanctuaires les plus exclusifs de Marrakech, où l'art du bien-être rencontre le luxe absolu.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 gap-24">
                        {spas.map((spa, idx) => (
                            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24 group`}>
                                <div className="flex-1 w-full aspect-[4/3] relative overflow-hidden">
                                    <div className="absolute inset-0 bg-stone-200" />
                                    <Image src={spa.image} alt={spa.name} fill className="object-cover" />
                                    <div className="absolute inset-0 bg-luxury-charcoal/20 z-10 group-hover:bg-luxury-charcoal/40 transition-colors" />
                                    <div className="absolute inset-0 flex items-center justify-center text-white/50 font-serif italic uppercase text-xs tracking-widest z-20 text-center px-4">
                                        {spa.name}
                                    </div>
                                </div>
                                <div className="flex-1 space-y-8">
                                    <div className="space-y-4">
                                        <h3 className="text-stone-400 text-[10px] uppercase tracking-[0.3em] font-bold">
                                            {spa.hotel}
                                        </h3>
                                        <h2 className="text-3xl md:text-4xl font-serif text-charcoal tracking-widest uppercase">
                                            {spa.name}
                                        </h2>
                                        <p className="text-stone-600 font-sans leading-relaxed text-lg italic">
                                            "{spa.description}"
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-stone-100">
                                        {spa.highlights.map((h, i) => (
                                            <div key={i} className="flex flex-col items-center text-center space-y-2">
                                                <Sparkles size={16} className="text-gold-500" />
                                                <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">{h}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-8">
                                        <Link
                                            href={`/spas/${spa.slug}`}
                                            className="inline-block px-12 py-5 bg-luxury-charcoal text-white uppercase tracking-[0.3em] text-xs font-bold hover:bg-gold-600 transition-all duration-300 w-full sm:w-auto text-center"
                                        >
                                            Découvrir le Spa
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
