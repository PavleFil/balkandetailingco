import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import GalleryPage from './components/GalleryPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Update page title based on current section
  useEffect(() => {
    const titles: { [key: string]: string } = {
      home: 'Balkan Detailing Co. - Premium Car Detailing with Heritage',
      services: 'Our Services - Balkan Detailing Co.',
      gallery: 'Gallery - Balkan Detailing Co.',
      about: 'About Us - Balkan Detailing Co.',
      contact: 'Contact - Balkan Detailing Co.'
    };
    
    document.title = titles[currentSection] || 'Balkan Detailing Co.';
  }, [currentSection]);

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'gallery':
        return <GalleryPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header currentSection={currentSection} onNavigate={handleNavigate} />
      <main>
        {renderCurrentSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;