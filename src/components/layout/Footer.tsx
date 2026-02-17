
import Link from "next/link";
import { SiteConfig } from "@/lib/sites";

export function Footer({ site }: { site: SiteConfig }) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`bg-slate-900 text-white py-16`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-2xl font-bold mb-6 tracking-tight">{site.name}</h3>
                    <p className="opacity-70 text-sm max-w-sm mb-6 leading-relaxed italic">{site.description}</p>
                    <p className="text-[10px] opacity-40 leading-relaxed uppercase tracking-widest max-w-md">
                        Affiliate Disclosure: Moabyte Press participates in various affiliate programs. We may earn a commission on qualifying purchases made through our links, at no additional cost to the reader.
                    </p>
                </div>
                <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-slate-400">Navigation</h4>
                    <ul className="space-y-4 text-sm">
                        {site.navigation.map((item) => (
                            <li key={item.title}>
                                <Link href={item.href} className="hover:text-amber-200 transition-colors">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-slate-400">Governance</h4>
                    <ul className="space-y-4 text-sm">
                        <li><Link href="/privacy" className="hover:text-amber-200 transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="hover:text-amber-200 transition-colors">Terms of Service</Link></li>
                        <li><Link href="/media" className="hover:text-amber-200 transition-colors">Press & Media</Link></li>
                        <li><a href={`mailto:hello@moabytepress.com`} className="hover:text-amber-200 transition-colors">Contact Support</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest opacity-40">
                <div>&copy; {currentYear} Moabyte Press. All rights reserved.</div>
                <div>Independent Publishing Headquarters</div>
            </div>
        </footer>

    );
}
