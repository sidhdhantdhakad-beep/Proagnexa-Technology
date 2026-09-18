import { useState } from 'react';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const handleClose = () => {
    setQuery('');
    onClose();
  };

  const quickLinks = [
    { title: 'Services', tag: 'Page', href: '/services' },
    { title: 'DevOps & Cloud Services', tag: 'Cloud', href: '/services#service-01' },
    { title: 'Cloud Consulting & Managed Services', tag: 'Cloud', href: '/services#service-02' },
    { title: 'Web Application Development', tag: 'Web', href: '/services#service-03' },
    { title: 'Mobile Application Development', tag: 'Mobile', href: '/services/mobile-application-development' },
    { title: 'White-Label Development', tag: 'Partnership', href: '/services#service-05' },
    { title: 'Dedicated Developers', tag: 'Partnership', href: '/services#service-06' },
    { title: 'DevOps & Cloud Partnership', tag: 'Partnership', href: '/services#service-07' },
    { title: 'Careers', tag: 'Page', href: '/career' },
    { title: 'Contact', tag: 'Page', href: '/contact' },
  ];

  const filteredLinks = query
    ? quickLinks.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.tag.toLowerCase().includes(query.toLowerCase())
      )
    : quickLinks;

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal-content search-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="search-input-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            placeholder="Search services, tech stacks, case studies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="search-input-field"
          />
          <button className="modal-close-btn" onClick={handleClose} aria-label="Close search">
            ✕
          </button>
        </div>

        <div className="search-results">
          <div className="search-section-label">Suggested Solutions</div>
          {filteredLinks.map((item) => (
            <a key={item.href} href={item.href} className="search-result-item" onClick={handleClose}>
              <span className="search-item-title">{item.title}</span>
              <span className="search-item-tag">{item.tag}</span>
            </a>
          ))}
          {filteredLinks.length === 0 && <p className="search-empty-state">No matching services found.</p>}
        </div>
      </div>
    </div>
  );
}
