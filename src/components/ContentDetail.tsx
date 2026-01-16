import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ContentDetailProps {
    slug: string;
    type: "articles" | "interviews" | "guides";
}

export default async function ContentDetail({ slug, type }: ContentDetailProps) {
    const fullPath = path.join(process.cwd(), "content", type, `${slug}.md`);
    if (!fs.existsSync(fullPath)) notFound();

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return (
        <main className="min-h-screen">
            <Navbar dark={true} />

            <section className="pt-40 pb-20 bg-stone-50 border-b border-stone-100">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <span className="text-gold-600 text-[10px] uppercase tracking-[0.4em] mb-4 block">
                        {data.date || type}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif tracking-widest uppercase mb-8 text-luxury-charcoal">
                        {data.title}
                    </h1>
                    <p className="text-stone-500 font-sans italic text-lg leading-relaxed">
                        {data.description}
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-gray-800 prose prose-stone prose-lg max-w-none 
            prose-headings:font-serif prose-headings:font-normal prose-headings:tracking-widest prose-headings:uppercase
            prose-p:font-sans prose-p:text-stone-600 prose-p:leading-relaxed
            prose-strong:text-luxury-charcoal prose-strong:font-bold
            prose-a:text-gold-600 prose-a:no-underline hover:prose-a:underline">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {content}
                        </ReactMarkdown>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
