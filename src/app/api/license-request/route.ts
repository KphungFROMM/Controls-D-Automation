import { NextResponse } from "next/server";
import { createLicenseOrder } from "@/lib/license-orders";

type LicenseRequestPayload = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  sku?: string;
  machineId?: string;
  notes?: string;
};

export async function POST(request: Request) {
  let body: LicenseRequestPayload;

  try {
    body = (await request.json()) as LicenseRequestPayload;
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const result = await createLicenseOrder({
    name: body.name ?? "",
    email: body.email ?? "",
    company: body.company,
    phone: body.phone,
    sku: body.sku ?? "",
    machineId: body.machineId ?? "",
    notes: body.notes,
  });

  if (!result.ok) {
    return NextResponse.json({ message: result.message }, { status: result.status });
  }

  return NextResponse.json({
    message:
      "Thanks — your license request was received. We will follow up with payment instructions and your license key.",
    orderId: result.order.id,
  });
}
