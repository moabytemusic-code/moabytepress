
import { getSiteConfig } from "@/lib/sites";
import { notFound } from "next/navigation";

export default async function AboutPage({ params }: { params: Promise<{ site: string }> }) {
    const { site: siteSlug } = await params;
    const config = getSiteConfig(siteSlug);

    if (!config) notFound();

    const isCorporate = config.emailTag === "corporate";

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold mb-8 border-b pb-4">About {config.name}</h1>

            <div className="prose prose-slate lg:prose-xl">
                {isCorporate ? (
                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Moabyte Press is an independent publishing house dedicated to the dissemination of practical knowledge and structured educational content. In an era of informational abundance, we focus on providing clarity through implementation-focused systems.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Structured Knowledge</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We believe that true leverage comes from understanding systems rather than just collecting facts. Every title we publish is vetted for its ability to be applied immediately and effectively in real-world scenarios.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Commitment to Clarity</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Our commitment is to our readers. We maintain a neutral, professional stance across all our divisions, ensuring that the guidance we provide is objective, evidence-based, and designed for long-term value.
                            </p>
                        </section>
                    </div>
                ) : (
                    <div className="space-y-8">
                        <p className="text-slate-600 leading-relaxed italic">
                            {config.description}
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            This division of Moabyte Press focuses exclusively on providing structured systems and practical guides within the domain of {config.name.replace("Moabyte ", "")}.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Our goal is to assist individuals in achieving mastery through clear, actionable frameworks.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
