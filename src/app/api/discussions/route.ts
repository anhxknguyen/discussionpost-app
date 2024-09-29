import db from "@/lib/db";
import { v4 as uuidv4 } from "uuid";

export async function GET(request: Request) {
  const [rows] = await db.query("SELECT * FROM discussions");
  return new Response(JSON.stringify(rows));
}

export async function POST(request: Request) {
  const { title, content } = await request.json();
  const isoString = new Date().toISOString();
  const mysqlTimestamp = isoString.slice(0, 19).replace("T", " ");
  const [result] = await db.query(
    "INSERT INTO discussions (id, title, content, time) VALUES (?, ?, ?, ?)",
    [uuidv4(), title, content, mysqlTimestamp]
  );
  return new Response(JSON.stringify(result));
}
