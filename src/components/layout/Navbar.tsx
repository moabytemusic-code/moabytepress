
import Link from "next/link";
import { SiteConfig } from "@/lib/sites";

export function Navbar({ site }: { site: SiteConfig }) {
    return (
        <header className={`${site.theme.background} border-b border-gray-200 sticky top-0 z-50`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className={`text-2xl font-bold ${site.theme.text}`}>
                            {site.name}
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        {site.navigation.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className={`${site.theme.text} hover:opacity-75 transition-colors font-medium`}
                            >
                                {item.title}
                            </Link>
                        ))}
                        {/* CTA could be dynamic based on site purpose */}
                        {site.emailTag !== "corporate" && (
                            <Link
                                href="#blueprint"
                                className={`${site.theme.primary} text-white px-4 py-2 rounded-md font-medium hover:brightness-110 transition`}
                            >
                                Get Started
                            </Link>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
}
