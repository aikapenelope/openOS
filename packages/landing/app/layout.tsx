import "./globals.css";
import { Nunito, Inter } from "next/font/google";
import Script from "next/script";
import { ClerkProvider } from "@clerk/nextjs";
import { esES } from "@clerk/localizations";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "AikaOS por AikaLabs — Agentes IA para empresas en Latinoamérica",
  description:
    "AikaOS es la plataforma de automatización con agentes IA preconfigurados para legal, contabilidad, retail, marketing y más. Diseñada para LATAM.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  const body = (
    <html lang="es" className={`${nunito.variable} ${inter.variable}`}>
      <head>
        {/* Preconnect to Iconify CDN for faster icon loading */}
        <link rel="preconnect" href="https://api.iconify.design" />
        <link rel="dns-prefetch" href="https://api.iconify.design" />
      </head>
      <body className="antialiased min-h-screen overflow-x-hidden selection:bg-black selection:text-white text-slate-800 font-sans bg-[#ABCDE9] relative">
        {children}
        <Script
          src="https://code.iconify.design/iconify-icon/2.0.0/iconify-icon.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );

  // Wrap with ClerkProvider only when the publishable key is configured.
  // This allows the build to succeed without Clerk credentials while
  // enabling auth at runtime once the keys are set in the environment.
  if (clerkKey) {
    return <ClerkProvider localization={esES}>{body}</ClerkProvider>;
  }

  return body;
}
