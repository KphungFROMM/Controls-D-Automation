import { promises as fs } from "fs";
import path from "path";
import type { Review } from "@content/reviews";

const dataDir = path.join(process.cwd(), "data");
const submissionsPath = path.join(dataDir, "review-submissions.json");

async function ensureStore() {
  await fs.mkdir(dataDir, { recursive: true });
  try {
    await fs.access(submissionsPath);
  } catch {
    await fs.writeFile(submissionsPath, "[]", "utf8");
  }
}

export async function readSubmittedReviews(): Promise<Review[]> {
  await ensureStore();
  const raw = await fs.readFile(submissionsPath, "utf8");
  try {
    const parsed = JSON.parse(raw) as Review[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function appendSubmittedReview(
  review: Omit<Review, "id" | "date" | "approved"> & {
    approved?: boolean;
  },
): Promise<Review> {
  const existing = await readSubmittedReviews();
  const entry: Review = {
    id: `sub-${Date.now()}`,
    name: review.name,
    company: review.company,
    rating: review.rating,
    comment: review.comment,
    date: new Date().toISOString().slice(0, 10),
    approved: review.approved ?? true,
  };
  existing.unshift(entry);
  await fs.writeFile(submissionsPath, JSON.stringify(existing, null, 2), "utf8");
  return entry;
}
