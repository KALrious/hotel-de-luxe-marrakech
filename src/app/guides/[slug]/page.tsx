import ContentDetail from "@/components/ContentDetail";
import { getContentItems, getContentItemBySlug } from "@/lib/markdown";
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { slug } = await params;
    const item = getContentItemBySlug("guides", slug);

    if (!item) return {};

    return {
        title: `${item.title} | Guide Marrakech`,
        description: item.description,
    };
}

export async function generateStaticParams() {
    const items = getContentItems("guides");
    return items.map((item) => ({ slug: item.slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    return <ContentDetail slug={slug} type="guides" />;
}
