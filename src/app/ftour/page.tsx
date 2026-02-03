import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { UtensilsCrossed } from "lucide-react";
import { getFtours } from "@/lib/markdown";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ftour Ramadan 2026 - Tables d'Exception à Marrakech",
  description:
    "Découvrez les meilleures offres de ftour pour le Ramadan 2026 dans les palaces de Marrakech. Une célébration gastronomique du mois sacré.",
};

export default function FtourPage() {
  const ftours = getFtours();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-40 pb-20 bg-luxury-charcoal text-white text-center">
        <div className="container mx-auto px-6">
          <span className="text-gold-500 text-xs uppercase tracking-[0.4em] mb-4 block">
            Ramadan 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-serif tracking-widest uppercase mb-6">
            Ftour d&apos;Exception
          </h1>
          <p className="text-stone-400 font-sans max-w-2xl mx-auto italic">
            Célébrez le mois sacré du Ramadan dans les plus beaux palaces de
            Marrakech.
          </p>
          <div className="mt-6 inline-block px-6 py-2 border border-gold-500 text-gold-500 text-xs uppercase tracking-widest">
            18 février - 28 mars 2026
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ftours.map((ftour, idx) => (
              <div
                key={idx}
                className="group border border-stone-100 p-12 hover:border-gold-500 transition-all duration-500 flex flex-col items-center text-center relative"
              >
                {ftour.featured && (
                  <div className="absolute top-6 right-6 bg-gold-500 text-white px-3 py-1 text-[9px] uppercase tracking-widest">
                    Exclusif
                  </div>
                )}
                <UtensilsCrossed
                  size={32}
                  className="text-gold-500 mb-8 transform group-hover:scale-110 transition-transform"
                />
                <span className="text-[10px] uppercase tracking-widest text-stone-500 mb-4">
                  {ftour.hotel}
                </span>
                <h3 className="text-2xl font-serif text-luxury-charcoal tracking-widest uppercase mb-4">
                  {ftour.name}
                </h3>
                <div className="w-10 h-[1px] bg-gold-500 mb-6" />
                <p className="text-stone-500 text-sm font-sans mb-6 leading-relaxed italic">
                  &quot;{ftour.description}&quot;
                </p>
                <div className="mt-8 pt-8 border-t border-stone-50 w-full space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-stone-400">
                      Horaires
                    </p>
                    <p className="text-xs font-bold text-luxury-charcoal">
                      {ftour.timing}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-stone-400">
                      Tarif
                    </p>
                    <p className="text-xs font-bold text-gold-600">
                      {ftour.price}
                    </p>
                  </div>
                </div>
                <Link
                  href={`/ftour/${ftour.slug}`}
                  className="mt-12 text-[10px] uppercase tracking-[0.3em] font-bold text-gold-600 border-b border-gold-600 pb-1 hover:text-luxury-charcoal hover:border-luxury-charcoal transition-colors"
                >
                  Découvrir l&apos;Offre
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
