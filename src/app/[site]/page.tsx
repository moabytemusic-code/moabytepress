
import { getSiteConfig } from "@/lib/sites";
import { notFound } from "next/navigation";
import { Hero } from "@/components/ui/Hero";

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
        <div className="space-y-16">
            <Hero site={config} />

            {/* Sections based on config.navigation or just defaults based on type */}
            {config.emailTag === "corporate" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Division Cards */}
                    {/* Simple placeholder for division links */}
                    <div className="p-6 bg-emerald-50 rounded-xl shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-bold text-emerald-900 mb-2">Survival</h3>
                        <p className="text-emerald-700">Practical Food Resilience.</p>
                    </div>
                    <div className="p-6 bg-indigo-50 rounded-xl shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-bold text-indigo-900 mb-2">AI</h3>
                        <p className="text-indigo-700">Digital Leverage & Productivity.</p>
                    </div>
                    <div className="p-6 bg-teal-50 rounded-xl shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-bold text-teal-900 mb-2">Health</h3>
                        <p className="text-teal-700">Performance Nutrition.</p>
                    </div>
                    <div className="p-6 bg-rose-50 rounded-xl shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-bold text-rose-900 mb-2">Women's Health</h3>
                        <p className="text-rose-700">Hormone Balance & Support.</p>
                    </div>
                </div>
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
