import { ChatMessage, sendChat } from "@/api/mistral";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { messages } = await req.json() as { messages: ChatMessage[] };

  try {
    const result = await sendChat(messages);
    return NextResponse.json(result);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send chat" }, { status: 500 });
  }
}