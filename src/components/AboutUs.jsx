import React, { useState } from "react";
import "./AboutUs.css";

const values = [
  {
    icon: "✦",
    title: "Innovation",
    text: "We turn creative ideas into practical and powerful technology solutions.",
    className: "blue",
  },
  {
    icon: "✓",
    title: "Integrity",
    text: "We build long-term relationships through honesty, transparency and trust.",
    className: "purple",
  },
  {
    icon: "♧",
    title: "Collaboration",
    text: "Great products happen when talented people work together.",
    className: "blue",
  },
  {
    icon: "↗",
    title: "Growth",
    text: "We create solutions that help businesses, teams and people grow.",
    className: "green",
  },
];

const stats = [
  {
    number: "5+",
    label: "Years of Experience",
    icon: "♧",
  },
  {
    number: "50+",
    label: "Happy Clients",
    icon: "♙",
  },
  {
    number: "100+",
    label: "Projects Delivered",
    icon: "🚀",
  },
  {
    number: "99.9%",
    label: "Client Satisfaction",
    icon: "✓",
  },
];

const team = [
  {
    name: "Sidhdhant Dhakad",
    role: "Founder & CEO",
    image: "/team/member-1.jpg",
  },
  {
    name: "Aarav Sharma",
    role: "Frontend Architect",
    image: "/team/member-2.jpg",
  },
  {
    name: "Vikram Mehta",
    role: "Lead Cloud & DevOps",
    image: "/team/member-3.jpg",
  },
  {
    name: "Priya Patel",
    role: "Lead UI/UX Designer",
    image: "/team/member-4.jpg",
  },
];

function AboutUs({ onNavigateHome, onNavigateServices, onOpenVideo, onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="about-page">

      {/* ================= NAVBAR ================= */}
      <header className="about-navbar">
        <div className="about-nav-inner">

          <a href="/" onClick={(e) => { e.preventDefault(); onNavigateHome && onNavigateHome(); }} className="about-logo">
            <div className="logo-mark">
              <svg width="34" height="34" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="aboutLogoGrad" x1="2" y1="2" x2="42" y2="42" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#00c0fa" />
                    <stop offset="50%" stopColor="#1e68f3" />
                    <stop offset="100%" stopColor="#7932e6" />
                  </linearGradient>
                </defs>
                <rect width="44" height="44" rx="12" fill="url(#aboutLogoGrad)" />
                <path d="M14 11H26C31.5 11 35 14.5 35 19.5C35 24.5 31.5 28 26 28H20.5V33H14V11Z" fill="white" />
                <path d="M20.5 16.5H25.5C28.2 16.5 29.8 17.8 29.8 19.5C29.8 21.2 28.2 22.5 25.5 22.5H20.5V16.5Z" fill="url(#aboutLogoGrad)" />
              </svg>
            </div>

            <div className="logo-text">
              <strong>Proagnexa</strong>
              <span>Technology</span>
            </div>
          </a>

          <nav className="about-nav-links">
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigateHome && onNavigateHome(); }}>Home</a>
            <a href="/about" className="active">About Us</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); onNavigateServices && onNavigateServices(); }}>
              Services <span className="nav-arrow">⌄</span>
            </a>
            <a href="#career">Career</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="about-nav-actions">
            <button className="search-button" aria-label="Search" onClick={onOpenSearch}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>

            <a href="#contact" className="get-started-btn">
              Get Started
              <span>→</span>
            </a>
          </div>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

        </div>

        {mobileMenuOpen && (
          <div className="about-mobile-menu">
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigateHome && onNavigateHome(); }}>Home</a>
            <a href="/about" className="active">About Us</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); onNavigateHome && onNavigateHome(); }}>Services</a>
            <a href="#career">Career</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section className="about-hero">

        <div className="hero-decoration hero-circle-one"></div>
        <div className="hero-decoration hero-circle-two"></div>

        <div className="about-container hero-grid">

          {/* LEFT */}
          <div className="about-hero-content">

            <div className="section-pill">
              <span className="pill-icon">✦</span>
              About Us
            </div>

            <div className="eyebrow">
              PROAGNEXA TECHNOLOGY
            </div>

            <h1>
              Building Innovative
              <br />
              Solutions for a
              <br />
              <span className="gradient-text">Brighter Future</span>
            </h1>

            <p>
              We are a team of passionate developers, designers and
              problem solvers dedicated to creating technology that
              makes a real difference.
            </p>

            <p>
              At Proagnexa Technology, we turn ideas into scalable
              digital solutions that help businesses grow and succeed
              in the digital world.
            </p>

            <div className="hero-buttons">

              <a href="#services" onClick={(e) => { e.preventDefault(); onNavigateHome && onNavigateHome(); }} className="primary-btn">
                Our Services
                <span>→</span>
              </a>

              <button className="secondary-btn" onClick={onOpenVideo}>
                <span className="play-icon">▶</span>
                Watch Our Story
              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div className="about-hero-visual">

            <div className="image-glow"></div>

            <div className="hero-image-wrapper">
              <img
                src="/about-team.jpg"
                alt="Proagnexa Technology team"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80";
                }}
              />

              <div className="image-overlay"></div>
            </div>

            <div className="floating-about-card">
              <div className="floating-card-icon">
                🚀
              </div>

              <div>
                <strong>
                  Technology for a
                  <br />
                  better tomorrow
                </strong>
              </div>

              <span className="floating-arrow">
                →
              </span>
            </div>

            <div className="small-dot dot-one"></div>
            <div className="small-dot dot-two"></div>
            <div className="small-dot dot-three"></div>

          </div>

        </div>
      </section>

      {/* ================= STORY + VALUES ================= */}
      <section className="story-section">

        <div className="about-container story-grid">

          {/* STORY */}
          <div className="story-content">

            <div className="small-section-label">
              Our Story
            </div>

            <h2>
              From Ideas to
              <span className="gradient-text"> Impact</span>
            </h2>

            <p>
              Proagnexa Technology started with a simple vision —
              to bridge the gap between technology and real-world needs.
              What began as a small team of passionate technology
              enthusiasts has grown into a trusted technology partner
              for businesses, startups and enterprises.
            </p>

            <p>
              We believe in innovation, collaboration and continuous
              learning. Our team works together to build solutions that
              are not just functional, but also secure, scalable and
              future-ready.
            </p>

            <div className="story-quote">
              <span>
                "We don't just build software,
                <br />
                we build your digital future."
              </span>
            </div>

          </div>

          {/* VALUES */}
          <div className="values-content">

            <div className="values-heading">
              <h3>Our Values</h3>
              <p>
                Core values that drive everything we do
              </p>
            </div>

            <div className="values-grid">

              {values.map((value) => (
                <div
                  className="value-card"
                  key={value.title}
                >

                  <div
                    className={`value-icon ${value.className}`}
                  >
                    {value.icon}
                  </div>

                  <div>
                    <h4>{value.title}</h4>
                    <p>{value.text}</p>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats-section">

        <div className="about-container">

          <div className="stats-card">

            {stats.map((stat, index) => (
              <React.Fragment key={stat.label}>

                <div className="stat-item">

                  <div className="stat-icon">
                    {stat.icon}
                  </div>

                  <div>
                    <strong>{stat.number}</strong>
                    <span>{stat.label}</span>
                  </div>

                </div>

                {index !== stats.length - 1 && (
                  <div className="stat-divider"></div>
                )}

              </React.Fragment>
            ))}

          </div>

        </div>

      </section>

      {/* ================= TEAM ================= */}
      <section className="team-section">

        <div className="about-container">

          <div className="team-header">

            <div className="team-intro">

              <div className="small-section-label">
                Our Team
              </div>

              <h2>
                Meet Our <span className="gradient-text">Team</span>
              </h2>

              <p>
                A group of passionate and skilled professionals
                working together to bring your ideas to life.
              </p>

              <a href="#career" className="outline-btn">
                Join Our Team
                <span>→</span>
              </a>

            </div>

            <div className="team-gradient-text">
              Great things happen
              <br />
              when people work together.
            </div>

          </div>

          <div className="team-grid">

            {team.map((member, i) => (
              <div className="team-card" key={member.name}>

                <div className="team-image">
                  <img
                    src={member.image}
                    alt={member.name}
                    onError={(e) => {
                      const fallbacks = [
                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
                        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
                      ];
                      e.currentTarget.src = fallbacks[i % fallbacks.length];
                    }}
                  />
                </div>

                <div className="team-info">

                  <h3>{member.name}</h3>

                  <p>{member.role}</p>

                  <div className="social-links">
                    <a href="#linkedin" aria-label="LinkedIn">in</a>
                    <a href="#github" aria-label="GitHub">⌘</a>
                    <a href="#x" aria-label="X">𝕏</a>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="about-cta">

        <div className="cta-decoration cta-decoration-one"></div>
        <div className="cta-decoration cta-decoration-two"></div>

        <div className="about-container">

          <div className="cta-card">

            <div>
              <div className="cta-label">
                LET'S BUILD SOMETHING GREAT
              </div>

              <h2>
                Have an idea?
                <br />
                <span className="gradient-text">Let's bring it to life.</span>
              </h2>

              <p>
                Let's work together to create technology that
                makes a meaningful impact.
              </p>
            </div>

            <a href="#contact" className="cta-button">
              Start a Conversation
              <span>→</span>
            </a>

          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="about-footer">

        <div className="about-container footer-grid">

          <div className="footer-brand">

            <a href="/" onClick={(e) => { e.preventDefault(); onNavigateHome && onNavigateHome(); }} className="about-logo">
              <div className="logo-mark">
                <svg width="32" height="32" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="44" height="44" rx="12" fill="url(#aboutLogoGrad)" />
                  <path d="M14 11H26C31.5 11 35 14.5 35 19.5C35 24.5 31.5 28 26 28H20.5V33H14V11Z" fill="white" />
                  <path d="M20.5 16.5H25.5C28.2 16.5 29.8 17.8 29.8 19.5C29.8 21.2 28.2 22.5 25.5 22.5H20.5V16.5Z" fill="url(#aboutLogoGrad)" />
                </svg>
              </div>

              <div className="logo-text">
                <strong>Proagnexa</strong>
                <span>Technology</span>
              </div>
            </a>

            <p>
              Your technology partner for a smarter tomorrow.
            </p>

          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <a href="/about">About Us</a>
            <a href="#career">Career</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <a href="#services" onClick={(e) => { e.preventDefault(); onNavigateHome && onNavigateHome(); }}>Cloud</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); onNavigateHome && onNavigateHome(); }}>DevOps</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); onNavigateHome && onNavigateHome(); }}>Mobile Apps</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); onNavigateHome && onNavigateHome(); }}>IT Consulting</a>
          </div>

          <div className="footer-column">
            <h4>Connect</h4>
            <a href="#linkedin">LinkedIn</a>
            <a href="#github">GitHub</a>
            <a href="#instagram">Instagram</a>
          </div>

        </div>

        <div className="footer-bottom">
          <div className="about-container">
            © {new Date().getFullYear()} Proagnexa Technology. All rights reserved.
          </div>
        </div>

      </footer>

    </div>
  );
}

export default AboutUs;
