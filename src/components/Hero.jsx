export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <div>
          <div className="hero-badge fade-up">
            <span className="hero-badge-dot" />
            Available for opportunities
          </div>
          <h1 className="hero-name fade-up fade-up-delay-1">
            <span className="hero-name-first">Mohamed</span>
            <span className="hero-name-last">Fathil</span>
          </h1>
          <p className="hero-role fade-up fade-up-delay-2">
            <span>Full Stack</span> Web Developer
          </p>
          <p className="hero-desc fade-up fade-up-delay-3">
            IT graduate crafting responsive web experiences with Python Django, WordPress, and modern frontend stacks. Based in Abu Dhabi, UAE.
          </p>
          <div className="hero-actions fade-up fade-up-delay-4">
            <a href="#projects" className="btn btn-primary"
              onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}>
              View Projects →
            </a>
            <a href="#contact" className="btn btn-outline"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
              Get In Touch
            </a>
          </div>
        </div>

        <div className="hero-visual fade-up fade-up-delay-2">
          <div className="hero-3d-card">
            <div className="hero-card-inner">
              <div className="hero-avatar">MF</div>
              <div className="hero-card-name">Mohamed Fathil</div>
              <div className="hero-card-role">JUNIOR WEB DEVELOPER</div>

              <div className="hero-card-stats">
                <div className="stat-box">
                  <div className="stat-num">2+</div>
                  <div className="stat-label">WEB PROJECTS</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num">200+</div>
                  <div className="stat-label">GFG SOLVED</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num">50+</div>
                  <div className="stat-label">LEETCODE</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num">6+</div>
                  <div className="stat-label">CERTS</div>
                </div>
              </div>

              <div className="hero-card-tags">
                <span className="tag">Django</span>
                <span className="tag">WordPress</span>
                <span className="tag">Python</span>
                <span className="tag">React</span>
                <span className="tag">MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
