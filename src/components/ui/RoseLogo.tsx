interface RoseLogoProps {
  size?: number;
  className?: string;
}

/**
 * Technological Rose — geometric rose with PCB/circuit-board traces.
 * Primary: #7c0021  |  Accent: #8e475c  |  Dark: #150007
 */
export default function RoseLogo({ size = 200, className = '' }: RoseLogoProps) {
  const outerPetalAngles = [0, 72, 144, 216, 288];
  const innerPetalAngles = [36, 108, 180, 252, 324];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="rl-petal" cx="35%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#c06080" />
          <stop offset="100%" stopColor="#7c0021" />
        </radialGradient>
        <radialGradient id="rl-inner" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8e475c" />
          <stop offset="100%" stopColor="#5a0018" />
        </radialGradient>
      </defs>

      {/* Soft glow ring */}
      <circle cx="100" cy="100" r="82" fill="#7c0021" opacity="0.05" />

      {/* ── Outer petals (5 × 72°) ── */}
      {outerPetalAngles.map((angle) => (
        <path
          key={`op-${angle}`}
          d="M100,100 C83,79 81,51 100,27 C119,51 117,79 100,100Z"
          fill="url(#rl-petal)"
          opacity="0.86"
          transform={`rotate(${angle} 100 100)`}
        />
      ))}

      {/* ── Inner petals (5 × 72°, offset 36°) ── */}
      {innerPetalAngles.map((angle) => (
        <path
          key={`ip-${angle}`}
          d="M100,100 C91,85 90,64 100,51 C110,64 109,85 100,100Z"
          fill="url(#rl-inner)"
          opacity="0.95"
          transform={`rotate(${angle} 100 100)`}
        />
      ))}

      {/* ── Circuit traces in the gaps between outer petals ── */}
      {innerPetalAngles.map((angle) => (
        <g
          key={`ct-${angle}`}
          transform={`rotate(${angle} 100 100)`}
          opacity="0.5"
        >
          {/* Main trace */}
          <line x1="100" y1="90" x2="100" y2="14" stroke="#8e475c" strokeWidth="0.9" />
          {/* 90° PCB branch */}
          <line x1="100" y1="48" x2="113" y2="48" stroke="#8e475c" strokeWidth="0.9" />
          {/* Pad at branch end */}
          <rect x="110" y="45" width="6" height="6" rx="1" fill="#8e475c" />
          {/* Pad at trace tip */}
          <rect x="97" y="11" width="6" height="6" rx="1" fill="#8e475c" />
        </g>
      ))}

      {/* ── Center stack ── */}
      <circle cx="100" cy="100" r="17" fill="#150007" />
      <circle cx="100" cy="100" r="11" fill="#7c0021" />
      <circle cx="100" cy="100" r="6"  fill="#8e475c" />
      <circle cx="100" cy="100" r="3"  fill="white" opacity="0.85" />
    </svg>
  );
}
