import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getHotels } from "@/lib/markdown";
import HotelCard from "@/components/HotelCard";

export default function ReservationPage() {
    const hotels = getHotels();

    return (
        <main className="min-h-screen bg-stone-50">
            <Navbar dark={true} />

            <section className="pt-40 pb-20 bg-white border-b border-stone-100">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif tracking-widest uppercase mb-6 text-luxury-charcoal">
                        Réservations
                    </h1>
                    <p className="text-stone-500 font-sans max-w-2xl mx-auto italic">
                        Choisissez votre havre de paix parmi notre sélection exclusive d'hôtels de luxe à Marrakech.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-4 mb-12">
                        <div className="flex-1 p-4 bg-white border border-stone-200">
                            <span className="text-[10px] uppercase tracking-widest text-stone-400 block mb-1">Détails de la recherche</span>
                            <p className="text-sm font-serif">Marrakech · 2 Voyageurs · Janvier 2026</p>
                        </div>
                        <button className="px-12 py-4 bg-luxury-charcoal text-white text-xs uppercase tracking-widest font-bold hover:bg-gold-600 transition-colors">
                            Modifier
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {hotels.map((hotel) => (
                            <HotelCard key={hotel.slug} hotel={hotel} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
