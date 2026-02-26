"use client";

import { useState, useRef, useEffect, FormEvent } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

/**
 * Inline chatbot panel — designed to sit inside a landing page section,
 * not as a floating overlay. Matches the glassmorphism aesthetic.
 */
export function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      const reply =
        data.reply ?? data.error ?? "No pude generar una respuesta.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Error de conexión. Intenta de nuevo.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/40 backdrop-blur-2xl rounded-[32px] border border-white/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] flex flex-col overflow-hidden h-[520px]">
      {/* Header */}
      <div className="px-6 py-4 border-b border-white/40 shrink-0">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm font-bold text-aika-teal">
            {">_"}
          </span>
          <span className="font-semibold text-slate-900 font-nunito text-[15px]">
            Asistente AikaOS
          </span>
        </div>
        <p className="text-xs text-slate-500 mt-0.5">
          Pregunta lo que necesites sobre AikaOS
        </p>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-3">
        {messages.length === 0 && (
          <div className="text-center py-10">
            <div className="w-12 h-12 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 flex items-center justify-center mx-auto mb-4 shadow-sm">
              {/* @ts-expect-error iconify-icon is a web component */}
              <iconify-icon
                icon="solar:chat-round-dots-linear"
                class="text-2xl text-slate-600"
              />
            </div>
            <p className="text-sm text-slate-500 mb-4">
              Hola, soy el asistente de AikaOS.
            </p>
            <p className="text-xs text-slate-400">
              Pregunta sobre planes, funciones, instalación o cualquier duda.
            </p>
          </div>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-[14px] leading-relaxed ${
                msg.role === "user"
                  ? "bg-[#1A1A1A] text-white rounded-br-md shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                  : "bg-white/60 backdrop-blur-md text-slate-800 rounded-bl-md border border-white/80 shadow-sm"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white/60 backdrop-blur-md text-slate-500 px-4 py-2.5 rounded-2xl rounded-bl-md text-sm border border-white/80">
              Escribiendo...
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="p-4 border-t border-white/40 shrink-0"
      >
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu pregunta..."
            className="flex-1 px-4 py-3 rounded-xl bg-white/50 backdrop-blur-md border border-white/80 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-300 transition-colors shadow-sm"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="w-11 h-11 rounded-xl bg-[#1A1A1A] text-white flex items-center justify-center hover:bg-black transition-all shadow-[0_4px_12px_rgba(0,0,0,0.15)] disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
          >
            {/* @ts-expect-error iconify-icon is a web component */}
            <iconify-icon icon="solar:arrow-up-linear" class="text-lg" />
          </button>
        </div>
      </form>
    </div>
  );
}
