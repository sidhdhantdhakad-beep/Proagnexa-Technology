import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Home';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Careers from './components/Careers';
import Contact from './components/Contact';
import MobileApplicationDevelopment from './components/MobileApplicationDevelopment';
import DevOpsAndCloudServices from './components/DevOpsAndCloudServices';
import CloudConsultingAndManagedServices from './components/CloudConsultingAndManagedServices';
import WebApplicationDevelopment from './components/WebApplicationDevelopment';
import WhiteLabelDevelopmentServices from './components/WhiteLabelDevelopmentServices';
import DevOpsAndCloudPartnership from './components/DevOpsAndCloudPartnership';
import VideoModal from './components/VideoModal';
import SearchModal from './components/SearchModal';
import Footer from './components/Footer';
import './App.css';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const path = location.pathname;
  const currentPage =
    path === '/about'
      ? 'about'
      : path === '/services/devops-and-cloud-partnership' || path === '/devops-and-cloud-partnership' || path === '/devops-partnership'
      ? 'devops-partnership'
      : path === '/services/white-label-development-services' || path === '/white-label-development-services' || path === '/white-label'
      ? 'whitelabel'
      : path === '/services/web-application-development' || path === '/web-application-development' || path === '/web-development'
      ? 'webapp'
      : path === '/services/cloud-consulting-and-managed-services' || path === '/cloud-consulting'
      ? 'cloud-consulting'
      : path === '/services/devops-and-cloud-services' || path === '/devops'
      ? 'devops'
      : path === '/services/mobile-application-development' || path === '/mobile-application-development' || path === '/mobile'
      ? 'mobile'
      : path === '/services' || path.startsWith('/services/')
      ? 'services'
      : path === '/career'
      ? 'career'
      : path === '/contact'
      ? 'contact'
      : 'home';

  const goTo = (target) => {
    navigate(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => goTo('/');
  const navigateToAbout = () => goTo('/about');
  const navigateToServices = () => goTo('/services');
  const navigateToCareer = () => goTo('/career');
  const navigateToContact = () => goTo('/contact');
  const navigateToDevOpsPartnership = () => goTo('/services/devops-and-cloud-partnership');
  const navigateToWhiteLabel = () => goTo('/services/white-label-development-services');
  const navigateToWebApp = () => goTo('/services/web-application-development');
  const navigateToMobile = () => goTo('/services/mobile-application-development');
  const navigateToDevOps = () => goTo('/services/devops-and-cloud-services');
  const navigateToCloudConsulting = () => goTo('/services/cloud-consulting-and-managed-services');

  return (
    <div className="page-wrapper">
      <Navbar
        currentPage={currentPage}
        onNavigateHome={navigateToHome}
        onNavigateAbout={navigateToAbout}
        onNavigateServices={navigateToServices}
        onNavigateCareer={navigateToCareer}
        onNavigateContact={navigateToContact}
        onNavigateDevOpsPartnership={navigateToDevOpsPartnership}
        onNavigateWhiteLabel={navigateToWhiteLabel}
        onNavigateWebApp={navigateToWebApp}
        onNavigateMobile={navigateToMobile}
        onNavigateDevOps={navigateToDevOps}
        onNavigateCloudConsulting={navigateToCloudConsulting}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {currentPage === 'home' && <main><Hero onOpenVideo={() => setVideoModalOpen(true)} /></main>}
      {currentPage === 'services' && <main><Services onContactClick={navigateToContact} /></main>}
      {currentPage === 'about' && <AboutUs onNavigateHome={navigateToHome} onNavigateServices={navigateToServices} onOpenVideo={() => setVideoModalOpen(true)} onOpenSearch={() => setSearchModalOpen(true)} />}
      {currentPage === 'career' && <Careers />}
      {currentPage === 'contact' && <Contact />}
      {currentPage === 'devops-partnership' && <DevOpsAndCloudPartnership />}
      {currentPage === 'whitelabel' && <WhiteLabelDevelopmentServices />}
      {currentPage === 'webapp' && <WebApplicationDevelopment />}
      {currentPage === 'mobile' && <MobileApplicationDevelopment />}
      {currentPage === 'devops' && <DevOpsAndCloudServices />}
      {currentPage === 'cloud-consulting' && <CloudConsultingAndManagedServices />}

      <Footer />
      <VideoModal isOpen={videoModalOpen} onClose={() => setVideoModalOpen(false)} />
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
    </div>
  );
}

export default App;
