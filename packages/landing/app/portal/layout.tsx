/* eslint-disable @next/next/no-img-element */
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

// Portal pages require Clerk auth — skip static generation so the
// ClerkProvider (and its publishableKey) are only evaluated at request time.
export const dynamic = "force-dynamic";

const NAV_ITEMS = [
  { href: "/portal", label: "Inicio", icon: "solar:home-smile-linear" },
  {
    href: "/portal/onboarding",
    label: "¿Qué plan necesito?",
    icon: "solar:star-linear",
  },
  {
    href: "/portal/download",
    label: "Descarga",
    icon: "solar:download-minimalistic-linear",
  },
  {
    href: "/portal/setup",
    label: "Instalación",
    icon: "solar:settings-linear",
  },
  {
    href: "/portal/experts",
    label: "Expertos",
    icon: "solar:users-group-rounded-linear",
  },
];

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex relative bg-[#ABCDE9]">
      {/* Same background as landing */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bfd2f4cf-65ed-4b1a-86d1-a1710619267b_1600w.png"
          alt=""
          role="presentation"
          width={1600}
          height={900}
          className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#A6CBE8]/20 via-[#BFD9EF]/40 to-[#EAE3D6]/60" />
      </div>

      {/* Sidebar — glassmorphism */}
      <aside className="w-64 bg-white/40 backdrop-blur-2xl border-r border-white/60 flex flex-col shrink-0 sticky top-0 h-screen z-10">
        <div className="p-6 border-b border-white/40">
          <Link href="/portal" className="flex items-center gap-2">
            <span className="font-mono text-lg font-bold text-aika-teal">
              {">_"}
            </span>
            <span className="text-lg font-semibold text-slate-900 tracking-tight font-nunito">
              AikaOS
            </span>
          </Link>
          <p className="text-xs text-slate-600 font-medium mt-1">
            Portal de clientes
          </p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium text-slate-700 hover:bg-white/50 hover:text-slate-900 transition-colors"
            >
              {/* @ts-expect-error iconify-icon is a web component */}
              <iconify-icon icon={item.icon} class="text-xl text-slate-600" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/40">
          <div className="flex items-center gap-3 px-2">
            <UserButton
              appearance={{
                elements: { avatarBox: "w-8 h-8" },
              }}
            />
            <span className="text-sm text-slate-700 font-medium">
              Mi cuenta
            </span>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto relative z-10">
        {children}
      </main>
    </div>
  );
}
