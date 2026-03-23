import TerminalInteractive from "@/components/TerminalInteractive";

export default function TerminalPage() {
  return (
    <div className="min-h-screen bg-terminal-bg flex items-center justify-center sm:p-4">
      <div className="w-full sm:max-w-2xl min-h-screen sm:min-h-0 sm:h-[480px] flex flex-col sm:rounded-lg overflow-hidden sm:border border-terminal-border sm:shadow-2xl sm:shadow-black/60">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-terminal-surface border-b border-terminal-border shrink-0">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d4a023]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]" />
          <span className="flex-1 text-center text-sm text-terminal-muted select-none">
            guest@resume:~
          </span>
        </div>

        {/* Terminal body */}
        <div className="flex-1 bg-terminal-bg font-mono text-terminal-text flex flex-col min-h-0">
          <TerminalInteractive />
        </div>
      </div>
    </div>
  );
}
