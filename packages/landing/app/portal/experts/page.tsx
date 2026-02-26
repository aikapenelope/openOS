"use client";

const REPO_BASE =
  "https://github.com/aikapenelope/openOS/tree/dev/packages/app/src/app/data/templates";

const EXPERTS = [
  {
    icon: "solar:diploma-linear",
    name: "Legal LATAM",
    slug: "legal-latam",
    desc: "Contratos, poderes notariales, revisión de documentos legales con normativas locales (SAT, DIAN, AFIP).",
  },
  {
    icon: "solar:chart-square-linear",
    name: "Contabilidad",
    slug: "contabilidad-latam",
    desc: "Reportes fiscales, conciliación de cuentas, cumplimiento con normativas contables locales.",
  },
  {
    icon: "solar:cart-large-linear",
    name: "E-commerce",
    slug: "retail",
    desc: "Gestión de catálogos, atención al cliente, análisis de inventario y métricas de ventas.",
  },
  {
    icon: "solar:target-linear",
    name: "Marketing",
    slug: "marketing-digital",
    desc: "Campañas, copy persuasivo, calendarios de contenido y reportes de métricas.",
  },
  {
    icon: "solar:square-academic-cap-linear",
    name: "Educación",
    slug: "educacion",
    desc: "Planes de clase, rúbricas, exámenes alineados a estándares educativos.",
  },
  {
    icon: "solar:buildings-2-linear",
    name: "Gobierno",
    slug: "gobierno",
    desc: "Oficios, informes de transparencia, respuestas ciudadanas y documentos oficiales.",
  },
  {
    icon: "solar:heart-pulse-linear",
    name: "Salud",
    slug: "medico-clinica",
    desc: "Agenda de citas, facturación médica, resúmenes clínicos y apoyo al triaje.",
  },
  {
    icon: "solar:home-2-linear",
    name: "Inmobiliaria",
    slug: "asistente-inmobiliario",
    desc: "Fichas de propiedades, contratos de arrendamiento, análisis de inversión.",
  },
  {
    icon: "solar:routing-2-linear",
    name: "Logística",
    slug: "planificador-proyectos",
    desc: "Predicción de demanda, rastreo de envíos, coordinación de proveedores.",
  },
  {
    icon: "solar:leaf-linear",
    name: "Agricultura",
    slug: "agente-aduanas",
    desc: "Planificación de cultivos, trámites de exportación, análisis de datos climáticos.",
  },
  {
    icon: "solar:card-linear",
    name: "Fintech",
    slug: "asistente-fiscal",
    desc: "Documentos de crédito, onboarding automatizado, análisis de riesgo crediticio.",
  },
  {
    icon: "solar:buildings-linear",
    name: "Construcción",
    slug: "planificador-proyectos",
    desc: "Licitaciones, documentación de avance de obra, presupuestos de materiales.",
  },
  {
    icon: "solar:people-nearby-linear",
    name: "RRHH",
    slug: "recursos-humanos",
    desc: "Procesos de selección, evaluaciones de desempeño, gestión de nómina.",
  },
  {
    icon: "solar:clipboard-text-linear",
    name: "Seguros",
    slug: "analista-competencia",
    desc: "Pólizas, gestión de siniestros, análisis de riesgo y cumplimiento regulatorio.",
  },
  {
    icon: "solar:calculator-linear",
    name: "Fiscal",
    slug: "asistente-fiscal",
    desc: "Declaraciones de impuestos, planeación fiscal, cumplimiento tributario por país.",
  },
  {
    icon: "solar:chat-round-dots-linear",
    name: "Soporte",
    slug: "soporte-tecnico",
    desc: "Atención al cliente, tickets, base de conocimiento y respuestas automatizadas.",
  },
  {
    icon: "solar:bag-4-linear",
    name: "Retail",
    slug: "retail",
    desc: "Gestión de punto de venta, análisis de ventas, rotación de inventario.",
  },
  {
    icon: "solar:document-text-linear",
    name: "Notarial",
    slug: "abogado-migratorio",
    desc: "Escrituras, actas notariales, certificaciones y trámites legales formales.",
  },
  {
    icon: "solar:graph-up-linear",
    name: "Analítica",
    slug: "analista-competencia",
    desc: "Dashboards, reportes de datos, visualización y análisis de métricas de negocio.",
  },
  {
    icon: "solar:pen-new-square-linear",
    name: "Copywriting",
    slug: "creador-contenido",
    desc: "Textos persuasivos, landing pages, emails de venta y contenido de marca.",
  },
  {
    icon: "solar:translation-linear",
    name: "Traductor",
    slug: "redactor-bilingue",
    desc: "Traducción profesional entre español, inglés, portugués y otros idiomas.",
  },
  {
    icon: "solar:calendar-linear",
    name: "Productividad",
    slug: "freelancer-admin",
    desc: "Gestión de tareas, calendarios, priorización y flujos de trabajo eficientes.",
  },
  {
    icon: "solar:database-linear",
    name: "Datos",
    slug: "investigador-web",
    desc: "Limpieza de datos, transformaciones, consultas SQL y preparación de datasets.",
  },
  {
    icon: "solar:shield-check-linear",
    name: "Compliance",
    slug: "legal-latam",
    desc: "Cumplimiento GDPR, LGPD, auditorías internas y políticas de privacidad.",
  },
  {
    icon: "solar:hand-money-linear",
    name: "Cobranza",
    slug: "ventas-b2b",
    desc: "Seguimiento de pagos, recordatorios automatizados, gestión de cartera vencida.",
  },
];

export default function ExpertsPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-medium text-[#1A1A1A] font-nunito tracking-tight mb-2 drop-shadow-sm">
        Expertos preconfigurados
      </h1>
      <p className="text-slate-600 font-medium mb-10">
        Tu plan incluye 25 expertos especializados para industrias
        latinoamericanas. Haz clic en cualquiera para ver su carpeta con skills,
        comandos y servidores MCP en GitHub.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {EXPERTS.map((expert) => (
          <a
            key={expert.name}
            href={`${REPO_BASE}/${expert.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/40 backdrop-blur-2xl rounded-[22px] border border-white/60 p-5 flex items-start gap-4 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur-md border border-white/80 flex items-center justify-center shrink-0 shadow-sm">
              {/* @ts-expect-error iconify-icon is a web component */}
              <iconify-icon
                icon={expert.icon}
                class="text-xl text-slate-700"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-slate-900 text-[15px] mb-1">
                  {expert.name}
                </h3>
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon
                  icon="solar:arrow-right-up-linear"
                  class="text-sm text-slate-400 group-hover:text-slate-700 transition-colors"
                />
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {expert.desc}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
