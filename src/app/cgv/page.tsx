import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Conditions Générales de Vente | Guide Marrakech Luxury",
    description: "Consultez les conditions générales de vente et de réservation de notre guide des hôtels de luxe à Marrakech.",
};

export default function CGVPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="pt-40 pb-24 bg-stone-50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="text-4xl font-serif tracking-widest uppercase mb-16 text-luxury-charcoal text-center border-b border-stone-200 pb-8">
                        Conditions Générales de Vente
                    </h1>

                    <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-12">
                        <section>
                            <h2 className="text-luxury-charcoal uppercase tracking-[0.2em] text-xl font-serif mb-6">1. Préambule</h2>
                            <p className="font-sans">
                                Les présentes Conditions Générales de Vente (ci-après "CGV") s'appliquent à toute consultation ou utilisation du site internet de <strong>Hôtel de Luxe Marrakech</strong>. Le site est un guide d'information et de recommandation d'établissements hôteliers de luxe à Marrakech.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-luxury-charcoal uppercase tracking-[0.2em] text-xl font-serif mb-6">2. Services et Réservations</h2>
                            <p className="font-sans mb-4">
                                Hôtel de Luxe Marrakech propose un service gratuit d'information. Nous ne sommes pas une agence de voyage ni un système de réservation directe.
                            </p>
                            <ul className="list-disc pl-6 space-y-4 font-sans">
                                <li><strong>Intermédiation :</strong> Les liens de réservation présents sur le site redirigent l'utilisateur vers les sites officiels des établissements ou vers des plateformes de réservation partenaires.</li>
                                <li><strong>Contrat :</strong> Tout contrat de réservation est conclu directement entre l'utilisateur et l'établissement concerné. Hôtel de Luxe Marrakech ne saurait être tenu responsable des conditions de séjour ou d'annulation propres à chaque partenaire.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-luxury-charcoal uppercase tracking-[0.2em] text-xl font-serif mb-6">3. Responsabilité</h2>
                            <p className="font-sans">
                                Bien que nous apportions le plus grand soin à la vérification des informations publiées, Hôtel de Luxe Marrakech ne peut garantir l'exactitude, l'exhaustivité ou l'actualité des tarifs, disponibilités et descriptions fournis par les établissements tiers.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-luxury-charcoal uppercase tracking-[0.2em] text-xl font-serif mb-6">4. Propriété Intellectuelle</h2>
                            <p className="font-sans">
                                L'ensemble du site (structure, textes, photographies, logos) est protégé par le droit d'auteur. Toute reproduction, même partielle, sans autorisation préalable écrite est strictement interdite et constitue une contrefaçon.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-luxury-charcoal uppercase tracking-[0.2em] text-xl font-serif mb-6">5. Protection des Données Personnel</h2>
                            <p className="font-sans">
                                Hôtel de Luxe Marrakech s'engage à respecter la confidentialité de vos données conformément au RGPD. Les informations collectées via nos formulaires de contact sont utilisées exclusivement pour répondre à vos demandes et ne sont jamais cédées à des tiers sans votre consentement explicite.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-luxury-charcoal uppercase tracking-[0.2em] text-xl font-serif mb-6">6. Modification des Conditions</h2>
                            <p className="font-sans">
                                Nous nous réservons le droit de modifier les présentes CGV à tout moment. Les utilisateurs sont invités à les consulter régulièrement.
                            </p>
                        </section>

                        <div className="pt-12 border-t border-stone-200 text-sm italic">
                            Dernière mise à jour : Janvier 2026
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
