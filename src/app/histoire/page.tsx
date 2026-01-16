import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Notre Histoire | L'Héritage du Palais Ronsard Marrakech",
    description: "Découvrez l'histoire de notre guide et l'engagement du Palais Ronsard pour faire rayonner l'excellence marocaine.",
};

export default function HistoirePage() {
    return (
        <main className="min-h-screen">
            <Navbar dark={true} />

            <section className="pt-40 pb-20 bg-luxury-cream">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <span className="text-gold-600 text-[10px] uppercase tracking-[0.4em] mb-4 block">Manifeste</span>
                    <h1 className="text-4xl md:text-6xl font-serif text-luxury-charcoal tracking-widest uppercase mb-12">
                        Notre Histoire
                    </h1>
                    <div className="w-20 h-[1px] bg-gold-500 mx-auto mb-12" />

                    <div className="prose prose-stone mx-auto text-left prose-lg font-sans text-stone-600 italic leading-loose">
                        <p className="mb-8">
                            "Hôtel de Luxe Marrakech" est né d'une passion inconditionnelle pour Marrakech, cette oasis de lumière et de contrastes située au pied de l'Atlas. Notre mission est simple : devenir le guide ultime de l'hospitalité d'exception dans la Ville Rouge.
                        </p>
                        <p className="mb-8">
                            Dans un monde où le luxe devient souvent standardisé, nous croyons au caractère, à l'âme et à l'histoire. C'est pourquoi nous avons placé le **Palais Ronsard** au cœur de notre sélection. Cet établissement Relais & Châteaux incarne pour nous la perfection : une élégance discrète, un service sur-mesure et un respect profond de l'art de vivre.
                        </p>
                        <p>
                            Que vous cherchiez le faste d'un palace séculaire ou l'intimité d'un riad confidentiel en médina, chaque adresse de notre collection a été choisie pour sa capacité à créer des souvenirs impérissables. Nous ne référençons pas seulement des hôtels ; nous sélectionnons des expériences sensorielles.
                        </p>
                    </div>
                </div>
            </section>

            {/* Signature Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-md mx-auto">
                        <blockquote className="text-2xl font-serif italic text-luxury-charcoal mb-8">
                            "L'excellence est un art que l'on ne finit jamais d'apprendre."
                        </blockquote>
                        <p className="text-xs uppercase tracking-[0.3em] font-bold text-gold-600">L'équipe Hôtel de Luxe Marrakech</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
