import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import CareerJourney from './CareerJourney';
import { Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
    const [showToast, setShowToast] = useState(false);

    const handleEmailClick = () => {
        navigator.clipboard.writeText('tosdhondge@gmail.com');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden px-4 md:px-20 pt-20">

            {/* Text Content */}
            <div className="w-full md:w-1/2 z-10 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-blue">Scalable</span> <br />
                        Infrastructure for <br />
                        <span className="text-text-primary">
                            <Typewriter
                                words={['The Future', 'Global Scale', 'High Availability', 'Automation']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>
                    <p className="text-text-secondary text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Cloud/DevOps Engineer experienced in building reliable, automated platforms across <span className="text-neon-cyan font-semibold">AWS</span>, <span className="text-neon-purple font-semibold">Azure</span>, and <span className="text-electric-blue font-semibold">GCP</span>.
                        Skilled in Terraform, GitHub Actions, and Kubernetes/ECS.
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-6 justify-center md:justify-start mb-8">
                        <a href="https://github.com/swarajdhondge" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-neon-cyan hover:scale-110 transition-all duration-300">
                            <Github size={28} />
                        </a>
                        <a href="https://linkedin.com/in/swarajd" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-neon-purple hover:scale-110 transition-all duration-300">
                            <Linkedin size={28} />
                        </a>
                        <button onClick={handleEmailClick} className="text-text-primary hover:text-electric-blue hover:scale-110 transition-all duration-300 cursor-pointer">
                            <Mail size={28} />
                        </button>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                        <a href="#projects" className="px-8 py-3 bg-neon-cyan/10 border border-neon-cyan text-neon-cyan rounded hover:bg-neon-cyan/20 transition-all duration-300 font-mono flex items-center justify-center">
                            $ view_projects
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Career Journey Animation */}
            <div className="w-full md:w-1/2 flex items-center justify-center relative z-0 mt-10 md:mt-0">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="relative z-0 w-full"
                >
                    <CareerJourney />
                </motion.div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[-1]">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[100px] opacity-30 animate-blob" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-neon-cyan/20 rounded-full blur-[100px] opacity-30 animate-blob animation-delay-2000" />
            </div>

            {/* Toast Notification */}
            {showToast && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 bg-neon-cyan/20 border border-neon-cyan text-neon-cyan rounded-lg backdrop-blur-md shadow-lg"
                >
                    ✓ Email copied to clipboard!
                </motion.div>
            )}

        </section>
    );
};

export default HeroSection;
