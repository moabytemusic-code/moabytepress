
import Link from "next/link";
import { SiteConfig } from "@/lib/sites";

interface HeroProps {
    site: SiteConfig;
}

export function Hero({ site }: HeroProps) {
    // Determine gradient/style based on site
    let backgroundClass = "";
    let textClass = "";

    // Map theme to gradient styles for "rich aesthetics"
    switch (site.emailTag) {
        case "corporate":
            backgroundClass = "bg-white text-slate-900 border border-slate-100";
            textClass = "text-slate-600";
            break;
        case "survival":
            backgroundClass = "bg-gradient-to-br from-emerald-900 via-stone-900 to-black text-emerald-50";
            textClass = "text-emerald-100";
            break;
        case "ai":
            backgroundClass = "bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 text-white";
            textClass = "text-indigo-100";
            break;
        case "health":
            backgroundClass = "bg-gradient-to-br from-teal-700 to-cyan-800 text-white";
            textClass = "text-teal-50";
            break;
        case "womenshealth":
            backgroundClass = "bg-gradient-to-br from-rose-700 to-pink-900 text-white";
            textClass = "text-rose-50";
            break;
        default:
            backgroundClass = "bg-gray-100 text-gray-900";
            textClass = "text-gray-600";
    }

    const isCorporate = site.emailTag === "corporate";

    return (
        <div className={`relative overflow-hidden rounded-3xl ${isCorporate ? 'shadow-none' : 'shadow-2xl'} py-24 px-8 md:px-16 lg:px-24 mb-16 ${backgroundClass}`}>
            <div className="relative z-10 max-w-4xl">
                <h1 className={`text-4xl md:text-7xl font-extrabold tracking-tight mb-6 ${isCorporate ? 'text-slate-900' : 'drop-shadow-lg'}`}>
                    {isCorporate ? "Moabyte Press" : site.name}
                </h1>
                <p className={`text-xl md:text-3xl mb-4 font-medium ${isCorporate ? 'text-slate-800' : textClass}`}>
                    {isCorporate
                        ? "Independent publishing focused on practical knowledge, structured systems, and modern self-education."
                        : site.description}
                </p>
                {isCorporate && (
                    <p className="text-lg md:text-xl text-slate-500 mb-8 max-w-2xl font-light leading-relaxed">
                        We publish focused guides across survival systems, digital strategy, health optimization, and emerging technologies.
                    </p>
                )}
                <div className="flex flex-wrap gap-4">
                    {isCorporate ? (
                        <Link
                            href="/divisions"
                            className="inline-flex items-center px-8 py-3 border border-slate-200 text-base font-medium rounded-full shadow-sm text-slate-900 bg-white hover:bg-slate-50 transition-all"
                        >
                            View Our Divisions
                        </Link>
                    ) : (
                        <Link
                            href="#blueprint"
                            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-gray-900 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105"
                        >
                            Get the Blueprint
                        </Link>
                    )}

                    <Link
                        href="/books"
                        className={`inline-flex items-center px-8 py-3 border ${isCorporate ? 'border-slate-200 text-slate-600' : 'border-white/30 text-white bg-white/10'} text-base font-medium rounded-full shadow-sm hover:brightness-95 transition-all`}
                    >
                        Browse Books
                    </Link>
                </div>
            </div>

            {!isCorporate && (
                <>
                    <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-64 h-64 rounded-full bg-black/10 blur-3xl" />
                </>
            )}
        </div>
    );
}
