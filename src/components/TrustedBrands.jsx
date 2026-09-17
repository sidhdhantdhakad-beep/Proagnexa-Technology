import React from 'react';

export default function TrustedBrands() {
  return (
    <section className="trusted-brands-section">
      <div className="trusted-container">
        <h3 className="trusted-title">TRUSTED BY INNOVATIVE BRANDS</h3>

        <div className="brands-grid">
          {/* Microsoft */}
          <div className="brand-item" title="Microsoft">
            <svg width="120" height="32" viewBox="0 0 120 32" fill="currentColor">
              <rect x="0" y="4" width="11" height="11" fill="#f25022" />
              <rect x="13" y="4" width="11" height="11" fill="#7fba00" />
              <rect x="0" y="17" width="11" height="11" fill="#00a4ef" />
              <rect x="13" y="17" width="11" height="11" fill="#ffb900" />
              <text x="32" y="22" fontFamily="inherit" fontSize="16" fontWeight="600" fill="#334155" letterSpacing="-0.3px">Microsoft</text>
            </svg>
          </div>

          {/* AWS */}
          <div className="brand-item" title="Amazon Web Services">
            <svg width="68" height="32" viewBox="0 0 68 32" fill="none">
              <text x="2" y="20" fontFamily="inherit" fontSize="17" fontWeight="700" fill="#334155" letterSpacing="-0.5px">aws</text>
              <path d="M5 24 C 20 30, 40 30, 56 22" stroke="#ff9900" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M52 20 L57 22 L53 25" stroke="#ff9900" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Google Cloud */}
          <div className="brand-item" title="Google Cloud">
            <svg width="140" height="32" viewBox="0 0 140 32" fill="none">
              {/* Google Cloud icon */}
              <path d="M12 21h9a4 4 0 0 0 1-7.8 5.5 5.5 0 0 0-10.8-1.5A4.5 4.5 0 0 0 8 20" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <text x="28" y="21" fontFamily="inherit" fontSize="15" fontWeight="600" fill="#334155">Google Cloud</text>
            </svg>
          </div>

          {/* TATA */}
          <div className="brand-item" title="TATA">
            <svg width="76" height="32" viewBox="0 0 76 32" fill="none">
              <ellipse cx="12" cy="16" rx="9" ry="9" stroke="#334155" strokeWidth="1.8" />
              <path d="M8 12h8 M12 12v7" stroke="#334155" strokeWidth="1.6" />
              <text x="26" y="22" fontFamily="inherit" fontSize="16" fontWeight="800" fill="#334155" letterSpacing="2px">TATA</text>
            </svg>
          </div>

          {/* Infosys */}
          <div className="brand-item" title="Infosys">
            <svg width="90" height="32" viewBox="0 0 90 32" fill="none">
              <text x="2" y="21" fontFamily="inherit" fontSize="17" fontWeight="600" fill="#334155" letterSpacing="-0.2px">Infosys<tspan fontSize="9" dy="-6">®</tspan></text>
            </svg>
          </div>

          {/* Adobe */}
          <div className="brand-item" title="Adobe">
            <svg width="95" height="32" viewBox="0 0 95 32" fill="none">
              <path d="M0 6L9 26H3L0 19V6Z" fill="#ff0000" />
              <path d="M19 6L10 26H16L19 19V6Z" fill="#ff0000" />
              <path d="M9.5 15L13 22H6L9.5 15Z" fill="#ff0000" />
              <text x="26" y="22" fontFamily="inherit" fontSize="16" fontWeight="700" fill="#334155">Adobe</text>
            </svg>
          </div>

          {/* Accenture */}
          <div className="brand-item" title="Accenture">
            <svg width="105" height="32" viewBox="0 0 105 32" fill="none">
              <text x="0" y="21" fontFamily="inherit" fontSize="16" fontWeight="600" fill="#334155">accenture</text>
              <path d="M72 11l4 3-4 3" stroke="#a100ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* TCS */}
          <div className="brand-item" title="Tata Consultancy Services">
            <svg width="60" height="32" viewBox="0 0 60 32" fill="none">
              <text x="2" y="22" fontFamily="inherit" fontSize="18" fontWeight="800" fill="#334155" letterSpacing="0.5px">tcs</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
