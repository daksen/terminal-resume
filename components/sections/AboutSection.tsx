import Image from "next/image";
import TerminalPrompt from "@/components/TerminalPrompt";
import { profile } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" aria-label="About" className="px-4 py-6 sm:px-6 sm:py-8 border-b border-terminal-border">
      <h2 className="sr-only">About</h2>
      <TerminalPrompt command="cat about.md" />

      <div>
        {/* Photo — floats left on desktop, centered block on mobile */}
        <div
          className="relative photo-frame mb-4 mx-auto sm:mx-0 sm:float-left sm:mr-6"
          style={{ width: 200, height: 200 }}
        >
          <Image
            src="/me.jpeg"
            alt={profile.name}
            width={200}
            height={200}
            className="block object-cover"
            style={{ filter: "contrast(1.05) brightness(0.93)" }}
          />
          <div className="photo-scanlines" aria-hidden="true" />
        </div>

        {/* Bio — wraps around photo on desktop */}
        {profile.bio.map((paragraph, i) => (
          <p key={i} className="text-terminal-text mb-4 leading-relaxed">
            {paragraph}
          </p>
        ))}

        {/* Contact info — clears float, full width */}
        <div className="clear-both flex flex-col sm:flex-row sm:justify-between gap-1 text-sm pt-2">
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
                {profile.linkedin} ↗
              </a>
            </div>
            <div>
              <span className="text-terminal-muted">github: </span>
              <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer" className="text-terminal-cyan hover:underline">
                {profile.github} ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
