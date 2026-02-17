
import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: ["/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)"],
};

export default async function middleware(req: NextRequest) {
    const url = req.nextUrl;
    const hostname = req.headers.get("host")!;

    // Handle localhost for development
    let currentHost = hostname.replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);

    // Handle main domain (for localhost scenario, treat as main domain if it matches ROOT_DOMAIN or is just localhost)
    if (hostname === "localhost:3000" || hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN) {
        currentHost = "moabytepress.com";
    }

    // Determine the site key based on the hostname
    // We want to rewrite to /[site]/path
    // If the hostname is a subdomain, extract it.
    // If it's the root domain, use "main" or keep it as the domain name to use as key.

    // Actually, let's keep it simple: rewrite to `/[hostname]/path` and inside the page we lookup the config by hostname.
    // It is cleaner to use the full hostname as the key in the [site] route param.

    // If I want to map to "survival", "ai", etc. I can do that lookup here.
    // Let's stick to using the domain as the slug for now to avoid complexity, 
    // or use a map if I want shorter URLs internally.
    // The User wanted "Subdomain separation".

    // Map:
    // survival.moabytepress.com -> /survival
    // moabytepress.com -> /main (or /home)



    // Determine the site key based on the hostname
    // We rewrite to `/[hostname]/path`

    // Strip port for easier processing & matching
    let siteKey = currentHost.split(":")[0];

    // Allow manual override for testing via query param (e.g. ?site_override=survival)
    const overrideSite = req.nextUrl.searchParams.get("site_override");
    if (overrideSite) {
        // Append base domain if just subdomain provided
        if (!overrideSite.includes(".")) {
            siteKey = `${overrideSite}.moabytepress.com`;
        } else {
            siteKey = overrideSite.split(":")[0];
        }
    }

    console.log("Middleware: rewriting", hostname, "to", siteKey);

    // Rewrite the URL


    const searchParams = req.nextUrl.searchParams.toString();
    const path = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ""}`;

    return NextResponse.rewrite(new URL(`/${siteKey}${path}`, req.url));
}
