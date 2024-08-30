import { NextResponse } from "next/server";
import { db } from "@db/connection";
import { testTable } from "@db/schema";

export async function GET() {
  const result = await db.select().from(testTable);
  return NextResponse.json({ result }, { status: 200 });
}
