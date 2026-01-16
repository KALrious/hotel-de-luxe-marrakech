import ContentListing from "@/components/ContentListing";
import { getContentItems } from "@/lib/markdown";

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
