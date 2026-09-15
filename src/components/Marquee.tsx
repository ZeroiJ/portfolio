"use client";

const ITEMS = [
  { song: "Peaceful Piano", artist: "Spotify" },
  { song: "ZeroER", artist: "Wu et al." },
  { song: "QuerySight", artist: "Building" },
  { song: "RL & ML", artist: "Learning" },
];

const MusicIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ opacity: 0.4 }}
  >
    <circle cx="8" cy="18" r="4" />
    <path d="M12 18V2l7 4" />
  </svg>
);

export default function Marquee() {
  const track = ITEMS.map((item, i) => (
    <span key={i} className="marquee-item">
      <MusicIcon />
      <span className="font-medium pl-2 tracking-tight">{item.song}</span>
      <span className="font-normal pl-1.5 tracking-tight opacity-60">
        {item.artist}
      </span>
    </span>
  ));

  return (
    <div className="marquee">
      <div className="marquee-track">
        {track}
        {track}
      </div>
      <div className="marquee-label">NOW</div>
    </div>
  );
}
