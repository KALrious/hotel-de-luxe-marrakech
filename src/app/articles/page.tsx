import ContentListing from "@/components/ContentListing";
import { getContentItems } from "@/lib/markdown";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Magazine & Art de Vivre à Marrakech | Palais Ronsard",
    description: "Découvrez nos articles sur l'art de vivre, la culture et les secrets de Marrakech à travers notre magazine exclusif.",
};

export default function ArticlesPage() {
    const articles = getContentItems("articles");

    return (
        <ContentListing
            title="Magazine"
            subtitle="Chroniques et récits sur l'art de vivre à Marrakech."
            items={articles}
            basePath="/articles"
        />
    );
}
