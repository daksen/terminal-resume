"use client";

import TerminalPrompt from "@/components/TerminalPrompt";
import { useTerminal } from "@/hooks/useTerminal";

export default function TerminalInteractive() {
  const { input, setInput, history, inputRef, bottomRef, focusInput, handleKeyDown } = useTerminal();

  return (
    <div
      className="flex-1 flex flex-col cursor-text p-4 sm:p-6 min-h-0"
      onClick={focusInput}
      role="region"
      aria-label="Interactive terminal"
    >
      {/* History */}
      <div className="flex-1 space-y-1 mb-3 overflow-y-auto text-sm">
        {history.map((entry, i) => (
          <div key={i}>
            {entry.type === "input" ? (
              <TerminalPrompt command={entry.text} className="mb-0" />
            ) : entry.text === "" ? (
              <div className="h-4" />
            ) : (
              <pre className="text-terminal-muted whitespace-pre-wrap font-mono text-xs leading-relaxed">
                {entry.text}
              </pre>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input line */}
      <div className="flex items-center gap-1 text-sm">
        <span className="text-terminal-green shrink-0 font-bold">guest</span>
        <span className="text-terminal-muted">@</span>
        <span className="text-terminal-purple">resume</span>
        <span className="text-terminal-muted">:</span>
        <span className="text-terminal-cyan">~</span>
        <span className="text-terminal-pink">$</span>
        <input
          ref={inputRef}
          autoFocus
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-terminal-text caret-terminal-green ml-1"
          aria-label="Terminal input"
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
      </div>
    </div>
  );
}
