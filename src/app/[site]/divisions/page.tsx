
import { getSiteConfig } from "@/lib/sites";
import { notFound } from "next/navigation";
import Link from "next/link";
import { DIVISIONS } from "@/lib/data";

export default async function DivisionsPage({ params }: { params: Promise<{ site: string }> }) {
    const { site: siteSlug } = await params;
    const config = getSiteConfig(siteSlug);

    if (!config || config.emailTag !== "corporate") notFound();

    return (
        <div className="max-w-5xl mx-auto py-12 px-4">
            <header className="mb-16">
                <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Publishing Divisions</h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                    Moabyte Press operates through focused publishing divisions, each dedicated to a specific knowledge domain. This structure allows us to maintain the highest standards of depth and practicality in every title we release.
                </p>
            </header>

            <div className="space-y-12">
                {DIVISIONS.map((division) => (
                    <div key={division.id} className="group border-l-4 border-slate-200 pl-8 py-4 hover:border-slate-900 transition-colors">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">{division.name}</h2>
                        <p className="text-slate-500 mb-4 max-w-2xl">{division.details}</p>
                        <Link
                            href={division.url}
                            className="text-slate-900 font-semibold border-b-2 border-slate-900 pb-1 hover:pb-2 transition-all"
                        >
                            Explore {division.name}
                        </Link>
                    </div>
                ))}
            </div>

            <section className="mt-24 pt-16 border-t border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Strategic Integration</h3>
                <p className="text-slate-600 leading-relaxed">
                    While each division remains focused on its specific domain, we encourage strategic cross-pollination. The systems developed in our AI division often find practical application in improving the food production frameworks of our Survival division.
                </p>
            </section>
        </div>
    );
}
