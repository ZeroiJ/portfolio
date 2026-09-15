export default function Noise() {
  return (
    <svg
      className="fixed inset-0 w-full h-full pointer-events-none z-50"
      style={{ opacity: 0.2 }}
      aria-hidden="true"
    >
      <filter id="grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves="4"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  );
}
