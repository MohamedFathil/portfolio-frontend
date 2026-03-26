const NAV_ITEMS = ["About", "Skills", "Experience", "Projects", "Certifications", "Contact"];

export default function Navbar({ scrollY }) {
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrollY > 50 ? "scrolled" : ""}`}>
      <a href="#hero" className="nav-logo">MF.</a>
      <ul className="nav-links">
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
        style={{ fontSize: "12px", padding: "10px 20px" }}
      >
        Hire Me
      </a>
    </nav>
  );
}
