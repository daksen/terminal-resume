type Props = {
  primary: string;
  secondary?: string;
  meta?: string;
  muted?: boolean;
};

export default function SectionHeadline({ primary, secondary, meta, muted }: Props) {
  return (
    <div className="mb-1">
      <div className="flex items-baseline gap-x-1.5">
        <span className="text-terminal-green shrink-0">{">"}</span>
        <h3 className={`m-0 text-sm ${muted ? "text-terminal-muted font-semibold" : "text-terminal-cyan font-bold"}`}>{primary}</h3>
        {secondary && (
          <>
            <span className="text-terminal-muted hidden sm:inline">@</span>
            <span className="text-terminal-pink hidden sm:inline">{secondary}</span>
          </>
        )}
        {meta && (
          <span className="text-terminal-muted text-xs ml-auto">{meta}</span>
        )}
      </div>
      {secondary && (
        <div className="flex items-baseline gap-x-1.5 pl-4 sm:hidden">
          <span className="text-terminal-muted">@</span>
          <span className="text-terminal-pink">{secondary}</span>
        </div>
      )}
    </div>
  );
}
