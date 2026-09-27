export default function Mill({
  className,
  plinth = "var(--color-tortora)",
  grind = false,
}: {
  className?: string;
  plinth?: string;
  grind?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 100 190"
      className={`${grind ? "mill-grind" : ""} ${className ?? ""}`}
      aria-hidden="true"
      fill="currentColor"
    >
      <g className="mill-head">
        <path d="M50 4c5 6 7 11 7 16 0 5-3 8-7 8s-7-3-7-8c0-5 2-10 7-16z" />
        <rect x="47" y="30" width="6" height="6" rx="1" />
        <path d="M22 44c0-4 4-7 9-7h38c5 0 9 3 9 7v6c0 3-2 5-5 5H27c-3 0-5-2-5-5v-6z" />
      </g>
      <path d="M33 56h34l3 8c7 5 16 14 16 30 0 20-13 33-22 38H36c-9-5-22-18-22-38 0-16 9-25 16-30l3-8z" />
      <rect x="6" y="136" width="88" height="17" rx="8.5" />
      <rect x="24" y="157" width="52" height="27" rx="1.5" fill={plinth} />
    </svg>
  );
}
