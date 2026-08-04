import { promises as fs } from "fs";
import path from "path";

const isServerless = Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME);

export async function persistJsonArray(fileName: string, entry: unknown): Promise<void> {
  // Local/dev: persist to disk. Vercel serverless filesystem is read-only.
  if (isServerless) {
    console.info(`[submission:${fileName}]`, JSON.stringify(entry));
    return;
  }

  const dataDir = path.join(process.cwd(), "data");
  const filePath = path.join(dataDir, fileName);
  await fs.mkdir(dataDir, { recursive: true });

  let existing: unknown[] = [];
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const parsed = JSON.parse(raw) as unknown;
    if (Array.isArray(parsed)) existing = parsed;
  } catch {
    existing = [];
  }

  existing.unshift(entry);
  await fs.writeFile(filePath, JSON.stringify(existing, null, 2), "utf8");
}

export async function readJsonArray<T>(fileName: string): Promise<T[]> {
  if (isServerless) return [];

  const filePath = path.join(process.cwd(), "data", fileName);
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as T[]) : [];
  } catch {
    return [];
  }
}
