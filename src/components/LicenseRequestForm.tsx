"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { formatUsd, pricingSkus } from "@content/software";

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  sku: string;
  machineId: string;
  notes: string;
};

const initial: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  sku: "",
  machineId: "",
  notes: "",
};

export function LicenseRequestForm() {
  const searchParams = useSearchParams();
  const defaultSku = useMemo(() => {
    const value = searchParams.get("sku") ?? "";
    return pricingSkus.some((sku) => sku.id === value) ? value : pricingSkus[0]?.id ?? "";
  }, [searchParams]);

  const [form, setForm] = useState<FormState>({ ...initial, sku: defaultSku });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  useEffect(() => {
    setForm((prev) => (prev.sku === defaultSku ? prev : { ...prev, sku: defaultSku }));
  }, [defaultSku]);

  const selected = pricingSkus.find((sku) => sku.id === form.sku);

  function validate(values: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Enter a valid email.";
    }
    if (!values.sku || !pricingSkus.some((sku) => sku.id === values.sku)) {
      next.sku = "Select a license option.";
    }
    if (!values.machineId.trim() || values.machineId.trim().length < 6) {
      next.machineId = "Enter the Machine ID from Settings → License in the app.";
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
      const response = await fetch("/api/license-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) {
        throw new Error(data.message || "Unable to submit license request.");
      }
      setStatus("success");
      setServerMessage(data.message || "Request received.");
      setForm({ ...initial, sku: defaultSku });
    } catch (error) {
      setStatus("error");
      setServerMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <form
      id="license-request"
      onSubmit={onSubmit}
      className="metallic-panel space-y-4 rounded-xl p-6 sm:p-8"
      noValidate
    >
      <div>
        <h2 className="text-2xl">Request a license</h2>
        <p className="mt-2 text-sm text-muted">
          Select a product and term, paste your Machine ID from the app, and we will follow up with
          payment instructions and your offline license key.
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
          <label className="form-label" htmlFor="license-name">
            Name
          </label>
          <input
            id="license-name"
            className="input"
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            autoComplete="name"
          />
          {errors.name ? <p className="form-error">{errors.name}</p> : null}
        </div>
        <div>
          <label className="form-label" htmlFor="license-email">
            Email
          </label>
          <input
            id="license-email"
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
          <label className="form-label" htmlFor="license-company">
            Company
          </label>
          <input
            id="license-company"
            className="input"
            value={form.company}
            onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
            autoComplete="organization"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="license-phone">
            Phone
          </label>
          <input
            id="license-phone"
            className="input"
            value={form.phone}
            onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
            autoComplete="tel"
          />
        </div>
      </div>

      <div>
        <label className="form-label" htmlFor="license-sku">
          Product &amp; term
        </label>
        <select
          id="license-sku"
          className="select"
          value={form.sku}
          onChange={(e) => setForm((prev) => ({ ...prev, sku: e.target.value }))}
        >
          {pricingSkus.map((sku) => (
            <option key={sku.id} value={sku.id}>
              {sku.label} — {formatUsd(sku.priceUsd)}
            </option>
          ))}
        </select>
        {selected ? (
          <p className="mt-2 text-sm text-muted">
            {selected.term === "annual" ? "1-year" : "Perpetual"} license · {formatUsd(selected.priceUsd)}
            {selected.fulfills.length > 1
              ? ` · Includes ${selected.fulfills.length} product keys`
              : null}
          </p>
        ) : null}
        {errors.sku ? <p className="form-error">{errors.sku}</p> : null}
      </div>

      <div>
        <label className="form-label" htmlFor="license-machine-id">
          Machine ID
        </label>
        <input
          id="license-machine-id"
          className="input font-mono text-sm"
          value={form.machineId}
          onChange={(e) => setForm((prev) => ({ ...prev, machineId: e.target.value }))}
          placeholder="Copy from Settings → License in the installed app"
          spellCheck={false}
        />
        {errors.machineId ? <p className="form-error">{errors.machineId}</p> : null}
      </div>

      <div>
        <label className="form-label" htmlFor="license-notes">
          Notes (optional)
        </label>
        <textarea
          id="license-notes"
          className="textarea"
          value={form.notes}
          onChange={(e) => setForm((prev) => ({ ...prev, notes: e.target.value }))}
          placeholder="Purchase order number, site name, or billing details"
        />
      </div>

      <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Request license"}
      </button>
    </form>
  );
}
