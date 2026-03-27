import { useEffect, useState } from "react";

const ACHIEVEMENTS = [
  { icon: "🥇", value: "200+", label: "Problems on GeeksforGeeks" },
  { icon: "💡", value: "50+", label: "Problems on LeetCode" },
  { icon: "🌍", value: "2 Yrs", label: "UAE Employment Visa" },
];

export default function Certifications() {
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/certifications/")
      .then(res => res.json())
      .then(data => setCerts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="section" id="certifications">
      <span className="section-label">05 — Credentials</span>
      <h2 className="section-title">Certifications & Achievements</h2>

      {/* Achievements */}
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
          }}>
            <div style={{ fontSize: "32px" }}>{a.icon}</div>
            <div style={{ fontSize: "36px", fontWeight: "800" }}>{a.value}</div>
            <div style={{ fontSize: "13px" }}>{a.label}</div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="cert-grid">
        {certs.map((c) => (
          <div className="cert-card" key={c.id}>
            {/* ✅ Show image if exists */}
            {c.image ? (
              <img 
                src={c.image} 
                alt={c.title} 
                className="cert-image" 
              />
            ) : (
              <div className="cert-icon">{c.icon}</div>
            )}

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