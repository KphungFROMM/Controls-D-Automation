import { NextResponse } from "next/server";
import { getApprovedReviews, getAverageRating } from "@content/reviews";
import { appendSubmittedReview, readSubmittedReviews } from "@/lib/reviews-store";

export async function GET() {
  const submitted = await readSubmittedReviews();
  const all = getApprovedReviews(submitted);
  return NextResponse.json({
    reviews: all,
    average: getAverageRating(all),
    count: all.length,
  });
}

export async function POST(request: Request) {
  let body: {
    name?: string;
    company?: string;
    rating?: number;
    comment?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const comment = body.comment?.trim() ?? "";
  const rating = Number(body.rating);

  if (!name || comment.length < 12 || !Number.isInteger(rating) || rating < 1 || rating > 5) {
    return NextResponse.json(
      { message: "Please provide a name, rating (1–5), and feedback." },
      { status: 400 },
    );
  }

  const entry = await appendSubmittedReview({
    name,
    company: body.company?.trim() || undefined,
    rating,
    comment,
    approved: true,
  });

  const submitted = await readSubmittedReviews();
  const all = getApprovedReviews(submitted);

  return NextResponse.json({
    message: "Thank you — your review has been added.",
    review: entry,
    average: getAverageRating(all),
    count: all.length,
  });
}
