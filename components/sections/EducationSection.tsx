import SectionHeadline from "@/components/SectionHeadline";
import TerminalPrompt from "@/components/TerminalPrompt";
import { education } from "@/lib/data";

export default function EducationSection() {
  return (
    <section id="education" className="px-4 py-6 sm:px-6 sm:py-8 border-b border-terminal-border">
      <TerminalPrompt command="cat education.md" />

      <div className="space-y-6">
        {education.map((e) => (
          <div key={e.institution}>
            <SectionHeadline primary={e.institution} meta={e.period} />
            <div className="border-l-2 border-terminal-border pl-4">
              <div className="text-terminal-text text-sm">{e.degree}</div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
