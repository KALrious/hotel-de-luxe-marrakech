import ContentDetail from "@/components/ContentDetail";
import { getContentItems } from "@/lib/markdown";

export async function generateStaticParams() {
    const items = getContentItems("interviews");
    return items.map((item) => ({ slug: item.slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    return <ContentDetail slug={slug} type="interviews" />;
}
