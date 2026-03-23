import TerminalPrompt from "@/components/TerminalPrompt";
import { experience } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-6 sm:px-6 sm:py-8 border-b border-terminal-border">
      <TerminalPrompt command="cat experience.json" />

      <div className="space-y-6">
        {experience.map((job) => (
          <div key={job.company} className="border-l-2 border-terminal-border pl-4">
            {/* Mobile header */}
            <div className="sm:hidden mb-1">
              <div className="flex items-center gap-2">
                <span className="text-terminal-orange">●</span>
                <span className="text-terminal-cyan font-bold">{job.role}</span>
              </div>
              <div className="flex items-center gap-2 ml-5">
                <span className="text-terminal-muted">@</span>
                <span className="text-terminal-pink">{job.company}</span>
              </div>
              <div className="text-terminal-muted text-xs ml-5">{job.period}</div>
            </div>

            {/* Desktop header */}
            <div className="hidden sm:flex items-center gap-2 mb-1">
              <span className="text-terminal-orange">●</span>
              <span className="text-terminal-cyan font-bold">{job.role}</span>
              <span className="text-terminal-muted">@</span>
              <span className="text-terminal-pink">{job.company}</span>
              <span className="flex-1" />
              <span className="text-terminal-muted text-xs">{job.period}</span>
            </div>
            <ul className="mt-2 space-y-1">
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
