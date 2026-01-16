import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contactez-nous | Palais Ronsard & Guide Marrakech",
    description: "Une question ? Un projet de partenariat ? Contactez l'équipe du guide Hôtel de Luxe Marrakech et du Palais Ronsard.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar dark={true} />

            <section className="pt-40 pb-20 bg-luxury-charcoal text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif tracking-widest uppercase mb-6">
                        Contactez-nous
                    </h1>
                    <p className="text-stone-400 font-sans max-w-2xl mx-auto">
                        Notre équipe dédiée est à votre écoute pour transformer vos rêves de voyage en réalité.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-2xl font-serif uppercase tracking-widest mb-8 text-luxury-charcoal">Prendre Attache</h2>
                                <p className="text-stone-600 mb-8 font-sans leading-relaxed">
                                    Qu'il s'agisse d'une réservation, d'une demande spéciale ou d'une simple question, nous vous répondrons dans les plus brefs délais.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <Mail className="text-gold-500 mr-6" size={24} />
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-luxury-charcoal mb-1">Email</h4>
                                        <p className="text-stone-500">conciergerie@palais-riads.ma</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Phone className="text-gold-500 mr-6" size={24} />
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-luxury-charcoal mb-1">Téléphone</h4>
                                        <p className="text-stone-500">+212 (0) 524 123 456</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <MapPin className="text-gold-500 mr-6" size={24} />
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-luxury-charcoal mb-1">Adresse</h4>
                                        <p className="text-stone-500">Avenue Mohammed VI, Marrakech, Maroc</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-luxury-cream p-10 border border-stone-100">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[10px] uppercase tracking-widest font-bold text-stone-500 mb-2">Nom Complet</label>
                                        <input type="text" className="w-full bg-white border border-stone-200 p-3 outline-none focus:border-gold-500 transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] uppercase tracking-widest font-bold text-stone-500 mb-2">Adresse Email</label>
                                        <input type="email" className="w-full bg-white border border-stone-200 p-3 outline-none focus:border-gold-500 transition-colors" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[10px] uppercase tracking-widest font-bold text-stone-500 mb-2">Sujet de votre message</label>
                                    <select className="w-full bg-white border border-stone-200 p-3 outline-none focus:border-gold-500 transition-colors uppercase text-[10px] tracking-widest">
                                        <option>Demande de réservation</option>
                                        <option>Partenariat</option>
                                        <option>Presse</option>
                                        <option>Autre</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[10px] uppercase tracking-widest font-bold text-stone-500 mb-2">Votre Message</label>
                                    <textarea rows={5} className="w-full bg-white border border-stone-200 p-3 outline-none focus:border-gold-500 transition-colors"></textarea>
                                </div>
                                <button className="w-full bg-luxury-charcoal text-white py-4 uppercase tracking-[0.3em] text-xs font-bold hover:bg-gold-600 transition-all">
                                    Envoyer le Message
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
