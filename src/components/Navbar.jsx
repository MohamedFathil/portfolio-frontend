import { useState } from "react";

const NAV_ITEMS = ["About", "Skills", "Experience", "Projects", "Certifications", "Contact"];

export default function Navbar({ scrollY }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <nav className={`navbar ${scrollY > 50 ? "scrolled" : ""}`}>
      <a href="#hero" className="nav-logo">MF.</a>

      {/* Desktop Menu */}
      <ul className="nav-links">
        {NAV_ITEMS.map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollTo(item); }}>
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <div className={`bar ${isMobileMenuOpen ? "bar1-open" : ""}`}></div>
        <div className={`bar ${isMobileMenuOpen ? "bar2-open" : ""}`}></div>
        <div className={`bar ${isMobileMenuOpen ? "bar3-open" : ""}`}></div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollTo(item); }}>
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:mohamedfathil0057@gmail.com"
          className="btn btn-primary"
          style={{ marginTop: '20px', width: '100%' }}
        >
          Hire Me
        </a>
      </div>

      <a
        href="mailto:mohamedfathil0057@gmail.com"
        className="btn btn-primary hire-me-btn"
      >
        Hire Me
      </a>
    </nav>
  );
}