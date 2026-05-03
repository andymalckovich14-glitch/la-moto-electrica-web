import "./StatsStrip.css";

const STATS = [
  { value: "7", label: "Lanzamientos" },
  { value: "2022", label: "Desde" },
  { value: "Anaco", label: "Venezuela" },
  { value: "Shoegaze", label: "/ Post-Rock" },
];

export default function StatsStrip() {
  return (
    <div className="stats-strip">
      <div className="stats-container">
        {STATS.map(({ value, label }, i) => (
          <div key={i} className="stat-item">
            <span className="stat-value">{value}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
