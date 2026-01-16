"use client";

import Link from "next/link";
import { Star, MapPin } from "lucide-react";
import { HotelData } from "@/lib/markdown";
import { getRelAttributes } from "@/lib/seo";

export default function HotelCard({ hotel }: { hotel: HotelData }) {
    return (
        <Link
            href={`/hotels/${hotel.slug}`}
            className="group block bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700"
        >
            <div className="relative h-[400px] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                    style={{ backgroundImage: `url(${hotel.image || '/images/placeholder-hotel.jpg'})` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

                {/* Tags */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-white/90 text-luxury-charcoal text-[9px] uppercase tracking-widest px-3 py-1 font-bold">
                        {hotel.category || "Hôtel de Luxe"}
                    </span>
                    {hotel.title.toLowerCase().includes("ronsard") && (
                        <div className="bg-luxury-charcoal/90 backdrop-blur-md text-white text-[8px] uppercase tracking-[0.3em] px-4 py-2 border-l-2 border-gold-500 shadow-xl flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                            <span className="font-serif italic capitalize text-[10px] tracking-normal mr-1">Membre de</span>
                            <span className="font-bold">RELAIS & CHÂTEAUX</span>
                        </div>
                    )}
                    {hotel.featured && (
                        <span className="bg-gold-500 text-white text-[9px] uppercase tracking-widest px-3 py-1 font-bold">
                            Sélectionné
                        </span>
                    )}
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center space-x-1 mb-2">
                        {[...Array(hotel.stars)].map((_, i) => (
                            <Star key={i} size={12} className="fill-gold-500 text-gold-500" />
                        ))}
                    </div>
                    <h3 className="text-2xl font-serif text-white tracking-widest mb-2 uppercase">
                        {hotel.title}
                    </h3>
                    <div className="flex items-center text-white/80 text-xs uppercase tracking-widest">
                        <MapPin size={12} className="mr-2" />
                        {hotel.location}
                    </div>
                </div>
            </div>
            <div className="p-6 bg-white border-x border-b border-stone-100">
                <p className="text-stone-500 text-sm font-sans line-clamp-2 leading-relaxed">
                    {hotel.description}
                </p>
                <div className="mt-4 flex justify-between items-center text-[10px] uppercase tracking-widest text-gold-600 font-bold">
                    <div className="flex items-center space-x-2">
                        <span>Découvrir</span>
                        <span className="w-8 h-[1px] bg-gold-500 block" />
                    </div>
                    <Link
                        href={hotel.bookingUrl}
                        target="_blank"
                        rel={getRelAttributes(hotel.bookingUrl)}
                        className="text-luxury-charcoal hover:text-gold-600 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Réserver
                    </Link>
                </div>
            </div>
        </Link>
    );
}
