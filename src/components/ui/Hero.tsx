
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
            backgroundClass = "bg-gradient-to-br from-slate-900 to-slate-800 text-white";
            textClass = "text-slate-100";
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

    return (
        <div className={`relative overflow-hidden rounded-3xl shadow-2xl py-24 px-8 md:px-16 lg:px-24 mb-16 ${backgroundClass}`}>
            <div className="relative z-10 max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
                    {site.name}
                </h1>
                <p className={`text-xl md:text-2xl mb-8 font-light ${textClass}`}>
                    {site.description}
                </p>
                <div className="flex flex-wrap gap-4">
                    {site.emailTag !== "corporate" ? (
                        <Link
                            href="#blueprint"
                            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-gray-900 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105"
                        >
                            Get the Blueprint
                        </Link>
                    ) : (
                        <Link
                            href="/divisions"
                            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-gray-900 bg-white hover:bg-gray-50 transition-transform transform hover:scale-105"
                        >
                            Explore Divisions
                        </Link>
                    )}

                    <Link
                        href="/books"
                        className="inline-flex items-center px-8 py-3 border border-white/30 text-base font-medium rounded-full shadow-sm text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-transform transform hover:scale-105"
                    >
                        Browse Books
                    </Link>
                </div>
            </div>

            {/* Decorative elements for "Modern/Dynamic" feel */}
            <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-64 h-64 rounded-full bg-black/10 blur-3xl" />
        </div>
    );
}
