import type { Review } from "@content/reviews";
import { persistJsonArray, readJsonArray } from "@/lib/submissions";

const FILE_NAME = "review-submissions.json";

export async function readSubmittedReviews(): Promise<Review[]> {
  return readJsonArray<Review>(FILE_NAME);
}

export async function appendSubmittedReview(
  review: Omit<Review, "id" | "date" | "approved"> & {
    approved?: boolean;
  },
): Promise<Review> {
  const entry: Review = {
    id: `sub-${Date.now()}`,
    name: review.name,
    company: review.company,
    rating: review.rating,
    comment: review.comment,
    date: new Date().toISOString().slice(0, 10),
    approved: review.approved ?? true,
  };

  try {
    await persistJsonArray(FILE_NAME, entry);
  } catch (error) {
    console.error("Review persistence failed:", error);
  }

  return entry;
}
