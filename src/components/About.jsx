export default function About() {
  return (
    <section className="section" id="about">
      <span className="section-label">01 — About</span>
      <h2 className="section-title">Who I Am</h2>

      <div className="about-grid">
        <div className="about-left">
          {[
            { icon: "🎓", label: "B.Tech — Information Technology", sub: "E.G.S. Pillay Engineering College | CGPA: 7.8/10" },
            { icon: "📍", label: "Salem Street, Abu Dhabi, UAE", sub: "Employment Visa — 2 Years" },
            { icon: "⚡", label: "Immediately Available", sub: "Open to full-time roles" },
            { icon: "🌐", label: "Languages", sub: "English · Tamil" },
            { icon: "🏆", label: "200+ GeeksforGeeks | 50+ LeetCode", sub: "Active problem solver" },
          ].map((item, i) => (
            <div className="about-info-row" key={i}>
              <div className="about-info-icon">{item.icon}</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: "14px" }}>{item.label}</div>
                <div style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "2px" }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="about-text">
            I'm an <strong>IT graduate and Web Developer</strong> with hands-on experience building responsive websites and full-stack web applications. Currently working at <strong>Cybrex Technological Solution, UAE</strong>, where I design and develop WooCommerce eCommerce solutions.
          </p>
          <p className="about-text">
            My backend roots lie in <strong>Python and Django</strong>, where I've built a complete Restaurant Management System with role-based authentication, MySQL integration, and automated order handling. I enjoy bridging the gap between clean UI design and robust backend logic.
          </p>
          <p className="about-text">
            I'm passionate about <strong>continuous learning</strong> — from solving algorithmic challenges on LeetCode and GeeksforGeeks to earning certifications in ML, Data Analytics, and React from platforms like Coursera, IBM, and Udemy.
          </p>
          <div style={{ display: "flex", gap: "16px", marginTop: "32px", flexWrap: "wrap" }}>
            <a href="mailto:mohamedfathil0057@gmail.com" className="btn btn-primary">Email Me</a>
            <a href="tel:+971521973379" className="btn btn-outline">+971 521 973 379</a>
          </div>
        </div>
      </div>
    </section>
  );
}
