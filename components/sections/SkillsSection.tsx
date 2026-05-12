/* eslint-disable @next/next/no-img-element */
import SectionHeadline from "@/components/SectionHeadline";
import TerminalPrompt from "@/components/TerminalPrompt";
import { skillGroups } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" aria-label="Skills" className="px-4 py-6 sm:px-6 sm:py-8 border-b border-terminal-border">
      <h2 className="sr-only">Skills</h2>
      <TerminalPrompt command="ls -la skills" />

      <div className="flex flex-col gap-4">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <SectionHeadline primary={group.category} muted />
            <div className="pl-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-1.5 text-sm text-terminal-purple border border-terminal-border px-2 py-0.5 rounded"
                >
                  <img
                    src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`}
                    alt=""
                    aria-hidden="true"
                    width={14}
                    height={14}
                    loading="lazy"
                    decoding="async"
                    className="inline-block"
                  />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
