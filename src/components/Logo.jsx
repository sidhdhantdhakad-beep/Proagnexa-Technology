import React from 'react';
import './Logo.css';

export default function Logo({ 
  showText = true, 
  showTagline = false, 
  size = 'medium', // 'small' | 'medium' | 'large'
  className = '',
  light = false 
}) {
  return (
    <div className={`pragnexa-logo-container ${size} ${light ? 'theme-light' : ''} ${className}`}>
      <div className="logo-icon-frame">
        <img 
          src="/logo-icon-transparent.png" 
          alt="Pragnexa Technologies Logo" 
          className="logo-icon-image"
          onError={(e) => {
            // Fallback to original or full logo if needed
            e.currentTarget.src = "/pragnexa-logo-original.jpg";
          }}
        />
      </div>

      {showText && (
        <div className="logo-brand-copy">
          <div className="logo-title">
            <span className="text-pragnex">PRAGNEX</span>
            <span className="text-accent-a">A</span>
          </div>
          <span className="logo-subtitle">TECHNOLOGIES</span>
          {showTagline && (
            <span className="logo-tagline">TRUST &bull; INNOVATION &bull; LONG-TERM PARTNERSHIP</span>
          )}
        </div>
      )}
    </div>
  );
}
