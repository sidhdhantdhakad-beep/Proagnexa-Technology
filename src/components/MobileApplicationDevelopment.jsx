import React, { useState } from 'react';
import './MobileApplicationDevelopment.css';

const mobilePillars = [
  {
    id: 'cross-platform',
    icon: '🔄',
    title: 'Cross-Platform Applications',
    badge: 'Dual-Platform Reach',
    technologies: ['Flutter (Dart)', 'React Native (JS/TS)', 'Ionic', 'Capacitor', 'Native Bridge APIs'],
    description: 'Building applications that run across devices is key to reducing development cost and time-to-market. We develop cross-platform apps using frameworks like Flutter and React Native to ensure a single codebase delivers consistent experiences on both iOS and Android.',
    howItWorks: 'Our team builds shared codebases with native-like 60fps performance, ensuring UI components adhere strictly to platform-specific guidelines (iOS Human Interface & Android Material Design) while reusing core business logic.',
    enterpriseValue: 'Accelerates time-to-market, reduces initial and ongoing maintenance costs by up to 50%, and enables simultaneous feature rollouts across both app ecosystems.',
  },
  {
    id: 'native-apps',
    icon: '⚡',
    title: 'Native Applications',
    badge: 'Peak Performance & Hardware Access',
    technologies: ['Swift', 'SwiftUI', 'Kotlin', 'Jetpack Compose', 'Java', 'Xcode', 'Android Studio'],
    description: 'For businesses requiring maximum performance, hardware-level security, or device-specific functionality, we build native applications tailored exclusively for each operating system.',
    howItWorks: 'Apps are engineered individually for iOS (Swift) and Android (Kotlin), directly accessing platform hardware, biometric authentication, CoreML, ARKit, and Google ML Kit.',
    enterpriseValue: 'Optimal speed, zero abstraction lag, uninterrupted offline capability, and a refined native user experience that commands high store ratings.',
  },
  {
    id: 'mbaas-integration',
    icon: '☁️',
    title: 'MBaaS Integration',
    badge: 'Cloud-Powered Backends',
    technologies: ['Firebase', 'AWS Amplify', 'Supabase', 'Backendless', 'Push Notifications (APNs/FCM)', 'GraphQL & REST'],
    description: 'Mobile applications require powerful, ultra-reliable backends to handle authentication, data storage, and real-time synchronization. We integrate MBaaS platforms to streamline backend management.',
    howItWorks: 'Cloud-hosted backends deliver real-time databases, user management, automated push notifications, and analytics pipelines without needing to build custom server infrastructure from scratch.',
    enterpriseValue: 'Faster time-to-market, reduced operational overhead, and effortless elastic scalability without manual server maintenance.',
  },
  {
    id: 'app-deployment',
    icon: '🚀',
    title: 'App Deployment & Store Management',
    badge: '100% Store Compliance',
    technologies: ['Google Play Console', 'App Store Connect', 'TestFlight', 'Fastlane CI/CD', 'App Store Optimization (ASO)'],
    description: 'Launching an app successfully requires more than just code. We manage the entire app deployment process to ensure smooth publishing and compliance with stringent store guidelines.',
    howItWorks: 'Apps are tested, signed, and submitted to Google Play Store and Apple App Store, with thorough attention to privacy manifests, security policies, and store compliance standards.',
    enterpriseValue: 'Expedited go-live process, eliminated risk of store rejections, and optimized listings for maximum keyword ranking and organic downloads.',
  },
  {
    id: 'ui-ux-design',
    icon: '🎨',
    title: 'UI/UX Design & Prototyping',
    badge: 'Human-Centered Design',
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Zeplin', 'Lottie Micro-Animations'],
    description: 'User experience is a key differentiator for mobile applications. We design intuitive, visually appealing interfaces that deliver seamless interactions and align with your brand identity.',
    howItWorks: 'Our design team creates interactive prototypes, ergonomic wireframes, and clickable mockups to validate user flows and screen interactions before development begins.',
    enterpriseValue: 'Improves onboarding completion rates, cuts post-launch redesign costs by 70%, and drives long-term customer engagement and retention.',
  },
];

const keyFeatures = [
  {
    icon: '🌐',
    title: 'Multi-Platform Reach',
    description: 'Cross-platform solutions ensure consistent user experiences and brand fidelity across iOS and Android.',
  },
  {
    icon: '⚡',
    title: 'High-Performance Native Apps',
    description: 'Optimized for speed, device integration, offline data caching, and enterprise-grade security.',
  },
  {
    icon: '☁️',
    title: 'Cloud-Powered Backends',
    description: 'Scalable and serverless MBaaS backends for reliable data synchronization, push alerts, and auth.',
  },
  {
    icon: '🚀',
    title: 'Streamlined Deployment',
    description: 'Store compliance, release automation, CI/CD pipelines, and version management handled end-to-end.',
  },
  {
    icon: '🎯',
    title: 'Human-Centered Design',
    description: 'Engaging, modern UI/UX crafted to boost organic app adoption, user satisfaction, and lifetime retention.',
  },
];

const testimonials = [
  ['Amit Jain', 'Proagnexa Technology helped us automate our logistics workflows end-to-end. Their expertise in RPA and process automation reduced our manual workload by 40%, improving efficiency and accuracy across departments.'],
  ['Anuj Goyal', 'Their team delivered a secure and compliant solution for our financial platform. We were impressed with their commitment to data security and regulatory compliance, which gave us complete peace of mind.'],
  ['Michael Lee', 'We chose Proagnexa Technology for their industry-specific automation expertise. The solutions were tailor-made for our retail operations and helped us scale faster while reducing operational costs.'],
  ['Priya Mehta', 'What impressed us most is their dedicated support team and post-launch maintenance. They ensured smooth system performance and proactive updates, which made them a long-term technology partner for us.'],
];

export default function MobileApplicationDevelopment() {
  const [activePillar, setActivePillar] = useState('cross-platform');

  const selectedPillar = mobilePillars.find((p) => p.id === activePillar) || mobilePillars[0];

  return (
    <div className="mobile-page">
      {/* ================= HERO SECTION ================= */}
      <section className="mobile-hero">
        <div className="mobile-hero-glow glow-blue"></div>
        <div className="mobile-hero-glow glow-purple"></div>

        <div className="mobile-hero-container">
          <div className="mobile-hero-content">
            <div className="mobile-badge">
              <span className="mobile-badge-icon">📱</span>
              Mobile Application Development Services
            </div>

            <p className="mobile-brand-label">PROAGNEXA TECHNOLOGY</p>

            <h1>
              Mobile Application<br />
              <span>Development Services.</span>
            </h1>

            <p className="mobile-hero-lead">
              At Proagnexa Technology, we deliver end-to-end mobile application development solutions designed to help enterprises engage customers, empower employees, and accelerate business growth. In today’s mobile-first world, organizations must provide seamless, secure, and highly responsive mobile experiences that meet user expectations and business objectives.
            </p>

            <p className="mobile-hero-sublead">
              Our mobile development process covers every stage of the lifecycle—from strategy and design to development, deployment, and ongoing optimization. Whether it’s a consumer-facing application, an enterprise productivity tool, or a multi-tenant SaaS product, we ensure that the final solution is scalable, user-friendly, and aligned with your long-term digital strategy.
            </p>

            <div className="mobile-hero-actions">
              <a href="/contact" className="mobile-btn-primary">
                Build Your Mobile App
                <span>→</span>
              </a>
              <a href="#pillars" className="mobile-btn-secondary">
                Explore Core Capabilities
              </a>
            </div>

            <div className="mobile-stack-badges">
              <span>NATIVE &amp; CROSS-PLATFORM STACK:</span>
              <div className="stack-badges-wrap">
                <strong>Flutter</strong>
                <strong>React Native</strong>
                <strong>Swift / SwiftUI</strong>
                <strong>Kotlin / Jetpack Compose</strong>
                <strong>Firebase / Supabase</strong>
              </div>
            </div>
          </div>

          {/* Right Visual: Interactive Mobile App Mockup Preview */}
          <div className="mobile-hero-visual">
            <div className="phone-device-mockup">
              <div className="phone-outer-frame">
                <div className="phone-speaker-notch"></div>
                <div className="phone-screen-container">
                  <div className="phone-status-bar">
                    <span>9:41</span>
                    <div className="status-icons">
                      <span>📶</span>
                      <span>5G</span>
                      <span>🔋</span>
                    </div>
                  </div>

                  <div className="phone-app-content">
                    <div className="app-nav-header">
                      <div className="app-brand-pill">
                        <span className="brand-dot"></span>
                        <span>PROAGNEXA MOBILE</span>
                      </div>
                      <span className="app-bell">🔔</span>
                    </div>

                    <div className="app-user-hero">
                      <small>ENTERPRISE DASHBOARD</small>
                      <h3>Active Workflows</h3>
                      <p>99.98% System Uptime</p>
                    </div>

                    <div className="app-kpi-row">
                      <div className="app-kpi-card">
                        <small>Active Users</small>
                        <strong>18.4K</strong>
                        <span className="kpi-up">+24%</span>
                      </div>
                      <div className="app-kpi-card">
                        <small>Avg Latency</small>
                        <strong>42ms</strong>
                        <span className="kpi-tag">Optimal</span>
                      </div>
                    </div>

                    <div className="app-interactive-card">
                      <div className="interactive-card-icon">⚡</div>
                      <div>
                        <strong>Cross-Platform Engine</strong>
                        <small>iOS &amp; Android Synced</small>
                      </div>
                    </div>

                    <div className="app-sync-progress">
                      <div className="progress-labels">
                        <span>Biometric Auth Ready</span>
                        <span>100%</span>
                      </div>
                      <div className="progress-track">
                        <div className="progress-fill"></div>
                      </div>
                    </div>

                    <button type="button" className="phone-mock-action-btn">
                      Publish to App Stores →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-mobile-badge badge-top-right">
              <span>🍏</span>
              <div>
                <strong>iOS App Store</strong>
                <small>Swift &amp; SwiftUI</small>
              </div>
            </div>

            <div className="floating-mobile-badge badge-bottom-left">
              <span>🤖</span>
              <div>
                <strong>Google Play Store</strong>
                <small>Kotlin &amp; Jetpack</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5 PILLARS SECTION ================= */}
      <section className="mobile-pillars-section" id="pillars">
        <div className="mobile-section-heading">
          <p>FULL LIFECYCLE DEVELOPMENT</p>
          <h2>
            Comprehensive Mobile Application<br />
            <span>Development Offerings.</span>
          </h2>
          <p>
            From high-performance native apps and cost-efficient cross-platform solutions to cloud MBaaS backends and end-to-end store publishing.
          </p>
        </div>

        {/* Pillar Tabs */}
        <div className="mobile-tabs">
          {mobilePillars.map((p) => (
            <button
              type="button"
              key={p.id}
              className={`mobile-tab-btn ${activePillar === p.id ? 'active' : ''}`}
              onClick={() => setActivePillar(p.id)}
            >
              <span className="tab-icon">{p.icon}</span>
              <span className="tab-title">{p.title}</span>
            </button>
          ))}
        </div>

        {/* Detailed Active Card */}
        <div className="mobile-active-card">
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
            <span>Primary Frameworks &amp; Tools:</span>
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
        <div className="mobile-pillars-grid">
          {mobilePillars.map((pillar) => (
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
                View Lifecycle Breakdown <span>→</span>
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="mobile-features-section">
        <div className="mobile-section-heading">
          <p>BUILT FOR EXCELLENCE</p>
          <h2>
            Key Features of Our<br />
            <span>Mobile Development Solutions.</span>
          </h2>
        </div>

        <div className="mobile-features-grid">
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
      <section className="mobile-testimonials-section">
        <div className="mobile-section-heading">
          <p>WHAT OUR CLIENTS SAY</p>
          <h2>
            Why Businesses Trust<br />
            <span>Proagnexa Technology.</span>
          </h2>
        </div>

        <div className="mobile-testimonials-grid">
          {testimonials.map(([name, quote]) => (
            <article className="mobile-testimonial-card" key={name}>
              <div className="stars" aria-label="5 stars">★★★★★</div>
              <p>&ldquo;{quote}&rdquo;</p>
              <strong>{name}</strong>
              <span>Verified Client Partner</span>
            </article>
          ))}
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="mobile-cta-section">
        <div className="mobile-cta-box">
          <p className="cta-pretitle">NEXT-GENERATION MOBILE APPS</p>
          <h2>
            Transform Customer Experiences With a<br />
            <span>Custom Mobile Application.</span>
          </h2>
          <p>
            With our Mobile Application Development services, enterprises can confidently deliver secure, scalable, and user-focused mobile solutions that enhance customer engagement, streamline operations, and unlock new business opportunities.
          </p>
          <a href="/contact" className="cta-button-primary">
            Start Your Mobile Project <span>→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
