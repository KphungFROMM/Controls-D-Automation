import type { Metadata } from "next";
import { getApprovedReviews, getAverageRating } from "@content/reviews";
import { readSubmittedReviews } from "@/lib/reviews-store";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { ReviewsClient } from "@/components/ReviewsClient";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Customer ratings and feedback for Controls D Automation PLC, HMI, and SCADA services.",
};

export const dynamic = "force-dynamic";

export default async function ReviewsPage() {
  const submitted = await readSubmittedReviews();
  const approved = getApprovedReviews(submitted);
  const average = getAverageRating(approved);

  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Customer ratings and feedback"
        lede="See what clients say about working with Controls D Automation—and share your own experience after a project."
      />

      <section className="section">
        <div className="container">
          <ReviewsClient initialReviews={approved} initialAverage={average} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
