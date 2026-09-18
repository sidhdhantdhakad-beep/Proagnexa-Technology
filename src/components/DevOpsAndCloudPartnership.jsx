import React, { useState } from 'react';
import './DevOpsAndCloudPartnership.css';

const partnershipPillars = [
  {
    id: 'cicd-automation',
    icon: '🚀',
    title: 'CI/CD Pipeline Setup',
    badge: 'Automated Delivery',
    technologies: ['GitHub Actions', 'GitLab CI/CD', 'Jenkins', 'ArgoCD', 'SonarQube Quality Gates'],
    description: 'We build Continuous Integration and Continuous Deployment (CI/CD) pipelines that automate code testing, building, and deployment processes for your agency clients.',
    howItWorks: 'Using tools like Jenkins, GitHub Actions, and ArgoCD, we set up robust automated workflows that ensure fast, consistent, and error-free releases from dev to production environments.',
    enterpriseValue: 'Enables agencies to deliver client projects faster while minimizing deployment risks, preventing downtime, and drastically improving release reliability.',
  },
  {
    id: 'iac',
    icon: '🏗️',
    title: 'Infrastructure as Code (IaC)',
    badge: 'Version-Controlled Cloud',
    technologies: ['Terraform', 'Ansible', 'Pulumi', 'AWS CloudFormation', 'Terragrunt', 'GitOps'],
    description: 'We provision and manage infrastructure using Infrastructure as Code, ensuring repeatable, consistent, and version-controlled deployments for your client portfolios.',
    howItWorks: 'Tools like Terraform, Ansible, and Pulumi define cloud infrastructure configurations purely as code, making scaling, auditing, multi-region replication, and rollback straightforward.',
    enterpriseValue: 'Completely eliminates manual configuration drift, reduces operational overhead, and ensures compliance with enterprise client requirements and security benchmarks.',
  },
  {
    id: 'containers-kubernetes',
    icon: '📦',
    title: 'Containerization & Orchestration',
    badge: 'Elastic Scale & High Availability',
    technologies: ['Docker', 'Kubernetes (EKS, GKE, AKS)', 'Helm Charts', 'Istio Service Mesh', 'Container Security'],
    description: 'We help agencies containerize their client applications and orchestrate them for bulletproof scalability, fault tolerance, and zero-downtime rolling updates.',
    howItWorks: 'Applications are packaged with Docker, deployed on Kubernetes clusters, and managed with Helm charts for predictable rollouts across staging and production clusters.',
    enterpriseValue: 'Guarantees client applications are 100% portable, effortlessly scalable, and resilient against sudden traffic spikes and server failures.',
  },
  {
    id: 'migration-hardening',
    icon: '🛡️',
    title: 'Cloud Migration & Security Hardening',
    badge: 'Enterprise Compliance Ready',
    technologies: ['AWS', 'Microsoft Azure', 'Google Cloud (GCP)', 'HashiCorp Vault', 'CIS Benchmarks', 'VPC & WAF'],
    description: 'For client workloads moving from legacy bare-metal or fragmented hosts, we manage cloud migrations with deep emphasis on security hardening and governance.',
    howItWorks: 'We migrate workloads to AWS, Azure, or GCP using structured phased strategies while implementing least-privilege IAM controls, data-at-rest encryption, and vulnerability scanners.',
    enterpriseValue: 'Delivers a secure, future-proof cloud foundation that satisfies strict enterprise security audits and eliminates migration downtime.',
  },
  {
    id: 'monitoring-logging',
    icon: '📊',
    title: 'Monitoring & Centralized Logging',
    badge: 'Proactive Health & Observability',
    technologies: ['Prometheus', 'Grafana', 'ELK Stack (Elasticsearch, Logstash, Kibana)', 'Datadog', 'AWS CloudWatch'],
    description: 'We implement 24/7 observability and centralized logging stacks to keep client infrastructure healthy, performant, and responsive.',
    howItWorks: 'We deploy Prometheus + Grafana for real-time telemetry, automated alerting thresholds, and ELK or Datadog for searchable log analysis and root-cause diagnostics.',
    enterpriseValue: 'Ensures immediate detection of anomalies, lowers Mean Time to Resolution (MTTR), and guarantees SLA-backed uptime that builds unwavering client trust.',
  },
];

const keyFeatures = [
  {
    icon: '🤝',
    title: 'Backend Expertise for Agencies',
    description: 'Extend your agency services with enterprise-grade DevOps and cloud capabilities without payroll risk.',
  },
  {
    icon: '⚡',
    title: 'Faster Time-to-Market',
    description: 'Automated CI/CD workflows ensure your clients get new features and bug fixes deployed quickly without friction.',
  },
  {
    icon: '📈',
    title: 'Scalable Infrastructure',
    description: 'Cloud-native, containerized architectures engineered to handle explosive client user growth and high concurrency.',
  },
  {
    icon: '🛡️',
    title: 'Security-First Approach',
    description: 'Hardened cloud environments configured to meet ISO 27001, SOC 2, HIPAA, and CIS security benchmarks.',
  },
  {
    icon: '👁️',
    title: 'Transparent Collaboration',
    description: 'We work silently in the background as your trusted engineering arm while your agency stays the single client-facing authority.',
  },
];

const testimonials = [
  ['Michael Lee', 'We chose Proagnexa Technology for their industry-specific automation expertise. The solutions were tailor-made for our retail operations and helped us scale faster while reducing operational costs.'],
  ['Priya Mehta', 'What impressed us most is their dedicated support team and post-launch maintenance. They ensured smooth system performance and proactive updates, which made them a long-term technology partner for us.'],
  ['Amit Jain', 'Proagnexa Technology helped us automate our logistics workflows end-to-end. Their expertise in RPA and process automation reduced our manual workload by 40%, improving efficiency and accuracy across departments.'],
  ['Anuj Goyal', 'Their team delivered a secure and compliant solution for our financial platform. We were impressed with their commitment to data security and regulatory compliance, which gave us complete peace of mind.'],
];

export default function DevOpsAndCloudPartnership() {
  const [activePillar, setActivePillar] = useState('cicd-automation');

  const selectedPillar = partnershipPillars.find((p) => p.id === activePillar) || partnershipPillars[0];

  return (
    <div className="partnership-page">
      {/* ================= HERO SECTION ================= */}
      <section className="partnership-hero">
        <div className="partnership-hero-glow glow-cyan"></div>
        <div className="partnership-hero-glow glow-blue"></div>

        <div className="partnership-hero-container">
          <div className="partnership-hero-content">
            <div className="partnership-badge">
              <span className="partnership-badge-icon">🚀</span>
              DevOps &amp; Cloud Partnership Services
            </div>

            <p className="partnership-brand-label">PROAGNEXA TECHNOLOGY</p>

            <h1>
              DevOps &amp; Cloud Partnership<br />
              <span>Services for Agencies.</span>
            </h1>

            <p className="partnership-hero-lead">
              At Proagnexa Technology, we enable agencies to offer enterprise-grade DevOps and cloud solutions to their clients without building expensive in-house infrastructure teams. Many agencies excel at design and development but face challenges when it comes to delivering secure, scalable, and production-ready cloud environments. Our DevOps &amp; Cloud Partnership fills this gap by acting as your specialized backend partner for cloud infrastructure, automation, and ongoing operations.
            </p>

            <p className="partnership-hero-sublead">
              This service allows agencies to take on larger, more complex projects that require robust deployment pipelines, containerized applications, and compliance-ready cloud architectures. Our team works behind the scenes, ensuring that every deliverable meets enterprise standards while keeping your agency as the single point of contact for the client.
            </p>

            <div className="partnership-hero-actions">
              <a href="/contact" className="partnership-btn-primary">
                Partner With Our DevOps Team
                <span>→</span>
              </a>
              <a href="#pillars" className="partnership-btn-secondary">
                Explore Partnership Offerings
              </a>
            </div>

            <div className="partnership-stack-badges">
              <span>SUPPORTED CLOUD &amp; DEVOPS ECOSYSTEMS:</span>
              <div className="stack-badges-wrap">
                <strong>AWS / Azure / GCP</strong>
                <strong>Terraform &amp; Ansible</strong>
                <strong>Docker &amp; Kubernetes</strong>
                <strong>GitHub Actions &amp; ArgoCD</strong>
                <strong>Prometheus &amp; Grafana</strong>
              </div>
            </div>
          </div>

          {/* Right Visual: DevOps Cockpit Preview */}
          <div className="partnership-hero-visual">
            <div className="devops-cockpit-mockup">
              <div className="cockpit-header-bar">
                <div className="cockpit-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="cockpit-terminal-pill">
                  <span>⚙️</span>
                  <span>devops-partner-engine.cloud:8443</span>
                </div>
              </div>

              <div className="cockpit-body">
                <div className="cockpit-status-banner">
                  <div>
                    <span className="status-label">PARTNER INFRASTRUCTURE</span>
                    <strong>Agency Backend Active</strong>
                  </div>
                  <span className="uptime-pill">99.99% Uptime SLA</span>
                </div>

                <div className="cockpit-kpi-row">
                  <div className="cockpit-kpi-card">
                    <small>Pipelines Deployed</small>
                    <strong>184 Passing</strong>
                    <span className="kpi-green">0 Failed</span>
                  </div>
                  <div className="cockpit-kpi-card">
                    <small>K8s Clusters</small>
                    <strong>Multi-Region</strong>
                    <span className="kpi-blue">Auto-Scaled</span>
                  </div>
                </div>

                <div className="cockpit-pipeline-box">
                  <div className="pipeline-header">
                    <span>Live CI/CD Deployment Pipeline</span>
                    <span className="pulse-indicator"></span>
                  </div>
                  <div className="pipeline-steps">
                    <div className="pipe-step passed">Lint &amp; Test</div>
                    <div className="pipe-arrow">→</div>
                    <div className="pipe-step passed">Build Docker</div>
                    <div className="pipe-arrow">→</div>
                    <div className="pipe-step passed">K8s Deploy</div>
                  </div>
                </div>

                <div className="cockpit-footer-note">
                  <span>🛡️</span>
                  <p>100% White-Label: Delivered quietly under your agency's brand.</p>
                </div>
              </div>
            </div>

            <div className="floating-devops-badge badge-top-right">
              <span>☁️</span>
              <div>
                <strong>Zero Downtime</strong>
                <small>Canary &amp; Blue/Green Deploys</small>
              </div>
            </div>

            <div className="floating-devops-badge badge-bottom-left">
              <span>🔒</span>
              <div>
                <strong>Silent Execution</strong>
                <small>Your Agency Stays Front &amp; Center</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5 PILLARS SECTION ================= */}
      <section className="partnership-pillars-section" id="pillars">
        <div className="partnership-section-heading">
          <p>INFRASTRUCTURE PARTNERSHIP CAPABILITIES</p>
          <h2>
            Specialized DevOps &amp; Cloud<br />
            <span>Solutions For Your Agency.</span>
          </h2>
          <p>
            From automated CI/CD pipelines and infrastructure as code to production Kubernetes orchestration and 24/7 observability, we deliver turnkey reliability for your clients.
          </p>
        </div>

        {/* Pillar Tabs */}
        <div className="partnership-tabs">
          {partnershipPillars.map((p) => (
            <button
              type="button"
              key={p.id}
              className={`partnership-tab-btn ${activePillar === p.id ? 'active' : ''}`}
              onClick={() => setActivePillar(p.id)}
            >
              <span className="tab-icon">{p.icon}</span>
              <span className="tab-title">{p.title}</span>
            </button>
          ))}
        </div>

        {/* Detailed Active Card */}
        <div className="partnership-active-card">
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
              <span className="box-heading">ENTERPRISE VALUE FOR CLIENTS &amp; AGENCIES</span>
              <p>{selectedPillar.enterpriseValue}</p>
            </div>
          </div>

          <div className="active-tech-footer">
            <span>Primary Tools &amp; Technologies:</span>
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
        <div className="partnership-pillars-grid">
          {partnershipPillars.map((pillar) => (
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
      <section className="partnership-features-section">
        <div className="partnership-section-heading">
          <p>ENGINEERED FOR EXCELLENCE</p>
          <h2>
            Key Features of Our<br />
            <span>DevOps &amp; Cloud Partnership.</span>
          </h2>
        </div>

        <div className="partnership-features-grid">
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
      <section className="partnership-testimonials-section">
        <div className="partnership-section-heading">
          <p>WHAT OUR CLIENTS SAY</p>
          <h2>
            Why Businesses Trust<br />
            <span>Proagnexa Technology.</span>
          </h2>
        </div>

        <div className="partnership-testimonials-grid">
          {testimonials.map(([name, quote]) => (
            <article className="partnership-testimonial-card" key={name}>
              <div className="stars" aria-label="5 stars">★★★★★</div>
              <p>&ldquo;{quote}&rdquo;</p>
              <strong>{name}</strong>
              <span>Verified Client Partner</span>
            </article>
          ))}
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="partnership-cta-section">
        <div className="partnership-cta-box">
          <p className="cta-pretitle">SPECIALIZED INFRASTRUCTURE PARTNER</p>
          <h2>
            Power Your Agency With<br />
            <span>DevOps &amp; Cloud Partnership.</span>
          </h2>
          <p>
            With our DevOps &amp; Cloud Partnership, agencies gain a specialized infrastructure partner that helps them deliver secure, scalable, and production-ready environments — enabling them to compete for high-value enterprise projects with confidence.
          </p>
          <a href="/contact" className="cta-button-primary">
            Become a DevOps Partner <span>→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
