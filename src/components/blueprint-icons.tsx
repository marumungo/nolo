/**
 * Line-art furniture icons in the "plano técnico" (elevation-drawing) style
 * used across the site as stand-ins until real product photography exists.
 * Stroke-only, inherits color via `currentColor` so callers control tone.
 */

type IconProps = { className?: string };

const base = "1.6";

function DimensionLine() {
  return (
    <g stroke="currentColor" strokeWidth={base} opacity={0.45}>
      <line x1="20" y1="176" x2="180" y2="176" />
      <line x1="20" y1="170" x2="20" y2="182" />
      <line x1="180" y1="170" x2="180" y2="182" />
    </g>
  );
}

export function ChairBlueprint({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth={base}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* backrest */}
      <path d="M62 34h50v14H62z" />
      <line x1="70" y1="48" x2="70" y2="96" />
      <line x1="88" y1="48" x2="88" y2="96" />
      <line x1="106" y1="48" x2="106" y2="96" />
      {/* seat */}
      <path d="M56 96h78l-8 26H64z" />
      {/* legs */}
      <line x1="64" y1="122" x2="58" y2="168" />
      <line x1="128" y1="122" x2="136" y2="168" />
      <line x1="72" y1="122" x2="70" y2="150" />
      <line x1="118" y1="122" x2="122" y2="150" />
      <DimensionLine />
    </svg>
  );
}

export function TableBlueprint({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth={base}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M30 70h140l-10 16H40z" />
      <line x1="46" y1="86" x2="40" y2="166" />
      <line x1="154" y1="86" x2="160" y2="166" />
      <line x1="70" y1="86" x2="67" y2="150" />
      <line x1="130" y1="86" x2="133" y2="150" />
      <line x1="52" y1="120" x2="148" y2="120" opacity={0.5} />
      <DimensionLine />
    </svg>
  );
}

export function SofaBlueprint({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth={base}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M34 96c0-14 10-24 24-24h84c14 0 24 10 24 24v14H34z" />
      <path d="M28 110h144v34a8 8 0 0 1-8 8H36a8 8 0 0 1-8-8z" />
      <line x1="28" y1="126" x2="172" y2="126" opacity={0.5} />
      <line x1="44" y1="152" x2="44" y2="170" />
      <line x1="156" y1="152" x2="156" y2="170" />
      <rect x="30" y="86" width="18" height="26" rx="4" />
      <rect x="152" y="86" width="18" height="26" rx="4" />
      <DimensionLine />
    </svg>
  );
}

export function ShelfBlueprint({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth={base}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="40" y="30" width="120" height="140" />
      <line x1="40" y1="72" x2="160" y2="72" />
      <line x1="40" y1="114" x2="160" y2="114" />
      <line x1="100" y1="30" x2="100" y2="170" opacity={0.6} />
      <rect x="52" y="42" width="34" height="18" opacity={0.5} />
      <line x1="114" y1="84" x2="148" y2="84" opacity={0.5} />
      <DimensionLine />
    </svg>
  );
}

export function LampBlueprint({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth={base}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M70 40h60l-10 34H80z" />
      <line x1="100" y1="74" x2="100" y2="150" />
      <circle cx="100" cy="160" r="10" />
      <line x1="70" y1="176" x2="130" y2="176" />
      <DimensionLine />
    </svg>
  );
}

export function ModuleBlueprint({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth={base}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M100 26 170 64v72l-70 38-70-38V64z" />
      <path d="M100 26v76M100 102 170 64M100 102 30 64" opacity={0.6} />
      <DimensionLine />
    </svg>
  );
}
