import React, { useState } from 'react';
import './WebApplicationDevelopment.css';

const webPillars = [
  {
    id: 'custom-web',
    icon: '🏢',
    title: 'Custom Web Applications',
    badge: 'Enterprise Tailored',
    technologies: ['Custom ERP & CRM', 'Interactive Dashboards', 'E-Commerce Portals', 'Cloud Workflows'],
    description: 'Every enterprise has unique requirements, and off-the-shelf solutions often fall short. We design and develop custom web applications tailored to your organizational workflows and growth objectives.',
    howItWorks: 'Through a rigorous consultative discovery, we analyze requirements, architect scalable domain models, and deliver purpose-built software that fits seamlessly into existing operations.',
    enterpriseValue: 'Substantially elevates workplace productivity, cuts manual data entry by up to 60%, and delivers measurable ROI through tailored business automation.',
  },
  {
    id: 'frontend',
    icon: '🎨',
    title: 'Frontend Development',
    badge: 'High-Performance UI/UX',
    technologies: ['React', 'Next.js', 'Vue.js', 'Nuxt.js', 'Angular', 'TypeScript', 'Tailwind/Vanilla CSS'],
    description: 'The frontend is the face of every digital product. We create intuitive, lightning-fast, and user-centric web interfaces using modern component architecture.',
    howItWorks: 'Our engineers build responsive, accessible (WCAG compliant), and Core Web Vitals-optimized web interfaces designed for pixel-perfect performance across desktops, tablets, and phones.',
    enterpriseValue: 'Delivers superior UI/UX, increases user retention, drives customer conversions, and reinforces a modern, trustworthy brand identity.',
  },
  {
    id: 'backend',
    icon: '⚙️',
    title: 'Backend Development',
    badge: 'Robust Server Core',
    technologies: ['Node.js & Express', 'Python (Django & Flask)', 'PHP & Laravel', 'Java Spring Boot', 'PostgreSQL', 'MongoDB', 'Redis'],
    description: 'The backend is the engine of any mission-critical application. We engineer secure, scalable, and high-throughput server-side architectures built to handle immense traffic.',
    howItWorks: 'Databases, caching layers, message queues, and complex business logic are designed with fault-tolerant microservices or modular monoliths.',
    enterpriseValue: 'Ensures flawless data integrity, supports high concurrency without slowdowns, and maintains bank-grade security for corporate records.',
  },
  {
    id: 'api-integration',
    icon: '🔗',
    title: 'API Development & Integration',
    badge: 'Connected Ecosystem',
    technologies: ['RESTful APIs', 'GraphQL', 'gRPC', 'Swagger/OpenAPI', 'OAuth 2.0 & JWT', 'Stripe/PayPal APIs', 'Webhook Gateways'],
    description: 'Modern businesses thrive on seamless connectivity. We build and integrate secure APIs that link your applications with payment gateways, CRMs, ERPs, and cloud services.',
    howItWorks: 'We design standardized, version-controlled endpoints with automated documentation, rate-limiting, and encrypted authentication tokens.',
    enterpriseValue: 'Guarantees frictionless system interoperability, automates cross-platform workflows, and allows extending functionality without rewriting core software.',
  },
  {
    id: 'saas-development',
    icon: '☁️',
    title: 'SaaS Application Development',
    badge: 'Recurring Revenue',
    technologies: ['Multi-Tenant Architecture', 'Stripe Billing & Subscriptions', 'RBAC & Tenant Isolation', 'Docker & Kubernetes', 'Real-time Analytics'],
    description: 'Software-as-a-Service (SaaS) products are at the heart of the digital economy. We specialize in engineering multi-tenant SaaS platforms that are secure, scalable, and ready to monetize.',
    howItWorks: 'SaaS architectures are developed with tenant data isolation, automated onboarding, tier-based feature gating, recurring billing, and real-time usage metrics.',
    enterpriseValue: 'Unlocks recurring revenue streams, scales to thousands of paying organizations without code changes, and maximizes lifetime customer value.',
  },
];

const keyFeatures = [
  {
    icon: '🛠️',
    title: 'Tailored Solutions',
    description: 'Applications precision-engineered to match your exact corporate workflows and competitive goals.',
  },
  {
    icon: '⚡',
    title: 'Seamless User Experiences',
    description: 'Responsive, fast-loading, and intuitive interfaces optimized for all modern screens.',
  },
  {
    icon: '📈',
    title: 'Scalable Backends',
    description: 'Robust distributed server architectures capable of handling exponential traffic and data volume.',
  },
  {
    icon: '🔗',
    title: 'Interoperability',
    description: 'Secure, standards-compliant APIs and integrations that unify disparate enterprise platforms.',
  },
  {
    icon: '🚀',
    title: 'Future-Ready SaaS Platforms',
    description: 'Multi-tenant cloud platforms designed for rapid monetization and continuous deployment.',
  },
];

const testimonials = [
  ['Anuj Goyal', 'Their team delivered a secure and compliant solution for our financial platform. We were impressed with their commitment to data security and regulatory compliance, which gave us complete peace of mind.'],
  ['Michael Lee', 'We chose Proagnexa Technology for their industry-specific automation expertise. The solutions were tailor-made for our retail operations and helped us scale faster while reducing operational costs.'],
  ['Priya Mehta', 'What impressed us most is their dedicated support team and post-launch maintenance. They ensured smooth system performance and proactive updates, which made them a long-term technology partner for us.'],
  ['Amit Jain', 'Proagnexa Technology helped us automate our logistics workflows end-to-end. Their expertise in RPA and process automation reduced our manual workload by 40%, improving efficiency and accuracy across departments.'],
];

export default function WebApplicationDevelopment() {
  const [activePillar, setActivePillar] = useState('custom-web');

  const selectedPillar = webPillars.find((p) => p.id === activePillar) || webPillars[0];

  return (
    <div className="webapp-page">
      {/* ================= HERO SECTION ================= */}
      <section className="webapp-hero">
        <div className="webapp-hero-glow glow-blue"></div>
        <div className="webapp-hero-glow glow-indigo"></div>

        <div className="webapp-hero-container">
          <div className="webapp-hero-content">
            <div className="webapp-badge">
              <span className="webapp-badge-icon">💻</span>
              Web Application Development Services
            </div>

            <p className="webapp-brand-label">PROAGNEXA TECHNOLOGY</p>

            <h1>
              Web Application<br />
              <span>Development Services.</span>
            </h1>

            <p className="webapp-hero-lead">
              At Proagnexa Technology, we specialize in building robust, scalable, and secure web applications that empower enterprises to achieve digital transformation and deliver exceptional user experiences. In today’s competitive digital landscape, web applications are fundamental to driving efficiency, engagement, and sustainable growth.
            </p>

            <p className="webapp-hero-sublead">
              Our Web Application Development services combine modern frontend technologies, powerful backend frameworks, and secure integration capabilities to create end-to-end solutions—from custom ERP and CRM platforms to high-growth SaaS products.
            </p>

            <div className="webapp-hero-actions">
              <a href="/contact" className="webapp-btn-primary">
                Discuss Your Web Project
                <span>→</span>
              </a>
              <a href="#pillars" className="webapp-btn-secondary">
                Explore Full Capabilities
              </a>
            </div>

            <div className="webapp-stack-badges">
              <span>PROVEN FULL-STACK EXPERTISE:</span>
              <div className="stack-badges-wrap">
                <strong>React / Next.js</strong>
                <strong>Node.js / Express</strong>
                <strong>Python / Django</strong>
                <strong>Laravel</strong>
                <strong>PostgreSQL / MongoDB</strong>
              </div>
            </div>
          </div>

          {/* Right Visual: Interactive Web Application Dashboard Preview */}
          <div className="webapp-hero-visual">
            <div className="browser-mockup">
              <div className="browser-chrome">
                <div className="browser-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="browser-url-bar">
                  <span className="lock-icon">🔒</span>
                  <span>https://app.proagnexa.com/enterprise-suite</span>
                </div>
              </div>

              <div className="browser-body">
                <div className="browser-sidebar">
                  <div className="mini-logo">P</div>
                  <div className="sidebar-line active"></div>
                  <div className="sidebar-line"></div>
                  <div className="sidebar-line"></div>
                  <div className="sidebar-line"></div>
                </div>

                <div className="browser-content-area">
                  <div className="content-top-stats">
                    <div className="stat-pill">
                      <small>Live Users</small>
                      <strong>24.8k Active</strong>
                    </div>
                    <div className="stat-pill">
                      <small>API Response</small>
                      <strong>32ms Avg</strong>
                    </div>
                    <div className="stat-pill">
                      <small>System Health</small>
                      <strong>99.99%</strong>
                    </div>
                  </div>

                  <div className="content-chart-box">
                    <div className="chart-header">
                      <strong>Enterprise SaaS Throughput</strong>
                      <span className="chart-tag">Real-Time</span>
                    </div>
                    <div className="chart-bars">
                      <div className="bar bar-1"></div>
                      <div className="bar bar-2"></div>
                      <div className="bar bar-3"></div>
                      <div className="bar bar-4"></div>
                      <div className="bar bar-5"></div>
                      <div className="bar bar-6"></div>
                      <div className="bar bar-7"></div>
                    </div>
                  </div>

                  <div className="content-footer-row">
                    <span className="secure-badge">🛡️ Bank-Grade Encryption &amp; OAuth 2.0</span>
                    <button type="button" className="mock-btn">Deploy v2.4 →</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-web-badge badge-top-right">
              <span>⚡</span>
              <div>
                <strong>React + Node.js</strong>
                <small>Lightning Fast Speeds</small>
              </div>
            </div>

            <div className="floating-web-badge badge-bottom-left">
              <span>☁️</span>
              <div>
                <strong>Multi-Tenant SaaS</strong>
                <small>Scalable Architecture</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5 PILLARS SECTION ================= */}
      <section className="webapp-pillars-section" id="pillars">
        <div className="webapp-section-heading">
          <p>FULL LIFECYCLE DEVELOPMENT</p>
          <h2>
            Comprehensive Web Application<br />
            <span>Development Offerings.</span>
          </h2>
          <p>
            From custom ERP and CRM systems to scalable SaaS platforms and API integration, our solutions are engineered to support current operations while remaining adaptable for future business needs.
          </p>
        </div>

        {/* Pillar Tabs */}
        <div className="webapp-tabs">
          {webPillars.map((p) => (
            <button
              type="button"
              key={p.id}
              className={`webapp-tab-btn ${activePillar === p.id ? 'active' : ''}`}
              onClick={() => setActivePillar(p.id)}
            >
              <span className="tab-icon">{p.icon}</span>
              <span className="tab-title">{p.title}</span>
            </button>
          ))}
        </div>

        {/* Detailed Active Card */}
        <div className="webapp-active-card">
          <div className="active-card-header">
            <div className="active-icon-box">{selectedPillar.icon}</div>
            <div>
              <span className="active-badge-pill">{selectedPillar.badge}</span>
              <h3>{selectedPillar.title}</h3>
              <p className="active-description">{selectedPillar.description}</p>
            </div>
          </div>

          <div className="active-breakdown-grid">
            <div className="breakdown-box">
              <span className="box-heading">HOW IT WORKS</span>
              <p>{selectedPillar.howItWorks}</p>
            </div>

            <div className="breakdown-box highlight">
              <span className="box-heading">ENTERPRISE BUSINESS VALUE</span>
              <p>{selectedPillar.enterpriseValue}</p>
            </div>
          </div>

          <div className="active-tech-footer">
            <span>Primary Technologies &amp; Frameworks:</span>
            <div className="tech-chips-list">
              {selectedPillar.technologies.map((t) => (
                <span key={t} className="tech-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 5 Pillars Grid */}
        <div className="webapp-pillars-grid">
          {webPillars.map((pillar) => (
            <article
              key={pillar.id}
              className={`pillar-card ${activePillar === pillar.id ? 'active' : ''}`}
              onClick={() => setActivePillar(pillar.id)}
            >
              <div className="pillar-icon">{pillar.icon}</div>
              <span className="pillar-tag">{pillar.badge}</span>
              <h4>{pillar.title}</h4>
              <p>{pillar.description}</p>
              <span className="pillar-link">
                View Architecture Breakdown <span>→</span>
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="webapp-features-section">
        <div className="webapp-section-heading">
          <p>ENGINEERED FOR EXCELLENCE</p>
          <h2>
            Key Features of Our<br />
            <span>Web Application Development.</span>
          </h2>
        </div>

        <div className="webapp-features-grid">
          {keyFeatures.map((f) => (
            <div className="feature-item" key={f.title}>
              <div className="feature-icon-circle">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="webapp-testimonials-section">
        <div className="webapp-section-heading">
          <p>WHAT OUR CLIENTS SAY</p>
          <h2>
            Why Businesses Trust<br />
            <span>Proagnexa Technology.</span>
          </h2>
        </div>

        <div className="webapp-testimonials-grid">
          {testimonials.map(([name, quote]) => (
            <article className="webapp-testimonial-card" key={name}>
              <div className="stars" aria-label="5 stars">★★★★★</div>
              <p>&ldquo;{quote}&rdquo;</p>
              <strong>{name}</strong>
              <span>Verified Client Partner</span>
            </article>
          ))}
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="webapp-cta-section">
        <div className="webapp-cta-box">
          <p className="cta-pretitle">STRATEGIC DIGITAL PLATFORMS</p>
          <h2>
            Transform Your Business With a<br />
            <span>Custom Web Application.</span>
          </h2>
          <p>
            With our Web Application Development services, enterprises gain more than just software—they gain strategic digital platforms that enable innovation, efficiency, and sustainable growth.
          </p>
          <a href="/contact" className="cta-button-primary">
            Start Your Web Project <span>→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
