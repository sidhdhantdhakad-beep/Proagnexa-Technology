import React, { useState } from 'react';
import './DevOpsAndCloudServices.css';

const devopsPillars = [
  {
    id: 'cicd',
    icon: '🚀',
    title: 'CI/CD Pipeline Setup',
    tools: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'ArgoCD'],
    description: 'We implement Continuous Integration and Continuous Deployment (CI/CD) pipelines to automate the software delivery process.',
    howItWorks: 'Developers commit code, which is automatically tested, validated, and deployed across staging and production environments with minimal human intervention.',
    benefits: 'Reduced deployment time, fewer manual errors, and rapid feedback loops that accelerate innovation.',
    enterpriseValue: 'Ensures faster releases while maintaining quality and stability, enabling organizations to respond quickly to market changes.',
  },
  {
    id: 'iac',
    icon: '⚙️',
    title: 'Infrastructure as Code (IaC)',
    tools: ['Terraform', 'Ansible', 'Pulumi', 'CloudFormation'],
    description: 'We adopt Infrastructure as Code (IaC) to provision and manage infrastructure consistently across cloud and on-prem environments.',
    howItWorks: 'Infrastructure (servers, networks, databases, security groups) is described using version-controlled code, enabling automated, repeatable deployments.',
    benefits: 'Eliminates human configuration error, enhances environment reproducibility, and simplifies multi-region scaling.',
    enterpriseValue: 'Ensures strict compliance, complete traceability, and operational efficiency while drastically reducing manual infrastructure costs.',
  },
  {
    id: 'containers',
    icon: '📦',
    title: 'Containerization & Orchestration',
    tools: ['Docker', 'Kubernetes', 'Helm', 'Amazon EKS', 'GKE'],
    description: 'We leverage containerization technologies such as Docker for packaging applications and Kubernetes with Helm for enterprise orchestration.',
    howItWorks: 'Applications and dependencies are packaged into lightweight containers. Orchestration platforms automate auto-scaling, health checks, and resource allocation.',
    benefits: 'Simplified deployments, rapid horizontal scaling, zero-downtime rolling updates, and self-healing resilience.',
    enterpriseValue: 'Enables flexible hybrid and multi-cloud strategies, eliminating vendor lock-in and ensuring enterprise business continuity.',
  },
  {
    id: 'migration',
    icon: '☁️',
    title: 'Cloud Migration',
    tools: ['AWS', 'Microsoft Azure', 'Google Cloud (GCP)'],
    description: 'We support enterprises in migrating mission-critical workloads to leading cloud providers with minimal cutover risk.',
    howItWorks: 'Through rigorous assessment, architecture planning, and phased execution, we migrate legacy applications and data to modern cloud environments.',
    benefits: 'Improved scalability, reduced physical infrastructure overhead, and immediate access to cloud-native managed services.',
    enterpriseValue: 'Secure and efficient migration strategies minimize downtime while ensuring regulatory compliance and long-term elasticity.',
  },
  {
    id: 'monitoring',
    icon: '📊',
    title: 'Monitoring & Logging',
    tools: ['ELK Stack', 'Prometheus', 'Grafana', 'Loki', 'Datadog'],
    description: 'Proactive monitoring, observability, and centralized logging are essential for maintaining high availability and peak performance.',
    howItWorks: 'Real-time metrics and distributed traces are collected across the entire stack to track health, spot anomalies, and alert teams instantly.',
    benefits: 'Rapid incident detection, root-cause diagnostics, accurate capacity planning, and substantially reduced mean time to resolution (MTTR).',
    enterpriseValue: 'Ensures 99.99% system reliability, enhances customer satisfaction, and supports compliance audits with audit-ready log trails.',
  },
  {
    id: 'security',
    icon: '🛡️',
    title: 'Cost Optimization & Security Hardening',
    tools: ['IAM & RBAC', 'HashiCorp Vault', 'AWS Cost Explorer', 'Trivy'],
    description: 'Cloud adoption must be both cost-efficient and ironclad. We combine FinOps practices with DevSecOps security hardening.',
    howItWorks: 'We analyze cloud usage, eliminate idle resources, implement reserved/spot strategies, and enforce strict zero-trust access, encryption, and automated vulnerability scans.',
    benefits: 'Lower cloud bills (up to 35% savings), hardened security posture, and full compliance with industry standards.',
    enterpriseValue: 'Predictable operational expenditures coupled with enterprise-grade data protection and peace of mind.',
  },
];

const keyFeatures = [
  {
    icon: '⚡',
    title: 'Agility & Faster Time-to-Market',
    description: 'Automated pipelines and containerized deployments enable rapid innovation and hourly release cycles.',
  },
  {
    icon: '📈',
    title: 'Scalability & Flexibility',
    description: 'Cloud-native architectures adapt automatically and seamlessly to unpredictable traffic spikes.',
  },
  {
    icon: '🛡️',
    title: 'Reliability & Security',
    description: 'Proactive monitoring, zero-trust infrastructure, and compliance-ready frameworks guarantee resilience.',
  },
  {
    icon: '💰',
    title: 'Cost Efficiency',
    description: 'Optimized resource allocation and FinOps practices reduce cloud waste while maximizing ROI.',
  },
  {
    icon: '🚀',
    title: 'Future-Ready Infrastructure',
    description: 'Infrastructure as Code and multi-cloud strategies ensure long-term agility and vendor independence.',
  },
];

const testimonials = [
  ['Michael Lee', 'We chose Proagnexa Technology for their industry-specific automation expertise. The solutions were tailor-made for our retail operations and helped us scale faster while reducing operational costs.'],
  ['Priya Mehta', 'What impressed us most is their dedicated support team and post-launch maintenance. They ensured smooth system performance and proactive updates, which made them a long-term technology partner for us.'],
  ['Amit Jain', 'Proagnexa Technology helped us automate our logistics workflows end-to-end. Their expertise in RPA and process automation reduced our manual workload by 40%, improving efficiency and accuracy across departments.'],
  ['Anuj Goyal', 'Their team delivered a secure and compliant solution for our financial platform. We were impressed with their commitment to data security and regulatory compliance, which gave us complete peace of mind.'],
];

export default function DevOpsAndCloudServices() {
  const [activePillar, setActivePillar] = useState('cicd');

  const currentPillar = devopsPillars.find((p) => p.id === activePillar) || devopsPillars[0];

  return (
    <div className="devops-page">
      {/* ================= HERO SECTION ================= */}
      <section className="devops-hero">
        <div className="devops-hero-bg devops-bg-glow-1"></div>
        <div className="devops-hero-bg devops-bg-glow-2"></div>

        <div className="devops-hero-container">
          <div className="devops-hero-copy">
            <div className="devops-badge">
              <span className="devops-badge-icon">☁️</span>
              DevOps &amp; Cloud Services
            </div>

            <p className="devops-company-tag">PROAGNEXA TECHNOLOGY</p>

            <h1>
              DevOps &amp; Cloud Services
              <br />
              <span>For Enterprise Agility &amp; Scale.</span>
            </h1>

            <p className="devops-hero-lead">
              At Proagnexa Technology, we deliver DevOps &amp; Cloud Services that empower enterprises to achieve agility, scalability, and operational excellence. In today's competitive landscape, organizations cannot afford downtime, inefficiency, or security vulnerabilities.
            </p>

            <p className="devops-hero-sublead">
              Our approach combines modern cloud practices with proven DevOps methodologies to ensure you accelerate development cycles while maintaining enterprise-grade security, compliance, and cost optimization.
            </p>

            <div className="devops-hero-actions">
              <a href="/contact" className="devops-btn-primary">
                Schedule Architecture Consultation
                <span>→</span>
              </a>
              <a href="#pillars" className="devops-btn-secondary">
                Explore Services
              </a>
            </div>

            <div className="devops-cloud-partners">
              <span>SUPPORTED CLOUD PLATFORMS:</span>
              <div className="partner-badges">
                <strong>Amazon Web Services (AWS)</strong>
                <strong>Microsoft Azure</strong>
                <strong>Google Cloud (GCP)</strong>
              </div>
            </div>
          </div>

          {/* Right Visual: Interactive Cloud Architecture Node Diagram */}
          <div className="devops-hero-visual">
            <div className="visual-core-card">
              <div className="visual-header">
                <span className="status-dot"></span>
                <strong>Production Pipeline Active</strong>
                <small>Auto-Healing Enabled</small>
              </div>

              <div className="pipeline-flow">
                <div className="flow-step">
                  <div className="step-icon">💻</div>
                  <span>Commit</span>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-step active">
                  <div className="step-icon">⚙️</div>
                  <span>CI/CD</span>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">
                  <div className="step-icon">📦</div>
                  <span>Docker</span>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-step pulse">
                  <div className="step-icon">☸️</div>
                  <span>K8s Cluster</span>
                </div>
              </div>

              <div className="visual-metrics-grid">
                <div className="mini-metric">
                  <small>Deployment Frequency</small>
                  <strong>4x Faster</strong>
                </div>
                <div className="mini-metric">
                  <small>Uptime Guarantee</small>
                  <strong>99.99%</strong>
                </div>
                <div className="mini-metric">
                  <small>Cost Reduction</small>
                  <strong>Up to 35%</strong>
                </div>
                <div className="mini-metric">
                  <small>Security Posture</small>
                  <strong>Zero-Trust</strong>
                </div>
              </div>
            </div>

            <div className="floating-bubble bubble-top">
              <span>☸️</span>
              <div>
                <strong>Kubernetes &amp; Helm</strong>
                <small>High Availability</small>
              </div>
            </div>

            <div className="floating-bubble bubble-bottom">
              <span>🛡️</span>
              <div>
                <strong>DevSecOps Hardened</strong>
                <small>SOC2 &amp; ISO Ready</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6 CORE PILLARS ================= */}
      <section className="devops-pillars-section" id="pillars">
        <div className="devops-section-heading">
          <p>COMPREHENSIVE DELIVERY LIFECYCLE</p>
          <h2>
            End-to-End DevOps &amp; Cloud<br />
            <span>Service Offerings.</span>
          </h2>
          <p>
            Our service offering integrates automation, monitoring, and optimization across the software delivery lifecycle. Leveraging cloud-native technologies, we enable businesses to innovate rapidly and streamline collaboration.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="pillar-tabs">
          {devopsPillars.map((p) => (
            <button
              type="button"
              key={p.id}
              className={`pillar-tab-btn ${activePillar === p.id ? 'active' : ''}`}
              onClick={() => setActivePillar(p.id)}
            >
              <span className="tab-icon">{p.icon}</span>
              <span className="tab-title">{p.title}</span>
            </button>
          ))}
        </div>

        {/* Detailed Active Pillar Card */}
        <div className="active-pillar-detail">
          <div className="detail-header">
            <div className="detail-icon-box">{currentPillar.icon}</div>
            <div>
              <h3>{currentPillar.title}</h3>
              <p className="detail-desc">{currentPillar.description}</p>
            </div>
          </div>

          <div className="detail-grid">
            <div className="detail-box">
              <span className="box-tag">HOW IT WORKS</span>
              <p>{currentPillar.howItWorks}</p>
            </div>

            <div className="detail-box">
              <span className="box-tag">KEY BENEFITS</span>
              <p>{currentPillar.benefits}</p>
            </div>

            <div className="detail-box highlight">
              <span className="box-tag">ENTERPRISE BUSINESS VALUE</span>
              <p>{currentPillar.enterpriseValue}</p>
            </div>
          </div>

          <div className="detail-tools">
            <span>Core Tooling &amp; Technologies:</span>
            <div className="tool-chips">
              {currentPillar.tools.map((t) => (
                <span key={t} className="tool-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* All Pillars Grid for Quick Overview */}
        <div className="pillars-grid">
          {devopsPillars.map((pillar) => (
            <article
              key={pillar.id}
              className={`pillar-card ${activePillar === pillar.id ? 'selected' : ''}`}
              onClick={() => setActivePillar(pillar.id)}
            >
              <div className="pillar-card-icon">{pillar.icon}</div>
              <h4>{pillar.title}</h4>
              <p>{pillar.description}</p>
              <div className="card-tools-preview">
                {pillar.tools.slice(0, 3).map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <span className="learn-more-link">
                View Architecture Breakdown <span>→</span>
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* ================= KEY FEATURES SECTION ================= */}
      <section className="devops-features-section">
        <div className="devops-section-heading">
          <p>WHY ENTERPRISES CHOOSE PROAGNEXA</p>
          <h2>
            Key Features of Our<br />
            <span>DevOps &amp; Cloud Services.</span>
          </h2>
        </div>

        <div className="features-grid">
          {keyFeatures.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section className="devops-testimonials-section">
        <div className="devops-section-heading">
          <p>WHAT OUR CLIENTS SAY</p>
          <h2>
            Why Businesses Trust<br />
            <span>Proagnexa Technology.</span>
          </h2>
        </div>

        <div className="devops-testimonials-grid">
          {testimonials.map(([name, quote]) => (
            <article className="devops-testimonial-card" key={name}>
              <div className="testimonial-stars" aria-label="5 stars">★★★★★</div>
              <p>&ldquo;{quote}&rdquo;</p>
              <strong>{name}</strong>
              <span>Verified Client Review</span>
            </article>
          ))}
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="devops-cta-section">
        <div className="cta-inner">
          <p className="cta-label">SCALE WITHOUT FRICTION</p>
          <h2>
            Ready to Modernize Your Infrastructure?
            <br />
            <span>Let's Build Your Cloud &amp; DevOps Roadmap.</span>
          </h2>
          <p>
            Through our DevOps &amp; Cloud Services, enterprises gain the ability to innovate continuously, operate efficiently, and scale securely.
          </p>
          <a href="/contact" className="cta-action-btn">
            Get in Touch With Our Cloud Architects <span>→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
