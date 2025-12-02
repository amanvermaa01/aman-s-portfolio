"use client";

import ContactSection from "@/components/contact-section";
import ExperienceSection from "@/components/experience-section";
import HomeSection from "@/components/home-section";
import SkillsSection from "@/components/skills-section";
import WorkSection from "@/components/work-section";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-black overflow-x-hidden font-sans text-white">
      {/* Background - z-0 */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Placeholder for future background or just dark color */}
      </div>

      {/* Hero Section Overlay */}
      <HomeSection />
      <WorkSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
