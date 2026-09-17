import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Home';
import Metrics from './components/Metrics';
import TrustedBrands from './components/TrustedBrands';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import VideoModal from './components/VideoModal';
import SearchModal from './components/SearchModal';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;
      if (hash === '#about' || path === '/about') {
        setCurrentPage('about');
      } else if (hash === '#services' || path === '/services') {
        setCurrentPage('services');
      } else {
        setCurrentPage('home');
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToHome = () => {
    setCurrentPage('home');
    window.location.hash = '#home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToAbout = () => {
    setCurrentPage('about');
    window.location.hash = '#about';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToServices = () => {
    setCurrentPage('services');
    window.location.hash = '#services';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-wrapper">
      {/* Sticky White Navbar rendered across pages */}
      {currentPage !== 'about' && (
        <Navbar
          currentPage={currentPage}
          onNavigateHome={navigateToHome}
          onNavigateAbout={navigateToAbout}
          onNavigateServices={navigateToServices}
          onOpenSearch={() => setSearchModalOpen(true)}
        />
      )}

      {/* Conditional Page Views */}
      {currentPage === 'home' && (
        <main>
          <Hero onOpenVideo={() => setVideoModalOpen(true)} />
          <Metrics />
          <TrustedBrands />
        </main>
      )}

      {currentPage === 'services' && (
        <main>
          <Services
            onNavigateHome={navigateToHome}
            onNavigateAbout={navigateToAbout}
            onOpenSearch={() => setSearchModalOpen(true)}
            onContactClick={() => {
              window.location.hash = '#contact';
            }}
          />
        </main>
      )}

      {currentPage === 'about' && (
        <AboutUs
          onNavigateHome={navigateToHome}
          onNavigateServices={navigateToServices}
          onOpenVideo={() => setVideoModalOpen(true)}
          onOpenSearch={() => setSearchModalOpen(true)}
        />
      )}

      {/* Interactive Modals */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </div>
  );
}

export default App;
