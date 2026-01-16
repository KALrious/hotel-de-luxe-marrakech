import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, TrendingUp, Users } from "lucide-react";

export default function PartenariatPage() {
    return (
        <main className="min-h-screen">
            <Navbar dark={true} />

            <section className="pt-40 pb-20 bg-stone-50">
                <div className="container mx-auto px-6 text-center">
                    <span className="text-gold-600 text-[10px] uppercase tracking-[0.4em] mb-4 block">B2B</span>
                    <h1 className="text-4xl md:text-6xl font-serif tracking-widest uppercase mb-12">
                        Devenir Partenaire
                    </h1>
                    <p className="text-stone-500 font-sans max-w-2xl mx-auto leading-relaxed">
                        Rejoignez notre sélection exclusive et présentez votre établissement à une clientèle internationale exigeante, en quête du luxe absolu à Marrakech.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">

                        <div className="space-y-6">
                            <div className="w-20 h-20 bg-luxury-cream border border-gold-200 flex items-center justify-center mx-auto">
                                <Award className="text-gold-500" size={32} />
                            </div>
                            <h3 className="text-xl font-serif uppercase tracking-widest">Prestige</h3>
                            <p className="text-sm text-stone-500 font-sans leading-loose">
                                Une association avec les enseignes les plus prestigieuses, telle que le Palais Ronsard, signature de notre engagement qualité.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="w-20 h-20 bg-luxury-cream border border-gold-200 flex items-center justify-center mx-auto">
                                <Users className="text-gold-500" size={32} />
                            </div>
                            <h3 className="text-xl font-serif uppercase tracking-widest">Audience</h3>
                            <p className="text-sm text-stone-500 font-sans leading-loose">
                                Accédez à une communauté de voyageurs passionnés par Marrakech, ses palais, ses riads et sa culture unique.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="w-20 h-20 bg-luxury-cream border border-gold-200 flex items-center justify-center mx-auto">
                                <TrendingUp className="text-gold-500" size={32} />
                            </div>
                            <h3 className="text-xl font-serif uppercase tracking-widest">Visibilité</h3>
                            <p className="text-sm text-stone-500 font-sans leading-loose">
                                Mettez en avant vos services exclusifs, vos suites et vos expériences uniques au travers de notre plateforme optimisée.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-luxury-charcoal text-white text-center">
                <div className="container mx-auto px-6 max-w-2xl">
                    <h2 className="text-3xl font-serif uppercase tracking-widest mb-8">Prêt à nous rejoindre ?</h2>
                    <p className="text-stone-400 mb-10 font-sans italic">
                        "Nous ne collaborons qu'avec des établissements qui partagent notre vision de l'exceptionnel."
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-12 py-4 border border-gold-500 text-gold-500 uppercase tracking-widest text-xs font-bold hover:bg-gold-500 hover:text-white transition-all"
                    >
                        Soumettre votre dossier
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
