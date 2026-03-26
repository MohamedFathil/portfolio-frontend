const EXPERIENCES = [
  {
    title: "WordPress & WooCommerce Developer",
    company: "Cybrex Technological Solution, UAE",
    period: "Dec 2025 – Present",
    points: [
      "Designed and developed 2+ WooCommerce websites (Grocery Store & Car Rental)",
      "Configured 20+ products/services with pricing, variations, and checkout workflows",
      "Integrated payment gateway systems and optimized checkout process",
      "Customized themes using Elementor and WordPress plugins",
      "Improved mobile responsiveness — reduced page load time by 30% (testing environment)",
      "Implemented SEO-friendly structure and responsive UI design principles",
    ],
  },
  {
    title: "Python Developer Intern",
    company: "CodSoft — Virtual Internship",
    period: "1 Month",
    points: [
      "Developed Python applications with MySQL database integration",
      "Implemented CRUD functionalities across multiple mini-projects",
      "Gained hands-on experience with backend logic and data persistence",
    ],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <span className="section-label">03 — Experience</span>
      <h2 className="section-title">Work History</h2>

      <div className="timeline">
        {EXPERIENCES.map((exp, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-header">
                <span className="timeline-title">{exp.title}</span>
                <span className="timeline-period">{exp.period}</span>
              </div>
              <div className="timeline-company">{exp.company}</div>
              <ul className="timeline-points">
                {exp.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
