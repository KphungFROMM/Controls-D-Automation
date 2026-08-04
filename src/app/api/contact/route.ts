import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  interest?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10) {
    return NextResponse.json(
      { message: "Please provide a valid name, email, and message." },
      { status: 400 },
    );
  }

  const entry = {
    id: `contact-${Date.now()}`,
    name,
    email,
    company: body.company?.trim() || "",
    phone: body.phone?.trim() || "",
    interest: body.interest?.trim() || "general",
    message,
    receivedAt: new Date().toISOString(),
  };

  const dataDir = path.join(process.cwd(), "data");
  const filePath = path.join(dataDir, "contact-submissions.json");
  await fs.mkdir(dataDir, { recursive: true });

  let existing: unknown[] = [];
  try {
    const raw = await fs.readFile(filePath, "utf8");
    existing = JSON.parse(raw) as unknown[];
    if (!Array.isArray(existing)) existing = [];
  } catch {
    existing = [];
  }

  existing.unshift(entry);
  await fs.writeFile(filePath, JSON.stringify(existing, null, 2), "utf8");

  return NextResponse.json({
    message:
      "Thanks — your message was received. We will follow up using the contact details you provided.",
  });
}
