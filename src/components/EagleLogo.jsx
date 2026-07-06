export default function EagleLogo({ className = 'w-12 h-12' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Eagle body */}
      <circle cx="32" cy="32" r="30" fill="#0a1628" stroke="#f59e0b" strokeWidth="2" />
      {/* Eagle silhouette */}
      <g transform="translate(32,32)">
        {/* Body */}
        <ellipse cx="0" cy="4" rx="7" ry="9" fill="#f59e0b" />
        {/* Head */}
        <circle cx="0" cy="-8" r="5.5" fill="#f59e0b" />
        {/* Beak */}
        <path d="M3.5,-8 L8,-6 L3.5,-5 Z" fill="#fbbf24" />
        {/* Left wing */}
        <path d="M-7,2 C-14,-2 -22,-8 -26,-4 C-22,0 -14,4 -7,6 Z" fill="#f59e0b" />
        {/* Right wing */}
        <path d="M7,2 C14,-2 22,-8 26,-4 C22,0 14,4 7,6 Z" fill="#f59e0b" />
        {/* Tail */}
        <path d="M-4,12 L0,20 L4,12 Z" fill="#d97706" />
        {/* Eye */}
        <circle cx="2" cy="-9" r="1.5" fill="white" />
        <circle cx="2.5" cy="-9" r="0.7" fill="#0a1628" />
      </g>
    </svg>
  );
}
