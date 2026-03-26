import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setLoading(false);
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section className="section" id="contact">
      <span className="section-label">06 — Contact</span>
      <h2 className="section-title">Let's Connect</h2>

      <div className="contact-grid">
        <div>
          <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.8", marginBottom: "32px" }}>
            I'm actively looking for new opportunities in the UAE. Whether you have a project, a job offer, or just want to say hi — my inbox is always open.
          </p>

          <div className="contact-info">
            {[
              { icon: "✉️", label: "Email", value: "mohamedfathil0057@gmail.com", href: "mailto:mohamedfathil0057@gmail.com", bg: "linear-gradient(135deg, #00e5ff, #7c3aed)" },
              { icon: "📱", label: "Phone", value: "+971 521 973 379", href: "tel:+971521973379", bg: "linear-gradient(135deg, #7c3aed, #f0abfc)" },
              { icon: "📍", label: "Location", value: "Salem Street, Abu Dhabi, UAE", href: "#", bg: "linear-gradient(135deg, #00ffa3, #00e5ff)" },
            ].map((c, i) => (
              <a className="contact-item" key={i} href={c.href}>
                <div className="contact-icon" style={{ background: c.bg }}>{c.icon}</div>
                <div>
                  <div className="contact-label">{c.label}</div>
                  <div className="contact-value">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input className="form-input" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="form-input" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Subject</label>
            <input className="form-input" name="subject" value={form.subject} onChange={handleChange} placeholder="Job Opportunity / Project" />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea className="form-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Tell me about the opportunity..." required />
          </div>

          {status === "success" && (
            <div style={{ padding: "14px 18px", borderRadius: "10px", background: "rgba(0,255,163,0.1)", border: "1px solid rgba(0,255,163,0.3)", color: "var(--accent-green)", fontSize: "14px" }}>
              ✅ Message sent! I'll get back to you soon.
            </div>
          )}
          {status === "error" && (
            <div style={{ padding: "14px 18px", borderRadius: "10px", background: "rgba(255,80,80,0.1)", border: "1px solid rgba(255,80,80,0.3)", color: "#ff8080", fontSize: "14px" }}>
              ❌ Something went wrong. Please email me directly.
            </div>
          )}

          <button type="submit" className="btn btn-primary" disabled={loading} style={{ alignSelf: "flex-start" }}>
            {loading ? "Sending..." : "Send Message →"}
          </button>
        </form>
      </div>

      <footer className="footer" style={{ marginTop: "80px" }}>
        Built with <span>React</span> & <span>Django</span> · Designed by <span>Mohamed Fathil</span> · © 2025
      </footer>
    </section>
  );
}
