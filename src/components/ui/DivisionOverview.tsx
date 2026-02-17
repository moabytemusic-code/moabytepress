
import Link from "next/link";
import { DIVISIONS } from "@/lib/data";

export function DivisionOverview() {
    return (
        <section className="py-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">
                Our Publishing Divisions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {DIVISIONS.map((division) => (
                    <div
                        key={division.id}
                        className={`p-8 rounded-2xl border transition-all hover:shadow-lg flex flex-col justify-between ${division.color}`}
                    >
                        <div>
                            <h3 className="text-xl font-bold mb-3">{division.name}</h3>
                            <p className="opacity-80 leading-relaxed mb-6">
                                {division.description}
                            </p>
                        </div>
                        <Link
                            href={division.url}
                            className="inline-flex items-center font-medium hover:underline group"
                        >
                            Visit Division Site
                            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
