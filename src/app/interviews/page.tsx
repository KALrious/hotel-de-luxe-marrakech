import ContentListing from "@/components/ContentListing";
import { getContentItems } from "@/lib/markdown";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Interviews & Rencontres | Les Visages de Marrakech",
    description: "Rencontrez les personnalités qui font vibrer Marrakech. Interviews exclusives avec des chefs, artistes et hôteliers d'exception.",
};

export default function InterviewsPage() {
    const interviews = getContentItems("interviews");

    return (
        <ContentListing
            title="Interviews"
            subtitle="Rencontre avec les visages qui font battre le cœur de la ville."
            items={interviews}
            basePath="/interviews"
        />
    );
}
