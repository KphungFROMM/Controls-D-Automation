"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  interest: "general",
  message: "",
};

export function ContactForm() {
  const searchParams = useSearchParams();
  const defaultInterest = useMemo(() => {
    const value = searchParams.get("interest");
    if (value === "partnership" || value === "project" || value === "support") {
      return value;
    }
    return "general";
  }, [searchParams]);

  const servicePrefill = useMemo(() => {
    const service = searchParams.get("service");
    if (!service) return "";
    const label = service
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
    return `I'm interested in your ${label} service. `;
  }, [searchParams]);

  const [form, setForm] = useState<FormState>({
    ...initial,
    interest: defaultInterest,
    message: servicePrefill,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  function validate(values: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Enter a valid email.";
    }
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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) {
        throw new Error(data.message || "Unable to send message.");
      }
      setStatus("success");
      setServerMessage(data.message || "Message received.");
      setForm({ ...initial, interest: defaultInterest });
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
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="input"
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            autoComplete="name"
          />
          {errors.name ? <p className="form-error">{errors.name}</p> : null}
        </div>
        <div>
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
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
          <label className="form-label" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            className="input"
            value={form.company}
            onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
            autoComplete="organization"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            className="input"
            value={form.phone}
            onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
            autoComplete="tel"
          />
        </div>
      </div>

      <div>
        <label className="form-label" htmlFor="interest">
          Interest
        </label>
        <select
          id="interest"
          className="select"
          value={form.interest}
          onChange={(e) => setForm((prev) => ({ ...prev, interest: e.target.value }))}
        >
          <option value="general">General inquiry</option>
          <option value="project">Project / consultation</option>
          <option value="partnership">Become a partner</option>
          <option value="support">Support / updates</option>
        </select>
      </div>

      <div>
        <label className="form-label" htmlFor="message">
          How can we help?
        </label>
        <textarea
          id="message"
          className="textarea"
          value={form.message}
          onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
        />
        {errors.message ? <p className="form-error">{errors.message}</p> : null}
      </div>

      <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
