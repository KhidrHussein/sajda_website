// The Empty Mihrab — SVG logo per design spec
export default function MihrabLogo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sajda mihrab logo"
    >
      {/* Baseline */}
      <line x1="4" y1="28" x2="28" y2="28" stroke="#2B2D2F" strokeWidth="2" strokeLinecap="round" />
      {/* Arch — semi-circle sitting on the baseline */}
      <path
        d="M8 28 A8 8 0 0 1 24 28"
        stroke="#2B2D2F"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Vertical pillars */}
      <line x1="8" y1="28" x2="8" y2="22" stroke="#2B2D2F" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="28" x2="24" y2="22" stroke="#2B2D2F" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
