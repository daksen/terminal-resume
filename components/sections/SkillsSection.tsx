import TerminalPrompt from "@/components/TerminalPrompt";
import { skillGroups } from "@/lib/data";

export default function SkillsSection() {
  const allSkills = skillGroups.flatMap((group) => group.skills);

  return (
    <section id="skills" className="px-4 py-6 sm:px-6 sm:py-8 border-b border-terminal-border">
      <TerminalPrompt command="ls -la skills" />

      <div className="flex flex-wrap gap-2">
        {allSkills.map((skill) => (
          <span key={skill} className="text-sm text-terminal-cyan border border-terminal-border px-2 py-0.5 rounded">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
