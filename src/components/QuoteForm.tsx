"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { services } from "@content/services";

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  timeline: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  timeline: "",
  message: "",
};

export function QuoteForm() {
  const searchParams = useSearchParams();
  const defaultService = useMemo(() => {
    const value = searchParams.get("service") ?? "";
    return services.some((item) => item.slug === value) ? value : "";
  }, [searchParams]);

  const [form, setForm] = useState<FormState>({ ...initial, service: defaultService });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  function validate(values: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Enter a valid email.";
    }
    if (!values.service) next.service = "Select a service to scope.";
    if (!values.message.trim() || values.message.trim().length < 10) {
      next.message = "Please include at least a short project description.";
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

    const serviceTitle =
      services.find((item) => item.slug === form.service)?.title ?? form.service;
    const composed = [
      `Service requested: ${serviceTitle}`,
      form.timeline ? `Target timeline: ${form.timeline}` : null,
      "",
      form.message.trim(),
    ]
      .filter((line) => line !== null)
      .join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone,
          interest: "quote",
          message: composed,
        }),
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(data.message || "Unable to send request.");
      setStatus("success");
      setServerMessage(data.message || "Request received.");
      setForm({ ...initial, service: defaultService });
    } catch (error) {
      setStatus("error");
      setServerMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="metallic-panel space-y-4 rounded-xl p-6 sm:p-8" noValidate>
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
          <label className="form-label" htmlFor="quote-name">
            Name
          </label>
          <input
            id="quote-name"
            className="input"
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            autoComplete="name"
          />
          {errors.name ? <p className="form-error">{errors.name}</p> : null}
        </div>
        <div>
          <label className="form-label" htmlFor="quote-email">
            Email
          </label>
          <input
            id="quote-email"
            type="email"
            className="input"
            value={form.email}
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            autoComplete="email"
          />
          {errors.email ? <p className="form-error">{errors.email}</p> : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="form-label" htmlFor="quote-company">
            Company
          </label>
          <input
            id="quote-company"
            className="input"
            value={form.company}
            onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
            autoComplete="organization"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="quote-phone">
            Phone
          </label>
          <input
            id="quote-phone"
            className="input"
            value={form.phone}
            onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="form-label" htmlFor="quote-service">
            Service to scope
          </label>
          <select
            id="quote-service"
            className="select"
            value={form.service}
            onChange={(e) => setForm((prev) => ({ ...prev, service: e.target.value }))}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
          {errors.service ? <p className="form-error">{errors.service}</p> : null}
        </div>
        <div>
          <label className="form-label" htmlFor="quote-timeline">
            Target timeline
          </label>
          <select
            id="quote-timeline"
            className="select"
            value={form.timeline}
            onChange={(e) => setForm((prev) => ({ ...prev, timeline: e.target.value }))}
          >
            <option value="">Not sure yet</option>
            <option value="Urgent / this month">Urgent / this month</option>
            <option value="1–3 months">1–3 months</option>
            <option value="3–6 months">3–6 months</option>
            <option value="Planning only">Planning only</option>
          </select>
        </div>
      </div>

      <div>
        <label className="form-label" htmlFor="quote-message">
          Process, platforms, and constraints
        </label>
        <textarea
          id="quote-message"
          className="textarea"
          value={form.message}
          onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
          placeholder="What’s running today, what needs to change, and any downtime windows we should know about."
        />
        {errors.message ? <p className="form-error">{errors.message}</p> : null}
      </div>

      <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Request a quote"}
      </button>
    </form>
  );
}
