
import { getSiteConfig } from "@/lib/sites";
import { notFound } from "next/navigation";

export default async function MediaPage({ params }: { params: Promise<{ site: string }> }) {
    const { site: siteSlug } = await params;
    const config = getSiteConfig(siteSlug);

    if (!config || config.emailTag !== "corporate") notFound();

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold mb-8 border-b pb-4">Media & Inquiries</h1>

            <div className="space-y-16">
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Press Resources</h2>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        Moabyte Press provides structured resources for media inquiries, including division briefings, author backgrounds, and high-resolution assets.
                    </p>
                    <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 italic text-slate-500">
                        Brand asset downloads and press kits are currently being finalized.
                    </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <section>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Press Inquiries</h3>
                        <p className="text-sm text-slate-600 mb-4">
                            For all media requests, interviews, or review copies:
                        </p>
                        <a href="mailto:media@moabytepress.com" className="text-indigo-600 font-medium hover:underline">
                            media@moabytepress.com
                        </a>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Partnerships</h3>
                        <p className="text-sm text-slate-600 mb-4">
                            For licensing, distribution, or collaborative inquiries:
                        </p>
                        <a href="mailto:partners@moabytepress.com" className="text-indigo-600 font-medium hover:underline">
                            partners@moabytepress.com
                        </a>
                    </section>
                </div>

                <section className="bg-slate-900 text-white p-12 rounded-3xl">
                    <h2 className="text-2xl font-bold mb-4">About Moabyte Press</h2>
                    <p className="opacity-80 leading-relaxed max-w-2xl text-lg font-light">
                        Moabyte Press is an independent publisher focused on providing structured, practical guidance across domains of critical modern interest. We operate through decentralized divisions to ensure specialized depth in every subject we cover.
                    </p>
                </section>
            </div>
        </div>
    );
}
