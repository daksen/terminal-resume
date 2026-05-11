type Props = {
  primary: string;
  secondary?: string;
  meta?: string;
  muted?: boolean;
};

export default function SectionHeadline({ primary, secondary, meta, muted }: Props) {
  return (
    <div className="flex items-center gap-2 mb-1">
      <span className="text-terminal-green shrink-0">{">"}</span>
      <span className={muted ? "text-terminal-muted font-semibold" : "text-terminal-cyan font-bold"}>{primary}</span>
      {secondary && (
        <>
          <span className="text-terminal-muted">@</span>
          <span className="text-terminal-pink">{secondary}</span>
        </>
      )}
      {meta && (
        <>
          <span className="flex-1" />
          <span className="text-terminal-muted text-xs">{meta}</span>
        </>
      )}
    </div>
  );
}
