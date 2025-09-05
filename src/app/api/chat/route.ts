import { sendChat } from "@/app/api/mistral";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = (await req.json()) as { messages: ChatMessage[] };
    const result = await sendChat(messages);
    return NextResponse.json(result);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to send chat", err },
      { status: 500 }
    );
  }
}