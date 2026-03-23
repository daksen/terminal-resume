"use client";

import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { commands, type HistoryEntry, type CommandContext } from "@/lib/commands";

const BOOT_LINES = [
  "Linux Resume 6.1.0 #1 SMP x86_64 GNU/Linux",
  "Welcome, guest. Logged in as visitor.",
  "Type \"help\" to see available commands.",
  "",
];

export type { HistoryEntry };

export function useTerminal() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>(
    BOOT_LINES.map((line) => ({ type: "output", text: line }))
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  function focusInput() {
    inputRef.current?.focus();
  }

  function runCommand(cmd: string) {
    const trimmed = cmd.trim().toLowerCase();

    if (trimmed === "") return;

    const inputEntry: HistoryEntry = { type: "input", text: cmd };
    const ctx: CommandContext = {
      router,
      pushHistory: (entries) => setHistory((h) => [...h, inputEntry, ...entries]),
      clearHistory: () => setHistory([]),
      clearInput: () => setInput(""),
    };

    const handler = commands[trimmed];

    if (handler) {
      handler(ctx);
    } else {
      ctx.pushHistory([{
        type: "output",
        text: `command not found: ${trimmed}. Type "help" for a list of commands.`,
      }]);
    }

    setInput("");
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      runCommand(input);
    }
  }

  return { input, setInput, history, inputRef, bottomRef, focusInput, handleKeyDown };
}
