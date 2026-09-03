const WORDS = [
  "Posters",
  "Brand Identity",
  "Editorial",
  "Art Direction",
  "Typography",
  "Packaging",
  "Logo Design",
  "Campaigns",
];

export default function Marquee() {
  const items = [...WORDS, ...WORDS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((w, i) => (
          <span key={i}>
            {w}
            <span className="star">&#10035;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
