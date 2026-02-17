
import Link from "next/link";
import { BOOKS } from "@/lib/data";

export function TitleGrid({ books, hideDivisionUrl = false }: { books: typeof BOOKS, hideDivisionUrl?: boolean }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
                <div key={book.id} className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-[3/4] bg-slate-100 flex items-center justify-center p-8 bg-gradient-to-br from-slate-50 to-slate-200">
                        {/* Title focused placeholder cover */}
                        <div className="text-center">
                            <h4 className="font-bold text-slate-800 text-lg mb-2">{book.title}</h4>
                            <span className="text-xs uppercase tracking-widest text-slate-500">{book.division} Division</span>
                        </div>
                    </div>
                    <div className="p-6">
                        <span className="inline-block px-2 py-1 rounded text-[10px] font-bold uppercase tracking-tighter bg-slate-100 text-slate-600 mb-3 border border-slate-200">
                            {book.division}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">{book.title}</h3>
                        <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                            {book.summary}
                        </p>
                        {!hideDivisionUrl && (
                            <Link
                                href={book.divisionUrl}
                                className="inline-flex items-center text-sm font-semibold text-slate-900 border-b-2 border-slate-900 hover:pb-1 transition-all"
                            >
                                View Division
                            </Link>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export function FeaturedTitles() {
    return (
        <section className="py-16 bg-slate-50/50 rounded-3xl px-8 md:px-12">
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Titles</h2>
                    <p className="text-slate-500">Latest publications across our divisions.</p>
                </div>
                <Link href="/books" className="text-sm font-medium text-slate-600 hover:text-slate-900 underline">
                    View All Books
                </Link>
            </div>
            <TitleGrid books={BOOKS.slice(0, 3)} />
        </section>
    );
}
