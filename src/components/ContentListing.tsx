import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ContentItem } from "@/lib/markdown";

interface ContentListingProps {
    title: string;
    subtitle: string;
    items: ContentItem[];
    basePath: string;
}

export default function ContentListing({ title, subtitle, items, basePath }: ContentListingProps) {
    return (
        <main className="min-h-screen bg-white">
            <Navbar dark={true} />

            <section className="pt-40 pb-20 bg-luxury-cream text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-serif tracking-widest uppercase mb-6 text-luxury-charcoal">
                        {title}
                    </h1>
                    <p className="text-stone-500 font-sans max-w-2xl mx-auto italic">
                        {subtitle}
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {items.map((item) => (
                            <Link
                                key={item.slug}
                                href={`${basePath}/${item.slug}`}
                                className="group block space-y-6"
                            >
                                <div className="aspect-[4/3] bg-stone-100 overflow-hidden relative">
                                    {item.image ? (
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-stone-200 flex items-center justify-center text-stone-400 font-serif italic uppercase text-xs tracking-widest">
                                            {item.title}
                                        </div>
                                    )}
                                </div>
                                <div className="space-y-3">
                                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold-600 block">
                                        {item.date || "Magazine"}
                                    </span>
                                    <h3 className="text-xl font-serif text-luxury-charcoal group-hover:text-gold-500 transition-colors uppercase tracking-widest">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-stone-500 font-sans line-clamp-2 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
