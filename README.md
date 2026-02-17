
# Moabyte Press Multi-Division Platform

This is a Next.js application designed to support multiple subdomains (divisions) from a single codebase.

## Architecture

- **Middleware (`src/middleware.ts`)**: Rewrites requests based on the `Host` header to specific site folders (e.g., `survival.moabytepress.com` -> `/[site]`).
- **Site Configuration (`src/lib/sites.ts`)**: Central configuration for all divisions (Parent, Survival, AI, Health, Women's Health). Defines themes, navigation, and branding.
- **Dynamic Routing (`src/app/[site]`)**: A single dynamic route handles content for all sites, rendering appropriate layouts and components based on the site config.
- **Tailwind CSS**: Uses utility classes defined in the site config for theming without complex runtime CSS injections.

## Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Environment Variables**:
   Create `.env.local`:
   ```env
   NEXT_PUBLIC_ROOT_DOMAIN=moabytepress.com
   ```

3. **Development**:
   ```bash
   npm run dev
   ```
   To test subdomains locally, you may need to update `/etc/hosts`:
   ```
   127.0.0.1 moabytepress.com
   127.0.0.1 survival.moabytepress.com
   127.0.0.1 ai.moabytepress.com
   127.0.0.1 health.moabytepress.com
   127.0.0.1 womenshealth.moabytepress.com
   ```

   Then access `http://moabytepress.com:3000` or subdomains.

   **Mobile Testing:**
   You can access the dev server via your local IP (e.g., `http://192.168.0.113:3000`).
   By default, this shows the main "Corporate" site.
   To test a specific division, add the `site_override` query parameter:
   - `http://192.168.0.113:3000/?site_override=survival`
   - `http://192.168.0.113:3000/?site_override=ai`


## Adding Content

- Edit `src/lib/sites.ts` to update navigation or branding.
- Edit `src/app/[site]/page.tsx` to change the homepage structure.
- Edit `src/components` to modify shared UI elements.

## Deployment (Vercel)

1. Connect this repository to Vercel.
2. Add all domains (`moabytepress.com`, `survival.moabytepress.com`, etc.) to the Vercel project domain settings.
3. The middleware will automatically handle routing based on the incoming hostname.
