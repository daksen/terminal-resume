import SectionHeadline from "@/components/SectionHeadline";
import TerminalPrompt from "@/components/TerminalPrompt";
import { experience } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-6 sm:px-6 sm:py-8 border-b border-terminal-border">
      <TerminalPrompt command="cat experience.json" />

      <div className="space-y-6">
        {experience.map((job) => (
          <div key={job.company}>
            {/* Mobile header */}
            <div className="sm:hidden">
              <SectionHeadline primary={job.role} />
              <div className="flex flex-col ml-5 gap-0.5">
                <span className="text-terminal-pink text-sm">{job.company}</span>
                <span className="text-terminal-muted text-xs">{job.period}</span>
              </div>
            </div>

            {/* Desktop header */}
            <div className="hidden sm:block">
              <SectionHeadline primary={job.role} secondary={job.company} meta={job.period} />
            </div>
            <ul className="mt-2 space-y-1 border-l-2 border-terminal-border pl-4">
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
