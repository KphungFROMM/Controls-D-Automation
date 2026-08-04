import { NextResponse } from "next/server";
import { persistJsonArray } from "@/lib/submissions";

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

  try {
    await persistJsonArray("contact-submissions.json", entry);
  } catch (error) {
    console.error("Contact persistence failed:", error);
  }

  return NextResponse.json({
    message:
      "Thanks — your message was received. We will follow up using the contact details you provided.",
  });
}
