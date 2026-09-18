import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Navbar({ onOpenSearch, onNavigateAbout, onNavigateHome, onNavigateServices, onNavigateCareer, onNavigateContact, onNavigateMobile, onNavigateDevOps, onNavigateCloudConsulting, onNavigateWebApp, onNavigateWhiteLabel, onNavigateDevOpsPartnership, onNavigateMaintenance, onNavigateCustomSaaS, currentPage = 'home' }) {
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

  const handleCustomSaaSNavigation = (event) => {
    event?.preventDefault();
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigateCustomSaaS && onNavigateCustomSaaS();
  };

  const handleMaintenanceNavigation = (event) => {
    event?.preventDefault();
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigateMaintenance && onNavigateMaintenance();
  };

  const handleDevOpsPartnershipNavigation = (event) => {
    event?.preventDefault();
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigateDevOpsPartnership && onNavigateDevOpsPartnership();
  };

  const handleWhiteLabelNavigation = (event) => {
    event?.preventDefault();
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigateWhiteLabel && onNavigateWhiteLabel();
  };

  const handleWebAppNavigation = (event) => {
    event?.preventDefault();
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigateWebApp && onNavigateWebApp();
  };

  const handleMobileNavigation = (event) => {
    event?.preventDefault();
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigateMobile && onNavigateMobile();
  };

  const handleDevOpsNavigation = (event) => {
    event?.preventDefault();
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigateDevOps && onNavigateDevOps();
  };

  const handleCloudConsultingNavigation = (event) => {
    event?.preventDefault();
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigateCloudConsulting && onNavigateCloudConsulting();
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => { e.preventDefault(); onNavigateHome && onNavigateHome(); }} className="navbar-logo" aria-label="Pragnexa Technologies Home">
          <Logo size="medium" />
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
              className={`nav-item has-dropdown ${currentPage === 'services' || currentPage === 'mobile' || currentPage === 'devops' || currentPage === 'cloud-consulting' || currentPage === 'webapp' || currentPage === 'whitelabel' || currentPage === 'devops-partnership' || currentPage === 'maintenance' || currentPage === 'custom-saas' ? 'active' : ''}`}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className="dropdown-trigger"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <svg className={`chevron-icon ${servicesDropdownOpen ? 'rotate' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {(currentPage === 'services' || currentPage === 'mobile' || currentPage === 'devops' || currentPage === 'cloud-consulting' || currentPage === 'webapp' || currentPage === 'whitelabel' || currentPage === 'devops-partnership' || currentPage === 'maintenance' || currentPage === 'custom-saas') && <span className="active-indicator"></span>}

              {servicesDropdownOpen && (
                <div className="dropdown-menu">
                  <a href="#web-app" onClick={handleWebAppNavigation} className="dropdown-item">
                    <span className="drop-icon blue">💻</span>
                    <div>
                      <strong>Web Application Development</strong>
                      <p>Custom full-stack, ERP, CRM &amp; SaaS</p>
                    </div>
                  </a>
                  <a href="#devops" onClick={handleDevOpsNavigation} className="dropdown-item">
                    <span className="drop-icon blue">☁️</span>
                    <div>
                      <strong>DevOps &amp; Cloud Services</strong>
                      <p>Reliable infrastructure and delivery</p>
                    </div>
                  </a>
                  <a href="#cloud-consulting" onClick={handleCloudConsultingNavigation} className="dropdown-item">
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
                  <a href="#maintenance" onClick={handleMaintenanceNavigation} className="dropdown-item">
                    <span className="drop-icon yellow">🛠️</span>
                    <div>
                      <strong>Maintenance &amp; Support Services</strong>
                      <p>24/7 SLA monitoring, bug fixes &amp; FinOps</p>
                    </div>
                  </a>
                  <a href="#custom-saas" onClick={handleCustomSaaSNavigation} className="dropdown-item">
                    <span className="drop-icon violet">🚀</span>
                    <div>
                      <strong>Custom Solutions &amp; White-Label SaaS</strong>
                      <p>Ready-to-use Mini-ERP, CRM &amp; vertical SaaS</p>
                    </div>
                  </a>
                  <div className="dropdown-group">
                    <div className="dropdown-group-title"><span className="drop-icon violet">🤝</span><strong>Agency Partnership</strong></div>
                    <a href="#white-label" onClick={handleWhiteLabelNavigation} className="dropdown-subitem">White-Label Development</a>
                    <a href="#service-06" onClick={(event) => handleServicesNavigation(event, '#service-06')} className="dropdown-subitem">Dedicated Developers</a>
                    <a href="#devops-partnership" onClick={handleDevOpsPartnershipNavigation} className="dropdown-subitem">DevOps &amp; Cloud Partnership</a>
                    <a href="#custom-saas" onClick={handleCustomSaaSNavigation} className="dropdown-subitem">White-Label SaaS Solutions</a>
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
                <a href="#web-app" onClick={handleWebAppNavigation}>Web Application Development</a>
                <a href="#devops" onClick={handleDevOpsNavigation}>DevOps &amp; Cloud Services</a>
                <a href="#cloud-consulting" onClick={handleCloudConsultingNavigation}>Cloud Consulting &amp; Managed Services</a>
                <a href="#mobile" onClick={handleMobileNavigation}>Mobile Application Development</a>
                <a href="#custom-saas" onClick={handleCustomSaaSNavigation}>Custom Solutions &amp; White-Label SaaS</a>
                <a href="#services" onClick={handleServicesNavigation}>Agency Partnership</a>
                <a href="#white-label" onClick={handleWhiteLabelNavigation}>White-Label Development</a>
                <a href="#services" onClick={handleServicesNavigation}>Dedicated Developers</a>
                <a href="#devops-partnership" onClick={handleDevOpsPartnershipNavigation}>DevOps &amp; Cloud Partnership</a>
                <a href="#maintenance" onClick={handleMaintenanceNavigation}>Maintenance &amp; Support Services</a>
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
