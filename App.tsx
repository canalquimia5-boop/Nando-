import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import SuccessStories from './components/SuccessStories';
import CaseDetails from './components/CaseDetails';
import ServiceDetails from './components/ServiceDetails';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MotionWrapper from './components/MotionWrapper';
import WhatsAppButton from './components/WhatsAppButton';
import AdminDashboard from './components/AdminDashboard';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import { ProjectsProvider, useProjects } from './context/ProjectsContext';
import { AdminAuthProvider } from './context/AdminAuthContext';

const PortfolioContent: React.FC = () => {
  const { t } = useLanguage();
  const { isAdminOpen, setIsAdminOpen } = useProjects();
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Listen for #admin in URL
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#admin') {
        setIsAdminOpen(true);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, [setIsAdminOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (isAdminOpen || selectedCaseId || selectedServiceId) return;

      const sections = ['home', 'sobre', 'servicos', 'sucesso', 'projetos', 'depoimentos', 'certificacoes', 'contato'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAdminOpen, selectedCaseId, selectedServiceId]);

  const handleNavigate = (id: string) => {
    setIsAdminOpen(false);
    setSelectedCaseId(null);
    setSelectedServiceId(null);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 10);
  };

  const selectedCaseData = selectedCaseId ? t.cases.items.find(c => c.id === selectedCaseId) : null;
  const selectedServiceData = selectedServiceId ? t.services.items.find(s => s.id === selectedServiceId) : null;

  return (
    <div className="relative overflow-x-hidden antialiased text-slate-900 bg-slate-50 min-h-screen">
      {!isAdminOpen && <Navbar activeSection={activeSection} onNavigate={handleNavigate} />}
      
      <AnimatePresence mode="wait">
        {isAdminOpen ? (
          <div key="admin-dashboard">
            <AdminDashboard onClose={() => {
              setIsAdminOpen(false);
              if (window.location.hash === '#admin') {
                window.history.pushState(null, '', ' ');
              }
            }} />
          </div>
        ) : selectedCaseId && selectedCaseData ? (
          <CaseDetails 
            key="case-details"
            caseData={selectedCaseData} 
            onBack={() => setSelectedCaseId(null)} 
          />
        ) : selectedServiceId && selectedServiceData ? (
          <ServiceDetails 
            key="service-details"
            service={selectedServiceData} 
            onBack={() => setSelectedServiceId(null)} 
          />
        ) : (
          <div key="main-content">
            <main className="pt-20">
              <section id="home" className="scroll-mt-24">
                <Hero />
              </section>
              
              <section id="sobre" className="py-20 md:py-32 bg-white scroll-mt-24">
                <MotionWrapper>
                  <About />
                </MotionWrapper>
              </section>
              
              <section id="servicos" className="py-20 md:py-32 bg-slate-50 scroll-mt-24">
                <MotionWrapper>
                  <Services onSelectService={(id) => {
                    setSelectedServiceId(id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} />
                </MotionWrapper>
              </section>

              <section id="sucesso" className="py-20 md:py-32 bg-white scroll-mt-24">
                <MotionWrapper>
                  <SuccessStories onSelectCase={(id) => {
                    setSelectedCaseId(id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} />
                </MotionWrapper>
              </section>
              
              <section id="projetos" className="py-20 md:py-32 bg-slate-50 scroll-mt-24">
                <MotionWrapper>
                  <Projects />
                </MotionWrapper>
              </section>

              <section id="depoimentos" className="py-20 md:py-32 bg-white scroll-mt-24">
                <MotionWrapper>
                  <Testimonials />
                </MotionWrapper>
              </section>
              
              <section id="certificacoes" className="py-20 md:py-32 bg-slate-50 scroll-mt-24">
                <MotionWrapper>
                  <Certifications />
                </MotionWrapper>
              </section>
              
              <section id="contato" className="py-20 md:py-32 bg-slate-900 text-white scroll-mt-24">
                <MotionWrapper>
                  <Contact />
                </MotionWrapper>
              </section>
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
      {!isAdminOpen && <WhatsAppButton />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AdminAuthProvider>
        <ProjectsProvider>
          <PortfolioContent />
        </ProjectsProvider>
      </AdminAuthProvider>
    </LanguageProvider>
  );
};

export default App;
