import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MentionsLegalesPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="pt-40 pb-24 bg-stone-50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="text-4xl font-serif tracking-widest uppercase mb-16 text-luxury-charcoal text-center border-b border-stone-200 pb-8">
                        Mentions Légales
                    </h1>

                    <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-12">
                        <section>
                            <h2 className="text-luxury-charcoal uppercase tracking-[0.2em] text-xl font-serif mb-6">1. Éditeur du Site</h2>
                            <p className="font-sans">
                                Le site <strong>Hôtel de Luxe Marrakech</strong> est édité par :<br />
                                Gautier Digital<br />
                                13 rue de la paix<br />
                                13000 Aix-en-Provence<br />
                            </p>
                        </section>

                        <section>
                            <h2 className="text-luxury-charcoal uppercase tracking-[0.2em] text-xl font-serif mb-6">2. Hébergement</h2>
                            <p className="font-sans">
                                Le site est hébergé par :<br />
                                <strong>Vercel Inc.</strong><br />
                                440 N Barranca Ave #4133<br />
                                Covina, CA 91723<br />
                                États-Unis
                            </p>
                        </section>

                        <section>
                            <h2 className="text-luxury-charcoal uppercase tracking-[0.2em] text-xl font-serif mb-6">3. Propriété Intellectuelle</h2>
                            <p className="font-sans">
                                La structure générale du site, ainsi que les textes, graphismes, images, sons et vidéos la composant, sont la propriété de l'éditeur ou de ses partenaires. Toute représentation et/ou reproduction et/ou exploitation partielle ou totale des contenus et services proposés par le site, par quelque procédé que ce soit, sans l'autorisation préalable et par écrit de l'éditeur est strictement interdite.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-luxury-charcoal uppercase tracking-[0.2em] text-xl font-serif mb-6">4. Cookies</h2>
                            <p className="font-sans">
                                Le site peut avoir recours à des techniques de "cookies" lui permettant de traiter des statistiques et des informations sur le trafic, de faciliter la navigation et d'améliorer le service pour le confort de l'utilisateur. Vous pouvez vous opposer à l'enregistrement de ces cookies en configurant votre logiciel de navigation.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-luxury-charcoal uppercase tracking-[0.2em] text-xl font-serif mb-6">5. Loi Applicable</h2>
                            <p className="font-sans">
                                Les présentes mentions légales sont régies par la loi française et marocaine. En cas de différend et à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents.
                            </p>
                        </section>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
