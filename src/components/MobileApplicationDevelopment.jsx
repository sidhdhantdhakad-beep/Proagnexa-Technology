import './MobileApplicationDevelopment.css';

const mobileServices = [
  ['01', '🤖', 'Android Applications', 'Build modern Android applications with intuitive interfaces and reliable performance.'],
  ['02', '🍎', 'iOS Applications', 'Create polished iOS experiences designed around your customers and business goals.'],
  ['03', '🔄', 'Cross-Platform Apps', 'Develop applications that work across multiple platforms while reducing development complexity.'],
  ['04', '🔗', 'API & Backend Integration', 'Connect your mobile application with secure APIs, databases and backend services.'],
];

const processSteps = [
  ['01', 'Discover', 'We understand your business, users and application requirements.'],
  ['02', 'Design', 'Our team creates intuitive interfaces and user experiences for your application.'],
  ['03', 'Develop', 'Developers build your application with modern technologies and clean architecture.'],
  ['04', 'Launch', 'We test, optimize and prepare your app for production deployment.'],
];

function MobileApplicationDevelopment() {
  return (
    <div className="mobile-page">
      <section className="mobile-hero">
        <div className="mobile-hero-content">
          <span className="mobile-badge">📱 Mobile Solutions</span>
          <p className="mobile-label">PROAGNEXA TECHNOLOGY</p>
          <h1>Mobile Apps<br /><span>Built for the Future.</span></h1>
          <p className="mobile-hero-text">We design and develop modern mobile applications that deliver smooth experiences, reliable performance and meaningful business value.</p>
          <div className="mobile-buttons">
            <a href="/contact" className="mobile-primary-btn">Build Your App <span>→</span></a>
            <a href="#mobile-services" className="mobile-secondary-btn">Explore Services</a>
          </div>
        </div>

        <div className="phone-visual" aria-label="Mobile application preview">
          <div className="phone-glow" />
          <div className="phone">
            <div className="phone-notch" />
            <div className="phone-screen">
              <div className="app-header"><span>☰</span><strong>Proagnexa</strong><span>🔔</span></div>
              <div className="app-welcome"><small>WELCOME BACK</small><h3>Build.<br /><span>Grow.</span></h3></div>
              <div className="app-card"><div className="app-card-icon">⚡</div><div><strong>Smart Solutions</strong><small>Built for your business</small></div></div>
              <div className="app-progress"><span /></div>
              <button type="button">Get Started →</button>
            </div>
          </div>
        </div>
      </section>

      <section className="mobile-services" id="mobile-services">
        <div className="mobile-heading"><p>WHAT WE BUILD</p><h2>Mobile Experiences<br /><span>That Users Love.</span></h2><div className="mobile-line" /><p className="mobile-heading-text">From concept to launch, we create mobile applications focused on usability, performance and scalability.</p></div>
        <div className="mobile-service-grid">
          {mobileServices.map(([number, icon, title, description]) => (
            <article className="mobile-service-card" key={number}><div className="mobile-service-icon">{icon}</div><span>{number}</span><h3>{title}</h3><p>{description}</p><a href="/contact">Learn More <span>→</span></a></article>
          ))}
        </div>
      </section>

      <section className="mobile-process">
        <div className="mobile-heading"><p>OUR PROCESS</p><h2>From Idea<br /><span>To App Store.</span></h2></div>
        <div className="mobile-process-grid">{processSteps.map(([number, title, description]) => <article className="mobile-process-card" key={number}><div>{number}</div><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>

      <section className="mobile-tech">
        <div className="mobile-tech-content"><p>MOBILE TECHNOLOGY</p><h2>Built With<br /><span>Modern Technology.</span></h2><p className="mobile-tech-description">We choose technologies based on your application requirements, performance needs and long-term business goals.</p><div className="tech-list"><span>React Native</span><span>Flutter</span><span>Node.js</span><span>REST APIs</span><span>Firebase</span><span>PostgreSQL</span></div></div>
        <div className="tech-visual"><div className="tech-circle">📱</div><div className="tech-ring ring-one" /><div className="tech-ring ring-two" /></div>
      </section>

      <section className="mobile-cta"><div><p>HAVE AN APP IDEA?</p><h2>Let&apos;s Build Your<br /><span>Next Mobile App.</span></h2><p>Tell us about your application and let&apos;s transform your idea into a digital product.</p></div><a href="/contact">Start Your Project <span>→</span></a></section>
    </div>
  );
}

export default MobileApplicationDevelopment;
