import React, { useState } from 'react';
import './WhiteLabelDevelopmentServices.css';

const whiteLabelPillars = [
  {
    id: 'web-development',
    icon: '💻',
    title: 'Web Application Development',
    badge: 'Enterprise Web Solutions',
    technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'Laravel', 'Django', 'Spring Boot', 'Cloud-Native'],
    description: 'We build custom web applications — including ERP systems, CRM platforms, interactive dashboards, e-commerce stores, and SaaS products — that your agency can present as its own.',
    howItWorks: 'Our team collaborates closely with your project managers, follows your chosen methodologies (Agile, Scrum, or Kanban), and delivers white-labeled solutions that precisely meet your client’s technical and business requirements.',
    valueForAgencies: 'You can confidently pitch and deliver complex, enterprise-level web solutions without the overhead, payroll risk, and time investment of hiring and training in-house engineers.',
  },
  {
    id: 'mobile-development',
    icon: '📱',
    title: 'Mobile Application Development',
    badge: 'Dual-Platform Mobile',
    technologies: ['Flutter (Dart)', 'React Native', 'Swift (iOS)', 'Kotlin (Android)', 'Firebase', 'AWS Amplify', 'App Store Connect'],
    description: 'Mobile experiences are critical for modern businesses. We provide cross-platform apps using Flutter and React Native as well as high-performance native iOS and Android applications.',
    howItWorks: 'Apps are engineered, tested, and styled to reflect your client’s exact brand identity, ensuring seamless continuity with your agency’s UI/UX designs, strategic vision, and quality standards.',
    valueForAgencies: 'Instantly expands your agency’s service portfolio, allowing you to win and deliver mobile solutions without managing separate, expensive iOS and Android specialized development teams.',
  },
  {
    id: 'api-integrations',
    icon: '🔗',
    title: 'API & Integration Services',
    badge: 'Connected Ecosystem',
    technologies: ['RESTful APIs', 'GraphQL', 'gRPC', 'OAuth 2.0 / JWT', 'Stripe & PayPal', 'Salesforce & HubSpot', 'Custom Webhooks'],
    description: 'A great application is often only as powerful as the integrations it supports. We provide secure API development and third-party integrations to deliver complete, interconnected digital systems to your clients.',
    howItWorks: 'Our engineers build resilient, documented APIs and integrate mission-critical CRMs, ERPs, payment gateways, analytics platforms, and enterprise tools with ironclad security protocols.',
    valueForAgencies: 'Positions your agency as an all-in-one digital partner capable of handling both standalone software and intricate enterprise system integrations end-to-end.',
  },
];

const keyFeatures = [
  {
    icon: '🏷️',
    title: 'Full Brand Ownership',
    description: 'All deliverables carry your agency’s name and branding exclusively, reinforcing your market authority and client loyalty.',
  },
  {
    icon: '📈',
    title: 'Scalable Delivery Model',
    description: 'Effortlessly take on larger, higher-value client contracts without expanding your fixed internal headcount.',
  },
  {
    icon: '🛠️',
    title: 'Multi-Discipline Expertise',
    description: 'Instant access to a seasoned team proficient in modern frontend, backend, native mobile, and API architecture.',
  },
  {
    icon: '🔒',
    title: 'Confidentiality & Trust',
    description: 'Strict non-disclosure agreements (NDAs) protect your client relationships. We remain 100% behind the scenes.',
  },
  {
    icon: '💰',
    title: 'High-Margin Revenue Growth',
    description: 'Expand your billable offerings and capture lucrative recurring projects without incurring infrastructure overhead.',
  },
];

const testimonials = [
  ['Michael Lee', 'We chose Proagnexa Technology for their industry-specific automation expertise. The solutions were tailor-made for our retail operations and helped us scale faster while reducing operational costs.'],
  ['Priya Mehta', 'What impressed us most is their dedicated support team and post-launch maintenance. They ensured smooth system performance and proactive updates, which made them a long-term technology partner for us.'],
  ['Amit Jain', 'Proagnexa Technology helped us automate our logistics workflows end-to-end. Their expertise in RPA and process automation reduced our manual workload by 40%, improving efficiency and accuracy across departments.'],
  ['Anuj Goyal', 'Their team delivered a secure and compliant solution for our financial platform. We were impressed with their commitment to data security and regulatory compliance, which gave us complete peace of mind.'],
];

export default function WhiteLabelDevelopmentServices() {
  const [activePillar, setActivePillar] = useState('web-development');

  const selectedPillar = whiteLabelPillars.find((p) => p.id === activePillar) || whiteLabelPillars[0];

  return (
    <div className="whitelabel-page">
      {/* ================= HERO SECTION ================= */}
      <section className="whitelabel-hero">
        <div className="whitelabel-hero-glow glow-blue"></div>
        <div className="whitelabel-hero-glow glow-violet"></div>

        <div className="whitelabel-hero-container">
          <div className="whitelabel-hero-content">
            <div className="whitelabel-badge">
              <span className="whitelabel-badge-icon">🤝</span>
              White-Label Development Services
            </div>

            <p className="whitelabel-brand-label">PROAGNEXA TECHNOLOGY</p>

            <h1>
              White-Label Development<br />
              <span>Services for Agencies.</span>
            </h1>

            <p className="whitelabel-hero-lead">
              At Proagnexa Technology, we offer White-Label Development Services that empower digital agencies, consultancies, and technology resellers to deliver enterprise-grade solutions under their own brand. In today’s competitive market, agencies must demonstrate technical capability to win high-value projects — but building and maintaining an in-house development team can be costly and time-consuming. Our white-label offering acts as a complete backend execution partner, allowing agencies to scale their delivery capacity, expand service portfolios, and maintain full client ownership.
            </p>

            <p className="whitelabel-hero-sublead">
              This partnership enables agencies to focus on client acquisition, strategy, and brand positioning while we handle the end-to-end execution of projects. Every deliverable is produced with your brand identity in mind, ensuring that your agency remains the face of the solution in front of your clients.
            </p>

            <div className="whitelabel-hero-actions">
              <a href="/contact" className="whitelabel-btn-primary">
                Partner With Us Today
                <span>→</span>
              </a>
              <a href="#pillars" className="whitelabel-btn-secondary">
                Explore White-Label Offerings
              </a>
            </div>

            <div className="whitelabel-stack-badges">
              <span>AGENCY PARTNERSHIP PILLARS:</span>
              <div className="stack-badges-wrap">
                <strong>100% Strict NDA Protection</strong>
                <strong>Zero Proagnexa Branding</strong>
                <strong>Agile &amp; Scrum Delivery</strong>
                <strong>Dedicated Account Manager</strong>
                <strong>White-Label Documentation</strong>
              </div>
            </div>
          </div>

          {/* Right Visual: Agency White-Label Management Cockpit */}
          <div className="whitelabel-hero-visual">
            <div className="agency-dashboard-mockup">
              <div className="mockup-header-bar">
                <div className="mockup-header-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="mockup-portal-badge">
                  <span>🔒</span>
                  <span>agency-partner-portal.internal</span>
                </div>
              </div>

              <div className="mockup-dashboard-body">
                <div className="agency-brand-banner">
                  <div className="agency-logo-placeholder">YOUR LOGO HERE</div>
                  <span className="nda-chip">🛡️ 100% NDA Protected</span>
                </div>

                <div className="agency-kpi-grid">
                  <div className="agency-kpi-card">
                    <small>Active Projects</small>
                    <strong>12 In-Flight</strong>
                    <span className="kpi-status-green">● On-Track</span>
                  </div>
                  <div className="agency-kpi-card">
                    <small>Delivery Capacity</small>
                    <strong>Unlimited</strong>
                    <span className="kpi-status-blue">● On-Demand</span>
                  </div>
                </div>

                <div className="agency-project-item">
                  <div className="project-icon">💻</div>
                  <div className="project-info">
                    <strong>Enterprise ERP Platform</strong>
                    <small>Delivered under Agency Brand • Sprint 6/8</small>
                  </div>
                  <span className="stage-badge">98% Done</span>
                </div>

                <div className="agency-project-item">
                  <div className="project-icon">📱</div>
                  <div className="project-info">
                    <strong>iOS &amp; Android Fintech App</strong>
                    <small>White-labeled Swift &amp; Kotlin codebase</small>
                  </div>
                  <span className="stage-badge">Review</span>
                </div>

                <div className="agency-footer-callout">
                  <span className="callout-icon">⭐</span>
                  <div>
                    <strong>Your Agency Takes 100% of the Credit</strong>
                    <small>We remain your silent, reliable backend tech partner.</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-agency-badge badge-top-right">
              <span>🛡️</span>
              <div>
                <strong>Strict NDA Enforced</strong>
                <small>Complete Client Confidentiality</small>
              </div>
            </div>

            <div className="floating-agency-badge badge-bottom-left">
              <span>🚀</span>
              <div>
                <strong>10x Agency Scale</strong>
                <small>Without New Fixed Payroll</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3 PILLARS SECTION ================= */}
      <section className="whitelabel-pillars-section" id="pillars">
        <div className="whitelabel-section-heading">
          <p>WHITE-LABEL EXECUTION SERVICES</p>
          <h2>
            Full-Spectrum Digital Services<br />
            <span>Under Your Agency Brand.</span>
          </h2>
          <p>
            Whether your clients need full-stack enterprise web portals, cross-platform mobile apps, or robust third-party API integrations, we engineer it quietly to your specifications.
          </p>
        </div>

        {/* Pillar Tabs */}
        <div className="whitelabel-tabs">
          {whiteLabelPillars.map((p) => (
            <button
              type="button"
              key={p.id}
              className={`whitelabel-tab-btn ${activePillar === p.id ? 'active' : ''}`}
              onClick={() => setActivePillar(p.id)}
            >
              <span className="tab-icon">{p.icon}</span>
              <span className="tab-title">{p.title}</span>
            </button>
          ))}
        </div>

        {/* Detailed Active Card */}
        <div className="whitelabel-active-card">
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
              <span className="box-heading">HOW IT WORKS WITH YOUR AGENCY</span>
              <p>{selectedPillar.howItWorks}</p>
            </div>

            <div className="breakdown-box highlight">
              <span className="box-heading">VALUE FOR YOUR AGENCY &amp; MARGINS</span>
              <p>{selectedPillar.valueForAgencies}</p>
            </div>
          </div>

          <div className="active-tech-footer">
            <span>Core Technologies &amp; Frameworks:</span>
            <div className="tech-chips-list">
              {selectedPillar.technologies.map((t) => (
                <span key={t} className="tech-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="whitelabel-pillars-grid">
          {whiteLabelPillars.map((pillar) => (
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
                View Agency Delivery Model <span>→</span>
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="whitelabel-features-section">
        <div className="whitelabel-section-heading">
          <p>ENGINEERED FOR PARTNERSHIP</p>
          <h2>
            Key Features of Our<br />
            <span>White-Label Development Services.</span>
          </h2>
        </div>

        <div className="whitelabel-features-grid">
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
      <section className="whitelabel-testimonials-section">
        <div className="whitelabel-section-heading">
          <p>WHY PARTNERS TRUST US</p>
          <h2>
            Proven Enterprise Results<br />
            <span>With Proagnexa Technology.</span>
          </h2>
        </div>

        <div className="whitelabel-testimonials-grid">
          {testimonials.map(([name, quote]) => (
            <article className="whitelabel-testimonial-card" key={name}>
              <div className="stars" aria-label="5 stars">★★★★★</div>
              <p>&ldquo;{quote}&rdquo;</p>
              <strong>{name}</strong>
              <span>Verified Client Partner</span>
            </article>
          ))}
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="whitelabel-cta-section">
        <div className="whitelabel-cta-box">
          <p className="cta-pretitle">SILENT EXECUTION PARTNER</p>
          <h2>
            Scale Your Agency With<br />
            <span>White-Label Development Power.</span>
          </h2>
          <p>
            With our White-Label Development Services, agencies gain a silent execution partner who delivers enterprise-grade solutions while keeping the agency’s brand front and center — allowing them to win bigger projects, retain full client credit, and grow their business with confidence.
          </p>
          <a href="/contact" className="cta-button-primary">
            Become an Agency Partner <span>→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
