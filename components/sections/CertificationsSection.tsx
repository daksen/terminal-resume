import SectionHeadline from "@/components/SectionHeadline";
import TerminalPrompt from "@/components/TerminalPrompt";
import { certifications } from "@/lib/data";

export default function CertificationsSection() {
  return (
    <section id="certifications" aria-label="Certifications" className="px-4 py-6 sm:px-6 sm:py-8 border-b border-terminal-border">
      <h2 className="sr-only">Certifications</h2>
      <TerminalPrompt command="cat certifications.md" />

      <div className="space-y-4">
        {certifications.map((cert) => (
          <div key={cert.name}>
            <SectionHeadline primary={cert.name} meta={cert.issuedDate} />
            <div className="pl-4 flex flex-col gap-0.5 text-sm">
              <span className="text-terminal-text">{cert.issuer}</span>
              {cert.credentialId && (
                <span className="text-terminal-muted text-xs">
                  Credential ID: {cert.credentialId}
                </span>
              )}
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terminal-cyan hover:underline text-xs w-fit"
                >
                  Show credential ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
