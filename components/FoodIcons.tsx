export function PizzaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="#c8965c" />
      <circle cx="32" cy="32" r="29.2" fill="none" stroke="#a5703c" strokeWidth="1.2" opacity=".55" />
      <g fill="#6e4520" opacity=".55">
        <circle cx="10" cy="24" r="1.6" />
        <circle cx="50" cy="9" r="1.3" />
        <circle cx="57" cy="38" r="1.8" />
        <circle cx="20" cy="56" r="1.4" />
        <circle cx="44" cy="57" r="1.1" />
      </g>
      <circle cx="32" cy="32" r="23.5" fill="#b5432e" />
      <g fill="#f5eee2">
        <ellipse cx="23" cy="25" rx="7" ry="5.5" />
        <ellipse cx="41" cy="23" rx="6" ry="5" />
        <ellipse cx="39" cy="40" rx="7.5" ry="6" />
        <ellipse cx="22" cy="40" rx="5.5" ry="5" />
        <ellipse cx="32" cy="32" rx="3.6" ry="3.2" />
      </g>
      <g fill="#4f7a3a">
        <ellipse cx="31" cy="20" rx="4.2" ry="2" transform="rotate(-30 31 20)" />
        <ellipse cx="46" cy="32" rx="3.6" ry="1.8" transform="rotate(40 46 32)" />
        <ellipse cx="29" cy="47" rx="3.8" ry="1.9" transform="rotate(12 29 47)" />
      </g>
    </svg>
  );
}

export function CanIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 64" className={className} aria-hidden="true">
      <rect x="9" y="2" width="22" height="5" rx="2.5" fill="#cfcac0" />
      <rect x="6" y="5" width="28" height="53" rx="6" fill="#2f2e2d" />
      <rect x="6" y="23" width="28" height="17" fill="#b6a594" />
      <g fill="#f7f5f1">
        <circle cx="14" cy="31.5" r="2.4" />
        <circle cx="20.5" cy="29" r="1.6" />
        <circle cx="21" cy="34.5" r="1.9" />
      </g>
      <rect x="10" y="9" width="3" height="46" rx="1.5" fill="#fff" opacity=".14" />
      <rect x="9" y="56" width="22" height="5" rx="2.5" fill="#cfcac0" />
      <ellipse cx="20" cy="4.5" rx="4" ry="1.2" fill="#9f9a90" />
    </svg>
  );
}

export function PizzoloIcon({ className }: { className?: string }) {
  const slice = "M32 32 L46.5 6.9 A29 29 0 0 1 59.3 22.1 Z";
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="29" fill="#d6a86a" />
      <circle cx="32" cy="32" r="28.2" fill="none" stroke="#b07f45" strokeWidth="1.2" opacity=".6" />
      <path d={slice} fill="#4a2c1b" />
      <g fill="#fffaf2">
        <circle cx="18" cy="22" r="1.3" />
        <circle cx="24" cy="15" r="1" />
        <circle cx="14" cy="36" r="1.2" />
        <circle cx="22" cy="46" r="1.4" />
        <circle cx="34" cy="52" r="1" />
        <circle cx="44" cy="44" r="1.3" />
        <circle cx="30" cy="26" r="1" />
        <circle cx="36" cy="38" r="1.1" />
        <circle cx="50" cy="36" r="0.9" />
      </g>
      <g transform="translate(4 -4)">
        <path d={slice} fill="#d6a86a" />
        <path d="M32 32 L46.5 6.9" stroke="#4a2c1b" strokeWidth="2.4" />
        <path d="M32 32 L59.3 22.1" stroke="#4a2c1b" strokeWidth="2.4" />
        <circle cx="49" cy="16" r="1" fill="#fffaf2" />
      </g>
    </svg>
  );
}

export function HeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.3 2.8 4.5 6.5 4.2c2.1-.2 3.9 1 5.5 3 1.6-2 3.4-3.2 5.5-3 3.7.3 5.6 4.1 4.1 7.5C19.5 16.4 12 21 12 21Z" />
    </svg>
  );
}
