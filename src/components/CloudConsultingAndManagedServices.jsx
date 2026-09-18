import React, { useState } from 'react';
import './CloudConsultingAndManagedServices.css';

const consultingPillars = [
  {
    id: 'architecture',
    icon: '🏛️',
    title: 'Cloud Architecture Design',
    badge: 'Foundation & Strategy',
    technologies: ['AWS Well-Architected', 'Azure Architecture Center', 'Google Cloud Framework', 'Microservices'],
    description: 'The foundation of any successful cloud strategy lies in the right architecture. We design secure, scalable, and performance-driven cloud infrastructures tailored to organizational goals.',
    howItWorks: 'Our cloud architects evaluate your existing workloads, regulatory compliance mandates, and throughput demands before engineering high-efficiency, cloud-native architectures.',
    enterpriseValue: 'Provides long-term architectural scalability, eliminates operational single points of failure, and guarantees optimal cloud resource utilization.',
  },
  {
    id: 'multicloud',
    icon: '🌐',
    title: 'Multi-Cloud & Hybrid Setup',
    badge: 'Vendor Independence',
    technologies: ['Kubernetes (K8s)', 'Terraform & Pulumi', 'AWS Direct Connect', 'Azure ExpressRoute', 'Google Cloud Interconnect'],
    description: 'Enterprises often require the agility of multiple cloud providers or a hybrid model integrating on-premises datacenters with public clouds.',
    howItWorks: 'Workloads and databases are distributed strategically across AWS, Azure, and GCP or between cloud and on-premise infrastructure with low-latency interconnects.',
    enterpriseValue: 'Guarantees business resilience, cost optimization, and the freedom to leverage best-of-breed services without ever being trapped by vendor lock-in.',
  },
  {
    id: 'monitoring247',
    icon: '⏱️',
    title: '24/7 Cloud Monitoring & Incident Response',
    badge: 'Round-the-Clock Ops',
    technologies: ['Prometheus + Grafana', 'ELK/EFK Stack', 'AWS CloudWatch', 'Azure Monitor', 'Google Cloud Operations'],
    description: 'Operational reliability is critical for enterprise success. We provide round-the-clock cloud monitoring and incident response to ensure uninterrupted service delivery.',
    howItWorks: 'Real-time telemetry agents track latency, throughput, error rates, and security anomalies. Automated runbooks and certified SREs resolve incidents before users notice.',
    enterpriseValue: 'Ensures 99.99% high availability, eliminates costly downtime, and provides executive leadership with real-time health dashboards.',
  },
  {
    id: 'disaster-recovery',
    icon: '🛡️',
    title: 'Backup & Disaster Recovery Solutions',
    badge: 'Business Continuity',
    technologies: ['AWS Backup', 'Azure Site Recovery', 'GCP Backup & DR', 'Veeam', 'Rubrik', 'Immutable Storage'],
    description: 'Data resilience is non-negotiable. We implement enterprise disaster recovery (DR) frameworks to safeguard business-critical data against outages and cyber threats.',
    howItWorks: 'Automated multi-region replication and encrypted snapshot policies ensure rapid failover and instant data restoration in any crisis scenario.',
    enterpriseValue: 'Guarantees continuous operations, achieves near-zero Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO), and complies with global data regulations.',
  },
];

const keyFeatures = [
  {
    icon: '🎯',
    title: 'Strategic Architecture',
    description: 'Tailored, cloud-native designs engineered to support aggressive business expansion and revenue goals.',
  },
  {
    icon: '🔄',
    title: 'Hybrid & Multi-Cloud Flexibility',
    description: 'Greater organizational agility and fault-tolerance through seamless cross-cloud orchestration.',
  },
  {
    icon: '🛡️',
    title: 'Proactive Reliability',
    description: '24/7/365 active monitoring and SRE coverage ensure consistent sub-second performance and instant remediation.',
  },
  {
    icon: '⚡',
    title: 'Business Continuity',
    description: 'Bulletproof multi-region backup and disaster recovery frameworks protect revenue and corporate data.',
  },
  {
    icon: '🔒',
    title: 'Security & Compliance',
    description: 'Integrated governance controls safeguard sensitive data while meeting strict HIPAA, SOC2, and ISO standards.',
  },
];

const testimonials = [
  ['Amit Jain', 'Proagnexa Technology helped us automate our logistics workflows end-to-end. Their expertise in RPA and process automation reduced our manual workload by 40%, improving efficiency and accuracy across departments.'],
  ['Anuj Goyal', 'Their team delivered a secure and compliant solution for our financial platform. We were impressed with their commitment to data security and regulatory compliance, which gave us complete peace of mind.'],
  ['Michael Lee', 'We chose Proagnexa Technology for their industry-specific automation expertise. The solutions were tailor-made for our retail operations and helped us scale faster while reducing operational costs.'],
  ['Priya Mehta', 'What impressed us most is their dedicated support team and post-launch maintenance. They ensured smooth system performance and proactive updates, which made them a long-term technology partner for us.'],
];

export default function CloudConsultingAndManagedServices() {
  const [activePillar, setActivePillar] = useState('architecture');

  const selectedPillar = consultingPillars.find((p) => p.id === activePillar) || consultingPillars[0];

  return (
    <div className="consulting-page">
      {/* ================= HERO ================= */}
      <section className="consulting-hero">
        <div className="consulting-hero-glow glow-one"></div>
        <div className="consulting-hero-glow glow-two"></div>

        <div className="consulting-hero-container">
          <div className="consulting-hero-content">
            <div className="consulting-badge">
              <span className="badge-icon">⚙️</span>
              Cloud Consulting &amp; Managed Services
            </div>

            <p className="consulting-eyebrow">PROAGNEXA TECHNOLOGY</p>

            <h1>
              Cloud Consulting &amp;<br />
              <span>Managed Services.</span>
            </h1>

            <p className="consulting-lead">
              At Proagnexa Technology, our Cloud Consulting &amp; Managed Services are designed to help enterprises adopt, optimize, and manage cloud environments with confidence. In today’s competitive landscape, businesses require IT infrastructures that are scalable, secure, and cost-efficient.
            </p>

            <p className="consulting-sublead">
              We provide a structured, enterprise-grade approach that combines cloud architecture design, hybrid and multi-cloud integration, 24/7 proactive monitoring, and robust disaster recovery strategies across AWS, Microsoft Azure, and Google Cloud.
            </p>

            <div className="consulting-actions">
              <a href="/contact" className="consulting-btn-primary">
                Book a Cloud Strategy Session
                <span>→</span>
              </a>
              <a href="#pillars" className="consulting-btn-secondary">
                View Service Offerings
              </a>
            </div>

            <div className="consulting-supported-clouds">
              <span>CERTIFIED CLOUD ECOSYSTEMS:</span>
              <div className="cloud-chips">
                <strong>AWS Partner Network</strong>
                <strong>Microsoft Azure Certified</strong>
                <strong>Google Cloud Platform</strong>
              </div>
            </div>
          </div>

          {/* Right Architecture Topology Card */}
          <div className="consulting-hero-visual">
            <div className="topology-card">
              <div className="topology-header">
                <span className="status-live"></span>
                <strong>Multi-Cloud Operations Center</strong>
                <small>24/7 SRE Active</small>
              </div>

              <div className="cloud-mesh-grid">
                <div className="mesh-node node-aws">
                  <span className="node-icon">🟧</span>
                  <strong>AWS Cloud</strong>
                  <small>Compute &amp; VPC</small>
                </div>
                <div className="mesh-connector">⚡ Hybrid Interconnect ⚡</div>
                <div className="mesh-node node-azure">
                  <span className="node-icon">🟦</span>
                  <strong>MS Azure</strong>
                  <small>Identity &amp; App Services</small>
                </div>
              </div>

              <div className="mesh-center-box">
                <div className="center-icon">☸️</div>
                <div>
                  <strong>Unified K8s &amp; Terraform Mesh</strong>
                  <small>Zero Vendor Lock-in &bull; Auto-Failover</small>
                </div>
              </div>

              <div className="topology-metrics">
                <div>
                  <small>Availability SLA</small>
                  <strong>99.99%</strong>
                </div>
                <div>
                  <small>Incident Response</small>
                  <strong>&lt; 15 Mins</strong>
                </div>
                <div>
                  <small>Backup Recovery</small>
                  <strong>Zero Data Loss</strong>
                </div>
              </div>
            </div>

            <div className="floating-metric-badge badge-top">
              <span>🛡️</span>
              <div>
                <strong>Disaster Recovery</strong>
                <small>Multi-Region Replicated</small>
              </div>
            </div>

            <div className="floating-metric-badge badge-bottom">
              <span>⏱️</span>
              <div>
                <strong>24/7 Managed NOC</strong>
                <small>Real-time Observability</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4 CORE PILLARS ================= */}
      <section className="consulting-pillars-section" id="pillars">
        <div className="consulting-section-heading">
          <p>STRATEGIC CLOUD SOLUTIONS</p>
          <h2>
            End-to-End Managed Services<br />
            <span>Built for Enterprise Resilience.</span>
          </h2>
          <p>
            By leveraging industry-leading platforms such as AWS, Microsoft Azure, and Google Cloud, we ensure organizations innovate quickly, maintain compliance, and achieve operational resilience.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="consulting-tabs">
          {consultingPillars.map((pillar) => (
            <button
              type="button"
              key={pillar.id}
              className={`consulting-tab-btn ${activePillar === pillar.id ? 'active' : ''}`}
              onClick={() => setActivePillar(pillar.id)}
            >
              <span className="tab-icon">{pillar.icon}</span>
              <span className="tab-title">{pillar.title}</span>
            </button>
          ))}
        </div>

        {/* Detail Card for Active Pillar */}
        <div className="consulting-active-card">
          <div className="card-top-row">
            <div className="icon-badge">{selectedPillar.icon}</div>
            <div>
              <span className="pillar-badge-pill">{selectedPillar.badge}</span>
              <h3>{selectedPillar.title}</h3>
              <p className="card-overview">{selectedPillar.description}</p>
            </div>
          </div>

          <div className="card-deepdive-grid">
            <div className="deepdive-box">
              <span className="deepdive-label">HOW IT WORKS</span>
              <p>{selectedPillar.howItWorks}</p>
            </div>

            <div className="deepdive-box highlight">
              <span className="deepdive-label">ENTERPRISE BUSINESS VALUE</span>
              <p>{selectedPillar.enterpriseValue}</p>
            </div>
          </div>

          <div className="card-tech-stack">
            <span>Enterprise Technologies &amp; Standards:</span>
            <div className="tech-chips-wrap">
              {selectedPillar.technologies.map((tech) => (
                <span key={tech} className="tech-chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid View */}
        <div className="pillars-cards-grid">
          {consultingPillars.map((p) => (
            <article
              key={p.id}
              className={`consulting-pillar-card ${activePillar === p.id ? 'active' : ''}`}
              onClick={() => setActivePillar(p.id)}
            >
              <div className="card-icon">{p.icon}</div>
              <span className="mini-tag">{p.badge}</span>
              <h4>{p.title}</h4>
              <p>{p.description}</p>
              <span className="card-arrow-link">
                Explore Architecture Details <span>→</span>
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="consulting-features-section">
        <div className="consulting-section-heading">
          <p>ENTERPRISE ADVANTAGES</p>
          <h2>
            Key Features of Our<br />
            <span>Cloud Consulting &amp; Managed Services.</span>
          </h2>
        </div>

        <div className="consulting-features-grid">
          {keyFeatures.map((feature) => (
            <div className="consulting-feature-card" key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="consulting-testimonials-section">
        <div className="consulting-section-heading">
          <p>WHAT OUR CLIENTS SAY</p>
          <h2>
            Why Businesses Trust<br />
            <span>Proagnexa Technology.</span>
          </h2>
        </div>

        <div className="consulting-testimonials-grid">
          {testimonials.map(([name, quote]) => (
            <article className="consulting-testimonial-card" key={name}>
              <div className="stars" aria-label="5 stars">★★★★★</div>
              <p>&ldquo;{quote}&rdquo;</p>
              <strong>{name}</strong>
              <span>Verified Client Partner</span>
            </article>
          ))}
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="consulting-cta-section">
        <div className="consulting-cta-box">
          <p className="cta-eyebrow">YOUR STRATEGIC CLOUD PARTNER</p>
          <h2>
            Transform Your Cloud Operations with<br />
            <span>Expert Managed Services.</span>
          </h2>
          <p>
            With our Cloud Consulting &amp; Managed Services, enterprises gain more than a technology partner—they gain a strategic advisor and managed service provider that ensures their cloud environments are resilient, compliant, and future-ready.
          </p>
          <a href="/contact" className="cta-main-btn">
            Connect With a Cloud Consultant <span>→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
