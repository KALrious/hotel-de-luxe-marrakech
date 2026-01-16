import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Galerie Photos | L'Esprit du Palais Ronsard en Images",
    description: "Explorez notre galerie photos pour découvrir l'architecture, les jardins et l'atmosphère unique de Marrakech et du Palais Ronsard.",
};

export default function GaleriePage() {
    const images = [
        { title: "Suite Royale", desc: "Éclats d'orient et confort moderne." },
        { title: "Jardins Secrets", desc: "Une oasis de fraîcheur au cœur de la Palmeraie." },
        { title: "Détails Artisanaux", desc: "Le savoir-faire ancestral marocain." },
        { title: "Piscine au Crépuscule", desc: "Moments magiques sous le ciel de Marrakech." },
        { title: "Gastronomie", desc: "Les saveurs du potager Relais & Châteaux." },
        { title: "Architecture", desc: "Un hommage aux années 30." },
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="pt-40 pb-20 bg-luxury-charcoal text-white text-center">
                <div className="container mx-auto px-6">
                    <span className="text-gold-500 text-xs uppercase tracking-[0.4em] mb-4 block">Capturer l'Émotion</span>
                    <h1 className="text-4xl md:text-6xl font-serif tracking-widest uppercase mb-6">
                        Galerie Photos
                    </h1>
                    <p className="text-stone-400 font-sans max-w-2xl mx-auto italic">
                        Une immersion visuelle dans l'univers de Hôtel de Luxe Marrakech.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {images.map((img, idx) => (
                            <div key={idx} className="group relative aspect-square bg-stone-100 overflow-hidden">
                                <div className="absolute inset-0 bg-stone-200 flex items-center justify-center text-stone-400 font-serif italic text-sm">
                                    Image {idx + 1}
                                </div>
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-luxury-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center">
                                    <h3 className="text-white font-serif uppercase tracking-widest text-lg mb-2">{img.title}</h3>
                                    <div className="w-10 h-[1px] bg-gold-500 mb-4" />
                                    <p className="text-stone-300 text-xs font-sans italic">{img.desc}</p>
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
