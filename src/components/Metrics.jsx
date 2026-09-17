import React from 'react';

export default function Metrics() {
  const stats = [
    {
      id: 1,
      value: '5+',
      label: 'Years of Experience',
      colorClass: 'stat-blue',
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      id: 2,
      value: '50+',
      label: 'Happy Clients',
      colorClass: 'stat-purple',
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
          <path d="M16 11l2 2 4-4" strokeWidth="1.8"></path>
        </svg>
      ),
    },
    {
      id: 3,
      value: '100+',
      label: 'Projects Delivered',
      colorClass: 'stat-green',
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
          <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-1.5 5-1.5"></path>
          <path d="M15 12v5s3.03-.55 4.5-2c1.63-1.62 1.5-5 1.5-5"></path>
        </svg>
      ),
    },
    {
      id: 4,
      value: '99.9%',
      label: 'Client Satisfaction',
      colorClass: 'stat-cyan',
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <polyline points="9 12 11 14 15 10"></polyline>
        </svg>
      ),
    },
  ];

  return (
    <div className="metrics-wrapper">
      <div className="metrics-card">
        {stats.map((stat, index) => (
          <React.Fragment key={stat.id}>
            <div className={`metric-item ${stat.colorClass}`}>
              <div className="metric-icon-wrap">
                {stat.icon}
              </div>
              <div className="metric-info">
                <span className="metric-number">{stat.value}</span>
                <span className="metric-title">{stat.label}</span>
              </div>
            </div>
            {index < stats.length - 1 && <div className="metric-divider" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
