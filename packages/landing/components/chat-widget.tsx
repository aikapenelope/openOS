"use client";

import { useState, useRef, useEffect, FormEvent } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
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
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-slate-900 text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:bg-black hover:scale-105 transition-all flex items-center justify-center"
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat de soporte"}
      >
        {/* @ts-expect-error iconify-icon is a web component */}
        <iconify-icon
          icon={isOpen ? "solar:close-circle-linear" : "solar:chat-round-dots-linear"}
          class="text-2xl"
        />
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-slate-200 flex flex-col overflow-hidden"
          style={{ height: "500px", maxHeight: "calc(100vh - 8rem)" }}
        >
          {/* Header */}
          <div className="px-5 py-4 border-b border-slate-100 bg-slate-50 shrink-0">
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
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <p className="text-sm text-slate-500">
                  Hola, soy el asistente de AikaOS. ¿En qué puedo ayudarte?
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
                      ? "bg-slate-900 text-white rounded-br-md"
                      : "bg-slate-100 text-slate-800 rounded-bl-md"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 text-slate-500 px-4 py-2.5 rounded-2xl rounded-bl-md text-sm">
                  Escribiendo...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="p-3 border-t border-slate-100 shrink-0"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu pregunta..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 transition-colors"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center hover:bg-black transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
              >
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon icon="solar:arrow-up-linear" class="text-lg" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
