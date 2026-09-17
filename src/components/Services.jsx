import React, { useState } from 'react';
import developerImg from '../assets/developer-hero.jpg';
import './Services.css';

const servicesData = [
  {
    id: 'cloud',
    category: 'Cloud',
    title: 'Cloud Solutions',
    description: 'Scalable, secure and cost-effective cloud infrastructure for your business.',
    image: '/services/cloud.jpg',
    colorClass: 'icon-blue',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
      </svg>
    )
  },
  {
    id: 'devops',
    category: 'DevOps',
    title: 'DevOps & CI/CD',
    description: 'Automate, deploy and manage with modern DevOps practices and pipelines.',
    image: '/services/devops.jpg',
    colorClass: 'icon-purple',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
  {
    id: 'mobile',
    category: 'Mobile Apps',
    title: 'Mobile App Development',
    description: 'Build powerful and user-friendly mobile applications for iOS & Android.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80',
    colorClass: 'icon-green',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="3" ry="3"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    )
  },
  {
    id: 'consulting',
    category: 'IT Consulting',
    title: 'IT Consulting',
    description: 'Strategic technology guidance to help you make the right enterprise decisions.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
    colorClass: 'icon-violet',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    )
  },
  {
    id: 'web',
    category: 'Custom Development',
    title: 'Web Development',
    description: 'Modern, responsive and high performance web applications and platforms.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80',
    colorClass: 'icon-pink',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    )
  },
  {
    id: 'cybersecurity',
    category: 'Cloud',
    title: 'Cybersecurity',
    description: 'Protect your data and systems with advanced security protocols and defense.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
    colorClass: 'icon-cyan',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    )
  },
  {
    id: 'database',
    category: 'Custom Development',
    title: 'Database Management',
    description: 'Reliable and optimized database solutions for scale and better performance.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=600&q=80',
    colorClass: 'icon-amber',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    )
  },
  {
    id: 'custom-dev',
    category: 'Custom Development',
    title: 'Custom Software Development',
    description: 'Tailored bespoke solutions engineered to meet your unique business needs.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
    colorClass: 'icon-teal',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    )
  }
];

const categories = ['All', 'Cloud', 'DevOps', 'Mobile Apps', 'IT Consulting', 'Custom Development'];

export default function Services({ onNavigateHome, onNavigateAbout, onOpenSearch, onContactClick }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedServiceModal, setSelectedServiceModal] = useState(null);

  const filteredServices = selectedCategory === 'All'
    ? servicesData
    : servicesData.filter(s => s.category === selectedCategory);

  return (
    <div className="services-page">
      {/* ================= 1. SERVICES HERO ================= */}
      <section className="services-hero-section">
        {/* Background decorative blooms */}
        <div className="bg-decorations" aria-hidden="true">
          <div className="blob blob-top-left"></div>
          <div className="blob blob-center"></div>
          <div className="blob blob-bottom-right"></div>
          
          <div className="curved-wave-left">
            <svg width="340" height="280" viewBox="0 0 340 280" fill="none">
              <path d="M-20 280C60 280 140 250 180 180C220 110 160 30 240 0L-20 0V280Z" fill="url(#srvWaveLeft)" opacity="0.35" />
              <defs>
                <linearGradient id="srvWaveLeft" x1="-20" y1="280" x2="240" y2="0">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="dot-grid"></div>
          </div>
        </div>

        <div className="services-hero-container">
          {/* Left Column: Heading & Feature Badges */}
          <div className="services-hero-left">
            <div className="service-badge">
              <span className="badge-icon-wrap">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
                </svg>
              </span>
              <span className="badge-text">Our Services</span>
            </div>

            <div className="services-label">PROAGNEXA TECHNOLOGY</div>

            <h1 className="services-heading">
              Comprehensive<br />
              Technology Solutions<br />
              <span className="gradient-text">for Your Business</span>
            </h1>

            <p className="services-description">
              We provide end-to-end technology solutions to help businesses build, scale and succeed in the digital world. From cloud infrastructure to custom applications, we've got you covered.
            </p>

            {/* 3 Key Feature Badges */}
            <div className="hero-feature-badges">
              <div className="feature-pill-item">
                <div className="pill-avatar-icon blue">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="pill-text-block">
                  <strong>Expert Team</strong>
                  <span>Skilled Professionals</span>
                </div>
              </div>

              <div className="feature-pill-item">
                <div className="pill-avatar-icon purple">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  </svg>
                </div>
                <div className="pill-text-block">
                  <strong>Flexible Engagement</strong>
                  <span>Your Needs, Our Priority</span>
                </div>
              </div>

              <div className="feature-pill-item">
                <div className="pill-avatar-icon cyan">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="pill-text-block">
                  <strong>On-Time Delivery</strong>
                  <span>We Keep Our Promises</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Developer Stage Visual */}
          <div className="services-hero-right">
            <div className="developer-stage">
              <div className="developer-image-wrapper">
                <img 
                  src={developerImg} 
                  alt="Proagnexa Technology Engineering Services" 
                  className="developer-photo"
                />
                <div className="image-overlay-glow"></div>
              </div>

              <div className="handwritten-note">
                <span>Better Technology</span>
                <span>Bigger Possibilities</span>
              </div>

              {/* Floating Cards */}
              <div className="floating-card card-cloud">
                <div className="card-icon-box bg-blue">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                  </svg>
                </div>
                <div className="card-content">
                  <h4 className="card-title">Cloud</h4>
                  <p className="card-desc">Scale with confidence</p>
                </div>
              </div>

              <div className="floating-card card-devops">
                <div className="card-icon-box bg-purple">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <div className="card-content">
                  <h4 className="card-title">DevOps</h4>
                  <p className="card-desc">Automate & Deploy</p>
                </div>
              </div>

              <div className="floating-card card-mobile">
                <div className="card-icon-box bg-green">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
                    <rect x="5" y="2" width="14" height="20" rx="3" ry="3"></rect>
                  </svg>
                </div>
                <div className="card-content">
                  <h4 className="card-title">Mobile Apps</h4>
                  <p className="card-desc">Ideas to Apps</p>
                </div>
              </div>

              <div className="floating-card card-consulting">
                <div className="card-icon-box bg-violet">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </div>
                <div className="card-content">
                  <h4 className="card-title">IT Consulting</h4>
                  <p className="card-desc">Strategic Guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. ALL SERVICES GRID SECTION ================= */}
      <section className="services-grid-section" id="services-grid">
        <div className="services-content-container">
          {/* Section Header & Filter Tabs */}
          <div className="services-header-row">
            <div className="services-header-text">
              <div className="service-subpill">All Services</div>
              <h2>Our Services</h2>
              <p>We offer a wide range of technology services to help you build, grow and stay ahead.</p>
            </div>

            {/* Category Filter Tabs */}
            <div className="filter-tabs-wrapper">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 8 Modern Service Cards with Service Images */}
          <div className="services-cards-grid">
            {filteredServices.map((service) => (
              <div 
                key={service.id} 
                className="service-card"
                onClick={() => setSelectedServiceModal(service)}
              >
                {/* Modern Service Image Header */}
                <div className="service-card-image-wrap">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="service-card-img"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                  <div className="service-card-image-overlay"></div>
                  <div className={`service-icon-floating ${service.colorClass}`}>
                    {service.icon}
                  </div>
                </div>

                {/* Service Card Body */}
                <div className="service-card-body">
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.description}</p>

                  <div className="service-card-footer">
                    <span className="learn-more-text">Learn More</span>
                    <span className="learn-more-circle">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. WHY CHOOSE PROAGNEXA ================= */}
      <section className="why-choose-section">
        <div className="services-content-container">
          <div className="why-choose-card">
            <div className="why-choose-left">
              <div className="service-subpill">Why Choose Us</div>
              <h2>Why Choose Proagnexa?</h2>
              <p>We focus on delivering real value through innovation, expertise and a customer-first approach.</p>
            </div>

            <div className="why-choose-features">
              <div className="why-feature-item">
                <div className="why-feature-icon blue">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <div>
                  <strong>Proven Expertise</strong>
                  <p>Years of experience in delivering successful projects.</p>
                </div>
              </div>

              <div className="why-feature-item">
                <div className="why-feature-icon purple">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  </svg>
                </div>
                <div>
                  <strong>Client Focused</strong>
                  <p>Your success is our priority.</p>
                </div>
              </div>

              <div className="why-feature-item">
                <div className="why-feature-icon cyan">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                </div>
                <div>
                  <strong>Quality Assurance</strong>
                  <p>We ensure top-notch quality in every project.</p>
                </div>
              </div>

              <div className="why-feature-item">
                <div className="why-feature-icon amber">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <strong>On-Time Delivery</strong>
                  <p>We respect your time and deadlines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. GRADIENT CTA BANNER ================= */}
      <section className="services-cta-section">
        <div className="services-content-container">
          <div className="services-gradient-cta-card">
            <div className="cta-banner-text">
              <div className="cta-banner-label">READY TO GET STARTED?</div>
              <h2>Let's Build Something Amazing Together</h2>
              <p>Have a project in mind? We'd love to hear from you.</p>
            </div>

            <button 
              className="cta-banner-white-btn"
              onClick={onContactClick}
            >
              <span>Contact Us</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Detail Modal when a Service Card is clicked */}
      {selectedServiceModal && (
        <div className="modal-backdrop" onClick={() => setSelectedServiceModal(null)}>
          <div className="modal-content service-detail-modal" onClick={(e) => e.stopPropagation()}>
            <div className="service-modal-header">
              <div className="service-modal-title-wrap">
                <div className={`service-icon-modal ${selectedServiceModal.colorClass}`}>
                  {selectedServiceModal.icon}
                </div>
                <div>
                  <h3>{selectedServiceModal.title}</h3>
                  <span className="service-modal-category">{selectedServiceModal.category}</span>
                </div>
              </div>
              <button 
                className="modal-close-btn" 
                onClick={() => setSelectedServiceModal(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="service-modal-body">
              <img 
                src={selectedServiceModal.image} 
                alt={selectedServiceModal.title} 
                className="service-modal-hero-img" 
              />
              <p className="service-modal-lead">{selectedServiceModal.description}</p>
              <div className="service-modal-deliverables">
                <strong>What we deliver:</strong>
                <ul>
                  <li>✓ Comprehensive architectural assessment and planning</li>
                  <li>✓ Modern engineering aligned with industry best practices</li>
                  <li>✓ Continuous integration, automated testing, and security hardening</li>
                  <li>✓ 24/7 dedicated support, proactive monitoring, and SLA guarantees</li>
                </ul>
              </div>
              <div className="service-modal-actions">
                <button 
                  className="btn-get-started" 
                  onClick={() => { setSelectedServiceModal(null); onContactClick && onContactClick(); }}
                >
                  Request Consultation →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
