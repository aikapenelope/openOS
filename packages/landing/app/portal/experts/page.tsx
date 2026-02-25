const EXPERTS = [
  {
    icon: "solar:diploma-linear",
    name: "Legal LATAM",
    desc: "Contratos, poderes notariales, revisión de documentos legales con normativas locales (SAT, DIAN, AFIP).",
  },
  {
    icon: "solar:chart-square-linear",
    name: "Contabilidad",
    desc: "Reportes fiscales, conciliación de cuentas, cumplimiento con normativas contables locales.",
  },
  {
    icon: "solar:cart-large-linear",
    name: "E-commerce",
    desc: "Gestión de catálogos, atención al cliente, análisis de inventario y métricas de ventas.",
  },
  {
    icon: "solar:megaphone-linear",
    name: "Marketing",
    desc: "Campañas, copy persuasivo, calendarios de contenido y reportes de métricas.",
  },
  {
    icon: "solar:square-academic-cap-linear",
    name: "Educación",
    desc: "Planes de clase, rúbricas, exámenes alineados a estándares educativos.",
  },
  {
    icon: "solar:buildings-2-linear",
    name: "Gobierno",
    desc: "Oficios, informes de transparencia, respuestas ciudadanas y documentos oficiales.",
  },
  {
    icon: "solar:heart-pulse-linear",
    name: "Salud",
    desc: "Agenda de citas, facturación médica, resúmenes clínicos y apoyo al triaje.",
  },
  {
    icon: "solar:home-2-linear",
    name: "Inmobiliaria",
    desc: "Fichas de propiedades, contratos de arrendamiento, análisis de inversión.",
  },
  {
    icon: "solar:routing-2-linear",
    name: "Logística",
    desc: "Predicción de demanda, rastreo de envíos, coordinación de proveedores.",
  },
  {
    icon: "solar:leaf-linear",
    name: "Agricultura",
    desc: "Planificación de cultivos, trámites de exportación, análisis de datos climáticos.",
  },
  {
    icon: "solar:card-linear",
    name: "Fintech",
    desc: "Documentos de crédito, onboarding automatizado, análisis de riesgo crediticio.",
  },
  {
    icon: "solar:buildings-linear",
    name: "Construcción",
    desc: "Licitaciones, documentación de avance de obra, presupuestos de materiales.",
  },
  {
    icon: "solar:people-nearby-linear",
    name: "RRHH",
    desc: "Procesos de selección, evaluaciones de desempeño, gestión de nómina.",
  },
  {
    icon: "solar:clipboard-text-linear",
    name: "Seguros",
    desc: "Pólizas, gestión de siniestros, análisis de riesgo y cumplimiento regulatorio.",
  },
  {
    icon: "solar:calculator-linear",
    name: "Fiscal",
    desc: "Declaraciones de impuestos, planeación fiscal, cumplimiento tributario por país.",
  },
  {
    icon: "solar:chat-round-dots-linear",
    name: "Soporte",
    desc: "Atención al cliente, tickets, base de conocimiento y respuestas automatizadas.",
  },
  {
    icon: "solar:bag-4-linear",
    name: "Retail",
    desc: "Gestión de punto de venta, análisis de ventas, rotación de inventario.",
  },
  {
    icon: "solar:document-text-linear",
    name: "Notarial",
    desc: "Escrituras, actas notariales, certificaciones y trámites legales formales.",
  },
  {
    icon: "solar:graph-up-linear",
    name: "Analítica",
    desc: "Dashboards, reportes de datos, visualización y análisis de métricas de negocio.",
  },
  {
    icon: "solar:pen-new-square-linear",
    name: "Copywriting",
    desc: "Textos persuasivos, landing pages, emails de venta y contenido de marca.",
  },
  {
    icon: "solar:translation-linear",
    name: "Traductor",
    desc: "Traducción profesional entre español, inglés, portugués y otros idiomas.",
  },
  {
    icon: "solar:calendar-linear",
    name: "Productividad",
    desc: "Gestión de tareas, calendarios, priorización y flujos de trabajo eficientes.",
  },
  {
    icon: "solar:database-linear",
    name: "Datos",
    desc: "Limpieza de datos, transformaciones, consultas SQL y preparación de datasets.",
  },
  {
    icon: "solar:shield-check-linear",
    name: "Compliance",
    desc: "Cumplimiento GDPR, LGPD, auditorías internas y políticas de privacidad.",
  },
  {
    icon: "solar:hand-money-linear",
    name: "Cobranza",
    desc: "Seguimiento de pagos, recordatorios automatizados, gestión de cartera vencida.",
  },
];

export default function ExpertsPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-semibold text-slate-900 font-nunito tracking-tight mb-2">
        Expertos preconfigurados
      </h1>
      <p className="text-slate-600 font-medium mb-10">
        Tu plan incluye 25 expertos especializados para industrias
        latinoamericanas. Cada uno viene con skills, comandos y servidores MCP
        listos para usar.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {EXPERTS.map((expert) => (
          <div
            key={expert.name}
            className="bg-white rounded-2xl border border-slate-200 p-5 flex items-start gap-4 hover:border-slate-300 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
              {/* @ts-expect-error iconify-icon is a web component */}
              <iconify-icon
                icon={expert.icon}
                class="text-xl text-slate-700"
              />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 text-[15px] mb-1">
                {expert.name}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {expert.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
