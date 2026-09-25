# Deploying Inceptus

## Supabase

1. Create a Supabase project and open its SQL Editor.
2. Run `supabase/migrations/202609250001_create_contact_inquiries.sql`.
3. In the project Connect dialog, copy the project URL, publishable key, and server-only secret key.
4. Copy `.env.example` to `.env.local` and add the three values. Do not commit `.env.local`.

The application saves inquiries through a Vercel server route. No browser roles can read or write the `contact_inquiries` table; use the Supabase dashboard to review submissions.

## GitHub and Vercel

1. Create a new empty private GitHub repository named `inceptus` (do not add a README, license, or gitignore).
2. Add its remote, commit the project, and push the `main` branch.
3. In Vercel, import the GitHub repository. Vercel detects Next.js; use `npm run build` and leave the output directory blank.
4. Add `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` in Vercel Project Settings → Environment Variables for Production and Preview.
5. Deploy and test `/hire-us`; the inquiry should appear in Supabase Table Editor → `contact_inquiries`.
