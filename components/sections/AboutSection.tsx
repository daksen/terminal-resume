import TerminalPrompt from "@/components/TerminalPrompt";
import { profile } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="px-4 py-6 sm:px-6 sm:py-8 border-b border-terminal-border">
      <TerminalPrompt command="cat about.md" />

      <div className="flex flex-col sm:flex-row gap-6">
        {/* Bio */}
        <div className="flex-1">
          <p className="text-terminal-text mb-4 leading-relaxed">{profile.bio}</p>

          <div className="flex flex-col sm:flex-row sm:justify-between gap-1 text-sm">
            <div className="flex flex-col gap-1">
              <div>
                <span className="text-terminal-muted">location: </span>
                <span className="text-terminal-cyan">{profile.location}</span>
              </div>
              <div>
                <span className="text-terminal-muted">email: </span>
                <a href={`mailto:${profile.email}`} className="text-terminal-cyan hover:underline">
                  {profile.email}
                </a>
              </div>
              <div>
                <span className="text-terminal-muted">phone: </span>
                <a href={`tel:${profile.phone}`} className="text-terminal-cyan hover:underline">
                  {profile.phone}
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div>
                <span className="text-terminal-muted">linkedin: </span>
                <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-terminal-cyan hover:underline">
                  {profile.linkedin}
                </a>
              </div>
              <div>
                <span className="text-terminal-muted">github: </span>
                <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer" className="text-terminal-cyan hover:underline">
                  {profile.github}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
