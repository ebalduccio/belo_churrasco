'use client'

import React, { useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GrillingTipsSection } from "@/components/section/GrillingTips";
import { HeroSection } from "@/components/section/Hero";
import { MeatShowcase } from "@/components/section/MetaShowcase";
import ExperienceSection from "@/components/section/Depoiment";

export default function ChurrascoPage() {
  // Refs para cada seção
  const heroRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const tipsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  // Função para scroll suave
  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Links da navbar com suas referências
  const navLinks = {
    'home': heroRef,
    'cardapio': menuRef,
    'dicas': tipsRef,
    'experiencia': experienceRef
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-300">
      <Navbar onNavClick={scrollToSection} navRefs={navLinks} />

      <div ref={heroRef} id="home">
        <HeroSection />
      </div>

      <div ref={menuRef} id="cardapio">
        <MeatShowcase />
      </div>

      <div ref={tipsRef} id="dicas">
        <GrillingTipsSection />
      </div>

      <div ref={experienceRef} id="experiencia">
        <ExperienceSection />
      </div>

      <Footer />
    </div>
  );
}