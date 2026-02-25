export default function DownloadPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-semibold text-slate-900 font-nunito tracking-tight mb-2">
        Descargar AikaOS
      </h1>
      <p className="text-slate-600 font-medium mb-10">
        Descarga la última versión de AikaOS para tu sistema operativo.
      </p>

      {/* Download card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-8">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center shrink-0">
            {/* @ts-expect-error iconify-icon is a web component */}
            <iconify-icon
              icon="solar:monitor-linear"
              class="text-3xl text-white"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-slate-900 font-nunito mb-1">
              AikaOS para macOS
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Requiere macOS 12.0+ con Apple Silicon (M1-M4). 8GB RAM mínimo,
              16GB recomendado.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-black transition-colors"
            >
              {/* @ts-expect-error iconify-icon is a web component */}
              <iconify-icon icon="solar:download-minimalistic-linear" />
              Descargar .dmg
            </a>
            <p className="text-xs text-slate-500 mt-3">
              Versión actual: 0.1.x &middot; Última actualización: febrero 2026
            </p>
          </div>
        </div>
      </div>

      {/* Windows/Linux notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
        <div className="flex items-start gap-3">
          {/* @ts-expect-error iconify-icon is a web component */}
          <iconify-icon
            icon="solar:info-circle-linear"
            class="text-xl text-amber-600 mt-0.5"
          />
          <div>
            <h3 className="font-semibold text-amber-900 mb-1">
              Windows y Linux en desarrollo
            </h3>
            <p className="text-sm text-amber-800">
              Estamos trabajando en versiones para Windows y Linux. Te
              notificaremos cuando estén disponibles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
