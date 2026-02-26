const STEPS = [
  {
    number: "1",
    title: "Descarga e instala AikaOS",
    desc: 'Descarga el archivo .dmg desde la sección de Descarga. Abre el archivo y arrastra AikaOS a tu carpeta de Aplicaciones. La primera vez que lo abras, macOS te pedirá permiso — haz clic en "Abrir".',
  },
  {
    number: "2",
    title: "Configura tu modelo de IA",
    desc: "AikaOS funciona con tu propio modelo (BYOM). Puedes usar una API key de Anthropic (Claude), OpenAI (GPT-4), DeepSeek, Google Gemini, o instalar Ollama para modelos locales que corren 100% en tu máquina sin internet.",
  },
  {
    number: "3",
    title: "Conecta tu API key o modelo local",
    desc: 'Abre AikaOS y ve a Configuración > Modelo. Si usas una API key, pégala en el campo correspondiente. Si usas Ollama, asegúrate de que esté corriendo (ollama serve) y AikaOS lo detectará automáticamente.',
  },
  {
    number: "4",
    title: "Activa los expertos preconfigurados",
    desc: "Ve a la sección de Expertos en este portal para ver la guía completa de activación. Cada experto incluye skills especializados, comandos listos para usar y servidores MCP configurados.",
  },
  {
    number: "5",
    title: "Verifica que todo funcione",
    desc: 'Abre una nueva sesión en AikaOS y escribe "Hola, ¿qué puedes hacer?". El agente debería responder con una lista de sus capacidades. Si algo no funciona, contacta a soporte.',
  },
];

export default function SetupPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-medium text-[#1A1A1A] font-nunito tracking-tight mb-2 drop-shadow-sm">
        Guía de instalación
      </h1>
      <p className="text-slate-600 font-medium mb-10">
        Sigue estos pasos para tener AikaOS funcionando en tu computadora.
      </p>

      <div className="space-y-6">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="bg-white/40 backdrop-blur-2xl rounded-[28px] border border-white/60 p-6 flex gap-5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.8)]"
          >
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-[0_8px_16px_rgba(0,0,0,0.15)]">
              {step.number}
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 font-nunito mb-2">
                {step.title}
              </h3>
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
