"use client";

import { Calendar, Users, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BookingEngine() {
    const router = useRouter();
    const [dates, setDates] = useState({ checkIn: "", checkOut: "" });

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/reservation");
    };

    return (
        <div className="w-full max-w-5xl mx-auto glass p-2 md:p-4 shadow-2xl animate-fade-in-up">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center gap-2 md:gap-4">

                {/* Destination / Hotel (Static for now) */}
                <div className="flex-1 w-full bg-white/50 p-4 flex items-center space-x-4">
                    <Search size={20} className="text-gold-600 shrink-0" />
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Destination</span>
                        <input
                            type="text"
                            placeholder="Marrakech, Maroc"
                            className="bg-transparent outline-none text-sm text-luxury-charcoal font-serif placeholder:text-stone-400"
                            readOnly
                        />
                    </div>
                </div>

                {/* Dates */}
                <div className="flex-1 w-full bg-white/50 p-4 flex items-center space-x-4">
                    <Calendar size={20} className="text-gold-600 shrink-0" />
                    <div className="flex flex-col w-full">
                        <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Séjour</span>
                        <div className="flex items-center space-x-2">
                            <input
                                type="date"
                                className="bg-transparent outline-none text-xs text-luxury-charcoal font-sans w-full cursor-pointer"
                                onChange={(e) => setDates({ ...dates, checkIn: e.target.value })}
                            />
                        </div>
                    </div>
                </div>

                {/* Guests */}
                <div className="flex-1 w-full bg-white/50 p-4 flex items-center space-x-4">
                    <Users size={20} className="text-gold-600 shrink-0" />
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Voyageurs</span>
                        <select className="bg-transparent outline-none text-sm text-luxury-charcoal font-serif cursor-pointer">
                            <option>2 Adultes, 0 Enfant</option>
                            <option>1 Adulte</option>
                            <option>2 Adultes, 1 Enfant</option>
                            <option>Suite Familiale</option>
                        </select>
                    </div>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full md:w-auto px-12 py-5 bg-luxury-charcoal text-white uppercase tracking-[0.3em] text-xs font-bold hover:bg-gold-600 transition-all duration-300"
                >
                    Rechercher
                </button>

            </form>
        </div>
    );
}
