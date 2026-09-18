import './Services.css';

const services = [
  ['01', '☁️', 'DevOps & Cloud Services', 'CI/CD Pipeline Setup, Infrastructure as Code, Docker, Kubernetes, Cloud Migration, Monitoring & Security Hardening.', '#services/devops-cloud'],
  ['02', '⚙️', 'Cloud Consulting & Managed Services', 'Cloud Architecture Design, Hybrid & Multi-Cloud Setups, Monitoring, Backup & Disaster Recovery Solutions.', '#services/cloud-consulting'],
  ['03', '💻', 'Web Application Development', 'Custom ERP, CRM, eCommerce and SaaS applications with modern frontend, backend technologies and API integrations.', '#services/web-development'],
  ['04', '📱', 'Mobile Application Development', 'Cross-platform and native mobile apps with API integration, app deployment, UI/UX design and prototyping.', '/services/mobile-application-development'],
  ['05', '🏷️', 'White-Label Development Services', 'Deliver Web, Mobile and API projects under your brand with complete execution and client confidentiality.', '#services/white-label'],
  ['06', '👨‍💻', 'Dedicated Developers Services', 'Hire skilled Frontend, Backend, Mobile and DevOps developers on flexible engagement models.', '#services/dedicated-developers'],
  ['07', '🚀', 'DevOps & Cloud Partnership', 'Enterprise-level CI/CD automation, Kubernetes orchestration, cloud security and continuous monitoring.', '#services/devops-partnership'],
  ['08', '🛠️', 'Maintenance & Support Services', 'Monitoring, bug fixes, security patches, performance optimization and SLA-based support for smooth operations.', '#services/maintenance-support'],
  ['09', '🧩', 'Custom Solutions & White-Label SaaS', 'Ready-to-use ERP, CRM, eCommerce and industry-specific SaaS products that can be customized for your brand.', '#services/custom-solutions'],
];

const features = [
  ['01', 'How We Can Help', 'Technology solutions aligned with your business goals.'],
  ['02', 'Why Partner With Us', 'Flexible development and technical expertise.'],
  ['03', 'Our Technology Services', 'Cloud, DevOps, Web, Mobile and SaaS solutions.'],
];

function Services() {
  return (
    <main className="pro-services">
      <section className="services-hero">
        <div className="services-hero-content">
          <span className="services-hero-tag">OUR SERVICES</span>
          <h1>Technology Solutions<br /><span>Built Around Your Business.</span></h1>
          <p>From cloud infrastructure and application development to dedicated teams and technology partnerships, we provide solutions designed to help businesses grow.</p>
          <div className="services-hero-buttons"><a href="#services" className="services-primary-button">Explore Services <span>→</span></a><a href="/contact" className="services-secondary-button">Talk to Us</a></div>
        </div>
        <div className="services-hero-orbit" aria-label="Proagnexa Technology services">
          <div className="services-orbit-main"><span>⚡</span><strong>PROAGNEXA</strong><small>TECHNOLOGY</small></div>
          <div className="services-orbit-item orbit-one">☁️</div><div className="services-orbit-item orbit-two">💻</div><div className="services-orbit-item orbit-three">📱</div><div className="services-orbit-item orbit-four">🚀</div>
        </div>
      </section>

      <section className="services-list" id="services">
        <div className="services-section-title"><span>WHAT WE DO</span><h2>For Your Specific Industry,<br /><strong>We Build Tailored IT Solutions.</strong></h2><p>Explore our technology services designed to solve real business challenges and create long-term value.</p></div>
        <div className="service-grid">
          {services.map(([number, icon, title, description, link]) => <article className="pro-service-card" id={`service-${number}`} key={number}><div className="pro-service-card-top"><span>{number}</span><div>{icon}</div></div><h3>{title}</h3><p>{description}</p><a href={link}>Discover Now <span>→</span></a></article>)}
        </div>
      </section>

      <section className="company-section">
        <div className="company-content"><span className="company-label">OUR COMPANY</span><h2>Technology That<br /><span>Moves Businesses Forward.</span></h2><p>Proagnexa Technology delivers web, mobile, cloud and automation solutions designed around the needs of modern businesses.</p><p>Our team combines development expertise, cloud technologies and dedicated technical support to help businesses build reliable digital products.</p><a href="/contact" className="company-button">Let&apos;s Work Together <span>→</span></a></div>
        <div className="company-cards">{features.map(([number, title, description]) => <a href={number === '03' ? '#services' : '#about'} className="company-feature" key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div><b>↗</b></a>)}</div>
      </section>

      <section className="stats-section"><div className="stats-title"><span>OUR IMPACT</span><h2>Growing Through<br /><strong>Technology &amp; Partnerships.</strong></h2></div><div className="stats-grid"><div><strong>40+</strong><span>Happy Clients</span></div><div><strong>100+</strong><span>Completed Projects</span></div><div><strong>20+</strong><span>Skilled Experts</span></div><div><strong>15+</strong><span>Industries Served</span></div></div></section>

      <section className="services-bottom-cta"><div><span>HAVE A PROJECT IN MIND?</span><h2>Let&apos;s Build Something<br /><strong>Great Together.</strong></h2></div><a href="/contact">Start a Conversation <span>→</span></a></section>
    </main>
  );
}

export default Services;
