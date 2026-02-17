
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
                        ? "Publishing structured, practical guides that help people learn, apply, and grow in key areas of modern life."
                        : site.description}
                </p>
                {isCorporate && (
                    <div className="space-y-8">
                        <p className="text-lg md:text-xl text-slate-500 max-w-2xl font-light leading-relaxed">
                            Books and systems in resilience, AI strategy, health science, and practical living. High-clarity, implementation-first frameworks.
                        </p>
                        {/* Proof Bar */}
                        <div className="flex flex-wrap gap-x-8 gap-y-4 py-6 border-y border-slate-100 items-center">
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-slate-900">3</span>
                                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Divisions</span>
                            </div>
                            <div className="flex flex-col border-l border-slate-100 pl-8">
                                <span className="text-2xl font-bold text-slate-900">150+</span>
                                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Resources Delivered</span>
                            </div>
                            <div className="flex flex-col border-l border-slate-100 pl-8">
                                <span className="text-2xl font-bold text-slate-900 text-amber-600">Pure Systems</span>
                                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Methodology</span>
                            </div>
                        </div>
                    </div>
                )}
                <div className="flex flex-wrap gap-4 mt-8">
                    {isCorporate ? (
                        <Link
                            href="/divisions"
                            className="inline-flex items-center px-10 py-4 border border-slate-200 text-base font-semibold rounded-full shadow-sm text-slate-900 bg-white hover:bg-slate-50 transition-all hover:shadow-md"
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
                        className={`inline-flex items-center px-10 py-4 border ${isCorporate ? 'border-slate-200 text-slate-600' : 'border-white/30 text-white bg-white/10'} text-base font-semibold rounded-full shadow-sm hover:brightness-95 transition-all`}
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
