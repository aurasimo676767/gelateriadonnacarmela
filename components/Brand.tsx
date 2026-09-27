export default function Brand({ className = "size-10" }: { className?: string }) {
  return <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden="true">
    <path d="M50 6A20 20 0 0 1 81 19A20 20 0 0 1 94 50A20 20 0 0 1 81 81A20 20 0 0 1 50 94A20 20 0 0 1 19 81A20 20 0 0 1 6 50A20 20 0 0 1 19 19A20 20 0 0 1 50 6Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M50 6A20 20 0 0 1 81 19A20 20 0 0 1 94 50A20 20 0 0 1 81 81A20 20 0 0 1 50 94A20 20 0 0 1 19 81A20 20 0 0 1 6 50A20 20 0 0 1 19 19A20 20 0 0 1 50 6Z" stroke="currentColor" strokeWidth="1.5" transform="translate(50 50) scale(.87) translate(-50 -50)"/>
    <g transform="translate(51 51) scale(.85) translate(-51 -51)">
      <path d="M32 16C50 17 67 26 72.5 44C76.5 60.5 68 78.5 50 84.5C37.5 86.5 28.5 79 26.5 65C25.5 47 27 27 32 16ZM34.5 22L36.2 56C36.7 68 40.5 74 47 73.2C58 71.8 66.2 62 64 50C61.8 36.5 49 25.5 34.5 22Z" fill="currentColor" fillRule="evenodd"/>
      <path d="M60.5 47.5C63 61 51.5 68 46.5 60.5C43.5 55 50.5 50.5 52.5 55.8" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </g>
  </svg>;
}
