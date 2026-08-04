<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

This is a single Next.js 16 (App Router, Turbopack) marketing site — no database or external services. Standard commands live in `package.json` / `README.md`: `npm run dev` (dev server on port 3000), `npm run build`, `npm start`, `npm run lint`. There is no automated test suite (no `test` script).

Non-obvious notes:
- The dev server uses Turbopack and is fast to boot; run it in a long-lived tmux session, not a one-shot command.
- Contact and review form submissions POST to `/api/contact` and `/api/reviews`, which persist to `data/contact-submissions.json` and `data/review-submissions.json`. These files are git-tracked, so exercising the forms locally dirties the working tree — run `git checkout -- data/` to reset test data before committing.
- `npm install` may rewrite `package-lock.json` (a benign `name` field mismatch vs `package.json` and `libc` field normalization). Revert it with `git checkout -- package-lock.json` unless you intend to commit that fix.
- `npm run lint` currently reports one pre-existing error in `src/components/Header.tsx` (`react-hooks/set-state-in-effect`); the lint tooling itself works, this is a code issue unrelated to environment setup.
