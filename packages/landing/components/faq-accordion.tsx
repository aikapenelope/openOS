"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "¿Qué diferencia hay entre AikaOS y un chatbot normal?",
    answer:
      "Un chatbot te da respuestas de texto. AikaOS puede ejecutar acciones reales: crear archivos, editar documentos, navegar la web y correr comandos en tu máquina — siempre con tu aprobación.",
  },
  {
    question: "¿Necesito comprar un modelo de IA aparte?",
    answer:
      "AikaOS funciona con el modelo que tú elijas (BYOM). Puedes usar tu API key, modelos locales gratuitos con Ollama, o una suscripción de OpenCode. En planes superiores te ayudamos a integrarlo.",
  },
  {
    question: "¿Solo funciona en Mac?",
    answer:
      "Actualmente está optimizado para macOS con procesadores Apple Silicon (M1 a M4). Versiones para Windows y Linux están en desarrollo.",
  },
  {
    question: "¿Mis datos están seguros?",
    answer:
      "AikaOS corre localmente en tu computadora. No accede a archivos ni ejecuta comandos sin tu permiso. Tus datos nunca pasan por servidores de terceros. Es un sistema cerrado y verificado.",
  },
  {
    question: "¿Funciona con normativas de mi país?",
    answer:
      "Los expertos preconfigurados incluyen conocimiento de normativas locales (SAT en México, DIAN en Colombia, AFIP en Argentina). Puedes personalizar los skills para tu jurisdicción específica.",
  },
  {
    question: "¿Qué incluyen las actualizaciones?",
    answer:
      "Todos los planes incluyen actualizaciones con nuevos modelos compatibles, nuevas integraciones, mejoras de rendimiento y nuevos skills. En planes Enterprise, también desarrollamos funcionalidades a medida para tu empresa.",
  },
  {
    question: "¿Qué son los servidores MCP?",
    answer:
      "MCP (Model Context Protocol) permite que AikaOS se conecte con herramientas externas: navegadores, bases de datos, APIs, CRMs y más. En el plan Enterprise, desarrollamos servidores MCP personalizados que conectan AikaOS con los sistemas específicos de tu empresa.",
  },
  {
    question: "¿En qué se diferencia de OpenClaw o Claude Cowork?",
    answer:
      "AikaOS es un sistema cerrado y verificado con interfaz gráfica completa, a diferencia de OpenClaw que requiere terminal y tiene problemas de seguridad documentados. A diferencia de Claude Cowork, AikaOS funciona offline, no tiene límites de uso, tus datos nunca salen de tu máquina, y puedes usar cualquier modelo de IA. Además, es el único con interfaz nativa en español y expertos para Latinoamérica.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="rounded-2xl border border-white/60 bg-white/40 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.03)] overflow-hidden transition-colors hover:bg-white/50"
          >
            <button
              type="button"
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-slate-900 font-nunito text-lg leading-snug">
                {item.question}
              </span>
              <span
                className={`shrink-0 text-slate-500 transition-transform duration-300 ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
              >
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon
                  icon="solar:add-circle-linear"
                  class="text-2xl"
                />
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
              }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-[15px] font-medium text-slate-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
