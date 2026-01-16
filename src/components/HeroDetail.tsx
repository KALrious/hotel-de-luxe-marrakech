import React from 'react';
import { Star, MapPin } from "lucide-react";

interface HeroDetailProps {
    title: string;
    subtitle?: string;
    image: string;
    stars?: number;
    location?: string;
    category?: string;
    height?: string; // e.g. "h-[70vh]" or "h-[60vh]"
}

export default function HeroDetail({
    title,
    subtitle,
    image,
    stars,
    location,
    category,
    height = "h-[70vh]"
}: HeroDetailProps) {
    return (
        <section className={`relative ${height} flex items-end overflow-hidden`}>
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image || '/images/placeholder-hotel.jpg'})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
            </div>

            <div className="relative z-10 container mx-auto px-6 pb-20">
                {stars !== undefined && (
                    <div className="flex items-center space-x-1 mb-4">
                        {[...Array(stars)].map((_, i) => (
                            <Star key={i} size={16} className="fill-gold-500 text-gold-500" />
                        ))}
                    </div>
                )}

                {category && !stars && (
                    <span className="text-gold-500 text-xs uppercase tracking-[0.4em] mb-4 block font-bold">
                        {category}
                    </span>
                )}

                <h1 className="text-4xl md:text-7xl font-serif text-white tracking-widest uppercase mb-6">
                    {title}
                </h1>

                {subtitle && <p className="text-stone-300 font-sans italic mb-4">{subtitle}</p>}

                {(location || category) && (stars !== undefined) && (
                    <div className="flex flex-wrap gap-6 text-white/80 text-sm uppercase tracking-widest items-center">
                        {location && (
                            <span className="flex items-center">
                                <MapPin size={16} className="mr-2 text-gold-500" /> {location}
                            </span>
                        )}
                        {location && category && <span className="text-gold-500">|</span>}
                        {category && <span className="italic">{category}</span>}
                    </div>
                )}
            </div>
        </section>
    );
}
