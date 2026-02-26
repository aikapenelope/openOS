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
    <>
      {/* Desktop: animated morphing effect */}
      <div className="hidden md:block">
        <MorphingText
          texts={HERO_PHRASES}
          className="mb-24 h-[140px] max-w-4xl text-[80px] font-bold text-[#1A1A1A] tracking-tight font-nunito drop-shadow-sm"
        />
      </div>
      {/* Mobile: static text, no animation overhead */}
      <h1 className="md:hidden mb-12 text-[40px] leading-[1.1] font-bold text-[#1A1A1A] tracking-tight font-nunito drop-shadow-sm max-w-4xl text-center">
        Tu equipo de IA privado.
      </h1>
    </>
  );
}
