const STEPS = [
  {
    number: "1",
    title: "Requisitos previos",
    desc: "Antes de empezar, asegúrate de tener instalado lo siguiente en tu Mac:",
    code: `# Verifica que tienes Node.js (v18+)
node --version

# Instala pnpm si no lo tienes
npm install -g pnpm

# Instala Rust (necesario para Tauri)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Instala Tauri CLI
cargo install tauri-cli

# Instala OpenCode CLI
# Descárgalo desde: https://opencode.ai
# Verifica que esté en tu PATH:
opencode --version`,
  },
  {
    number: "2",
    title: "Clona el repositorio e instala dependencias",
    desc: "Descarga el código fuente de AikaOS y sus dependencias:",
    code: `# Clona el repositorio
git clone https://github.com/aikapenelope/openOS.git
cd openOS

# Instala todas las dependencias
pnpm install`,
  },
  {
    number: "3",
    title: "Ejecuta AikaOS en modo escritorio (Tauri)",
    desc: "Esto compila la app de escritorio con Tauri + SolidJS y la abre como aplicación nativa:",
    code: `# Desde la raíz del proyecto:
pnpm dev

# Esto ejecuta:
# 1. Compila el UI (packages/app) con Vite
# 2. Inicia el shell de escritorio (packages/desktop) con Tauri
# 3. Abre la ventana de AikaOS`,
  },
  {
    number: "4",
    title: "Alternativa: solo el UI web (sin Tauri)",
    desc: "Si no necesitas la app de escritorio, puedes correr solo la interfaz web:",
    code: `# Solo el UI web (sin Tauri)
pnpm dev:ui

# Abre http://localhost:5173 en tu navegador`,
  },
  {
    number: "5",
    title: "Configura tu modelo de IA",
    desc: "AikaOS funciona con tu propio modelo (BYOM). Tienes dos opciones:",
    code: `# Opción A: API en la nube
# Abre AikaOS > Configuración > Modelo
# Pega tu API key de: Claude, GPT-4, DeepSeek o Gemini

# Opción B: Modelo local con Ollama (100% offline)
# Instala Ollama:
curl -fsSL https://ollama.com/install.sh | sh

# Descarga un modelo (ej: llama3):
ollama pull llama3

# Inicia el servidor:
ollama serve

# AikaOS detectará Ollama automáticamente`,
  },
  {
    number: "6",
    title: "Instala los expertos preconfigurados",
    desc: "Los 25 expertos están en packages/app/src/app/data/templates/. Para activarlos:",
    code: `# Los expertos se cargan automáticamente desde:
# packages/app/src/app/data/templates/

# Cada experto tiene:
# ├── metadata.ts    (nombre, descripción, icono)
# ├── commands/      (comandos listos para usar)
# └── skills/        (skills especializados .md)

# Para ver los expertos disponibles:
ls packages/app/src/app/data/templates/`,
  },
  {
    number: "7",
    title: "Orchestrator (modo servidor sin UI)",
    desc: "Si quieres correr AikaOS como servidor sin interfaz gráfica:",
    code: `# Instala el orchestrator globalmente
npm install -g openwork-orchestrator

# Inicia con aprobación automática
openwork start --workspace /ruta/a/tu/proyecto --approval auto

# Para conectar WhatsApp:
curl -fsSL https://raw.githubusercontent.com/different-ai/opencode-router/dev/install.sh | bash
opencode-router setup
opencode-router whatsapp login
opencode-router start`,
  },
  {
    number: "8",
    title: "Verifica que todo funcione",
    desc: "Abre AikaOS y prueba que los agentes respondan correctamente:",
    code: `# En la app, escribe:
# "Hola, ¿qué puedes hacer?"
# El agente debería listar sus capacidades.

# Para verificar desde terminal:
opencode --version
# Debería mostrar la versión instalada

# Si algo falla, revisa los logs:
# macOS: ~/Library/Logs/AikaOS/
# Linux: ~/.local/share/AikaOS/logs/`,
  },
];

export default function SetupPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-medium text-[#1A1A1A] font-nunito tracking-tight mb-2 drop-shadow-sm">
        Guía de instalación
      </h1>
      <p className="text-slate-600 font-medium mb-10">
        Sigue estos pasos para compilar y ejecutar AikaOS desde el código
        fuente. Requiere macOS con Apple Silicon (M1-M4).
      </p>

      <div className="space-y-6">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="bg-white/40 backdrop-blur-2xl rounded-[28px] border border-white/60 p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.8)]"
          >
            <div className="flex gap-5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-[0_8px_16px_rgba(0,0,0,0.15)]">
                {step.number}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 font-nunito mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
            <pre className="bg-[#1A1A1A] text-green-400 text-[13px] leading-relaxed p-5 rounded-2xl overflow-x-auto font-mono">
              {step.code}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
