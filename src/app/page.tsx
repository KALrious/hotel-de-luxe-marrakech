import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HotelCard from "@/components/HotelCard";
import BookingEngine from "@/components/BookingEngine";
import { getHotels, getFtours } from "@/lib/markdown";
import Link from "next/link";
import { ArrowRight, Award, UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hôtel de Luxe Marrakech | Le Guide d'Exception & Réservation",
  description:
    "Découvrez les plus beaux hôtels et palais de Marrakech. Guide exclusif, réservations en direct et sélection raffinée par le Palais Ronsard.",
};

export default function Home() {
  const allHotels = getHotels();
  const featuredHotel = allHotels.find((h) => h.featured) || allHotels[0];
  const allFtours = getFtours();
  const featuredFtour = allFtours.find((f) => f.featured) || allFtours[0];
  const popularFtours = allFtours.filter((f) => !f.featured).slice(0, 3);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section - SEO Focus & Booking Engine */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20000ms] hover:scale-110"
          style={{
            backgroundImage: `url('/images/hotels/palais-ronsard-hero.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mb-16 animate-fade-in text-white">
          <span className="inline-block text-gold-500 font-serif tracking-[0.4em] mb-6 uppercase text-sm">
            Guide d&apos;exception & Réservation
          </span>
          <h1 className="text-5xl md:text-8xl font-serif tracking-widest mb-8 leading-tight">
            HÔTEL DE LUXE <br /> MARRAKECH
          </h1>
          <p className="text-lg md:text-xl text-stone-200 font-sans max-w-2xl mx-auto leading-relaxed italic mb-12">
            &quot;Le guide référence pour découvrir les palais et riads les plus
            prestigieux de la ville rouge.&quot;
          </p>

          <BookingEngine />
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center cursor-pointer">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 mb-4 whitespace-nowrap">
            Découvrir le Palais Ronsard
          </span>
          <div className="w-[1px] h-10 bg-white/50 mx-auto" />
        </div>
      </section>

      {/* Featured: Palais Ronsard (Our Favorite Relais & Châteaux) */}
      <section className="py-32 bg-luxury-cream border-y border-stone-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[4/5] overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{
                  backgroundImage: `url('images/hotels/palais-ronsard/le-relais-et-cahteaux-palais-ronsard-au-coucher-de-soleil.jpg')`,
                }}
              />
              <div className="absolute top-0 right-0 bg-white/95 backdrop-blur-sm shadow-2xl p-6 flex flex-col items-center border-l-4 border-gold-500 transform translate-x-4 -translate-y-4">
                <Award className="text-gold-600 mb-2" size={28} />
                <span className="text-[9px] uppercase tracking-[0.4em] text-luxury-charcoal font-bold">
                  Membre de
                </span>
                <span className="text-[12px] font-serif italic text-gold-700">
                  Relais & Châteaux
                </span>
              </div>
            </div>
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-4">
                <span className="w-12 h-[1px] bg-gold-500" />
                <span className="text-gold-600 uppercase tracking-[0.4em] text-xs font-bold">
                  Notre Signature Favoris
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-luxury-charcoal tracking-widest uppercase leading-tight">
                PALAIS RONSARD <br />{" "}
                <span className="text-3xl md:text-4xl text-stone-500 font-serif">
                  Relais & Châteaux
                </span>
              </h2>
              <p className="text-stone-600 leading-relaxed font-sans text-lg">
                Plus qu&apos;un hôtel, le Palais Ronsard est le cœur battant de
                notre sélection. Ce joyau signé Relais & Châteaux au cœur de la
                Palmeraie offre une expérience hors du temps où chaque détail a
                été pensé pour l&apos;excellence.
              </p>
              <div className="pt-6">
                <Link
                  href={`/hotels/${featuredHotel.slug}`}
                  className="inline-block px-12 py-5 border border-luxury-charcoal text-luxury-charcoal uppercase tracking-[0.3em] text-xs font-bold hover:bg-luxury-charcoal hover:text-white transition-all duration-500"
                >
                  Vivre l&apos;Expérience
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ftour Ramadan 2026 Section */}
      <section className="py-32 bg-white border-y border-stone-200">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 border border-gold-500 mb-6">
              <span className="text-gold-600 text-[10px] uppercase tracking-[0.4em] font-bold">
                🌙 Ramadan 2026
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-luxury-charcoal tracking-widest uppercase mb-6">
              FTOUR D&apos;EXCEPTION
            </h2>
            <div className="w-20 h-[1px] bg-gold-500 mx-auto mb-8" />
            <p className="text-stone-600 font-sans max-w-2xl mx-auto leading-relaxed">
              Célébrez le mois sacré du Ramadan dans les plus beaux palaces de
              Marrakech. Découvrez nos sélections exclusives de ftour
              gastronomiques.
            </p>
            <p className="text-gold-600 text-sm font-bold mt-4 tracking-widest">
              18 février - 28 mars 2026
            </p>
          </div>

          {/* Featured Ftour - Palais Ronsard Exclusive */}
          {featuredFtour && (
            <div className="mb-20 bg-luxury-cream border border-gold-500/30 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${featuredFtour.image}')` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                  </div>
                  <div className="absolute top-8 left-8 bg-gold-500 text-white px-6 py-3 shadow-lg">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold">
                      Offre Exclusive
                    </p>
                  </div>
                </div>
                <div className="p-12 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-6">
                    <UtensilsCrossed size={24} className="text-gold-500" />
                    <span className="text-[10px] uppercase tracking-widest text-stone-500">
                      {featuredFtour.hotel}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif text-luxury-charcoal tracking-widest uppercase mb-6 leading-tight">
                    {featuredFtour.name}
                  </h3>
                  <div className="w-16 h-[1px] bg-gold-500 mb-6" />
                  <p className="text-stone-600 leading-relaxed mb-8 italic">
                    &quot;{featuredFtour.description}&quot;
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-10 pt-6 border-t border-stone-200">
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-stone-400 mb-2">
                        Horaires
                      </p>
                      <p className="text-sm font-bold text-luxury-charcoal">
                        {featuredFtour.timing}
                      </p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-stone-400 mb-2">
                        Tarif
                      </p>
                      <p className="text-sm font-bold text-gold-600">
                        {featuredFtour.price}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={`/ftour/${featuredFtour.slug}`}
                    className="inline-block px-10 py-4 bg-luxury-charcoal text-white uppercase tracking-[0.3em] text-xs font-bold hover:bg-gold-600 transition-all duration-500 text-center"
                  >
                    Découvrir & Réserver
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Popular Ftours Grid */}
          {popularFtours.length > 0 && (
            <div>
              <div className="flex items-end justify-between mb-12">
                <div>
                  <span className="text-gold-600 text-[10px] uppercase tracking-[0.3em] font-bold block mb-2">
                    Sélection
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif text-luxury-charcoal tracking-widest uppercase">
                    Autres Offres Ftour
                  </h3>
                </div>
                <Link
                  href="/ftour"
                  className="text-xs uppercase tracking-widest text-stone-500 hover:text-gold-500 flex items-center transition-colors"
                >
                  Tout voir <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {popularFtours.map((ftour, idx) => (
                  <div
                    key={idx}
                    className="group border border-stone-100 p-10 hover:border-gold-500 transition-all duration-500"
                  >
                    <UtensilsCrossed
                      size={24}
                      className="text-gold-500 mb-6 transform group-hover:scale-110 transition-transform"
                    />
                    <span className="text-[9px] uppercase tracking-widest text-stone-500 block mb-3">
                      {ftour.hotel}
                    </span>
                    <h4 className="text-xl font-serif text-luxury-charcoal tracking-widest uppercase mb-4 leading-tight">
                      {ftour.name}
                    </h4>
                    <div className="w-10 h-[1px] bg-gold-500 mb-4" />
                    <p className="text-stone-500 text-sm mb-6 leading-relaxed line-clamp-3">
                      {ftour.description}
                    </p>
                    <div className="space-y-3 mb-8 pt-6 border-t border-stone-50">
                      <div className="flex justify-between text-xs">
                        <span className="text-stone-400">Horaires</span>
                        <span className="text-luxury-charcoal font-bold">
                          {ftour.timing}
                        </span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-stone-400">Tarif</span>
                        <span className="text-gold-600 font-bold">
                          {ftour.price}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/ftour/${ftour.slug}`}
                      className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold-600 border-b border-gold-600 pb-1 hover:text-luxury-charcoal hover:border-luxury-charcoal transition-colors"
                    >
                      En savoir plus
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-luxury-cream">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif text-luxury-charcoal mb-8 tracking-widest uppercase">
            La Quintessence du Luxe Marocain
          </h2>
          <div className="w-20 h-[1px] bg-gold-500 mx-auto mb-8" />
          <p className="text-stone-600 leading-relaxed font-sans mb-10">
            Marrakech ne se visite pas, elle se vit. Entre les murs ocres de la
            médina et les jardins secrets de la Palmeraie, nous avons
            sélectionné pour vous les établissements les plus prestigieux.
            Chaque adresse est une promesse d&apos;évasion, de raffinement et
            d&apos;hospitalité hors du commun.
          </p>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-24 bg-white" id="collection">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
            <div>
              <span className="text-gold-600 text-[10px] uppercase tracking-[0.3em] font-bold block mb-2">
                Portfolio
              </span>
              <h2 className="text-4xl font-serif text-luxury-charcoal tracking-widest uppercase">
                Notre Collection
              </h2>
            </div>
            <Link
              href="/hotels"
              className="text-xs uppercase tracking-widest text-stone-500 hover:text-gold-500 flex items-center transition-colors"
            >
              Tout voir <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {allHotels.map((hotel) => (
              <HotelCard key={hotel.slug} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-24 bg-luxury-charcoal text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 tracking-widest leading-tight">
                VIVRE L&apos;EXPÉRIENCE <br />{" "}
                <span className="text-gold-500 underline underline-offset-8">
                  MARRAKCHIA
                </span>
              </h2>
              <p className="text-stone-400 mb-10 leading-relaxed">
                Plongez au cœur de nos guides exclusifs, découvrez les secrets
                de la ville rouge à travers nos interviews et laissez-vous
                inspirer par nos sélections saisonnières.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <Link
                  href="/guides"
                  className="p-6 border border-stone-800 hover:border-gold-500 transition-all group"
                >
                  <h4 className="font-serif text-lg mb-2">Guides</h4>
                  <p className="text-xs text-stone-500 uppercase tracking-widest group-hover:text-gold-500 transition-colors">
                    Explorer
                  </p>
                </Link>
                <Link
                  href="/articles"
                  className="p-6 border border-stone-800 hover:border-gold-500 transition-all group"
                >
                  <h4 className="font-serif text-lg mb-2">Magazine</h4>
                  <p className="text-xs text-stone-500 uppercase tracking-widest group-hover:text-gold-500 transition-colors">
                    Lire la suite
                  </p>
                </Link>
              </div>
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-stone-900 flex items-center justify-center border border-stone-800">
                <Image
                  src="/images/hotels/l-art-de-vivre.jpg"
                  alt="L'Art de Vivre"
                  fill
                />
                <span className="text-stone-700 font-serif italic text-2xl uppercase tracking-widest text-center px-10">
                  L&apos;Art de Vivre en Images
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
