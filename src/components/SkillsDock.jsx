import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SkillsDock = ({ skills }) => {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    return (
        <section className="py-20 px-4 md:px-20 relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-neon-purple">Technical</span> Arsenal
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive suite of tools and technologies I use to architect, deploy, and monitor scalable applications.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            onHoverStart={() => setHoveredSkill(skill.name)}
                            onHoverEnd={() => setHoveredSkill(null)}
                            className="relative group"
                        >
                            <div className={`
                w-20 h-20 md:w-24 md:h-24 rounded-2xl glass-panel 
                flex items-center justify-center p-4 cursor-pointer
                transition-all duration-300 group-hover:-translate-y-2
                ${hoveredSkill === skill.name ? 'border-neon-purple/50 bg-white/10' : ''}
              `}>
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="w-full h-full object-contain filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            {/* Tooltip */}
                            <div className={`
                absolute -bottom-10 left-1/2 transform -translate-x-1/2 
                px-3 py-1 rounded bg-zinc-800 border border-zinc-700 text-xs font-mono text-white
                opacity-0 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20
                ${hoveredSkill === skill.name ? 'opacity-100' : ''}
              `}>
                                {skill.name}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsDock;
