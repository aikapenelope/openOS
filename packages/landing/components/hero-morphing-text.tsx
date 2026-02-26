"use client";

import { WordRotate } from "./magicui/word-rotate";

const HERO_PHRASES = [
  "Tu equipo de IA privado.",
  "Automatiza tu empresa.",
  "Privacidad total.",
  "Listo para trabajar.",
];

export function HeroMorphingText() {
  return (
    <WordRotate
      words={HERO_PHRASES}
      duration={3000}
      className="mb-28 max-w-4xl text-[40px] md:text-[80px] leading-[1.1] font-bold text-[#1A1A1A] tracking-tight font-nunito drop-shadow-sm text-center"
    />
  );
}
