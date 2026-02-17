
import { getSiteConfig } from "@/lib/sites";
import { notFound } from "next/navigation";
import { BOOKS } from "@/lib/data";
import { TitleGrid } from "@/components/ui/FeaturedTitles";

export default async function BooksPage({ params }: { params: Promise<{ site: string }> }) {
    const { site: siteSlug } = await params;
    const config = getSiteConfig(siteSlug);

    if (!config) notFound();

    const isCorporate = config.emailTag === "corporate";

    // On division sites, we might only want to show books for THAT division
    const displayBooks = isCorporate
        ? BOOKS
        : BOOKS.filter(b => b.division.toLowerCase().includes(config.emailTag.toLowerCase()) || (config.emailTag === 'survival' && b.division === 'Survival'));

    return (
        <div className="max-w-7xl mx-auto py-12 px-4">
            <header className="mb-16">
                <h1 className="text-4xl font-extrabold text-slate-900 mb-6">
                    {isCorporate ? "The Moabyte Press Catalog" : `${config.name} Titles`}
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                    Browse our collection of structured guides and implementation-focused systems.
                </p>
            </header>

            {isCorporate && (
                <div className="flex gap-4 mb-12 border-b border-slate-100 pb-8 overflow-x-auto">
                    {["All", "Survival", "AI", "Health"].map((filter) => (
                        <button
                            key={filter}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all border ${filter === "All" ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"}`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            )}

            <TitleGrid books={displayBooks} hideDivisionUrl={!isCorporate} />

            {displayBooks.length === 0 && (
                <div className="text-center py-24 bg-slate-50 rounded-2xl">
                    <p className="text-slate-500">No titles currently listed for this division.</p>
                </div>
            )}
        </div>
    );
}
