import ContentListing from "@/components/ContentListing";
import { getContentItems } from "@/lib/markdown";

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
