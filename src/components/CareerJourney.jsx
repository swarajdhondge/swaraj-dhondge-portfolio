import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, Server, Cloud, ArrowRight } from 'lucide-react';

const stages = [
    {
        id: 'ml',
        icon: Laptop,
        label: 'ML Engineer',
        desc: 'AI/ML & Data Science',
        color: 'text-neon-purple',
        bg: 'bg-neon-purple/20',
        border: 'border-neon-purple'
    },
    {
        id: 'devops',
        icon: Server,
        label: 'DevOps Engineer',
        desc: 'CI/CD & Automation',
        color: 'text-neon-cyan',
        bg: 'bg-neon-cyan/20',
        border: 'border-neon-cyan'
    },
    {
        id: 'cloud',
        icon: Cloud,
        label: 'Cloud Architect',
        desc: 'Scalable Infrastructure',
        color: 'text-electric-blue',
        bg: 'bg-electric-blue/20',
        border: 'border-electric-blue'
    }
];

const CareerJourney = () => {
    const [activeStage, setActiveStage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStage((prev) => (prev + 1) % stages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-lg mx-auto relative h-[300px] flex items-center justify-center">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-white/10 -translate-y-1/2 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-neon-purple via-neon-cyan to-electric-blue shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                    animate={{
                        width: `${((activeStage) / (stages.length - 1)) * 100}%`
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />
            </div>

            {/* Stages */}
            <div className="relative w-full flex justify-between items-center px-4">
                {stages.map((stage, index) => {
                    const Icon = stage.icon;
                    const isActive = index === activeStage;
                    const isPast = index < activeStage;

                    return (
                        <div key={stage.id} className="relative flex flex-col items-center group">
                            {/* Icon Circle */}
                            <motion.div
                                initial={false}
                                animate={{
                                    scale: isActive ? 1.2 : 1,
                                    borderColor: isActive || isPast ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.1)',
                                    backgroundColor: isActive ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.2)',
                                    boxShadow: isActive ? `0 0 20px ${stage.color === 'text-neon-purple' ? '#8b5cf6' : stage.color === 'text-neon-cyan' ? '#06b6d4' : '#3b82f6'}` : 'none'
                                }}
                                className={`w-16 h-16 rounded-full border-2 flex items-center justify-center z-10 backdrop-blur-sm transition-all duration-500 ${isActive ? stage.border : 'border-white/10'}`}
                            >
                                <Icon
                                    size={24}
                                    className={`${isActive ? stage.color : 'text-gray-500'} transition-colors duration-500`}
                                />
                            </motion.div>

                            {/* Label Card */}
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 10 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className={`absolute top-20 w-48 p-3 rounded-lg border ${stage.border} bg-white/5 backdrop-blur-md text-center shadow-lg`}
                                    >
                                        <h3 className={`font-bold text-sm ${stage.color}`}>{stage.label}</h3>
                                        <p className="text-xs text-gray-300 mt-1">{stage.desc}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CareerJourney;
