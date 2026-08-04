"use client";

import { useCallback, useState } from "react";
import type { Review } from "@content/reviews";
import { ReviewForm } from "./ReviewForm";
import { StarRating } from "./StarRating";

function averageOf(list: Review[]) {
  if (list.length === 0) return 0;
  return Math.round((list.reduce((sum, item) => sum + item.rating, 0) / list.length) * 10) / 10;
}

export function ReviewsClient({
  initialReviews,
  initialAverage,
}: {
  initialReviews: Review[];
  initialAverage: number;
}) {
  const [items, setItems] = useState(initialReviews);
  const [average, setAverage] = useState(initialAverage);

  const handleSubmitted = useCallback((review: Review, nextAverage?: number) => {
    setItems((prev) => {
      if (prev.some((item) => item.id === review.id)) return prev;
      const next = [review, ...prev];
      setAverage(typeof nextAverage === "number" ? nextAverage : averageOf(next));
      return next;
    });
  }, []);

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <div className="metallic-panel mb-6 rounded-xl p-6">
          <div className="flex flex-wrap items-center gap-3">
            <StarRating rating={average} size="lg" />
            <p className="text-3xl font-semibold text-navy">{average.toFixed(1)}</p>
          </div>
          <p className="mt-2 text-sm text-muted">
            Average from {items.length} customer review{items.length === 1 ? "" : "s"}
          </p>
        </div>

        <div className="space-y-4">
          {items.map((review) => (
            <article key={review.id} className="rounded-xl border border-silver/70 bg-white p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <StarRating rating={review.rating} />
                <time className="text-xs text-muted" dateTime={review.date}>
                  {new Date(review.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
              <p className="mt-3 text-muted">&ldquo;{review.comment}&rdquo;</p>
              <p className="mt-3 text-sm font-semibold text-navy">
                {review.name}
                {review.company ? ` · ${review.company}` : ""}
              </p>
            </article>
          ))}
        </div>
      </div>

      <ReviewForm onSubmitted={handleSubmitted} />
    </div>
  );
}
