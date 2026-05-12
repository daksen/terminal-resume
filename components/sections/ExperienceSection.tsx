import SectionHeadline from "@/components/SectionHeadline";
import TerminalPrompt from "@/components/TerminalPrompt";
import { experience } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" aria-label="Experience" className="px-4 py-6 sm:px-6 sm:py-8 border-b border-terminal-border">
      <h2 className="sr-only">Experience</h2>
      <TerminalPrompt command="cat experience.json" />

      <div className="space-y-6">
        {experience.map((job) => (
          <div key={job.company}>
            <SectionHeadline primary={job.role} secondary={job.company} meta={job.period} />
            <ul className="mt-2 space-y-1 pl-4">
              {job.bullets.map((b, i) => (
                <li key={i} className="text-terminal-text text-sm flex gap-2">
                  <span className="text-terminal-muted shrink-0">-</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
