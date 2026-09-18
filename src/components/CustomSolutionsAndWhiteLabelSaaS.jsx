import React, { useState } from 'react';
import './CustomSolutionsAndWhiteLabelSaaS.css';

const saasPillars = [
  {
    id: 'mini-erp-crm',
    icon: '📊',
    title: 'Mini-ERP & CRM Platforms',
    badge: 'Turnkey Operations Platform',
    technologies: ['React & Next.js', 'Node.js & Python', 'Multi-Tenant PostgreSQL', 'Automated Invoicing & Invoicing', 'Lead Pipeline & RBAC'],
    description: 'Many clients require lightweight, cost-effective systems for managing day-to-day operations, customer pipelines, and inventory without the bloat of legacy enterprise suites.',
    howItWorks: 'We deliver fully functional, modular ERP/CRM solutions equipped with inventory tracking, invoicing, automated quotation generation, sales funnels, and real-time executive analytics.',
    enterpriseValue: 'Agencies can offer clients a complete digital operations platform within days, enhancing client retention, commanding recurring SaaS fees, and creating lucrative upsell opportunities for custom workflows.',
  },
  {
    id: 'ecommerce-solutions',
    icon: '🛒',
    title: 'eCommerce Solutions',
    badge: 'High-Converting Commerce',
    technologies: ['Headless Storefronts', 'Stripe & Global Gateways', 'Inventory Sync Engine', 'Cart Abandonment Recovery', 'Automated Fulfillment'],
    description: 'We provide ready-to-deploy, high-performance eCommerce platforms that support physical and digital products, subscription tiers, multi-currency checkouts, and fulfillment automation.',
    howItWorks: 'Our eCommerce frameworks come with comprehensive product catalog management, optimized 1-click checkout flows, customer portals, discount engines, and conversion analytics, ready to brand under your agency identity.',
    enterpriseValue: 'Allows agencies to deliver powerful, custom online store solutions rapidly, capturing booming demand for digital retail while charging monthly software licensing and transaction fees.',
  },
  {
    id: 'industry-saas',
    icon: '🏢',
    title: 'Industry-Specific SaaS Products',
    badge: 'Niche Vertical Authority',
    technologies: ['HIPAA / SOC 2 Compliance', 'Retail & POS Integrations', 'Logistics Fleet Tracking', 'Custom CNAME Domain Mapping', 'White-Label Mobile Apps'],
    description: 'Different industries have intricate operational requirements, and generic tools rarely fit. We build tailored vertical SaaS solutions for healthcare, retail, education, and logistics that agencies can launch as their own product line.',
    howItWorks: 'Our team designs SaaS products with prebuilt compliance frameworks (e.g. HIPAA-ready data handling), industry-specific booking or dispatch workflows, automated reporting, and modular API plugins.',
    enterpriseValue: 'Positions your agency as an elite, specialized vertical authority, giving you a competitive moat, higher close rates, and the ability to command premium recurring SaaS pricing.',
  },
];

const keyFeatures = [
  {
    icon: '⚡',
    title: 'Rapid Time-to-Market',
    description: 'Launch battle-tested, branded software products in days rather than spending months and six-figure budgets on custom builds.',
  },
  {
    icon: '💳',
    title: 'Predictable Recurring Revenue',
    description: 'Transition from sporadic one-off client billings to high-margin, predictable monthly and annual software subscription cash flow.',
  },
  {
    icon: '🏷️',
    title: '100% White-Labeled',
    description: 'Clients see exclusively your agency branding, logos, custom domains, and support links. We stay completely anonymous.',
  },
  {
    icon: '📈',
    title: 'Customizable & Scalable',
    description: 'Every solution can be branded and tailored per client, effortlessly scaling on elastic cloud infrastructure as your users grow.',
  },
  {
    icon: '🛡️',
    title: 'Backend Ownership & Support',
    description: 'We handle database migrations, server maintenance, security compliance, and feature patches, leaving you free to scale sales.',
  },
];

const testimonials = [
  ['Anuj Goyal', 'Their team delivered a secure and compliant solution for our financial platform. We were impressed with their commitment to data security and regulatory compliance, which gave us complete peace of mind.'],
  ['Michael Lee', 'We chose Proagnexa Technology for their industry-specific automation expertise. The solutions were tailor-made for our retail operations and helped us scale faster while reducing operational costs.'],
  ['Priya Mehta', 'What impressed us most is their dedicated support team and post-launch maintenance. They ensured smooth system performance and proactive updates, which made them a long-term technology partner for us.'],
  ['Amit Jain', 'Proagnexa Technology helped us automate our logistics workflows end-to-end. Their expertise in RPA and process automation reduced our manual workload by 40%, improving efficiency and accuracy across departments.'],
];

export default function CustomSolutionsAndWhiteLabelSaaS() {
  const [activePillar, setActivePillar] = useState('mini-erp-crm');

  const selectedPillar = saasPillars.find((p) => p.id === activePillar) || saasPillars[0];

  return (
    <div className="saas-page">
      {/* ================= HERO SECTION ================= */}
      <section className="saas-hero">
        <div className="saas-hero-glow glow-indigo"></div>
        <div className="saas-hero-glow glow-emerald"></div>

        <div className="saas-hero-container">
          <div className="saas-hero-content">
            <div className="saas-badge">
              <span className="saas-badge-icon">✦</span>
              Custom Solutions &amp; White-Label SaaS
            </div>

            <p className="saas-brand-label">PROAGNEXA TECHNOLOGY</p>

            <h1>
              Custom Solutions &amp;<br />
              <span>White-Label SaaS for Agencies.</span>
            </h1>

            <p className="saas-hero-lead">
              At Proagnexa Technology, we empower agencies to transform from service providers into product-based businesses through our Custom Solutions &amp; White-Label SaaS offerings. This program allows agencies to offer ready-to-use, market-tested digital products under their own brand, enabling them to generate recurring revenue, strengthen market positioning, and diversify their business model — all without taking on the cost and complexity of building products from scratch.
            </p>

            <p className="saas-hero-sublead">
              We design, develop, and maintain enterprise-grade SaaS platforms, mini-ERPs, and industry-specific solutions that agencies can resell, customize, and manage under their own name. By acting as your backend product partner, we handle product development, cloud infrastructure, security compliance, and ongoing updates — allowing you to focus on marketing, sales, and customer success.
            </p>

            <div className="saas-hero-actions">
              <a href="/contact" className="saas-btn-primary">
                Explore White-Label SaaS
                <span>→</span>
              </a>
              <a href="#pillars" className="saas-btn-secondary">
                View Reseller Products
              </a>
            </div>

            <div className="saas-stack-badges">
              <span>READY-TO-RESELL ADVANTAGES:</span>
              <div className="stack-badges-wrap">
                <strong>100% White-Labeled Multi-Tenancy</strong>
                <strong>Custom CNAME &amp; Domain Branding</strong>
                <strong>Integrated Stripe Subscription Billing</strong>
                <strong>Zero Engineering Overhead</strong>
                <strong>Turnkey Mobile &amp; Web Apps</strong>
              </div>
            </div>
          </div>

          {/* Right Visual: Multi-Tenant SaaS Cockpit Preview */}
          <div className="saas-hero-visual">
            <div className="saas-cockpit-mockup">
              <div className="cockpit-header-bar">
                <div className="cockpit-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="cockpit-tenant-pill">
                  <span>🔒</span>
                  <span>app.youragency-suite.com</span>
                </div>
              </div>

              <div className="cockpit-body">
                <div className="cockpit-reseller-banner">
                  <div>
                    <span className="reseller-label">WHITE-LABEL SAAS DASHBOARD</span>
                    <strong>Your Agency Name Here</strong>
                  </div>
                  <span className="mrr-badge">+38% MoM Growth</span>
                </div>

                <div className="cockpit-metrics-grid">
                  <div className="cockpit-metric-card">
                    <small>Monthly Recurring Revenue</small>
                    <strong>$48,250</strong>
                    <span className="metric-green">● 64 Active Tenants</span>
                  </div>
                  <div className="cockpit-metric-card">
                    <small>Cloud Infrastructure</small>
                    <strong>Multi-Tenant</strong>
                    <span className="metric-blue">● Fully Managed</span>
                  </div>
                </div>

                <div className="cockpit-app-showcase">
                  <div className="showcase-item">
                    <span className="showcase-icon">📊</span>
                    <div className="showcase-info">
                      <strong>White-Label Mini-ERP &amp; CRM</strong>
                      <small>Branded customer portal • Invoicing enabled</small>
                    </div>
                    <span className="status-live">Live</span>
                  </div>

                  <div className="showcase-item">
                    <span className="showcase-icon">🛒</span>
                    <div className="showcase-info">
                      <strong>Omnichannel eCommerce Engine</strong>
                      <small>Stripe integrated • 1-click customer checkout</small>
                    </div>
                    <span className="status-live">Live</span>
                  </div>
                </div>

                <div className="cockpit-footer-note">
                  <span>⭐</span>
                  <p>100% Your Brand: Keep 100% of customer relationships and valuation.</p>
                </div>
              </div>
            </div>

            <div className="floating-saas-badge badge-top-right">
              <span>🚀</span>
              <div>
                <strong>Ready-to-Deploy</strong>
                <small>Go to Market in &lt; 7 Days</small>
              </div>
            </div>

            <div className="floating-saas-badge badge-bottom-left">
              <span>💰</span>
              <div>
                <strong>Recurring Margins</strong>
                <small>Predictable Monthly Cash Flow</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3 PILLARS SECTION ================= */}
      <section className="saas-pillars-section" id="pillars">
        <div className="saas-section-heading">
          <p>PRODUCT-BASED REVENUE OPPORTUNITY</p>
          <h2>
            Ready-to-Deploy Solutions &amp;<br />
            <span>White-Label SaaS Products.</span>
          </h2>
          <p>
            Choose from battle-tested software solutions that your agency can rebrand, customize, and resell on a lucrative subscription model.
          </p>
        </div>

        {/* Pillar Tabs */}
        <div className="saas-tabs">
          {saasPillars.map((p) => (
            <button
              type="button"
              key={p.id}
              className={`saas-tab-btn ${activePillar === p.id ? 'active' : ''}`}
              onClick={() => setActivePillar(p.id)}
            >
              <span className="tab-icon">{p.icon}</span>
              <span className="tab-title">{p.title}</span>
            </button>
          ))}
        </div>

        {/* Detailed Active Card */}
        <div className="saas-active-card">
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
              <span className="box-heading">AGENCY VALUE &amp; REVENUE IMPACT</span>
              <p>{selectedPillar.enterpriseValue}</p>
            </div>
          </div>

          <div className="active-tech-footer">
            <span>Built-In Capabilities &amp; Stack:</span>
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
        <div className="saas-pillars-grid">
          {saasPillars.map((pillar) => (
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
                Explore Reseller Features <span>→</span>
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="saas-features-section">
        <div className="saas-section-heading">
          <p>ENGINEERED FOR RESELLERS</p>
          <h2>
            Key Features of Our<br />
            <span>Custom Solutions &amp; White-Label SaaS.</span>
          </h2>
        </div>

        <div className="saas-features-grid">
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
      <section className="saas-testimonials-section">
        <div className="saas-section-heading">
          <p>WHAT OUR CLIENTS SAY</p>
          <h2>
            Why Businesses Trust<br />
            <span>Proagnexa Technology.</span>
          </h2>
        </div>

        <div className="saas-testimonials-grid">
          {testimonials.map(([name, quote]) => (
            <article className="saas-testimonial-card" key={name}>
              <div className="stars" aria-label="5 stars">★★★★★</div>
              <p>&ldquo;{quote}&rdquo;</p>
              <strong>{name}</strong>
              <span>Verified Client Partner</span>
            </article>
          ))}
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="saas-cta-section">
        <div className="saas-cta-box">
          <p className="cta-pretitle">TRANSFORM INTO A PRODUCT BUSINESS</p>
          <h2>
            Launch Your Own Branded SaaS Product Line<br />
            <span>With Proagnexa Technology.</span>
          </h2>
          <p>
            With our Custom Solutions &amp; White-Label SaaS, agencies can confidently enter the product market, differentiate their offerings, and build long-term recurring revenue streams — all while leveraging our technical expertise to deliver reliable, enterprise-grade solutions.
          </p>
          <a href="/contact" className="cta-button-primary">
            Start Reselling SaaS Today <span>→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
