import TerminalPrompt from "@/components/TerminalPrompt";
import { profile } from "@/lib/data";

const ASCII_ART = `
██╗  ██╗███████╗██╗     ██╗      ██████╗
██║  ██║██╔════╝██║     ██║     ██╔═══██╗
███████║█████╗  ██║     ██║     ██║   ██║
██╔══██║██╔══╝  ██║     ██║     ██║   ██║
██║  ██║███████╗███████╗███████╗╚██████╔╝
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝
██╗    ██╗ ██████╗ ██████╗ ██╗     ██████╗
██║    ██║██╔═══██╗██╔══██╗██║     ██╔══██╗
██║ █╗ ██║██║   ██║██████╔╝██║     ██║  ██║
██║███╗██║██║   ██║██╔══██╗██║     ██║  ██║
╚███╔███╔╝╚██████╔╝██║  ██║███████╗██████╔╝
 ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝
`.trim();

const sections = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "skills", href: "#skills" },
  { label: "education", href: "#education" },
  { label: "certifications", href: "#certifications" },
];

export default function WelcomeSection() {
  return (
    <section id="welcome" aria-label="Welcome" className="px-4 py-6 sm:px-6 sm:py-8 border-b border-terminal-border">
      <h1 className="sr-only">{profile.name}</h1>
      <TerminalPrompt command="./welcome.sh" />

      <pre
        className="ascii-art text-terminal-green text-xs leading-tight overflow-x-auto mb-6 whitespace-pre"
        aria-hidden="true"
      >
        {ASCII_ART}
      </pre>

      <p className="text-terminal-text mb-6">
        Hi, I&apos;m{" "}
        <span className="text-terminal-pink font-bold">{profile.name}</span>,{" "}
        {profile.title}.
      </p>

      <nav aria-label="Page sections">
        <div className="flex flex-wrap gap-2">
          {sections.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="px-3 py-2 border border-terminal-purple text-terminal-purple text-sm rounded hover:bg-terminal-purple hover:text-terminal-bg transition-colors duration-150 ease-out"
            >
              [{s.label}]
            </a>
          ))}
        </div>
      </nav>
    </section>
  );
}
