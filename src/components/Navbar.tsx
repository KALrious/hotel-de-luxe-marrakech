"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ dark = false }: { dark?: boolean }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { title: "Hôtels", href: "/hotels" },
        { title: "Spas", href: "/spas" },
        { title: "Restaurants", href: "/gastronomie" },
        { title: "Magazine", href: "/articles" },
        { title: "Galerie", href: "/galerie" },
    ];

    const isLightText = !isScrolled && !dark;

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "glass py-4 shadow-sm" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link
                    href="/"
                    className={`text-xl font-serif tracking-widest transition-colors duration-300 ${isLightText ? "text-white" : "text-luxury-charcoal"
                        }`}
                >
                    HÔTEL DE LUXE MARRAKECH
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.title}
                            href={link.href}
                            className={`text-sm uppercase tracking-widest hover:text-gold-500 transition-colors duration-300 ${isLightText ? "text-white" : "text-luxury-charcoal"
                                }`}
                        >
                            {link.title}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className={`px-6 py-2 border text-xs uppercase tracking-widest transition-all duration-300 ${isLightText
                            ? "border-white text-white hover:bg-white hover:text-luxury-charcoal"
                            : "border-luxury-charcoal text-luxury-charcoal hover:bg-luxury-charcoal hover:text-white"
                            }`}
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gold-500"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-serif tracking-widest text-luxury-charcoal mb-8"
                >
                    HÔTEL DE LUXE <br /> MARRAKECH
                </Link>
                {navLinks.map((link) => (
                    <Link
                        key={link.title}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-lg uppercase tracking-widest text-luxury-charcoal hover:text-gold-500"
                    >
                        {link.title}
                    </Link>
                ))}
                <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-8 py-3 border border-luxury-charcoal text-luxury-charcoal uppercase tracking-widest hover:bg-luxury-charcoal hover:text-white transition-all"
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
}
