const SKILLS = [
  {
    icon: "🎨",
    title: "Frontend",
    color: "linear-gradient(135deg, #00e5ff22, #7c3aed22)",
    skills: ["HTML5", "CSS3", "JavaScript", "React JS", "Three.js", "Responsive Design"],
  },
  {
    icon: "🔧",
    title: "Backend & Frameworks",
    color: "linear-gradient(135deg, #7c3aed22, #f0abfc22)",
    skills: ["Python", "Django", "REST APIs", "MVC Pattern", "CRUD Operations", "ML Basics"],
  },
  {
    icon: "🗄️",
    title: "Database",
    color: "linear-gradient(135deg, #00ffa322, #00e5ff22)",
    skills: ["MySQL", "MongoDB", "Database Integration", "Structured Data"],
  },
  {
    icon: "📦",
    title: "CMS & eCommerce",
    color: "linear-gradient(135deg, #f0abfc22, #7c3aed22)",
    skills: ["WordPress", "WooCommerce", "Elementor", "Theme Customization", "Payment Gateways", "SEO"],
  },
  {
    icon: "🛠️",
    title: "Tools & DevOps",
    color: "linear-gradient(135deg, #00e5ff22, #00ffa322)",
    skills: ["VS Code", "Git", "PyCharm", "Postman", "Power BI", "Excel", "Canva"],
  },
  {
    icon: "💡",
    title: "Concepts",
    color: "linear-gradient(135deg, #7c3aed22, #00e5ff22)",
    skills: ["Debugging", "Deployment", "Responsive Design", "Data Analytics", "SEO Optimization"],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills" style={{ background: "linear-gradient(180deg, transparent, rgba(124,58,237,0.03), transparent)" }}>
      <span className="section-label">02 — Skills</span>
      <h2 className="section-title">Technical Arsenal</h2>

      <div className="skills-grid">
        {SKILLS.map((cat, i) => (
          <div className="skill-category-card" key={i} style={{ background: cat.color }}>
            <div className="skill-cat-header">
              <div className="skill-cat-icon" style={{ background: "rgba(0,229,255,0.1)", border: "1px solid var(--border-hover)" }}>
                {cat.icon}
              </div>
              <span className="skill-cat-title">{cat.title}</span>
            </div>
            <div className="skill-pills">
              {cat.skills.map((s, j) => (
                <span className="skill-pill" key={j}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
