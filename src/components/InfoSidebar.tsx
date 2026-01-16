import React from 'react';
import { getRelAttributes } from "@/lib/seo";
import Link from "next/link";
import { Globe } from "lucide-react";

interface InfoItem {
    icon: React.ReactNode;
    label: string;
}

interface InfoSidebarProps {
    title: string;
    items: InfoItem[];
    bookingUrl: string;
    bookingLabel: string;
    showHelpCard?: boolean;
}

export default function InfoSidebar({
    title,
    items,
    bookingUrl,
    bookingLabel,
    showHelpCard = true
}: InfoSidebarProps) {
    return (
        <div className="sticky top-32 space-y-10">
            {/* Main Info Box */}
            <div className="p-8 border border-stone-100 bg-luxury-cream">
                <h3 className="text-gray-900 text-lg font-serif tracking-widest uppercase mb-6 border-b border-gold-200 pb-4">
                    {title}
                </h3>
                <ul className="space-y-4">
                    {items.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm font-sans text-stone-600">
                            <span className="mr-3 text-gold-600">{item.icon}</span>
                            {item.label}
                        </li>
                    ))}
                </ul>

                <div className="mt-10">
                    <a
                        href={bookingUrl}
                        target="_blank"
                        rel={getRelAttributes(bookingUrl)}
                        className="block w-full text-center bg-luxury-charcoal text-white py-4 uppercase tracking-[0.2em] text-xs hover:bg-gold-600 transition-all font-bold"
                    >
                        {bookingLabel}
                    </a>
                </div>
            </div>

            {/* Help Card */}
            {showHelpCard && (
                <div className="p-8 border border-stone-200 text-center">
                    <Globe className="mx-auto mb-4 text-gold-500" size={32} />
                    <h4 className="font-serif uppercase tracking-widest text-sm mb-4">Besoin d&apos;aide ?</h4>
                    <p className="text-xs text-stone-500 mb-6 px-4">
                        Nos experts sont à votre disposition pour organiser votre séjour sur-mesure à Marrakech.
                    </p>
                    <Link href="/contact" className="text-[10px] font-bold uppercase tracking-widest text-gold-600 hover:text-luxury-charcoal transition-colors">
                        Nous Contacter
                    </Link>
                </div>
            )}
        </div>
    );
}
