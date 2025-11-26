import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import SkillsDock from './components/SkillsDock';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectCard from './components/ProjectCard';
import CLIOverlay from './components/CLIOverlay';
import portfolioData from './data/portfolio.json';
import { Terminal, Server, Sun, Moon } from 'lucide-react';
import { useTheme } from './context/ThemeContext';

function App() {
  const { profile, skills, experience, projects } = portfolioData;
  const [isCLIOpen, setIsCLIOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCLIOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-primary text-text-primary font-sans selection:bg-neon-cyan/30 overflow-x-hidden relative">

      {/* Mesh Gradient Background */}
      <div className="fixed inset-0 pointer-events-none z-0 mesh-gradient-bg opacity-40" />

      {/* CLI Overlay */}
      <CLIOverlay
        isOpen={isCLIOpen}
        onClose={() => setIsCLIOpen(false)}
        portfolioData={portfolioData}
      />

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-6 left-6 z-50 p-4 bg-neon-purple/10 border border-neon-purple/50 text-neon-purple rounded-full hover:bg-neon-purple/20 backdrop-blur-md transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
        title="Toggle Theme"
      >
        {isDark ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* Floating CLI Toggle Button (Mobile/Desktop) */}
      <button
        onClick={() => setIsCLIOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan rounded-full hover:bg-neon-cyan/20 backdrop-blur-md transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
        title="Toggle Terminal (Cmd/Ctrl + K)"
      >
        <Terminal size={24} />
      </button>

      {/* HERO SECTION */}
      <HeroSection />

      {/* SKILLS SECTION */}
      <div id="skills">
        <SkillsDock skills={skills} />
      </div>

      {/* EXPERIENCE SECTION */}
      <div id="experience">
        <ExperienceTimeline experience={experience} />
      </div>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-4 md:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="p-3 glass-panel rounded-xl border border-white/10 shadow-lg">
              <Server className="text-neon-purple" size={28} />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                <span className="text-neon-cyan">Project</span> Repository
              </h2>
              <p className="text-text-secondary font-mono text-sm tracking-wider mt-1">
                // DEPLOYED_SYSTEMS_AND_ARCHITECTURES
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {projects.map((project, index) => (
              <div key={index} className="h-full">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-12 border-t border-white/10 text-center bg-black/40 backdrop-blur-md relative z-10">
        <div className="flex items-center justify-center gap-2 text-gray-500 font-mono text-sm mb-4">
          <Terminal size={14} />
          <span>EOF</span>
        </div>
        {/* <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} {profile.name}. Architected with React & Tailwind.
        </p> */}
      </footer>
    </div>
  );
}

export default App;
