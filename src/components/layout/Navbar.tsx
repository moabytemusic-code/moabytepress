
import Link from "next/link";
import { SiteConfig } from "@/lib/sites";

export function Navbar({ site }: { site: SiteConfig }) {
    return (
        <header className={`bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className={`text-xl font-extrabold tracking-tighter text-slate-900`}>
                            MOABYTE<span className="text-slate-400 font-light ml-1">PRESS</span>
                        </Link>
                    </div>
                    <nav className="hidden md:flex items-center space-x-10">
                        {site.navigation.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className={`text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-widest`}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>

    );
}
