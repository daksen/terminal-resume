import type { Metadata } from "next";
import TerminalWindow from "@/components/TerminalWindow";
import WelcomeSection from "@/components/sections/WelcomeSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";

export const metadata: Metadata = {
  title: "Carlos Tavares — Resume",
};

export default function ResumePage() {
  return (
    <TerminalWindow>
      <WelcomeSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <footer className="px-6 py-4 text-center text-terminal-muted text-xs border-t border-terminal-border">
        Made with &lt;3 by Carlos Tavares
      </footer>
    </TerminalWindow>
  );
}
