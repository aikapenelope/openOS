import { SiteFooter } from "../../components/site-footer";
import { SiteNav } from "../../components/site-nav";
import { getGithubData } from "../../lib/github";

export const metadata = {
  title: "AikaOS — Descargar",
  description:
    "Descarga AikaOS para macOS con Apple Silicon. Windows y Linux próximamente.",
};

export default async function Download() {
  const github = await getGithubData();
  const releaseLabel = github.releaseTag || "última versión";
  const releaseUrl = github.releaseUrl;

  return (
    <div className="min-h-screen">
      <SiteNav stars={github.stars} active="download" />

      <main className="pb-24 pt-20">
        <div className="content-max-width px-6">
          <div className="animate-fade-up">
            <div className="mb-3 text-[12px] font-bold uppercase tracking-wider text-gray-500">
              AikaOS Desktop
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Descargar AikaOS
            </h1>
            <p className="mb-4 max-w-3xl text-[17px] leading-relaxed text-gray-700">
              AikaOS está disponible para macOS con procesadores Apple Silicon.
              Las versiones para Windows y Linux están en desarrollo.
            </p>
            <p className="mb-10 text-[14px] text-gray-600">
              Última versión estable:{" "}
              <a
                href={releaseUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-gray-900 underline decoration-gray-300 underline-offset-4 transition hover:decoration-gray-700"
              >
                {releaseLabel}
              </a>
            </p>
          </div>

          {/* ── macOS ── */}
          <section id="macos" className="py-6">
            <h2 className="mb-2 text-2xl font-bold md:text-3xl">macOS</h2>
            <p className="mb-8 text-[15px] text-gray-700">
              Descarga el DMG que corresponda a tu Mac.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="feature-card border-teal-100 bg-teal-50/30 ring-1 ring-teal-100/60">
                <div className="mb-2 flex items-center gap-2">
                  <h3 className="text-[16px] font-semibold text-gray-900">
                    Apple Silicon (serie M)
                  </h3>
                  <span className="rounded-full bg-teal-100 px-2 py-0.5 text-[11px] font-semibold text-teal-700">
                    Recomendado
                  </span>
                </div>
                <p className="mb-4 text-[14px] text-gray-600">
                  Para chips M1, M2, M3 y M4.
                </p>
                <a
                  href={github.installers.macos.appleSilicon}
                  className="doc-button"
                  rel="noreferrer"
                  target="_blank"
                >
                  Descargar .dmg (Apple Silicon)
                </a>
              </div>

              <div className="feature-card bg-white/90">
                <h3 className="mb-2 text-[16px] font-semibold text-gray-900">
                  Intel (x64)
                </h3>
                <p className="mb-4 text-[14px] text-gray-600">
                  Para Macs con procesador Intel.
                </p>
                <a
                  href={github.installers.macos.intel}
                  className="doc-button"
                  rel="noreferrer"
                  target="_blank"
                >
                  Descargar .dmg (Intel)
                </a>
              </div>
            </div>

            {/* Instrucciones de instalación */}
            <div className="mt-8 rounded-2xl border border-gray-100 bg-gray-50/60 p-6">
              <h3 className="mb-4 text-[15px] font-bold">
                Instrucciones de instalación
              </h3>
              <ol className="list-inside list-decimal space-y-3 text-[14px] text-gray-700">
                <li>
                  Abre el archivo <code className="mono rounded bg-gray-100 px-1.5 py-0.5 text-[13px]">.dmg</code> descargado.
                </li>
                <li>
                  Arrastra AikaOS a la carpeta <strong>Aplicaciones</strong>.
                </li>
                <li>
                  La primera vez, haz clic derecho → <strong>Abrir</strong> para
                  autorizar la ejecución.
                </li>
                <li>
                  Si macOS lo bloquea, ve a{" "}
                  <strong>Ajustes del Sistema → Privacidad y Seguridad</strong>{" "}
                  y haz clic en <strong>Abrir de todos modos</strong>.
                </li>
                <li>
                  Configura tu API key en{" "}
                  <strong>Settings → Model Provider</strong> y empieza a
                  trabajar.
                </li>
              </ol>
            </div>
          </section>

          <hr />

          {/* ── Windows ── */}
          <section id="windows" className="py-6">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold md:text-3xl">Windows</h2>
              <span className="rounded-full bg-amber-50 px-3 py-1 text-[12px] font-semibold text-amber-600 ring-1 ring-amber-200">
                Próximamente
              </span>
            </div>
            <p className="mt-3 text-[15px] text-gray-500">
              La versión para Windows está en desarrollo activo. Se anunciará
              cuando esté lista para pruebas públicas.
            </p>
          </section>

          <hr />

          {/* ── Linux ── */}
          <section id="linux" className="py-6">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold md:text-3xl">Linux</h2>
              <span className="rounded-full bg-amber-50 px-3 py-1 text-[12px] font-semibold text-amber-600 ring-1 ring-amber-200">
                Próximamente
              </span>
            </div>
            <p className="mt-3 text-[15px] text-gray-500">
              La versión para Linux (Arch, Ubuntu/Debian, Fedora) está en
              desarrollo activo. Se anunciará cuando esté lista para pruebas
              públicas.
            </p>
          </section>

          <hr />

          <p className="mt-8 text-[14px] text-gray-600">
            ¿Necesitas otro formato?{" "}
            <a
              href={releaseUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-gray-900 underline decoration-gray-300 underline-offset-4 transition hover:decoration-gray-700"
            >
              Ver todos los assets del release en GitHub
            </a>
            .
          </p>

          <SiteFooter />
        </div>
      </main>
    </div>
  );
}
