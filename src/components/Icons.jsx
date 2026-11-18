// Íconos dibujados a mano: trazo 1.75, esquinas rectas, misma retícula de 24px.
const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'square',
  strokeLinejoin: 'miter',
  'aria-hidden': true,
  focusable: false,
};

export function IconArrowRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconArrowDown(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4v15M6 13l6 6 6-6" />
    </svg>
  );
}

export function IconMenu(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 7h18M3 12h18M3 17h18" />
    </svg>
  );
}

export function IconClose(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}

export function IconWhatsApp(props) {
  return (
    <svg {...base} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 20l1.3-4A8 8 0 1 1 8.5 19z" />
      <path d="M9.2 8.6c.2-.4.5-.5.8-.5h.4c.2 0 .4.1.5.4l.6 1.4c.1.2 0 .5-.1.6l-.5.6c.6 1.1 1.4 1.9 2.5 2.5l.6-.5c.2-.1.4-.2.6-.1l1.4.6c.3.1.4.3.4.5v.4c0 .3-.1.6-.5.8-.6.4-1.5.5-2.3.2-2.1-.8-3.7-2.4-4.5-4.5-.3-.8-.2-1.7.2-2.3z" />
    </svg>
  );
}

export function IconInstagram(props) {
  return (
    <svg {...base} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.8" />
      <path d="M17 7h.01" />
    </svg>
  );
}

export function IconCheck(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

export function IconMonitor(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="12" />
      <path d="M9 20h6M12 16v4" />
    </svg>
  );
}

export function IconPhone(props) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="2.5" width="10" height="19" rx="1.5" />
      <path d="M11 18.5h2" />
    </svg>
  );
}

export function IconGlobe(props) {
  return (
    <svg {...base} strokeLinecap="round" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.4 3.5 5.2 3.5 8.5s-1.1 6.1-3.5 8.5c-2.4-2.4-3.5-5.2-3.5-8.5s1.1-6.1 3.5-8.5z" />
    </svg>
  );
}
