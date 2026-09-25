create table if not exists public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 120),
  work_email text not null check (char_length(work_email) between 3 and 320),
  company text,
  primary_goal text,
  message text,
  created_at timestamptz not null default now()
);

alter table public.contact_inquiries enable row level security;

-- No browser-facing policies are created. The Vercel API route uses the
-- server-only service-role key, while all public client access is denied.
