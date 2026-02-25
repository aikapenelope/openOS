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
      <h1 className="text-3xl font-medium text-[#1A1A1A] font-nunito tracking-tight mb-2 drop-shadow-sm">
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
            className="group bg-white/40 backdrop-blur-2xl rounded-[28px] border border-white/60 p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-xl bg-white/60 backdrop-blur-md border border-white/80 flex items-center justify-center mb-4 group-hover:bg-white transition-colors shadow-sm">
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
