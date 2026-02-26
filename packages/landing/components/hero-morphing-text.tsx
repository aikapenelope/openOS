"use client";

import { MorphingText } from "./magicui/morphing-text";

const HERO_PHRASES = [
  "Tu equipo de IA privado.",
  "Automatiza tu empresa.",
  "Privacidad total.",
  "Listo para trabajar.",
];

export function HeroMorphingText() {
  return (
    <MorphingText
      texts={HERO_PHRASES}
      className="mb-16 h-[120px] md:h-[140px] max-w-4xl text-[48px] md:text-[80px] font-bold text-[#1A1A1A] tracking-tight font-nunito drop-shadow-sm lg:text-[80px]"
    />
  );
}
