import React from 'react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content video-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Our Story & Vision</h3>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>
        <div className="video-player-frame">
          <div className="video-placeholder">
            <div className="video-badge-pill">Proagnexa Technology Showcase</div>
            <h4>Empowering Next-Gen Enterprises with Cutting-Edge Engineering</h4>
            <p>From cloud architectures to resilient microservices and intuitive mobile products.</p>
            <div className="video-actions">
              <span className="play-pulse-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
