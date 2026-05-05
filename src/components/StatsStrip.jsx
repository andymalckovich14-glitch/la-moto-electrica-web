
const STATS = [
  { value: "Makioka", label: "Voz" },
  { value: "Edegar Marcano", label: "Bajo" },
  { value: "Andy Mainlander", label: "Guitarra / Sintetizadores" },
  { value: "Nicolás Rojas", label: "Batería" },
  { value: "Jesús Plaza", label: "Guitarra" },
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
