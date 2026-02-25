"use client";

import { useState } from "react";
import Link from "next/link";

interface Question {
  id: string;
  text: string;
  options: { label: string; value: string }[];
}

const QUESTIONS: Question[] = [
  {
    id: "team_size",
    text: "¿Cuántas personas usarán AikaOS?",
    options: [
      { label: "Solo yo", value: "1" },
      { label: "2 a 5 personas", value: "2-5" },
      { label: "6 a 10 personas", value: "6-10" },
      { label: "Más de 10", value: "10+" },
    ],
  },
  {
    id: "industry",
    text: "¿En qué industria trabajas?",
    options: [
      { label: "Legal / Contabilidad", value: "legal" },
      { label: "Marketing / Ventas", value: "marketing" },
      { label: "Educación / Gobierno", value: "educacion" },
      { label: "Retail / E-commerce", value: "retail" },
      { label: "Salud / Inmobiliaria", value: "salud" },
      { label: "Tecnología / Otro", value: "tech" },
    ],
  },
  {
    id: "needs",
    text: "¿Qué necesitas principalmente?",
    options: [
      { label: "Automatizar documentos y reportes", value: "docs" },
      { label: "Atención al cliente y soporte", value: "soporte" },
      { label: "Marketing y contenido", value: "contenido" },
      { label: "Análisis de datos", value: "datos" },
      { label: "Un poco de todo", value: "todo" },
    ],
  },
  {
    id: "model",
    text: "¿Cómo prefieres usar la IA?",
    options: [
      { label: "API en la nube (Claude, GPT-4, etc.)", value: "cloud" },
      { label: "Modelo local con Ollama (offline)", value: "local" },
      { label: "No estoy seguro, necesito ayuda", value: "help" },
    ],
  },
  {
    id: "custom",
    text: "¿Necesitas integraciones personalizadas?",
    options: [
      { label: "No, los expertos estándar me bastan", value: "no" },
      { label: "Sí, necesito conectar con mis sistemas (CRM, ERP, etc.)", value: "yes" },
      { label: "Sí, necesito desarrollo a medida", value: "custom" },
    ],
  },
];

function recommendPlan(answers: Record<string, string>): {
  plan: string;
  price: string;
  reason: string;
} {
  const size = answers.team_size;
  const custom = answers.custom;

  if (size === "10+" || custom === "custom") {
    return {
      plan: "Enterprise",
      price: "$500/mes",
      reason:
        "Con más de 10 usuarios o necesidades de desarrollo a medida, Enterprise te da instalaciones ilimitadas, servidores MCP custom y soporte dedicado.",
    };
  }
  if (size === "6-10" || size === "2-5" || custom === "yes") {
    return {
      plan: "Business",
      price: "$150/mes",
      reason:
        "Para equipos de hasta 5 personas con integraciones, Business incluye 5 expertos premium, interconexión entre agentes y soporte prioritario.",
    };
  }
  if (answers.needs === "todo" || answers.model === "help") {
    return {
      plan: "Profesional",
      price: "$50/mes",
      reason:
        "Profesional incluye los 25 expertos preconfigurados, todos los skills y puesta en marcha asistida. Ideal para sacarle el máximo provecho.",
    };
  }
  return {
    plan: "Personal",
    price: "$20/mes",
    reason:
      "Para uso individual con tu propio modelo. Incluye la app de escritorio y actualizaciones. Puedes subir de plan cuando quieras.",
  };
}

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const recommendation = showResult ? recommendPlan(answers) : null;
  const question = QUESTIONS[currentStep];
  const progress = showResult
    ? 100
    : ((currentStep + 1) / QUESTIONS.length) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-slate-600">
            {showResult
              ? "Resultado"
              : `Pregunta ${currentStep + 1} de ${QUESTIONS.length}`}
          </span>
          <span className="text-sm font-medium text-slate-500">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-2 bg-white/40 backdrop-blur-md rounded-full border border-white/60 overflow-hidden">
          <div
            className="h-full bg-[#1A1A1A] rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {!showResult && question && (
        <div className="bg-white/40 backdrop-blur-2xl rounded-[36px] border border-white/60 p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]">
          <h2 className="text-2xl font-medium text-[#1A1A1A] font-nunito tracking-tight mb-8">
            {question.text}
          </h2>
          <div className="space-y-3">
            {question.options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleAnswer(question.id, option.value)}
                className="w-full text-left px-6 py-4 rounded-2xl bg-white/50 backdrop-blur-md border border-white/80 text-[15px] font-medium text-slate-800 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {showResult && recommendation && (
        <div className="bg-white/40 backdrop-blur-2xl rounded-[36px] border border-white/60 p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-[#1A1A1A] flex items-center justify-center mx-auto mb-4 shadow-[0_8px_16px_rgba(0,0,0,0.15)]">
              {/* @ts-expect-error iconify-icon is a web component */}
              <iconify-icon
                icon="solar:star-linear"
                class="text-3xl text-white"
              />
            </div>
            <h2 className="text-2xl font-medium text-[#1A1A1A] font-nunito tracking-tight mb-2">
              Te recomendamos
            </h2>
          </div>

          <div className="bg-white/60 backdrop-blur-md rounded-[28px] border border-white/80 p-8 mb-8 shadow-sm">
            <div className="flex items-baseline justify-between mb-4">
              <h3 className="text-xl font-semibold text-slate-900 font-nunito">
                {recommendation.plan}
              </h3>
              <span className="text-2xl font-semibold text-[#1A1A1A] font-nunito">
                {recommendation.price}
              </span>
            </div>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              {recommendation.reason}
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              href="/portal"
              className="flex-1 py-4 rounded-full bg-[#1A1A1A] text-white font-semibold text-[14px] hover:bg-black shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 transition-all border border-white/10 text-center block"
            >
              Ir al portal
            </Link>
            <button
              type="button"
              onClick={() => {
                setCurrentStep(0);
                setAnswers({});
                setShowResult(false);
              }}
              className="px-6 py-4 rounded-full bg-white/60 backdrop-blur-md border border-white shadow-sm text-slate-900 font-semibold text-[14px] hover:bg-white hover:shadow-md transition-all cursor-pointer"
            >
              Repetir
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
