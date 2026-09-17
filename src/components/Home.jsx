import React from 'react';
import developerImg from '../assets/developer-hero.jpg';

export default function Home({ onOpenVideo }) {
  return (
    <section className="hero-section" id="home">
      {/* Background Decorative Gradient Blobs & Patterns */}
      <div className="bg-decorations" aria-hidden="true">
        <div className="blob blob-top-left"></div>
        <div className="blob blob-center"></div>
        <div className="blob blob-bottom-right"></div>
        
        {/* Bottom Left Curved Wave with Dot Grid */}
        <div className="curved-wave-left">
          <svg width="340" height="280" viewBox="0 0 340 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M-20 280C60 280 140 250 180 180C220 110 160 30 240 0L-20 0V280Z"
              fill="url(#waveGradLeft)"
              opacity="0.35"
            />
            <defs>
              <linearGradient id="waveGradLeft" x1="-20" y1="280" x2="240" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="dot-grid"></div>
        </div>

        {/* Bottom Right Lilac Wave */}
        <div className="curved-wave-right">
          <svg width="360" height="320" viewBox="0 0 360 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M380 320C290 320 220 280 180 200C140 120 180 40 100 0L380 0V320Z"
              fill="url(#waveGradRight)"
              opacity="0.32"
            />
            <defs>
              <linearGradient id="waveGradRight" x1="380" y1="320" x2="100" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="hero-container">
        {/* LEFT COLUMN: Text, Heading & Buttons */}
        <div className="hero-left">
          {/* Pill Badge */}
          <div className="hero-badge">
            <span className="badge-icon-wrap">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
              </svg>
            </span>
            <span className="badge-text">
              Innovative <span className="badge-dot">•</span> Reliable <span className="badge-dot">•</span> Future Ready
            </span>
          </div>

          {/* Uppercase Small Label */}
          <div className="hero-label">PROAGNEXA TECHNOLOGY</div>

          {/* Large Heading */}
          <h1 className="hero-heading">
            Your Technology<br />
            Partner for a<br />
            <span className="gradient-text">Smarter Tomorrow</span>
          </h1>

          {/* Subtitle Description */}
          <p className="hero-description">
            We craft innovative technology solutions — from cloud to mobile, from DevOps to custom development. Helping businesses scale, innovate and stay ahead in the digital world.
          </p>

          {/* Action Buttons */}
          <div className="hero-buttons">
            <a href="#services" className="btn-explore">
              <span>Explore Our Services</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <button type="button" className="btn-watch-story" onClick={onOpenVideo}>
              <span className="play-icon-circle">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </span>
              <span>Watch Our Story</span>
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Developer Image + Floating Service Cards + Connectors */}
        <div className="hero-right">
          <div className="developer-stage">
            {/* Developer Desk Image */}
            <div className="developer-image-wrapper">
              <img 
                src={developerImg} 
                alt="Software engineer at Proagnexa Technology building scalable cloud solutions" 
                className="developer-photo"
              />
              <div className="image-overlay-glow"></div>
            </div>

            {/* Handwritten style annotation in top right */}
            <div className="handwritten-note">
              {/* <span>Better Technology</span>
              <span>Bigger Possibilities</span> */}
            </div>

            {/* SVG Connecting Lines between cards and workspace */}
            <svg className="connector-svg" viewBox="0 0 600 460" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Connector from Cloud card to center */}
              <path d="M120 70 C 180 70, 190 120, 240 120" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="4 4" opacity="0.75" />
              <circle cx="240" cy="120" r="3.5" fill="#0284c7" />

              {/* Connector from DevOps to IT Consulting & center */}
              <path d="M290 85 C 320 85, 330 110, 370 120" stroke="#818cf8" strokeWidth="1.8" strokeDasharray="4 4" opacity="0.75" />
              <circle cx="370" cy="120" r="3.5" fill="#6366f1" />

              {/* Connector between Mobile card and laptop */}
              <path d="M120 200 C 160 200, 180 230, 210 230" stroke="#34d399" strokeWidth="1.8" strokeDasharray="4 4" opacity="0.75" />
              <circle cx="210" cy="230" r="3.5" fill="#059669" />

              {/* Connector from IT Consulting */}
              <path d="M430 185 C 390 185, 370 215, 340 225" stroke="#a855f7" strokeWidth="1.8" strokeDasharray="4 4" opacity="0.75" />
              <circle cx="340" cy="225" r="3.5" fill="#9333ea" />
            </svg>

            {/* Floating Card 1: Cloud (Top-Left) */}
            <div className="floating-card card-cloud">
              <div className="card-icon-box bg-blue">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                </svg>
              </div>
              <div className="card-content">
                <h4 className="card-title">Cloud</h4>
                <p className="card-desc">Scale with confidence</p>
              </div>
            </div>

            {/* Floating Card 2: DevOps (Top-Right) */}
            <div className="floating-card card-devops">
              <div className="card-icon-box bg-purple">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div className="card-content">
                <h4 className="card-title">DevOps</h4>
                <p className="card-desc">Automate & Deploy</p>
              </div>
            </div>

            {/* Floating Card 3: Mobile Apps (Middle-Left) */}
            <div className="floating-card card-mobile">
              <div className="card-icon-box bg-green">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="3" ry="3"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <div className="card-content">
                <h4 className="card-title">Mobile Apps</h4>
                <p className="card-desc">Ideas to Apps</p>
              </div>
            </div>

            {/* Floating Card 4: IT Consulting (Middle-Right) */}
            <div className="floating-card card-consulting">
              <div className="card-icon-box bg-violet">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
  );
}
