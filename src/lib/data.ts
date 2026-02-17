
export interface Book {
    id: string;
    title: string;
    division: "Survival" | "AI" | "Health" | "Women's Health";
    summary: string;
    coverUrl?: string; // Placeholder for now
    divisionUrl: string;
}

export const BOOKS: Book[] = [
    {
        id: "survival-blueprint",
        title: "30-Day Survival Food Starter Blueprint",
        division: "Survival",
        summary: "A structured approach to building a resilient food supply in 30 days.",
        divisionUrl: "https://survival.moabytepress.com",
    },
    {
        id: "ai-leverage",
        title: "The AI Leverage Framework",
        division: "AI",
        summary: "Implementing applied AI systems for maximum digital productivity.",
        divisionUrl: "https://ai.moabytepress.com",
    },
    {
        id: "metabolic-resilience",
        title: "Metabolic Resilience Systems",
        division: "Health",
        summary: "Evidence-based nutrition frameworks for long-term health optimization.",
        divisionUrl: "https://health.moabytepress.com",
    }
];

export interface Division {
    id: string;
    name: string;
    description: string;
    details: string;
    url: string;
    color: string;
}

export const DIVISIONS: Division[] = [
    {
        id: "survival",
        name: "Survival Systems",
        description: "Practical food production, resilience planning, and self-sufficiency frameworks.",
        details: "Dedicated to practical knowledge on food production, emergency systems, and sustainable resilience.",
        url: "https://survival.moabytepress.com",
        color: "text-emerald-900 bg-emerald-50 border-emerald-100",
    },
    {
        id: "ai",
        name: "AI & Digital Strategy",
        description: "Applied AI, automation, and modern digital leverage systems.",
        details: "Focusing on the strategic application of AI tools and automation to create digital leverage.",
        url: "https://ai.moabytepress.com",
        color: "text-indigo-900 bg-indigo-50 border-indigo-100",
    },
    {
        id: "health",
        name: "Health & Optimization",
        description: "Structured health, nutrition, and sustainable performance frameworks.",
        details: "Developing evidence-based systems for physiological health and peak metabolic performance.",
        url: "https://health.moabytepress.com",
        color: "text-teal-900 bg-teal-50 border-teal-100",
    }
];
