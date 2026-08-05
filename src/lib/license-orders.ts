import { getPricingSku, type PricingSku } from "@content/software";
import { persistJsonArray } from "@/lib/submissions";

export type LicenseOrderInput = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  sku: string;
  machineId: string;
  notes?: string;
};

export type LicenseOrder = {
  id: string;
  status: "pending_payment";
  /** Reserved for Stripe Checkout session id when online payments are added. */
  checkoutProvider: "manual";
  sku: string;
  productSlug: string;
  term: PricingSku["term"];
  label: string;
  priceUsd: number;
  fulfills: string[];
  name: string;
  email: string;
  company: string;
  phone: string;
  machineId: string;
  notes: string;
  receivedAt: string;
};

export type CreateLicenseOrderResult =
  | { ok: true; order: LicenseOrder }
  | { ok: false; message: string; status: number };

/**
 * Creates a pending license order for manual fulfillment.
 * Later: swap checkoutProvider to "stripe" and attach a Checkout Session here.
 */
export async function createLicenseOrder(
  input: LicenseOrderInput,
): Promise<CreateLicenseOrderResult> {
  const name = input.name.trim();
  const email = input.email.trim();
  const machineId = input.machineId.trim();
  const skuId = input.sku.trim();

  if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Please provide a valid name and email.", status: 400 };
  }
  if (!machineId || machineId.length < 6) {
    return {
      ok: false,
      message: "Enter the Machine ID from the app (Settings → License).",
      status: 400,
    };
  }

  const sku = getPricingSku(skuId);
  if (!sku) {
    return { ok: false, message: "Select a valid product and license term.", status: 400 };
  }

  const order: LicenseOrder = {
    id: `license-${Date.now()}`,
    status: "pending_payment",
    checkoutProvider: "manual",
    sku: sku.id,
    productSlug: sku.productSlug,
    term: sku.term,
    label: sku.label,
    priceUsd: sku.priceUsd,
    fulfills: [...sku.fulfills],
    name,
    email,
    company: input.company?.trim() || "",
    phone: input.phone?.trim() || "",
    machineId,
    notes: input.notes?.trim() || "",
    receivedAt: new Date().toISOString(),
  };

  try {
    await persistJsonArray("license-requests.json", order);
  } catch (error) {
    console.error("License order persistence failed:", error);
  }

  return { ok: true, order };
}
