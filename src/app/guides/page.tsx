import ContentListing from "@/components/ContentListing";
import { getContentItems } from "@/lib/markdown";

export default function GuidesPage() {
    const guides = getContentItems("guides");

    return (
        <ContentListing
            title="Guides"
            subtitle="Nos recommandations exclusives pour un séjour inoubliable."
            items={guides}
            basePath="/guides"
        />
    );
}
