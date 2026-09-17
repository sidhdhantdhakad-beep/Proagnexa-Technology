import React, { useState } from 'react';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const quickLinks = [
    { title: 'Cloud Infrastructure & Migration', tag: 'Cloud' },
    { title: 'Kubernetes & CI/CD Pipelines', tag: 'DevOps' },
    { title: 'React Native & Flutter Mobile Apps', tag: 'Mobile' },
    { title: 'Enterprise Digital Transformation', tag: 'IT Consulting' },
  ];

  const filteredLinks = query
    ? quickLinks.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.tag.toLowerCase().includes(query.toLowerCase())
      )
    : quickLinks;

  return (
    <div className="modal-backdrop" onClick={onClose}>
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
          <button className="modal-close-btn" onClick={onClose} aria-label="Close search">
            ✕
          </button>
        </div>

        <div className="search-results">
          <div className="search-section-label">Suggested Solutions</div>
          {filteredLinks.map((item, idx) => (
            <div key={idx} className="search-result-item" onClick={onClose}>
              <span className="search-item-title">{item.title}</span>
              <span className="search-item-tag">{item.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
