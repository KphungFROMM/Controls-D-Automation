export function StarRating({
  rating,
  size = "md",
}: {
  rating: number;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClass =
    size === "lg" ? "text-2xl" : size === "sm" ? "text-sm" : "text-base";

  return (
    <div
      className={`inline-flex items-center gap-0.5 ${sizeClass}`}
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => {
        const filled = index + 1 <= Math.round(rating);
        return (
          <span key={index} className={filled ? "star" : "text-steel/50"}>
            ★
          </span>
        );
      })}
    </div>
  );
}
