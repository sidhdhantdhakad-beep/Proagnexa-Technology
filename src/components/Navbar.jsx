import { useState, useEffect } from 'react';

export default function Navbar({ onOpenSearch, onNavigateAbout, onNavigateHome, onNavigateServices, onNavigateCareer, onNavigateContact, onNavigateMobile, currentPage = 'home' }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServicesNavigation = (event, targetHash = '#services') => {
    event?.preventDefault();
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigateServices && onNavigateServices();
    window.location.hash = targetHash;
  };

  const handleMobileNavigation = (event) => {
    event?.preventDefault();
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigateMobile && onNavigateMobile();
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => { e.preventDefault(); onNavigateHome && onNavigateHome(); }} className="navbar-logo" aria-label="Proagnexa Technology Home">
          <div className="logo-icon">
            <svg width="40" height="40" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="pGrad" x1="2" y1="2" x2="42" y2="42" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#00c0fa" />
                  <stop offset="50%" stopColor="#1e68f3" />
                  <stop offset="100%" stopColor="#7932e6" />
                </linearGradient>
                <linearGradient id="innerCut" x1="12" y1="12" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#eff6ff" />
                </linearGradient>
              </defs>
              <rect width="44" height="44" rx="12" fill="url(#pGrad)" />
              <path
                d="M14 11H26C31.5 11 35 14.5 35 19.5C35 24.5 31.5 28 26 28H20.5V33H14V11Z"
                fill="white"
              />
              <path
                d="M20.5 16.5H25.5C28.2 16.5 29.8 17.8 29.8 19.5C29.8 21.2 28.2 22.5 25.5 22.5H20.5V16.5Z"
                fill="url(#pGrad)"
              />
            </svg>
          </div>
          <div className="logo-text">
            <span className="brand-name">Proagnexa</span>
            <span className="brand-sub">Technology</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            <li className={`nav-item ${currentPage === 'home' ? 'active' : ''}`}>
              <a href="#home" onClick={(e) => { e.preventDefault(); onNavigateHome && onNavigateHome(); }}>Home</a>
              {currentPage === 'home' && <span className="active-indicator"></span>}
            </li>
            <li className={`nav-item ${currentPage === 'about' ? 'active' : ''}`}>
              <a href="#about" onClick={(e) => { e.preventDefault(); onNavigateAbout && onNavigateAbout(); }}>About Us</a>
              {currentPage === 'about' && <span className="active-indicator"></span>}
            </li>
            <li
              className={`nav-item has-dropdown ${currentPage === 'services' ? 'active' : ''}`}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className="dropdown-trigger"
                onClick={() => {
                  onNavigateServices && onNavigateServices();
                  setServicesDropdownOpen(!servicesDropdownOpen);
                }}
                aria-expanded={servicesDropdownOpen}
              >
                Services
                <svg className={`chevron-icon ${servicesDropdownOpen ? 'rotate' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {currentPage === 'services' && <span className="active-indicator"></span>}

              {servicesDropdownOpen && (
                <div className="dropdown-menu">
                  <a href="#services" onClick={handleServicesNavigation} className="dropdown-item">
                    <span className="drop-icon blue">☁️</span>
                    <div>
                      <strong>DevOps &amp; Cloud Services</strong>
                      <p>Reliable infrastructure and delivery</p>
                    </div>
                  </a>
                  <a href="#services" onClick={handleServicesNavigation} className="dropdown-item">
                    <span className="drop-icon purple">⚙️</span>
                    <div>
                      <strong>Cloud Consulting &amp; Managed Services</strong>
                      <p>Strategic guidance and 24/7 support</p>
                    </div>
                  </a>
                  <a href="#mobile" onClick={handleMobileNavigation} className="dropdown-item">
                    <span className="drop-icon green">📱</span>
                    <div>
                      <strong>Mobile Application Development</strong>
                      <p>High-performance apps for every platform</p>
                    </div>
                  </a>
                  <div className="dropdown-group">
                    <div className="dropdown-group-title"><span className="drop-icon violet">🤝</span><strong>Agency Partnership</strong></div>
                    <a href="#service-05" onClick={(event) => handleServicesNavigation(event, '#service-05')} className="dropdown-subitem">White-Label Development</a>
                    <a href="#service-06" onClick={(event) => handleServicesNavigation(event, '#service-06')} className="dropdown-subitem">Dedicated Developers</a>
                    <a href="#service-07" onClick={(event) => handleServicesNavigation(event, '#service-07')} className="dropdown-subitem">DevOps &amp; Cloud Partnership</a>
                  </div>
                </div>
              )}
            </li>
            <li className={`nav-item ${currentPage === 'career' ? 'active' : ''}`}>
              <a href="#career" onClick={(e) => { e.preventDefault(); onNavigateCareer && onNavigateCareer(); }}>Career</a>
              {currentPage === 'career' && <span className="active-indicator"></span>}
            </li>
            <li className={`nav-item ${currentPage === 'contact' ? 'active' : ''}`}>
              <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigateContact && onNavigateContact(); }}>Contact</a>
              {currentPage === 'contact' && <span className="active-indicator"></span>}
            </li>
          </ul>
        </nav>

        {/* Right Action Icons & CTA */}
        <div className="navbar-actions">
          <button
            className="search-button"
            onClick={onOpenSearch}
            aria-label="Search site"
            title="Search"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          {/* Hamburger toggle */}
          <button
            className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-nav-links">
            <li>
              <a href="#home" onClick={() => { setMobileMenuOpen(false); onNavigateHome && onNavigateHome(); }} className={currentPage === 'home' ? 'mobile-active' : ''}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={() => { setMobileMenuOpen(false); onNavigateAbout && onNavigateAbout(); }} className={currentPage === 'about' ? 'mobile-active' : ''}>About Us</a>
            </li>
            <li>
              <a href="#services" onClick={handleServicesNavigation} className={currentPage === 'services' ? 'mobile-active' : ''}>Services</a>
              <div className="mobile-service-links">
                <a href="#services" onClick={handleServicesNavigation}>DevOps &amp; Cloud Services</a>
                <a href="#services" onClick={handleServicesNavigation}>Cloud Consulting &amp; Managed Services</a>
                <a href="#mobile" onClick={handleMobileNavigation}>Mobile Application Development</a>
                <a href="#services" onClick={handleServicesNavigation}>Agency Partnership</a>
                <a href="#services" onClick={handleServicesNavigation}>White-Label Development</a>
                <a href="#services" onClick={handleServicesNavigation}>Dedicated Developers</a>
                <a href="#services" onClick={handleServicesNavigation}>DevOps &amp; Cloud Partnership</a>
              </div>
            </li>
            <li>
              <a href="#career" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigateCareer && onNavigateCareer(); }} className={currentPage === 'career' ? 'mobile-active' : ''}>Career</a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigateContact && onNavigateContact(); }} className={currentPage === 'contact' ? 'mobile-active' : ''}>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
