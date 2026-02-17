
export interface SiteConfig {
    name: string;
    description: string;
    domain: string;
    theme: {
        primary: string;
        secondary: string;
        background: string;
        text: string;
        font?: string;
    };
    navigation: NavItem[];
    emailTag: string;
}

export interface NavItem {
    title: string;
    href: string;
}

export const SITE_CONFIGS: Record<string, SiteConfig> = {
    "moabytepress.com": {
        name: "Moabyte Press",
        description: "Corporate publishing headquarters.",
        domain: "moabytepress.com",
        theme: {
            primary: "bg-slate-900", // Neural/Professional
            secondary: "bg-slate-600",
            background: "bg-white",
            text: "text-slate-900",
        },
        navigation: [
            { title: "About", href: "/about" },
            { title: "Divisions", href: "/divisions" },
            { title: "Catalog", href: "/catalog" },
            { title: "Contact", href: "/contact" },
        ],
        emailTag: "corporate",
    },
    "survival.moabytepress.com": {
        name: "Moabyte Survival",
        description: "Practical Food Resilience & Self-Sufficiency Systems.",
        domain: "survival.moabytepress.com",
        theme: {
            primary: "bg-emerald-800", // Earth green
            secondary: "bg-stone-800", // Charcoal
            background: "bg-stone-50",
            text: "text-stone-900",
        },
        navigation: [
            { title: "Systems Hub", href: "/systems" },
            { title: "Books", href: "/books" },
            { title: "Blueprint", href: "/blueprint" },
            { title: "Blog", href: "/blog" },
        ],
        emailTag: "survival",
    },
    "ai.moabytepress.com": {
        name: "Moabyte AI",
        description: "Applied AI for Digital Leverage & Productivity.",
        domain: "ai.moabytepress.com",
        theme: {
            primary: "bg-indigo-900", // Dark navy
            secondary: "bg-cyan-500", // Electric accent
            background: "bg-slate-950",
            text: "text-white",
        },
        navigation: [
            { title: "Books", href: "/books" },
            { title: "Tools", href: "/tools" },
            { title: "Resources", href: "/resources" },
            { title: "Blog", href: "/blog" },
        ],
        emailTag: "ai",
    },
    "health.moabytepress.com": {
        name: "Moabyte Health",
        description: "Performance-Based Nutrition & Self-Care Systems.",
        domain: "health.moabytepress.com",
        theme: {
            primary: "bg-teal-700", // Practical/Calm
            secondary: "bg-teal-100",
            background: "bg-white",
            text: "text-teal-900",
        },
        navigation: [
            { title: "Systems", href: "/systems" },
            { title: "Nutrition", href: "/nutrition" },
            { title: "Blog", href: "/blog" },
        ],
        emailTag: "health",
    },
    "womenshealth.moabytepress.com": {
        name: "Moabyte Women's Health",
        description: "Hormone balance, metabolic support, resilience.",
        domain: "womenshealth.moabytepress.com",
        theme: {
            primary: "bg-rose-700", // Confident/Supportive
            secondary: "bg-rose-100",
            background: "bg-rose-50",
            text: "text-rose-900",
        },
        navigation: [
            { title: "Metabolic Support", href: "/metabolic" },
            { title: "Hormones", href: "/hormones" },
            { title: "Blog", href: "/blog" },
        ],
        emailTag: "womenshealth",
    },
};


export const getSiteConfig = (domain: string): SiteConfig | undefined => {
    // Normalize domain: remove port if present
    const cleanDomain = domain.split(":")[0];

    // Direct match
    if (SITE_CONFIGS[cleanDomain]) {
        return SITE_CONFIGS[cleanDomain];
    }

    // Development/Localhost handling
    // If accessing via localhost or IP, default to main site for testing
    // You can change this to test other sites locally (e.g. "survival.moabytepress.com")
    if (cleanDomain === "localhost" || cleanDomain.match(/^192\.168\.\d+\.\d+$/)) {
        return SITE_CONFIGS["moabytepress.com"];
    }

    return undefined;
};

