import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import DevOpsProjects from './pages/DevOpsProjects';
import DevOpsExperience from './pages/DevOpsExperience';
import ContactMe from './pages/ContactMe';
import Footer from './components/Footer';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { ArrowUp } from 'lucide-react';
import { Analytics } from "@vercel/analytics/react";
import smoothscroll from 'smoothscroll-polyfill';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
    smoothscroll.polyfill();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="font-sans transition-colors duration-300 scroll-smooth relative">
      <Home />
      <Analytics />
      <Skills />
      <DevOpsProjects />
      <DevOpsExperience />
      <Projects />
      <ContactMe />
      <Footer />

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-lg transition z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </main>
  );
}

export default App;
