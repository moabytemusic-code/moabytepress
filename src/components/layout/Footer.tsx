
import Link from "next/link";
import { SiteConfig } from "@/lib/sites";

export function Footer({ site }: { site: SiteConfig }) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`${site.theme.secondary} text-white py-12`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4">{site.name}</h3>
                    <p className="opacity-75">{site.description}</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Explore</h3>
                    <ul className="space-y-2">
                        {site.navigation.map((item) => (
                            <li key={item.title}>
                                <Link href={item.href} className="hover:underline">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Connect</h3>
                    <ul className="space-y-2">
                        <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
                        <li><Link href="#" className="hover:underline">Social Media</Link></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm opacity-75">
                &copy; {currentYear} Moabyte Press. All rights reserved.
            </div>
        </footer>
    );
}
