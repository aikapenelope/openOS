import { SiteFooter } from "../components/site-footer";
import { SiteNav } from "../components/site-nav";
import { getGithubData } from "../lib/github";

const EXPERTOS = [
  {
    id: "legal-latam",
    nombre: "Legal LATAM",
    desc: "Redacción jurídica, contratos y revisión de documentos legales para México, Colombia y Argentina.",
    audiencia: "Despachos de abogados, asesores legales",
    color: "border-violet-100 bg-violet-50/40 ring-1 ring-violet-100/50",
    badge: "bg-violet-50 text-violet-700",
  },
  {
    id: "contabilidad-latam",
    nombre: "Contabilidad LATAM",
    desc: "Reportes fiscales, conciliación de cuentas y cumplimiento tributario.",
    audiencia: "Contadores, PyMEs, firmas contables",
    color: "border-emerald-100 bg-emerald-50/40 ring-1 ring-emerald-100/50",
    badge: "bg-emerald-50 text-emerald-700",
  },
  {
    id: "retail",
    nombre: "Retail / E-commerce",
    desc: "Gestión de catálogo, inventario y atención al cliente para tiendas en línea.",
    audiencia: "Tiendas online, marketplaces",
    color: "border-sky-100 bg-sky-50/40 ring-1 ring-sky-100/50",
    badge: "bg-sky-50 text-sky-700",
  },
  {
    id: "marketing-digital",
    nombre: "Marketing Digital",
    desc: "Campañas, copywriting y reportes de métricas para el mercado hispanohablante.",
    audiencia: "Agencias de marketing, equipos de growth",
    color: "border-pink-100 bg-pink-50/40 ring-1 ring-pink-100/50",
    badge: "bg-pink-50 text-pink-700",
  },
  {
    id: "educacion",
    nombre: "Educación",
    desc: "Planes de clase, evaluaciones y material didáctico para instituciones educativas.",
    audiencia: "Escuelas, universidades, tutores",
    color: "border-amber-100 bg-amber-50/40 ring-1 ring-amber-100/50",
    badge: "bg-amber-50 text-amber-700",
  },
  {
    id: "gobierno",
    nombre: "Gobierno / Sector Público",
    desc: "Oficios, informes de transparencia y respuestas ciudadanas en lenguaje oficial.",
    audiencia: "Municipios, dependencias gubernamentales",
    color: "border-blue-100 bg-blue-50/40 ring-1 ring-blue-100/50",
    badge: "bg-blue-50 text-blue-700",
  },
  {
    id: "soporte-tecnico",
    nombre: "Soporte Técnico",
    desc: "Diagnóstico de tickets, base de conocimiento y escalamiento para help desks.",
    audiencia: "Help desks, equipos de soporte SaaS",
    color: "border-orange-100 bg-orange-50/40 ring-1 ring-orange-100/50",
    badge: "bg-orange-50 text-orange-700",
  },
  {
    id: "ventas-b2b",
    nombre: "Ventas B2B",
    desc: "Propuestas comerciales, seguimiento de leads y reportes de pipeline.",
    audiencia: "Equipos comerciales, ejecutivos de ventas",
    color: "border-teal-100 bg-teal-50/40 ring-1 ring-teal-100/50",
    badge: "bg-teal-50 text-teal-700",
  },
  {
    id: "recursos-humanos",
    nombre: "Recursos Humanos",
    desc: "Reclutamiento, evaluaciones de desempeño y políticas internas.",
    audiencia: "Departamentos de RRHH, reclutadores",
    color: "border-indigo-100 bg-indigo-50/40 ring-1 ring-indigo-100/50",
    badge: "bg-indigo-50 text-indigo-700",
  },
  {
    id: "web-dev",
    nombre: "Desarrollo Web",
    desc: "Full-stack con Next.js, Tailwind y herramientas modernas de desarrollo.",
    audiencia: "Desarrolladores, agencias, freelancers",
    color: "border-gray-200 bg-gray-50/40 ring-1 ring-gray-100/50",
    badge: "bg-gray-100 text-gray-700",
  },
];

const SECTORES = [
  {
    sector: "Despachos legales",
    desc: "Automatiza contratos, poderes notariales y revisión de documentos en minutos.",
    icono: "⚖️",
  },
  {
    sector: "Firmas contables",
    desc: "Genera reportes fiscales, concilia cuentas y cumple con normativas locales.",
    icono: "📊",
  },
  {
    sector: "Comercio minorista",
    desc: "Gestiona catálogos, responde clientes y analiza inventario automáticamente.",
    icono: "🛒",
  },
  {
    sector: "Agencias de marketing",
    desc: "Crea campañas, genera copy persuasivo y reporta métricas semanales.",
    icono: "📣",
  },
  {
    sector: "Instituciones educativas",
    desc: "Diseña planes de clase, rúbricas y exámenes alineados a estándares.",
    icono: "🎓",
  },
  {
    sector: "Gobierno municipal",
    desc: "Redacta oficios, informes de transparencia y respuestas ciudadanas.",
    icono: "🏛️",
  },
  {
    sector: "Salud y clínicas",
    desc: "Agenda citas, automatiza facturación médica, genera resúmenes clínicos y apoya el triaje inicial. Solo el 65% de la atención primaria en LATAM usa expedientes electrónicos — AikaOS cierra esa brecha.",
    icono: "🏥",
  },
  {
    sector: "Inmobiliaria / PropTech",
    desc: "Publica propiedades, genera contratos de arrendamiento, da seguimiento a clientes y automatiza valuaciones comparativas de mercado.",
    icono: "🏠",
  },
  {
    sector: "Logística y cadena de suministro",
    desc: "Predice demanda de inventario, rastrea envíos, coordina proveedores y genera reportes de aduanas. El comercio intrarregional en LATAM es solo el 14% — la eficiencia logística es clave.",
    icono: "🚛",
  },
  {
    sector: "Agricultura / Agtech",
    desc: "Planifica cultivos, genera documentos de cumplimiento fitosanitario, automatiza trámites de exportación y analiza datos climáticos para toma de decisiones.",
    icono: "🌾",
  },
  {
    sector: "Fintech y servicios financieros",
    desc: "Procesa documentos de crédito, automatiza onboarding de clientes, genera reportes de cumplimiento regulatorio y analiza riesgo crediticio.",
    icono: "💳",
  },
  {
    sector: "Construcción",
    desc: "Prepara licitaciones, documenta avance de obra, genera reportes de seguridad laboral y automatiza presupuestos de materiales.",
    icono: "🏗️",
  },
];

/* ── Datos de la tabla comparativa ── */
const COMPARATIVA = [
  {
    criterio: "Precio",
    aikaos: "Gratis (open source). Solo pagas API si usas modelos en la nube.",
    openclaw: "Gratis (open source). Requiere suscripción a un modelo (Claude Max recomendado: $100-200/mes).",
    cowork: "$20/mes (Pro) a $200/mes (Max 20x). Pago obligatorio.",
  },
  {
    criterio: "Privacidad de datos",
    aikaos: "Total. Todo corre en tu máquina. Tus archivos, conversaciones y datos nunca salen de tu computadora.",
    openclaw: "Parcial. Corre localmente pero envía todo a APIs externas. Sin GUI, difícil auditar qué se envía.",
    cowork: "Limitada. El procesamiento ocurre en servidores de Anthropic. Tu información pasa por sus sistemas.",
  },
  {
    criterio: "Interfaz",
    aikaos: "App de escritorio con GUI completa. Cualquier persona puede usarla sin conocimientos técnicos.",
    openclaw: "Sin GUI nativa. Se opera por línea de comandos o mensajes de WhatsApp/Telegram/Discord.",
    cowork: "App de escritorio (macOS y Windows). Interfaz pulida pero requiere conexión constante a internet.",
  },
  {
    criterio: "Modelos de IA",
    aikaos: "Cualquiera: Claude, GPT-4, DeepSeek, Ollama (local, gratis). Tú eliges.",
    openclaw: "Cualquiera, pero recomienda fuertemente Claude Max ($100-200/mes) para mejor rendimiento.",
    cowork: "Solo Claude (Anthropic). No puedes usar otros modelos.",
  },
  {
    criterio: "Funciona offline",
    aikaos: "Sí, con modelos locales (Ollama). Sin internet, sin problema.",
    openclaw: "Parcial. El gateway corre local pero necesita API externa para el modelo.",
    cowork: "No. Requiere conexión activa a internet durante toda la sesión.",
  },
  {
    criterio: "Límites de uso",
    aikaos: "Sin límites. Usa todo lo que necesites, cuando lo necesites.",
    openclaw: "Sin límites propios, pero heredas los límites del modelo que uses.",
    cowork: "Límites estrictos por ventanas de 5 horas. Cowork consume tokens mucho más rápido que el chat normal.",
  },
  {
    criterio: "Aprobación de acciones",
    aikaos: "Sí. Ves un plan claro antes de cada acción. Nada se ejecuta sin tu permiso.",
    openclaw: "Limitada. El agente puede actuar sin dirección explícita (caso documentado: creó un perfil de citas sin permiso del usuario).",
    cowork: "Parcial. Pide permiso para eliminar archivos, pero puede ejecutar otras acciones sin confirmación.",
  },
  {
    criterio: "Seguridad",
    aikaos: "Código abierto, auditable. Sin acceso a datos de terceros. Sin skills maliciosos de repositorios no verificados.",
    openclaw: "Riesgos documentados: Cisco encontró exfiltración de datos en skills de terceros. El repositorio de skills carece de verificación adecuada.",
    cowork: "Anthropic advierte explícitamente: no usar para cargas de trabajo reguladas. Sin logs de auditoría para actividad de Cowork.",
  },
  {
    criterio: "Idioma",
    aikaos: "Interfaz nativa en español. Expertos preconfigurados para LATAM con normativas locales (SAT, DIAN, AFIP).",
    openclaw: "Solo en inglés. Sin soporte nativo para español ni normativas latinoamericanas.",
    cowork: "Multiidioma en chat, pero la interfaz y documentación están en inglés.",
  },
  {
    criterio: "Configuración",
    aikaos: "Descarga el .dmg, arrastra a Aplicaciones, configura tu API key. 5 minutos.",
    openclaw: "Requiere Node 22+, CLI wizard, configuración de gateway, canales de mensajería. Nivel técnico medio-avanzado.",
    cowork: "Descarga la app, inicia sesión con tu cuenta de pago. Sencillo pero requiere suscripción.",
  },
  {
    criterio: "Cumplimiento regulatorio",
    aikaos: "GDPR/LGPD automático: ningún dato sale de tu máquina. Ideal para datos sensibles (médicos, legales, financieros).",
    openclaw: "Depende de tu configuración. Si usas APIs en la nube, los datos salen de tu máquina.",
    cowork: "Anthropic no ofrece cumplimiento HIPAA para Cowork. Ellos mismos advierten no usarlo para cargas reguladas.",
  },
];

export default async function Home() {
  const github = await getGithubData();
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10">
        <SiteNav stars={github.stars} />

        <main className="pb-24 pt-20">
          <div className="content-max-width px-6">
            {/* ── Hero ── */}
            <div className="animate-fade-up">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-[12px] font-semibold uppercase tracking-wider text-teal-700">
                <span className="mono">{">_"}</span> por AikaLabs
              </div>
              <h1 className="mb-4 max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
                Agentes IA preconfigurados para tu empresa.
              </h1>
              <p className="mb-6 max-w-4xl text-xl font-medium leading-relaxed text-gray-900/80">
                AikaOS convierte la inteligencia artificial en empleados
                digitales listos para trabajar. Elige un experto, instálalo en
                tu Mac y automatiza tareas reales — contratos, reportes
                fiscales, campañas, soporte y más.
              </p>
              <p className="mb-10 max-w-3xl text-[15px] leading-relaxed text-gray-500">
                Disponible para macOS con Apple Silicon (M1/M2/M3/M4).
                Windows y Linux en desarrollo.
              </p>
            </div>

            {/* ── CTA principal ── */}
            <div className="mb-10 flex flex-wrap items-center gap-4">
              <a
                href={github.downloads.macos}
                className="doc-button"
                rel="noreferrer"
                target="_blank"
              >
                Descargar para macOS (Apple Silicon)
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
              <div className="flex gap-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-[13px] text-gray-400">
                  Windows
                  <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-600">
                    Próximamente
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-[13px] text-gray-400">
                  Linux
                  <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-600">
                    Próximamente
                  </span>
                </span>
              </div>
            </div>

            {/* ── Video demo ── */}
            <div className="group relative mb-2 mt-8">
              <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl transition-transform duration-500 group-hover:scale-[1.01] ring-1 ring-black/5">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full block"
                >
                  <source src="/app-demo.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <p className="mb-16 text-center text-[13px] text-gray-500">
              Interfaz real de AikaOS — crea tareas, ejecuta skills y automatiza
              flujos desde tu escritorio.
            </p>

            <hr />

            {/* ══════════════════════════════════════════════════════════
                ── POR QUÉ LOCAL-FIRST ──
                ══════════════════════════════════════════════════════════ */}
            <section id="local-first" className="py-12">
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                ¿Por qué correr tu IA en local?
              </h2>
              <p className="mb-10 max-w-3xl text-base leading-relaxed text-gray-700">
                La mayoría de las herramientas de IA procesan tus datos en
                servidores externos. Eso significa que tus conversaciones,
                archivos y estrategias de negocio pasan por manos de terceros.
                AikaOS funciona diferente: todo corre en tu propia computadora.
                Esto no es solo una preferencia técnica — es una ventaja
                competitiva real para tu empresa.
              </p>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Privacidad */}
                <div className="rounded-2xl border border-teal-100 bg-teal-50/30 p-6 ring-1 ring-teal-100/50">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-lg">
                    🔒
                  </div>
                  <h3 className="mb-2 text-[15px] font-bold">
                    Privacidad total de tus datos
                  </h3>
                  <p className="text-[14px] leading-relaxed text-gray-700">
                    Tus conversaciones, archivos y datos de negocio nunca salen
                    de tu computadora. No hay servidores intermediarios, no hay
                    terceros con acceso a tu información. En abril de 2023,
                    empleados de Samsung filtraron código confidencial al usar
                    ChatGPT — con AikaOS eso es imposible porque nada se envía
                    a la nube.
                  </p>
                </div>

                {/* Costo cero */}
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-6 ring-1 ring-emerald-100/50">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-lg">
                    💰
                  </div>
                  <h3 className="mb-2 text-[15px] font-bold">
                    Cero costo de infraestructura
                  </h3>
                  <p className="text-[14px] leading-relaxed text-gray-700">
                    Con modelos locales como Ollama, tu costo de infraestructura
                    es literalmente $0. No hay factura mensual de servidores, no
                    hay sorpresas de consumo, no hay &quot;quemé $300 probando
                    algo&quot;. Tu Mac ya tiene el hardware necesario — solo
                    necesitas descargar AikaOS y empezar.
                  </p>
                </div>

                {/* Sin vendor lock-in */}
                <div className="rounded-2xl border border-violet-100 bg-violet-50/30 p-6 ring-1 ring-violet-100/50">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-lg">
                    🔓
                  </div>
                  <h3 className="mb-2 text-[15px] font-bold">
                    Sin dependencia de un proveedor
                  </h3>
                  <p className="text-[14px] leading-relaxed text-gray-700">
                    Elige el modelo que quieras: Claude, GPT-4, DeepSeek, Llama,
                    Mistral o cualquier modelo local. Si un proveedor sube
                    precios o cambia sus términos, simplemente cambias a otro.
                    Tu trabajo, tus skills y tus automatizaciones siguen
                    funcionando exactamente igual.
                  </p>
                </div>

                {/* Cumplimiento automático */}
                <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-6 ring-1 ring-blue-100/50">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-lg">
                    📋
                  </div>
                  <h3 className="mb-2 text-[15px] font-bold">
                    Cumplimiento regulatorio automático
                  </h3>
                  <p className="text-[14px] leading-relaxed text-gray-700">
                    Si tus datos nunca salen de tu máquina, cumples
                    automáticamente con GDPR, LGPD (Brasil), Ley Federal de
                    Protección de Datos (México) y regulaciones similares. No
                    necesitas contratos de procesamiento de datos con terceros
                    ni auditorías de proveedores cloud. Ideal para despachos
                    legales, clínicas y firmas financieras.
                  </p>
                </div>

                {/* Sin límites */}
                <div className="rounded-2xl border border-amber-100 bg-amber-50/30 p-6 ring-1 ring-amber-100/50">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-lg">
                    ♾️
                  </div>
                  <h3 className="mb-2 text-[15px] font-bold">
                    Sin límites de uso
                  </h3>
                  <p className="text-[14px] leading-relaxed text-gray-700">
                    Las herramientas cloud tienen límites por ventanas de tiempo
                    — Claude Cowork, por ejemplo, opera en ventanas de 5 horas
                    y las tareas agenticas consumen tokens mucho más rápido que
                    el chat normal. Con AikaOS y un modelo local, puedes
                    trabajar todo el día sin interrupciones, sin esperar a que
                    se renueve tu cuota.
                  </p>
                </div>

                {/* Funciona offline */}
                <div className="rounded-2xl border border-pink-100 bg-pink-50/30 p-6 ring-1 ring-pink-100/50">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-pink-100 text-lg">
                    📡
                  </div>
                  <h3 className="mb-2 text-[15px] font-bold">
                    Funciona sin internet
                  </h3>
                  <p className="text-[14px] leading-relaxed text-gray-700">
                    Con un modelo local instalado, AikaOS funciona completamente
                    offline. Esto es especialmente valioso en Latinoamérica,
                    donde más de la mitad de los hogares rurales no tienen
                    acceso confiable a internet. Tu asistente de IA no depende
                    de la calidad de tu conexión.
                  </p>
                </div>

                {/* Control total */}
                <div className="rounded-2xl border border-gray-200 bg-gray-50/30 p-6 ring-1 ring-gray-100/50">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-lg">
                    🛠️
                  </div>
                  <h3 className="mb-2 text-[15px] font-bold">
                    Control total sobre tu herramienta
                  </h3>
                  <p className="text-[14px] leading-relaxed text-gray-700">
                    AikaOS es open source. Puedes inspeccionar cada línea de
                    código, modificar lo que necesites, crear tus propios skills
                    y adaptar la herramienta a tu flujo de trabajo exacto. No
                    dependes de que una empresa decida agregar la función que
                    necesitas — la construyes tú mismo o la pides a la
                    comunidad.
                  </p>
                </div>

                {/* Sin suscripción */}
                <div className="rounded-2xl border border-orange-100 bg-orange-50/30 p-6 ring-1 ring-orange-100/50">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-lg">
                    🚫
                  </div>
                  <h3 className="mb-2 text-[15px] font-bold">
                    Adiós a la fatiga de suscripciones
                  </h3>
                  <p className="text-[14px] leading-relaxed text-gray-700">
                    No más pagos mensuales que se acumulan. AikaOS es gratis
                    para siempre. Si quieres usar modelos en la nube como Claude
                    o GPT-4, pagas solo por lo que consumes en API — no una
                    suscripción fija que te cobra aunque no uses la herramienta.
                  </p>
                </div>

                {/* Casos reales */}
                <div className="rounded-2xl border border-red-100 bg-red-50/30 p-6 ring-1 ring-red-100/50">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-lg">
                    ⚠️
                  </div>
                  <h3 className="mb-2 text-[15px] font-bold">
                    Los riesgos del cloud son reales
                  </h3>
                  <p className="text-[14px] leading-relaxed text-gray-700">
                    En marzo de 2023, un bug de ChatGPT expuso títulos de
                    conversaciones e información de pago de otros usuarios. En
                    abril de 2023, Samsung prohibió ChatGPT internamente después
                    de que empleados subieran código fuente confidencial. Estos
                    no son escenarios hipotéticos — son incidentes documentados
                    que afectaron a empresas reales.
                  </p>
                </div>
              </div>
            </section>

            <hr />

            {/* ── Instalación paso a paso ── */}
            <section id="instalacion" className="py-12">
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                Instalación en macOS (Apple Silicon)
              </h2>
              <p className="mb-10 max-w-3xl text-base leading-relaxed text-gray-700">
                Sigue estos pasos para tener AikaOS funcionando en tu Mac en
                menos de 5 minutos.
              </p>

              <div className="space-y-8">
                {/* Paso 1 */}
                <div className="flex gap-6">
                  <div className="step-circle shrink-0">1</div>
                  <div className="space-y-3">
                    <h3 className="text-base font-bold">
                      Descarga el archivo .dmg
                    </h3>
                    <p className="text-[15px] text-gray-700">
                      Haz clic en el botón de descarga de arriba o ve
                      directamente a la{" "}
                      <a
                        href={github.releaseUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-teal-700 underline decoration-teal-300 underline-offset-4 transition hover:decoration-teal-600"
                      >
                        página de releases en GitHub
                      </a>
                      . Busca el archivo que termina en{" "}
                      <code className="mono rounded bg-gray-100 px-1.5 py-0.5 text-[13px]">
                        _aarch64.dmg
                      </code>{" "}
                      (Apple Silicon).
                    </p>
                  </div>
                </div>

                {/* Paso 2 */}
                <div className="flex gap-6">
                  <div className="step-circle shrink-0">2</div>
                  <div className="space-y-3">
                    <h3 className="text-base font-bold">
                      Abre el .dmg y arrastra a Aplicaciones
                    </h3>
                    <p className="text-[15px] text-gray-700">
                      Haz doble clic en el archivo descargado. Se abrirá una
                      ventana con el ícono de AikaOS. Arrástralo a la carpeta{" "}
                      <strong>Aplicaciones</strong>.
                    </p>
                  </div>
                </div>

                {/* Paso 3 */}
                <div className="flex gap-6">
                  <div className="step-circle shrink-0">3</div>
                  <div className="space-y-3">
                    <h3 className="text-base font-bold">
                      Permite la ejecución en Seguridad
                    </h3>
                    <p className="text-[15px] text-gray-700">
                      La primera vez que abras AikaOS, macOS puede mostrar un
                      aviso de seguridad porque la app no está firmada con una
                      cuenta de desarrollador de Apple. Para abrirla:
                    </p>
                    <ol className="list-inside list-decimal space-y-2 text-[15px] text-gray-700">
                      <li>
                        Haz clic derecho (o Control + clic) sobre AikaOS en
                        Aplicaciones y selecciona <strong>Abrir</strong>.
                      </li>
                      <li>
                        En el diálogo que aparece, haz clic en{" "}
                        <strong>Abrir</strong> de nuevo.
                      </li>
                      <li>
                        Si no aparece la opción, ve a{" "}
                        <strong>
                          Ajustes del Sistema → Privacidad y Seguridad
                        </strong>{" "}
                        y haz clic en <strong>Abrir de todos modos</strong>.
                      </li>
                    </ol>
                    <p className="text-[13px] text-gray-500">
                      Solo necesitas hacer esto una vez. Las siguientes veces
                      abrirá normalmente.
                    </p>
                  </div>
                </div>

                {/* Paso 4 */}
                <div className="flex gap-6">
                  <div className="step-circle shrink-0">4</div>
                  <div className="space-y-3">
                    <h3 className="text-base font-bold">
                      Configura tu API key
                    </h3>
                    <p className="text-[15px] text-gray-700">
                      AikaOS necesita una clave de API para conectarse a un
                      modelo de lenguaje. Ve a{" "}
                      <strong>Settings → Model Provider</strong> y agrega tu
                      clave de Anthropic (Claude), OpenAI (GPT-4) o el proveedor
                      que prefieras.
                    </p>
                    <p className="text-[13px] text-gray-500">
                      También puedes usar modelos locales con Ollama sin
                      necesidad de API key.
                    </p>
                  </div>
                </div>

                {/* Paso 5 */}
                <div className="flex gap-6">
                  <div className="step-circle shrink-0">5</div>
                  <div className="space-y-3">
                    <h3 className="text-base font-bold">
                      Elige un experto y empieza a trabajar
                    </h3>
                    <p className="text-[15px] text-gray-700">
                      Ve a la pestaña <strong>Skills</strong>, haz clic en{" "}
                      <strong>Aplicar Plantilla</strong> y selecciona el experto
                      que necesitas (Legal, Contabilidad, Marketing, etc.). Se
                      instalan skills y comandos automáticamente. Escribe tu
                      primera tarea en lenguaje natural.
                    </p>
                  </div>
                </div>
              </div>

              {/* Requisitos */}
              <div className="mt-12 rounded-2xl border border-gray-100 bg-gray-50/60 p-6">
                <h3 className="mb-3 text-[15px] font-bold">
                  Requisitos del sistema
                </h3>
                <ul className="space-y-2 text-[14px] text-gray-700">
                  <li>
                    <strong>macOS:</strong> 12.0 (Monterey) o superior
                  </li>
                  <li>
                    <strong>Procesador:</strong> Apple Silicon (M1, M2, M3, M4)
                  </li>
                  <li>
                    <strong>RAM:</strong> 8 GB mínimo (16 GB recomendado para
                    modelos locales)
                  </li>
                  <li>
                    <strong>Disco:</strong> 500 MB para la aplicación
                  </li>
                  <li>
                    <strong>Conexión a internet:</strong> Solo si usas modelos en
                    la nube (Claude, GPT-4)
                  </li>
                </ul>
              </div>
            </section>

            <hr />

            {/* ── Expertos preconfigurados ── */}
            <section id="expertos" className="py-12">
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                10 expertos preconfigurados
              </h2>
              <p className="mb-10 max-w-3xl text-base leading-relaxed text-gray-700">
                Cada experto incluye skills especializados, comandos listos para
                usar y servidores MCP sugeridos. Instálalos con un clic desde la
                pestaña Skills.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {EXPERTOS.map((exp) => (
                  <div
                    key={exp.id}
                    className={`feature-card ${exp.color}`}
                  >
                    <span
                      className={`mb-3 inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${exp.badge}`}
                    >
                      {exp.audiencia.split(",")[0]}
                    </span>
                    <h4 className="mb-2 text-[15px] font-bold">
                      {exp.nombre}
                    </h4>
                    <p className="text-[14px] leading-relaxed text-gray-700">
                      {exp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <hr />

            {/* ── Funciones ── */}
            <section id="funciones" className="py-12">
              <h2 className="mb-10 text-2xl font-bold md:text-3xl">
                Lo que puedes hacer con AikaOS
              </h2>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                <div className="feature-card border-teal-100 bg-white/90 ring-1 ring-teal-100/60">
                  <span className="mb-3 inline-flex rounded-full bg-teal-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-teal-700">
                    Productividad
                  </span>
                  <h4 className="mb-2 text-[15px] font-bold">
                    Multitarea entre proyectos
                  </h4>
                  <p className="text-[15px] leading-relaxed text-gray-700">
                    Ejecuta múltiples hilos en paralelo y cambia de contexto
                    entre tareas de navegador y archivos locales al instante.
                  </p>
                </div>
                <div className="feature-card border-violet-100 bg-white/90 ring-1 ring-violet-100/60">
                  <span className="mb-3 inline-flex rounded-full bg-violet-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-violet-700">
                    Automatización
                  </span>
                  <h4 className="mb-2 text-[15px] font-bold">
                    Tareas programadas
                  </h4>
                  <p className="text-[15px] leading-relaxed text-gray-700">
                    Ejecuta cualquier prompt en un horario o actívalo
                    automáticamente. Configúralo una vez y deja que se encargue
                    solo.
                  </p>
                </div>
                <div className="feature-card border-emerald-100 bg-white/90 ring-1 ring-emerald-100/60">
                  <span className="mb-3 inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-700">
                    Reutilización
                  </span>
                  <h4 className="mb-2 text-[15px] font-bold">
                    Skills compartibles
                  </h4>
                  <p className="text-[15px] leading-relaxed text-gray-700">
                    Convierte cualquier flujo complejo en un skill reutilizable.
                    Compártelo con tu equipo para que lo ejecuten con un clic.
                  </p>
                </div>
                <div className="feature-card border-amber-100 bg-white/90 ring-1 ring-amber-100/60">
                  <span className="mb-3 inline-flex rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-700">
                    Extensible
                  </span>
                  <h4 className="mb-2 text-[15px] font-bold">
                    Servidores MCP
                  </h4>
                  <p className="text-[15px] leading-relaxed text-gray-700">
                    Conecta herramientas externas — navegador, bases de datos,
                    APIs — mediante el protocolo MCP. Sin código adicional.
                  </p>
                </div>
                <div className="feature-card border-sky-100 bg-white/90 ring-1 ring-sky-100/60">
                  <span className="mb-3 inline-flex rounded-full bg-sky-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-sky-700">
                    Local-first
                  </span>
                  <h4 className="mb-2 text-[15px] font-bold">
                    Privacidad total
                  </h4>
                  <p className="text-[15px] leading-relaxed text-gray-700">
                    Todo corre en tu máquina. Tus datos nunca salen de tu
                    escritorio a menos que tú lo decidas.
                  </p>
                </div>
                <div className="feature-card border-pink-100 bg-white/90 ring-1 ring-pink-100/60">
                  <span className="mb-3 inline-flex rounded-full bg-pink-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-pink-700">
                    LATAM
                  </span>
                  <h4 className="mb-2 text-[15px] font-bold">
                    Hecho para Latinoamérica
                  </h4>
                  <p className="text-[15px] leading-relaxed text-gray-700">
                    Interfaz en español, expertos que entienden normativas
                    locales (SAT, DIAN, AFIP) y flujos adaptados a la región.
                  </p>
                </div>
              </div>
            </section>

            <hr />

            {/* ══════════════════════════════════════════════════════════
                ── COMPARATIVA VS COMPETENCIA ──
                ══════════════════════════════════════════════════════════ */}
            <section id="comparativa" className="py-12">
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                AikaOS vs la competencia
              </h2>
              <p className="mb-4 max-w-3xl text-base leading-relaxed text-gray-700">
                Existen otras herramientas de IA agentica en el mercado. Aquí
                comparamos AikaOS con las dos más populares para que puedas
                tomar una decisión informada.
              </p>

              {/* Resumen de competidores */}
              <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-orange-100 bg-orange-50/30 p-6">
                  <h3 className="mb-2 text-[15px] font-bold text-orange-800">
                    OpenClaw (225k estrellas en GitHub)
                  </h3>
                  <p className="text-[14px] leading-relaxed text-gray-700">
                    Asistente personal open source creado por Peter Steinberger.
                    Se opera principalmente por mensajería (WhatsApp, Telegram,
                    Discord). Siempre encendido, con 3,000+ skills de la
                    comunidad. Sin embargo, tiene problemas de seguridad
                    documentados: Cisco encontró que skills de terceros
                    realizaban exfiltración de datos sin que el usuario lo
                    supiera. Un caso documentado mostró que el agente creó un
                    perfil de citas sin permiso del usuario. Requiere Node 22+
                    y configuración técnica avanzada.
                  </p>
                </div>
                <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-6">
                  <h3 className="mb-2 text-[15px] font-bold text-purple-800">
                    Claude Cowork (por Anthropic)
                  </h3>
                  <p className="text-[14px] leading-relaxed text-gray-700">
                    Herramienta agentica de escritorio de Anthropic. Interfaz
                    pulida, acceso directo a archivos locales, sub-agentes en
                    paralelo, conectores para Google Drive, Gmail, DocuSign.
                    Cuesta de $20 a $200/mes. Requiere conexión a internet
                    constante — todo el procesamiento ocurre en servidores de
                    Anthropic. Límites de uso por ventanas de 5 horas. Anthropic
                    advierte explícitamente: &quot;No usar para cargas de trabajo
                    reguladas&quot;. Sin logs de auditoría para actividad de
                    Cowork.
                  </p>
                </div>
              </div>

              {/* Tabla comparativa */}
              <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full min-w-[800px] text-left text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-100 bg-gray-50/80">
                      <th className="px-4 py-3 font-bold text-gray-900">
                        Criterio
                      </th>
                      <th className="px-4 py-3 font-bold text-teal-700">
                        AikaOS
                      </th>
                      <th className="px-4 py-3 font-bold text-orange-700">
                        OpenClaw
                      </th>
                      <th className="px-4 py-3 font-bold text-purple-700">
                        Claude Cowork
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARATIVA.map((row, i) => (
                      <tr
                        key={row.criterio}
                        className={
                          i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                        }
                      >
                        <td className="border-t border-gray-100 px-4 py-3 font-semibold text-gray-900 align-top">
                          {row.criterio}
                        </td>
                        <td className="border-t border-gray-100 px-4 py-3 text-gray-700 align-top">
                          {row.aikaos}
                        </td>
                        <td className="border-t border-gray-100 px-4 py-3 text-gray-700 align-top">
                          {row.openclaw}
                        </td>
                        <td className="border-t border-gray-100 px-4 py-3 text-gray-700 align-top">
                          {row.cowork}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Resumen */}
              <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50/50 p-6">
                <h3 className="mb-3 text-[15px] font-bold text-teal-800">
                  En resumen: ¿por qué AikaOS?
                </h3>
                <ul className="space-y-2 text-[14px] leading-relaxed text-gray-700">
                  <li>
                    <strong>vs OpenClaw:</strong> AikaOS tiene interfaz gráfica
                    completa (no necesitas terminal ni WhatsApp), flujo de
                    aprobación antes de cada acción (OpenClaw puede actuar sin
                    permiso), y no depende de un repositorio de skills sin
                    verificar que ha tenido problemas de seguridad documentados.
                  </li>
                  <li>
                    <strong>vs Claude Cowork:</strong> AikaOS es gratis y open
                    source (Cowork cuesta $20-200/mes), funciona offline (Cowork
                    requiere internet constante), no tiene límites de uso
                    (Cowork tiene ventanas de 5 horas), tus datos nunca salen de
                    tu máquina (Cowork procesa en servidores de Anthropic), y
                    puedes usar cualquier modelo de IA (Cowork solo funciona con
                    Claude).
                  </li>
                  <li>
                    <strong>Exclusivo de AikaOS:</strong> Interfaz nativa en
                    español, expertos preconfigurados para industrias
                    latinoamericanas, normativas locales integradas (SAT, DIAN,
                    AFIP), y un modelo de servicio on-premise diseñado para
                    empresas de la región.
                  </li>
                </ul>
              </div>
            </section>

            <hr />

            {/* ── Sectores objetivo (expandido) ── */}
            <section id="sectores" className="py-12">
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                Diseñado para estos sectores
              </h2>
              <p className="mb-10 max-w-3xl text-base leading-relaxed text-gray-700">
                AikaOS se adapta a las necesidades específicas de cada industria
                en Latinoamérica. Desde despachos legales hasta clínicas
                médicas, desde logística hasta agricultura — estos son los
                sectores que ya pueden beneficiarse.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {SECTORES.map((c) => (
                  <div key={c.sector} className="feature-card bg-white/90">
                    <div className="mb-3 text-2xl">{c.icono}</div>
                    <h4 className="mb-2 text-[15px] font-bold">{c.sector}</h4>
                    <p className="text-[14px] leading-relaxed text-gray-700">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <hr />

            {/* ── FAQ ── */}
            <section id="faq" className="py-12">
              <h2 className="mb-10 text-2xl font-bold md:text-3xl">
                Preguntas frecuentes
              </h2>
              <div className="space-y-12">
                <div>
                  <h4 className="mb-2 text-[15px] font-bold">
                    ¿Qué diferencia hay entre AikaOS y un chatbot normal?
                  </h4>
                  <p className="text-[15px] leading-relaxed text-gray-700">
                    Un chatbot te da respuestas de texto. AikaOS puede ejecutar
                    acciones reales: crear archivos, editar documentos, navegar
                    la web y correr comandos en tu máquina — siempre con tu
                    aprobación.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-[15px] font-bold">
                    ¿Es gratis?
                  </h4>
                  <p className="text-[15px] leading-relaxed text-gray-700">
                    Sí. AikaOS es open source y puedes usarlo gratis con modelos
                    locales. Solo pagas por uso de API si decides conectar
                    modelos en la nube como Claude o GPT-4.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-[15px] font-bold">
                    ¿Solo funciona en Mac?
                  </h4>
                  <p className="text-[15px] leading-relaxed text-gray-700">
                    Actualmente AikaOS está optimizado para macOS con
                    procesadores Apple Silicon (M1, M2, M3, M4). Las versiones
                    para Windows y Linux están en desarrollo activo y se
                    anunciarán próximamente.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-[15px] font-bold">
                    ¿Mis datos están seguros?
                  </h4>
                  <p className="text-[15px] leading-relaxed text-gray-700">
                    AikaOS corre localmente en tu computadora. No puede acceder
                    a archivos ni ejecutar comandos sin tu permiso. Ves un plan
                    claro antes de cada acción. A diferencia de herramientas
                    cloud, tus datos nunca pasan por servidores de terceros.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-[15px] font-bold">
                    ¿Funciona con normativas de mi país?
                  </h4>
                  <p className="text-[15px] leading-relaxed text-gray-700">
                    Los expertos preconfigurados incluyen conocimiento de
                    normativas locales (SAT en México, DIAN en Colombia, AFIP en
                    Argentina). Puedes personalizar los skills para tu
                    jurisdicción específica.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-[15px] font-bold">
                    ¿Puedo compartir automatizaciones con mi equipo?
                  </h4>
                  <p className="text-[15px] leading-relaxed text-gray-700">
                    Sí. Empaqueta cualquier flujo como un skill y compártelo.
                    Tus compañeros lo instalan y lo ejecutan en sus propias
                    máquinas al instante.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-[15px] font-bold">
                    ¿En qué se diferencia de OpenClaw o Claude Cowork?
                  </h4>
                  <p className="text-[15px] leading-relaxed text-gray-700">
                    AikaOS combina lo mejor de ambos mundos: es open source y
                    local-first como OpenClaw, pero con una interfaz gráfica
                    completa como Cowork. A diferencia de OpenClaw, tiene flujo
                    de aprobación obligatorio antes de cada acción. A diferencia
                    de Cowork, es gratis, funciona offline, no tiene límites de
                    uso y tus datos nunca salen de tu máquina. Además, es el
                    único con interfaz nativa en español y expertos
                    preconfigurados para Latinoamérica.
                  </p>
                </div>
              </div>
            </section>

            <hr />

            {/* ── CTA final ── */}
            <section className="py-12 text-center">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                Empieza a automatizar hoy
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-[15px] leading-relaxed text-gray-700">
                Descarga AikaOS en tu Mac, elige un experto y envía tu primera
                tarea. Sin registro, sin tarjeta de crédito, sin complicaciones.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={github.downloads.macos}
                  className="doc-button"
                  rel="noreferrer"
                  target="_blank"
                >
                  Descargar para macOS (Apple Silicon)
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
                <a
                  href="/enterprise"
                  className="doc-button-dark"
                >
                  Ver precios para empresas
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </section>

            <SiteFooter />
          </div>
        </main>
      </div>
    </div>
  );
}
