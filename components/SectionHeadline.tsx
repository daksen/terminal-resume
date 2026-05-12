type Props = {
  primary: string;
  secondary?: string;
  meta?: string;
  muted?: boolean;
};

export default function SectionHeadline({ primary, secondary, meta, muted }: Props) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5 mb-1">
      <span className="text-terminal-green shrink-0">{">"}</span>
      <h3 className={`m-0 text-sm ${muted ? "text-terminal-muted font-semibold" : "text-terminal-cyan font-bold"}`}>{primary}</h3>
      {secondary && (
        <>
          <span className="text-terminal-muted">@</span>
          <span className="text-terminal-pink">{secondary}</span>
        </>
      )}
      {meta && (
        <span className="text-terminal-muted text-xs ml-auto">{meta}</span>
      )}
    </div>
  );
}
