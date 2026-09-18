import React, { useState } from 'react';
import './MaintenanceAndSupportServices.css';

const supportPillars = [
  {
    id: 'web-app-maintenance',
    icon: '🛠️',
    title: 'Web & App Maintenance',
    badge: 'Continuous Reliability',
    technologies: ['React & Next.js', 'Node.js & Python', 'iOS & Android App Updates', 'Security Patching', 'Version Upgrades'],
    description: 'We provide continuous monitoring, bug fixes, dependency updates, and feature enhancements to keep client web and mobile applications running flawlessly.',
    howItWorks: 'Our engineering team proactively resolves production anomalies, applies zero-day security patches, updates deprecated SDKs, and runs automated regression tests before deployment.',
    enterpriseValue: 'Minimizes unplanned downtime, prevents critical security vulnerabilities, and ensures your clients platforms consistently evolve with modern OS and browser updates.',
  },
  {
    id: 'cost-optimization',
    icon: '💰',
    title: 'Cloud Cost Optimization & Monitoring',
    badge: 'FinOps & Resource Efficiency',
    technologies: ['AWS Cost Explorer', 'Azure Cost Management', 'Google Cloud FinOps', 'Kubernetes Right-Sizing', 'Automated Autoscaling'],
    description: 'Cloud environments can become prohibitively expensive if left unmonitored. We analyze resource utilization patterns and implement proven cost-control measures.',
    howItWorks: 'By evaluating workloads, we eliminate idle resources, right-size compute instances, adopt savings plans/spot instances, and fine-tune autoscaling triggers without impacting performance.',
    enterpriseValue: 'Delivers average cloud bill savings of 25% to 40%, proving tangible financial ROI to clients and strengthening long-term agency partnership trust.',
  },
  {
    id: 'performance-tuning',
    icon: '⚡',
    title: 'Performance Tuning & Upgrades',
    badge: 'Sub-Second Latency',
    technologies: ['Database Indexing & Sharding', 'Redis & Memcached', 'CDN Edge Caching', 'APM Distributed Tracing', 'Core Web Vitals'],
    description: 'As client businesses expand, their software platforms must scale seamlessly under heavy concurrent traffic. We provide end-to-end performance tuning and architectural upgrades.',
    howItWorks: 'Using APM profilers, database explain plans, and stress benchmarking, we optimize database queries, caching layers, and server configurations to eliminate latency bottlenecks.',
    enterpriseValue: 'Guarantees lightning-fast response times during peak seasonal spikes, preserving conversions and preventing user drop-off due to sluggish software.',
  },
  {
    id: '247-sla-support',
    icon: '🛡️',
    title: '24/7 Support with Guaranteed SLAs',
    badge: 'Round-the-Clock Peace of Mind',
    technologies: ['PagerDuty & Opsgenie', 'Zendesk / Jira Service Desk', 'Guaranteed 15-Min Response', '24/7/365 On-Call Engineers', 'Monthly SLA Reports'],
    description: 'Uninterrupted operations are non-negotiable for enterprise workloads. We deliver around-the-clock technical support backed by legally binding Service Level Agreements.',
    howItWorks: 'Our 24/7 incident response team monitors production telemetry, triages alerts in real time, and resolves severity-1 incidents within agreed contractual response windows.',
    enterpriseValue: 'Provides enterprise clients with absolute peace of mind, eliminates downtime risks, and empowers your agency to deliver reliable enterprise-grade support commitments.',
  },
];

const keyFeatures = [
  {
    icon: '👁️',
    title: 'Proactive Monitoring',
    description: 'Issues and performance bottlenecks are identified and resolved before they ever impact your end-users.',
  },
  {
    icon: '📉',
    title: 'Cost Optimization',
    description: 'Continuous FinOps analysis ensures cloud and database resources are scaled efficiently without wasted spend.',
  },
  {
    icon: '📈',
    title: 'Scalable Solutions',
    description: 'Software and infrastructure configurations are tuned and upgraded to handle future business expansion.',
  },
  {
    icon: '📋',
    title: 'Guaranteed Reliability & SLAs',
    description: 'Legally backed response and resolution windows provide predictable, verifiable operational outcomes.',
  },
  {
    icon: '🔄',
    title: 'Recurring Revenue Model',
    description: 'Agencies can package ongoing monthly or annual maintenance agreements to secure predictable recurring revenue.',
  },
];

const testimonials = [
  ['Anuj Goyal', 'Their team delivered a secure and compliant solution for our financial platform. We were impressed with their commitment to data security and regulatory compliance, which gave us complete peace of mind.'],
  ['Michael Lee', 'We chose Proagnexa Technology for their industry-specific automation expertise. The solutions were tailor-made for our retail operations and helped us scale faster while reducing operational costs.'],
  ['Priya Mehta', 'What impressed us most is their dedicated support team and post-launch maintenance. They ensured smooth system performance and proactive updates, which made them a long-term technology partner for us.'],
  ['Amit Jain', 'Proagnexa Technology helped us automate our logistics workflows end-to-end. Their expertise in RPA and process automation reduced our manual workload by 40%, improving efficiency and accuracy across departments.'],
];

export default function MaintenanceAndSupportServices() {
  const [activePillar, setActivePillar] = useState('web-app-maintenance');

  const selectedPillar = supportPillars.find((p) => p.id === activePillar) || supportPillars[0];

  return (
    <div className="maintenance-page">
      {/* ================= HERO SECTION ================= */}
      <section className="maintenance-hero">
        <div className="maintenance-hero-glow glow-amber"></div>
        <div className="maintenance-hero-glow glow-blue"></div>

        <div className="maintenance-hero-container">
          <div className="maintenance-hero-content">
            <div className="maintenance-badge">
              <span className="maintenance-badge-icon">🛠️</span>
              Maintenance &amp; Support Services
            </div>

            <p className="maintenance-brand-label">PROAGNEXA TECHNOLOGY</p>

            <h1>
              Maintenance &amp; Support<br />
              <span>Services for Enterprises &amp; Agencies.</span>
            </h1>

            <p className="maintenance-hero-lead">
              At Proagnexa Technology, we recognize that a project’s success doesn’t end at launch — in fact, long-term reliability and continuous improvement are what truly determine client satisfaction. Our Maintenance &amp; Support Services empower agencies and enterprises to offer complete, end-to-end post-launch support without investing in dedicated in-house support teams.
            </p>

            <p className="maintenance-hero-sublead">
              By acting as your silent backend partner, we ensure that your clients’ applications, infrastructure, and cloud environments remain secure, up-to-date, and performant. This not only strengthens your client relationships but also helps agencies generate long-term recurring revenue by offering ongoing support packages and SLAs.
            </p>

            <div className="maintenance-hero-actions">
              <a href="/contact" className="maintenance-btn-primary">
                Explore Maintenance Plans
                <span>→</span>
              </a>
              <a href="#pillars" className="maintenance-btn-secondary">
                View SLA Capabilities
              </a>
            </div>

            <div className="maintenance-stack-badges">
              <span>SUPPORTED OPERATIONS &amp; PROTOCOLS:</span>
              <div className="stack-badges-wrap">
                <strong>24/7/365 On-Call Support</strong>
                <strong>&lt; 15-Minute Response SLA</strong>
                <strong>FinOps Cloud Optimization</strong>
                <strong>Zero-Day Vulnerability Patching</strong>
                <strong>Database &amp; API Tuning</strong>
              </div>
            </div>
          </div>

          {/* Right Visual: 24/7 SLA Operations Cockpit Preview */}
          <div className="maintenance-hero-visual">
            <div className="support-cockpit-mockup">
              <div className="cockpit-header-bar">
                <div className="cockpit-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="cockpit-status-tag">
                  <span>🟢</span>
                  <span>ops-center.proagnexa.com</span>
                </div>
              </div>

              <div className="cockpit-body">
                <div className="cockpit-sla-banner">
                  <div>
                    <span className="sla-label">GLOBAL SYSTEM STATUS</span>
                    <strong>All Systems Operational</strong>
                  </div>
                  <span className="sla-badge">99.98% SLA Met</span>
                </div>

                <div className="cockpit-stats-grid">
                  <div className="cockpit-stat-box">
                    <small>First Response Time</small>
                    <strong>&lt; 12 Mins</strong>
                    <span className="stat-green">SLA Target: 15m</span>
                  </div>
                  <div className="cockpit-stat-box">
                    <small>Avg Cloud Savings</small>
                    <strong>34.2%</strong>
                    <span className="stat-blue">FinOps Tuning</span>
                  </div>
                </div>

                <div className="cockpit-task-card">
                  <div className="task-indicator done">✓</div>
                  <div className="task-details">
                    <strong>Weekly Security &amp; Kernel Patching</strong>
                    <small>Zero-downtime rolling reboot completed</small>
                  </div>
                  <span className="task-tag">Passed</span>
                </div>

                <div className="cockpit-task-card">
                  <div className="task-indicator ongoing">⚙️</div>
                  <div className="task-details">
                    <strong>PostgreSQL Query Optimization</strong>
                    <small>Index rebuild cut P99 latency by 42%</small>
                  </div>
                  <span className="task-tag active">Optimized</span>
                </div>

                <div className="cockpit-footer-note">
                  <span>🛡️</span>
                  <p>Silent White-Label SLA delivery under your agency brand.</p>
                </div>
              </div>
            </div>

            <div className="floating-support-badge badge-top-right">
              <span>⏰</span>
              <div>
                <strong>24/7/365 On-Call</strong>
                <small>Instant Incident Escalation</small>
              </div>
            </div>

            <div className="floating-support-badge badge-bottom-left">
              <span>📉</span>
              <div>
                <strong>30%+ Cloud Savings</strong>
                <small>Proven FinOps Optimization</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4 PILLARS SECTION ================= */}
      <section className="maintenance-pillars-section" id="pillars">
        <div className="maintenance-section-heading">
          <p>COMPREHENSIVE POST-LAUNCH LIFECYCLE</p>
          <h2>
            Full-Spectrum Maintenance &amp;<br />
            <span>Technical Support Offerings.</span>
          </h2>
          <p>
            From web and mobile application bug fixes to FinOps cloud cost reductions, database tuning, and guaranteed 24/7 SLA incident management.
          </p>
        </div>

        {/* Pillar Tabs */}
        <div className="maintenance-tabs">
          {supportPillars.map((p) => (
            <button
              type="button"
              key={p.id}
              className={`maintenance-tab-btn ${activePillar === p.id ? 'active' : ''}`}
              onClick={() => setActivePillar(p.id)}
            >
              <span className="tab-icon">{p.icon}</span>
              <span className="tab-title">{p.title}</span>
            </button>
          ))}
        </div>

        {/* Detailed Active Card */}
        <div className="maintenance-active-card">
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
              <span className="box-heading">ENTERPRISE VALUE &amp; ROI</span>
              <p>{selectedPillar.enterpriseValue}</p>
            </div>
          </div>

          <div className="active-tech-footer">
            <span>Primary Methodologies &amp; Tools:</span>
            <div className="tech-chips-list">
              {selectedPillar.technologies.map((t) => (
                <span key={t} className="tech-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="maintenance-pillars-grid">
          {supportPillars.map((pillar) => (
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
                View Operational Scope <span>→</span>
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="maintenance-features-section">
        <div className="maintenance-section-heading">
          <p>ENGINEERED FOR PEAK UPTIME</p>
          <h2>
            Key Features of Our<br />
            <span>Maintenance &amp; Support Services.</span>
          </h2>
        </div>

        <div className="maintenance-features-grid">
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
      <section className="maintenance-testimonials-section">
        <div className="maintenance-section-heading">
          <p>WHAT OUR CLIENTS SAY</p>
          <h2>
            Why Businesses Trust<br />
            <span>Proagnexa Technology.</span>
          </h2>
        </div>

        <div className="maintenance-testimonials-grid">
          {testimonials.map(([name, quote]) => (
            <article className="maintenance-testimonial-card" key={name}>
              <div className="stars" aria-label="5 stars">★★★★★</div>
              <p>&ldquo;{quote}&rdquo;</p>
              <strong>{name}</strong>
              <span>Verified Client Partner</span>
            </article>
          ))}
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="maintenance-cta-section">
        <div className="maintenance-cta-box">
          <p className="cta-pretitle">LONG-TERM PEACE OF MIND</p>
          <h2>
            Protect Your Digital Platforms With<br />
            <span>Expert Maintenance &amp; 24/7 Support.</span>
          </h2>
          <p>
            With our Maintenance &amp; Support Services, agencies can confidently offer complete lifecycle management to their clients, ensuring that every project continues to deliver value long after launch — while building stronger relationships and recurring revenue streams.
          </p>
          <a href="/contact" className="cta-button-primary">
            Request a Maintenance SLA Proposal <span>→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
