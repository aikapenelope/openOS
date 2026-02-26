const STEPS = [
  {
    number: "1",
    icon: "solar:download-minimalistic-linear",
    title: "Descarga e instala AikaOS",
    desc: 'Descarga el archivo .dmg desde la sección de Descarga en este portal. Abre el archivo y arrastra AikaOS a tu carpeta de Aplicaciones. La primera vez que lo abras, macOS te pedirá permiso — haz clic en "Abrir".',
  },
  {
    number: "2",
    icon: "solar:cpu-bolt-linear",
    title: "Configura tu modelo de IA",
    desc: "AikaOS funciona con tu propio modelo (BYOM). Puedes usar una API key de Anthropic (Claude), OpenAI (GPT-4), DeepSeek, Google Gemini, o instalar Ollama para modelos locales que corren 100% en tu máquina sin internet.",
  },
  {
    number: "3",
    icon: "solar:key-linear",
    title: "Conecta tu API key o modelo local",
    desc: "Abre AikaOS y ve a Configuración > Modelo. Si usas una API key, pégala en el campo correspondiente. Si prefieres un modelo local, instala Ollama desde ollama.com, descarga el modelo que prefieras y AikaOS lo detectará automáticamente.",
  },
  {
    number: "4",
    icon: "solar:users-group-rounded-linear",
    title: "Activa los expertos preconfigurados",
    desc: "Tu plan incluye 25 expertos especializados para diferentes industrias. Ve a la sección de Expertos en este portal para ver la lista completa. Cada experto incluye skills especializados, comandos listos para usar y servidores MCP configurados.",
  },
  {
    number: "5",
    icon: "solar:check-circle-linear",
    title: "Verifica que todo funcione",
    desc: 'Abre una nueva sesión en AikaOS y escribe "Hola, ¿qué puedes hacer?". El agente debería responder con una lista de sus capacidades. Si algo no funciona, usa el asistente en la página principal del portal para resolver tus dudas.',
  },
];

export default function SetupPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-medium text-[#1A1A1A] font-nunito tracking-tight mb-2 drop-shadow-sm">
        Guía de instalación
      </h1>
      <p className="text-slate-600 font-medium mb-10">
        Sigue estos 5 pasos para tener AikaOS funcionando en tu computadora.
        No necesitas experiencia técnica.
      </p>

      <div className="space-y-6">
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
    </div>
  );
}
