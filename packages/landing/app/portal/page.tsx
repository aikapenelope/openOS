"use client";

import Link from "next/link";
import { ChatWidget } from "../../components/chat-widget";

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

const MCP_SERVERS = [
  { icon: "solar:folder-open-linear", name: "Filesystem" },
  { icon: "solar:database-linear", name: "PostgreSQL" },
  { icon: "solar:global-linear", name: "Brave Search" },
  { icon: "solar:code-square-linear", name: "GitHub" },
  { icon: "solar:chat-round-dots-linear", name: "Slack" },
  { icon: "solar:cloud-linear", name: "Google Drive" },
  { icon: "solar:monitor-linear", name: "Puppeteer" },
  { icon: "solar:letter-linear", name: "Gmail" },
  { icon: "solar:notebook-linear", name: "Notion" },
  { icon: "solar:server-linear", name: "Docker" },
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

      {/* Quick links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
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

      {/* Chatbot */}
      <div className="mb-10">
        <ChatWidget />
      </div>

      {/* MCP Tutorials */}
      <div className="mb-10">
        <h2 className="text-xl font-medium text-[#1A1A1A] font-nunito tracking-tight mb-2 drop-shadow-sm">
          Tutoriales MCP
        </h2>
        <p className="text-sm text-slate-600 mb-6">
          Los servidores MCP más populares. Próximamente: guías paso a paso para
          crear los tuyos.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {MCP_SERVERS.map((server) => (
            <div
              key={server.name}
              className="bg-white/40 backdrop-blur-2xl rounded-2xl border border-white/60 p-4 flex flex-col items-center gap-2 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur-md border border-white/80 flex items-center justify-center shadow-sm">
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon
                  icon={server.icon}
                  class="text-xl text-slate-700"
                />
              </div>
              <span className="text-[13px] font-semibold text-slate-800 text-center">
                {server.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="bg-white/40 backdrop-blur-2xl rounded-[28px] border border-white/60 p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.8)]">
        <h2 className="text-xl font-medium text-[#1A1A1A] font-nunito tracking-tight mb-2 drop-shadow-sm">
          Contáctanos
        </h2>
        <p className="text-sm text-slate-600 mb-6">
          ¿Tienes dudas o necesitas ayuda con la instalación? Escríbenos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:hola@aikalabs.com"
            className="flex items-center gap-3 bg-white/60 backdrop-blur-md rounded-2xl border border-white/80 px-5 py-4 hover:bg-white hover:shadow-md transition-all group"
          >
            {/* @ts-expect-error iconify-icon is a web component */}
            <iconify-icon
              icon="solar:letter-linear"
              class="text-2xl text-slate-600 group-hover:text-slate-900 transition-colors"
            />
            <div>
              <p className="text-[13px] font-semibold text-slate-800">
                Correo electrónico
              </p>
              <p className="text-sm text-slate-600">hola@aikalabs.com</p>
            </div>
          </a>
          <a
            href="https://wa.me/0000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white/60 backdrop-blur-md rounded-2xl border border-white/80 px-5 py-4 hover:bg-white hover:shadow-md transition-all group"
          >
            {/* @ts-expect-error iconify-icon is a web component */}
            <iconify-icon
              icon="solar:phone-linear"
              class="text-2xl text-slate-600 group-hover:text-slate-900 transition-colors"
            />
            <div>
              <p className="text-[13px] font-semibold text-slate-800">
                WhatsApp
              </p>
              <p className="text-sm text-slate-600">Próximamente</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
