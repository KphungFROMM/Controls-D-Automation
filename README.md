# Controls D Automation Website

Professional marketing site for **Controls D Automation** — PLC, HMI, and SCADA development, updates, migrations, commissioning, diagnostics, and support, with expertise in Rockwell Automation, GE, and Keyence.

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
- `/services` Services listing
- `/services/[slug]` Service detail (capabilities, challenges, process, FAQ, technologies, benefits)
- `/platforms` Platforms
- `/industries` Industries listing
- `/industries/[slug]` Industry detail
- `/partners` Partners
- `/projects` Project case-study blog
- `/projects/[slug]` Individual project (challenge, solution, process, metrics, results)
- `/reviews` Ratings & feedback
- `/faq` Frequently asked questions
- `/quote` Request a quote / consultation
- `/about` About
- `/contact` Contact form

Contact details in `src/lib/site.ts` — update phone, email, hours, and service area there (and in the footer automatically).

Logo lives at `public/branding/logo.png` (copied from `Company Branding.png`).

## How to add or update a service

1. Open `content/services.ts`.
2. Add or edit a service object with `slug`, `title`, `summary`, `outcomes`, plus detail fields: `capabilities`, `challenges`, `process`, `benefits`, `technologies`, `faqs`, and `relatedIndustries`.
3. Industry slugs in `relatedIndustries` must match entries in `content/industries.ts`.
4. The listing at `/services` and the detail page at `/services/[slug]` update automatically.

## How to add an industry

1. Open `content/industries.ts`.
2. Add an industry with `slug`, `name`, `summary`, `overview`, `focus`, `outcomes`, `challenges`, `systems`, `services`, `image`, and `imageAlt`.
3. Service slugs must match `content/services.ts`.

## How to add a project

1. Open `content/projects.ts`.
2. Add a new object to the `projects` array with a unique `slug`, title, summary, date, industry slug, platforms, challenge, solution, results, and optionally `process`, `metrics`, and `services`.
3. Set `featured: true` if it should appear on the home page.
4. Industry slugs must match an entry in `content/industries.ts` (for example `manufacturing`, `packaging`).

## How to add a partner

1. Open `content/partners.ts`.
2. Add a partner object (`slug`, `name`, `category`, `summary`, `status`).
3. Replace “Logo TBD” placeholders on the Partners page later with real logo images under `public/partners/` when available.

## How to manage reviews

- Seed / editorial reviews: edit `content/reviews.ts`.
- Visitor submissions: use the form on `/reviews`. Submissions are saved to `data/review-submissions.json` when the site runs locally.
- Contact and quote form submissions are saved to `data/contact-submissions.json`.

For production hosting, wire these API routes to email or a database — filesystem writes may not persist on serverless hosts.

## How to update FAQs

Edit `content/faqs.ts`. Categories are derived automatically for `/faq`.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS v4.
