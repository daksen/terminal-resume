type Props = {
  command: string;
  className?: string;
};

export default function TerminalPrompt({ command, className = "mb-4" }: Props) {
  return (
    <div className={`flex items-center gap-1 text-sm ${className}`}>
      <span className="text-terminal-green font-bold">guest</span>
      <span className="text-terminal-muted">@</span>
      <span className="text-terminal-purple">resume</span>
      <span className="text-terminal-muted">:</span>
      <span className="text-terminal-cyan">~</span>
      <span className="text-terminal-pink">$</span>
      <span className="text-terminal-text ml-1">{command}</span>
    </div>
  );
}
