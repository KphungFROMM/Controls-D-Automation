# Controls D Automation Website

Professional marketing site for **Controls D Automation** — PLC, HMI, and SCADA development, updates, and migrations, with expertise in Rockwell Automation, GE, and Keyence.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm start
```

## Site pages

- `/` Home
- `/services` Services
- `/platforms` Platforms
- `/industries` Industries
- `/partners` Partners
- `/projects` Project case-study blog
- `/projects/[slug]` Individual project
- `/reviews` Ratings & feedback
- `/about` About
- `/contact` Contact form

Contact details in `src/lib/site.ts` are placeholders — update phone, email, hours, and address there (and in the footer automatically).

Logo lives at `public/branding/logo.png` (copied from `Company Branding.png`).

## How to add a project

1. Open `content/projects.ts`.
2. Add a new object to the `projects` array with a unique `slug`, title, summary, date, industry slug, platforms, challenge, solution, and results.
3. Set `featured: true` if it should appear on the home page.
4. Industry slugs must match an entry in `content/industries.ts` (for example `manufacturing`, `packaging`).

Example fields:

```ts
{
  slug: "your-project-slug",
  title: "Your Project Title",
  summary: "One or two sentences.",
  date: "2026-03-01",
  industry: "manufacturing",
  platforms: ["Rockwell Automation"],
  featured: false,
  challenge: "...",
  solution: "...",
  results: ["...", "..."],
}
```

## How to add a partner

1. Open `content/partners.ts`.
2. Add a partner object (`slug`, `name`, `category`, `summary`, `status`).
3. Replace “Logo TBD” placeholders on the Partners page later with real logo images under `public/partners/` when available.

## How to manage reviews

- Seed / editorial reviews: edit `content/reviews.ts`.
- Visitor submissions: use the form on `/reviews`. Submissions are saved to `data/review-submissions.json` when the site runs locally.
- Contact form submissions are saved to `data/contact-submissions.json`.

For production hosting, wire these API routes to email or a database — filesystem writes may not persist on serverless hosts.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS v4.
