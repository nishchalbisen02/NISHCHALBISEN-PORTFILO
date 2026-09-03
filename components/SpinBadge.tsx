export default function SpinBadge({
  text = "PORTFOLIO · 2026 · BHOPAL · ",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  const ring = (text + text).toUpperCase();
  return (
    <div className={`spinbadge ${className}`} aria-hidden="true">
      <svg viewBox="0 0 120 120" className="spinbadge__svg">
        <defs>
          <path
            id="spinbadge-path"
            d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
          />
        </defs>
        <text>
          <textPath href="#spinbadge-path" xlinkHref="#spinbadge-path">
            {ring}
          </textPath>
        </text>
      </svg>
      <span className="spinbadge__core">↓</span>
    </div>
  );
}
