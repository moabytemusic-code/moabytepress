
import { notFound } from "next/navigation";
import { getSiteConfig } from "@/lib/sites";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default async function SiteLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ site: string }>;
}) {
    const { site: siteSlug } = await params;
    const config = getSiteConfig(siteSlug);

    if (!config) {
        notFound();
    }

    return (
        <div className={`min-h-screen grid grid-rows-[auto_1fr_auto] ${config.theme.background} ${config.theme.text} antialiased font-sans`}>
            <Navbar site={config} />
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {children}
            </main>
            <Footer site={config} />
        </div>
    );
}
