const PROJECTS = [
  {
    emoji: "🍽️",
    banner: "linear-gradient(135deg, #7c3aed33, #00e5ff22)",
    title: "Restaurant Management System",
    type: "Personal Project",
    desc: "A full-stack Django web application featuring Menu management, Orders, Billing, and User Management modules with role-based authentication.",
    tech: ["Django", "Python", "MySQL", "HTML/CSS", "Role-based Auth"],
    highlights: ["4 Core Modules", "MySQL Integration", "Role-Based Auth", "Automated Orders"],
  },
  {
    emoji: "🛒",
    banner: "linear-gradient(135deg, #00e5ff22, #00ffa322)",
    title: "WooCommerce Grocery Store",
    type: "Professional Work",
    desc: "Full eCommerce solution with product catalog, pricing variations, payment gateway integration, and SEO-optimized structure built on WordPress.",
    tech: ["WordPress", "WooCommerce", "Elementor", "Payment Gateway", "SEO"],
    highlights: ["20+ Products", "Payment Integration", "30% Faster Load", "Mobile Responsive"],
  },
  {
    emoji: "🚗",
    banner: "linear-gradient(135deg, #f0abfc22, #7c3aed33)",
    title: "Car Rental Platform",
    type: "Professional Work",
    desc: "Custom WooCommerce-based car rental website with service catalog, booking workflows, checkout optimization, and responsive Elementor design.",
    tech: ["WordPress", "WooCommerce", "Elementor", "Custom Theme", "CSS"],
    highlights: ["Booking Flow", "Custom Theme", "Responsive UI", "SEO Ready"],
  },
  {
    emoji: "🚔",
    banner: "linear-gradient(135deg, #00ffa322, #00e5ff22)",
    title: "Number Plate Verification System",
    type: "Academic Project",
    desc: "Python-based vehicle verification automation system that processes 20+ vehicle records, validates insurance/registration, and generates non-compliance alerts.",
    tech: ["Python", "Automation", "Data Validation", "Alert System"],
    highlights: ["20+ Records", "Insurance Check", "Alert Flags", "Accuracy Optimized"],
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects" style={{ background: "linear-gradient(180deg, transparent, rgba(0,229,255,0.02), transparent)" }}>
      <span className="section-label">04 — Projects</span>
      <h2 className="section-title">Featured Work</h2>

      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="project-banner" style={{ background: p.banner }}>
              <span style={{ fontSize: "64px" }}>{p.emoji}</span>
              <span style={{
                position: "absolute", top: "12px", right: "14px",
                fontFamily: "var(--mono, 'DM Mono')", fontSize: "10px",
                background: "rgba(0,0,0,0.5)", padding: "4px 10px", borderRadius: "20px",
                color: "var(--accent-cyan)", border: "1px solid var(--border)",
                letterSpacing: "0.5px",
              }}>{p.type}</span>
            </div>
            <div className="project-body">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "12px" }}>
                {p.highlights.map((h, j) => (
                  <span key={j} style={{
                    fontFamily: "'DM Mono', monospace", fontSize: "10px",
                    padding: "3px 10px", borderRadius: "4px",
                    background: "rgba(0,255,163,0.07)",
                    border: "1px solid rgba(0,255,163,0.2)",
                    color: "var(--accent-green)",
                  }}>{h}</span>
                ))}
              </div>
              <div className="project-tech">
                {p.tech.map((t, j) => (
                  <span className="project-tech-tag" key={j}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
