const STEPS = [
  {
    number: "1",
    icon: "solar:download-minimalistic-linear",
    title: "Descarga e instala AikaOS",
    desc: 'Descarga el archivo .dmg desde la sección de Descarga en este portal. Abre el archivo y arrastra AikaOS a tu carpeta de Aplicaciones.',
  },
  {
    number: "2",
    icon: "solar:shield-check-linear",
    title: "Autoriza la app en macOS",
    desc: 'Antes de abrir AikaOS por primera vez, abre la Terminal y ejecuta este comando:\n\nxattr -cr /Applications/AikaOS.app\n\nEsto solo se hace una vez. Es necesario porque la app aún no está firmada con Apple Developer. Después de ejecutarlo, abre AikaOS normalmente.',
  },
  {
    number: "3",
    icon: "solar:cpu-bolt-linear",
    title: "Configura tu modelo de IA",
    desc: "AikaOS funciona con tu propio modelo (BYOM). Puedes usar una API key de Anthropic (Claude), OpenAI (GPT-4), DeepSeek, Google Gemini, o instalar Ollama para modelos locales que corren 100% en tu máquina sin internet.",
  },
  {
    number: "4",
    icon: "solar:key-linear",
    title: "Conecta tu API key o modelo local",
    desc: "Abre AikaOS y ve a Configuración > Modelo. Si usas una API key, pégala en el campo correspondiente. Si prefieres un modelo local, instala Ollama desde ollama.com, descarga el modelo que prefieras y AikaOS lo detectará automáticamente.",
  },
  {
    number: "5",
    icon: "solar:users-group-rounded-linear",
    title: "Activa los expertos preconfigurados",
    desc: "Tu plan incluye 25 expertos especializados para diferentes industrias. Ve a la sección de Expertos en este portal para ver la lista completa. Cada experto incluye skills especializados, comandos listos para usar y servidores MCP configurados.",
  },
  {
    number: "6",
    icon: "solar:check-circle-linear",
    title: "Verifica que todo funcione",
    desc: 'Abre una nueva sesión en AikaOS y escribe "Hola, ¿qué puedes hacer?". El agente debería responder con una lista de sus capacidades. Si algo no funciona, usa el asistente en la página principal del portal para resolver tus dudas.',
  },
];

const DEPENDENCIES = [
  {
    name: "Node.js",
    what: "Entorno de ejecución necesario para AikaOS.",
    url: "https://nodejs.org",
    command: "# Descarga desde nodejs.org o ejecuta:\ncurl -fsSL https://fnm.vercel.app/install | bash && fnm install 20",
  },
  {
    name: "pnpm",
    what: "Gestor de paquetes que usa AikaOS.",
    url: "https://pnpm.io",
    command: "npm install -g pnpm",
  },
  {
    name: "Rust",
    what: "Necesario para compilar la app de escritorio (Tauri).",
    url: "https://rustup.rs",
    command: "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh",
  },
  {
    name: "Tauri CLI",
    what: "Herramienta para construir la app de escritorio.",
    url: "https://tauri.app",
    command: "cargo install tauri-cli",
  },
  {
    name: "OpenCode",
    what: "Motor de agentes IA que usa AikaOS por debajo.",
    url: "https://opencode.ai",
    command: "# Descarga desde opencode.ai\n# Verifica con:\nopencode --version",
  },
  {
    name: "Ollama (opcional)",
    what: "Para correr modelos de IA 100% local, sin internet.",
    url: "https://ollama.com",
    command: "curl -fsSL https://ollama.com/install.sh | sh\nollama pull llama3\nollama serve",
  },
];

export default function SetupPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-medium text-[#1A1A1A] font-nunito tracking-tight mb-2 drop-shadow-sm">
        Guía de instalación
      </h1>
      <p className="text-slate-600 font-medium mb-10">
        Sigue estos 6 pasos para tener AikaOS funcionando en tu computadora.
        No necesitas experiencia técnica.
      </p>

      {/* Friendly 5 steps */}
      <div className="space-y-6 mb-16">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="bg-white/40 backdrop-blur-2xl rounded-[28px] border border-white/60 p-6 flex gap-5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.8)]"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 flex items-center justify-center shrink-0 shadow-sm">
              {/* @ts-expect-error iconify-icon is a web component */}
              <iconify-icon
                icon={step.icon}
                class="text-2xl text-slate-700"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-white bg-[#1A1A1A] w-6 h-6 rounded-lg flex items-center justify-center shadow-sm">
                  {step.number}
                </span>
                <h3 className="font-semibold text-slate-900 font-nunito">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dependencies mini-guide */}
      <div>
        <h2 className="text-xl font-medium text-[#1A1A1A] font-nunito tracking-tight mb-2 drop-shadow-sm">
          Dependencias necesarias
        </h2>
        <p className="text-sm text-slate-600 mb-6">
          Si vas a instalar desde el código fuente, necesitas estas herramientas.
          Copia y pega cada comando en tu Terminal.
        </p>

        <div className="space-y-4">
          {DEPENDENCIES.map((dep) => (
            <div
              key={dep.name}
              className="bg-white/40 backdrop-blur-2xl rounded-[22px] border border-white/60 p-5 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.8)]"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-slate-900 text-[15px]">
                  {dep.name}
                </h3>
                <a
                  href={dep.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-500 hover:text-slate-800 transition-colors"
                >
                  {dep.url.replace("https://", "")} &rarr;
                </a>
              </div>
              <p className="text-sm text-slate-600 mb-3">{dep.what}</p>
              <pre className="bg-slate-800 text-slate-200 text-[13px] leading-relaxed px-4 py-3 rounded-xl overflow-x-auto font-mono select-all">
                {dep.command}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
