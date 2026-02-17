
import { getSiteConfig } from "@/lib/sites";
import { notFound } from "next/navigation";
import { Hero } from "@/components/ui/Hero";
import { DivisionOverview } from "@/components/ui/DivisionOverview";
import { FeaturedTitles } from "@/components/ui/FeaturedTitles";
import { PublishingPhilosophy } from "@/components/ui/PublishingPhilosophy";
import { WhyChooseUs } from "@/components/ui/WhyChooseUs";



export async function generateMetadata({ params }: { params: Promise<{ site: string }> }) {
    const { site: siteSlug } = await params;
    const config = getSiteConfig(siteSlug);
    if (!config) return {};
    return {
        title: config.name,
        description: config.description,
    };
}

export default async function SitePage({ params }: { params: Promise<{ site: string }> }) {
    const { site: siteSlug } = await params;
    const config = getSiteConfig(siteSlug);

    if (!config) {
        notFound();
    }

    return (
        <div className="space-y-12">
            <Hero site={config} />

            {config.emailTag === "corporate" ? (
                <>
                    <DivisionOverview />
                    <FeaturedTitles />
                    <WhyChooseUs />
                    <PublishingPhilosophy />
                </>

            ) : (
                <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <h2 className="text-2xl font-bold mb-4">Latest from {config.name}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Blog / Content Placeholders */}
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="aspect-video bg-gray-200 rounded-lg animate-pulse" />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

