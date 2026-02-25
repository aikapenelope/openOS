import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import fs from "fs";
import path from "path";

/**
 * Load all markdown files from content/knowledge/ and concatenate them
 * into a single string used as the chatbot's knowledge base.
 */
function loadKnowledge(): string {
  const knowledgeDir = path.join(process.cwd(), "content", "knowledge");
  try {
    const files = fs.readdirSync(knowledgeDir).filter((f) => f.endsWith(".md"));
    return files
      .map((f) => fs.readFileSync(path.join(knowledgeDir, f), "utf-8"))
      .join("\n\n---\n\n");
  } catch {
    return "No se encontró la base de conocimiento.";
  }
}

const SYSTEM_PROMPT = `Eres el asistente virtual de AikaOS, una plataforma de agentes IA para empresas en Latinoamérica. Responde siempre en español, de forma clara, concisa y profesional.

Usa ÚNICAMENTE la siguiente base de conocimiento para responder. Si la pregunta no está cubierta, di que no tienes esa información y sugiere contactar al equipo de AikaOS.

No inventes información. No menciones que tienes una "base de conocimiento" — simplemente responde como si fueras un experto en AikaOS.

BASE DE CONOCIMIENTO:
${loadKnowledge()}`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Chatbot no configurado. Contacta al administrador." },
      { status: 503 }
    );
  }

  const { message } = (await req.json()) as { message?: string };
  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return NextResponse.json(
      { error: "Mensaje vacío." },
      { status: 400 }
    );
  }

  try {
    const groq = new Groq({ apiKey });
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.3,
      max_tokens: 1024,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message.trim() },
      ],
    });

    const reply =
      completion.choices[0]?.message?.content ??
      "No pude generar una respuesta. Intenta de nuevo.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Groq API error:", err);
    return NextResponse.json(
      { error: "Error al procesar tu pregunta. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
