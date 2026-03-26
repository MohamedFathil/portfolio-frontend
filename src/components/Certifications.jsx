const CERTS = [
  { icon: "🐍", title: "Crash Course on Python", issuer: "Coursera" },
  { icon: "⚛️", title: "React JS for Beginners", issuer: "Udemy" },
  { icon: "🏆", title: "Python Problem Solving (Levels 1 & 2)", issuer: "CodeChef" },
  { icon: "📊", title: "Data Analytics", issuer: "NoviTech Pvt. Ltd" },
  { icon: "🗄️", title: "SQL BootCamp", issuer: "LetsUpgrade" },
  { icon: "🤖", title: "Machine Learning with Python", issuer: "IBM" },
];

const ACHIEVEMENTS = [
  { icon: "🥇", value: "200+", label: "Problems on GeeksforGeeks" },
  { icon: "💡", value: "50+", label: "Problems on LeetCode" },
  { icon: "🌍", value: "2 Yrs", label: "UAE Employment Visa" },
];

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <span className="section-label">05 — Credentials</span>
      <h2 className="section-title">Certifications & Achievements</h2>

      {/* Achievements bar */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px", marginBottom: "48px",
      }}>
        {ACHIEVEMENTS.map((a, i) => (
          <div key={i} style={{
            background: "linear-gradient(135deg, rgba(0,229,255,0.06), rgba(124,58,237,0.06))",
            border: "1px solid var(--border-hover)",
            borderRadius: "var(--radius)",
            padding: "28px",
            textAlign: "center",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.4), 0 0 30px var(--glow-cyan)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "";
            e.currentTarget.style.boxShadow = "";
          }}>
            <div style={{ fontSize: "32px", marginBottom: "8px" }}>{a.icon}</div>
            <div style={{
              fontFamily: "'Syne', sans-serif", fontSize: "36px", fontWeight: "800",
              background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-violet))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>{a.value}</div>
            <div style={{ fontSize: "13px", color: "var(--text-secondary)", marginTop: "4px" }}>{a.label}</div>
          </div>
        ))}
      </div>

      <div className="cert-grid">
        {CERTS.map((c, i) => (
          <div className="cert-card" key={i}>
            <div className="cert-icon">{c.icon}</div>
            <div>
              <div className="cert-title">{c.title}</div>
              <div className="cert-issuer">{c.issuer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
