import ContentListing from "@/components/ContentListing";
import { getContentItems } from "@/lib/markdown";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Guides Pratiques Marrakech | Conseils & Incontournables",
    description: "Tout ce qu'il faut savoir pour préparer votre séjour à Marrakech : shopping de luxe, visites culturelles et bonnes adresses.",
};

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
