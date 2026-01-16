import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HotelCard from "@/components/HotelCard";
import { getHotels } from "@/lib/markdown";

export default function HotelsListingPage() {
    const allHotels = getHotels();

    return (
        <main className="min-h-screen bg-stone-50">
            <Navbar />

            {/* Header section */}
            <section className="pt-40 pb-20 bg-luxury-charcoal text-white">
                <div className="container mx-auto px-6 text-center">
                    <span className="text-gold-500 text-xs uppercase tracking-[0.4em] mb-4 block">Notre Portfolio</span>
                    <h1 className="text-4xl md:text-6xl font-serif tracking-widest uppercase mb-6">
                        La Collection Marrakech
                    </h1>
                    <p className="text-stone-400 font-sans max-w-2xl mx-auto italic">
                        Une sélection rigoureuse des établissements les plus exclusifs de la Ville Rouge.
                    </p>
                </div>
            </section>

            {/* Grid section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {allHotels.map((hotel) => (
                            <HotelCard key={hotel.slug} hotel={hotel} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
