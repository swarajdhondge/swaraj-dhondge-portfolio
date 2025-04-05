
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
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <main className="font-sans transition-colors duration-300">
      <div className="fixed top-4 right-4 z-50">
        {/* <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-200 dark:bg-gray-800 text-sm px-3 py-1 rounded shadow"
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button> */}
      </div>
      <Home />
      <Analytics/>
      <Skills />
      <DevOpsProjects />
      <DevOpsExperience />
      <Projects />
      <ContactMe />
      <Footer />
      
    </main>
  );
}

export default App;
