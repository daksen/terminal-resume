type Props = {
  children: React.ReactNode;
};

export default function TerminalWindow({ children }: Props) {
  return (
    <div className="min-h-screen bg-terminal-bg sm:py-6 sm:px-4">
      <div className="mx-auto sm:max-w-4xl sm:rounded-lg overflow-hidden sm:border border-terminal-border sm:shadow-2xl sm:shadow-black/60">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-terminal-surface border-b border-terminal-border">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d4a023]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]" />
          <span className="flex-1 text-center text-sm text-terminal-muted select-none">
            guest@resume:~
          </span>
        </div>

        {/* Body */}
        <div className="bg-terminal-bg font-mono text-terminal-text">
          {children}
        </div>
      </div>
    </div>
  );
}
