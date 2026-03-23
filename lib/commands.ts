import { profile } from "@/lib/data";

export type HistoryEntry = {
  type: "input" | "output";
  text: string;
};

export type CommandContext = {
  router: { push: (href: string) => void };
  pushHistory: (entries: HistoryEntry[]) => void;
  clearHistory: () => void;
  clearInput: () => void;
};

export type CommandHandler = (ctx: CommandContext) => void;

const help: CommandHandler = ({ pushHistory }) => {
  pushHistory([{
    type: "output",
    text: [
      "Available commands:",
      "  help     — show this message",
      "  resume   — open the full resume/portfolio",
      "  whoami   — display identity",
      "  ls       — list available pages",
      "  clear    — clear the terminal",
    ].join("\n"),
  }]);
};

const clear: CommandHandler = ({ clearHistory, clearInput }) => {
  clearHistory();
  clearInput();
};

const whoami: CommandHandler = ({ pushHistory }) => {
  pushHistory([{
    type: "output",
    text: `${profile.name} — ${profile.title}\n${profile.tagline}`,
  }]);
};

const ls: CommandHandler = ({ pushHistory }) => {
  pushHistory([{ type: "output", text: "resume/" }]);
};

const resume: CommandHandler = ({ router, pushHistory, clearInput }) => {
  pushHistory([{ type: "output", text: "Opening resume..." }]);
  clearInput();
  router.push("/");
};

export const commands: Record<string, CommandHandler> = {
  help,
  clear,
  whoami,
  ls,
  resume,
  "open resume": resume,
  "./resume": resume,
};
