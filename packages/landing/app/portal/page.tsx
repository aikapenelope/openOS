import Link from "next/link";

const QUICK_LINKS = [
  {
    href: "/portal/download",
    icon: "solar:download-minimalistic-linear",
    title: "Descargar AikaOS",
    desc: "Obtén la última versión para macOS.",
  },
  {
    href: "/portal/setup",
    icon: "solar:settings-linear",
    title: "Guía de instalación",
    desc: "Paso a paso para configurar tu sistema.",
  },
  {
    href: "/portal/experts",
    icon: "solar:users-group-rounded-linear",
    title: "Configurar expertos",
    desc: "Activa los 25 expertos preconfigurados.",
  },
];

export default function PortalDashboard() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-semibold text-slate-900 font-nunito tracking-tight mb-2">
        Bienvenido a AikaOS
      </h1>
      <p className="text-slate-600 font-medium mb-10">
        Tu sistema de agentes IA está listo. Sigue estos pasos para comenzar.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {QUICK_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:bg-slate-100 transition-colors">
              {/* @ts-expect-error iconify-icon is a web component */}
              <iconify-icon icon={link.icon} class="text-2xl text-slate-700" />
            </div>
            <h3 className="font-semibold text-slate-900 font-nunito mb-1">
              {link.title}
            </h3>
            <p className="text-sm text-slate-600">{link.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
