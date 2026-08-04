"use client";

import { useState, type FormEvent } from "react";

type FormState = {
  name: string;
  company: string;
  rating: string;
  comment: string;
};

const initial: FormState = {
  name: "",
  company: "",
  rating: "5",
  comment: "",
};

export function ReviewForm({ onSubmitted }: { onSubmitted?: () => void }) {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  function validate(values: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.comment.trim() || values.comment.trim().length < 12) {
      next.comment = "Please share a bit more detail in your feedback.";
    }
    const rating = Number(values.rating);
    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      next.rating = "Select a rating from 1 to 5.";
    }
    return next;
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    setServerMessage("");

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          rating: Number(form.rating),
        }),
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) {
        throw new Error(data.message || "Unable to submit review.");
      }
      setStatus("success");
      setServerMessage(data.message || "Thank you for your feedback.");
      setForm(initial);
      onSubmitted?.();
    } catch (error) {
      setStatus("error");
      setServerMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="metallic-panel space-y-4 rounded-xl p-6 sm:p-8" noValidate>
      <div>
        <h3 className="text-2xl">Share your feedback</h3>
        <p className="mt-2 text-sm text-muted">
          Ratings and comments help future customers understand what working with Controls D Automation is like.
        </p>
      </div>

      {status === "success" ? (
        <div className="form-success" role="status">
          {serverMessage}
        </div>
      ) : null}
      {status === "error" ? (
        <div className="form-error rounded-md border border-red-200 bg-red-50 p-3" role="alert">
          {serverMessage}
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="form-label" htmlFor="review-name">
            Name
          </label>
          <input
            id="review-name"
            className="input"
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
          />
          {errors.name ? <p className="form-error">{errors.name}</p> : null}
        </div>
        <div>
          <label className="form-label" htmlFor="review-company">
            Company (optional)
          </label>
          <input
            id="review-company"
            className="input"
            value={form.company}
            onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
          />
        </div>
      </div>

      <div>
        <label className="form-label" htmlFor="review-rating">
          Rating
        </label>
        <select
          id="review-rating"
          className="select"
          value={form.rating}
          onChange={(e) => setForm((prev) => ({ ...prev, rating: e.target.value }))}
        >
          <option value="5">5 — Excellent</option>
          <option value="4">4 — Very good</option>
          <option value="3">3 — Good</option>
          <option value="2">2 — Fair</option>
          <option value="1">1 — Poor</option>
        </select>
        {errors.rating ? <p className="form-error">{errors.rating}</p> : null}
      </div>

      <div>
        <label className="form-label" htmlFor="review-comment">
          Feedback
        </label>
        <textarea
          id="review-comment"
          className="textarea"
          value={form.comment}
          onChange={(e) => setForm((prev) => ({ ...prev, comment: e.target.value }))}
        />
        {errors.comment ? <p className="form-error">{errors.comment}</p> : null}
      </div>

      <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Submit review"}
      </button>
    </form>
  );
}
