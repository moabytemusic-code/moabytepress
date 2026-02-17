
export function WhyChooseUs() {
    const points = [
        {
            title: "Implementation-Focused",
            description: "No fluff or theoretical filler. Every page is designed for immediate real-world deployment.",
            icon: "🎯"
        },
        {
            title: "Evidence-Oriented",
            description: "Our frameworks are grounded in verifiable data and structured educational systems.",
            icon: "📚"
        },
        {
            title: "Cross-Discipline Expertise",
            description: "Strategic insights spanning survival resilience, digital leverage, and metabolic health.",
            icon: "🌐"
        }
    ];

    return (
        <section className="py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {points.map((point) => (
                    <div key={point.title} className="flex flex-col items-center text-center group">
                        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-slate-100 transition-colors">
                            {point.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                            {point.title}
                        </h3>
                        <p className="text-slate-500 leading-relaxed text-sm max-w-xs">
                            {point.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
