import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, CheckCircle } from 'lucide-react';

const ExperienceTimeline = ({ experience }) => {
    return (
        <section className="py-20 px-4 md:px-20 relative z-10 bg-black/20">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-electric-blue">Deployment</span> Log
                    </h2>
                    <p className="text-text-secondary">
                        A timeline of my professional journey and key milestones.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent opacity-30" />

                    {experience.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-neon-cyan border-4 border-primary z-20 mt-6 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />

                            {/* Content Card */}
                            <div className="w-full md:w-1/2 pl-8 md:pl-0">
                                <div className={`
                  glass-panel p-6 rounded-xl relative overflow-hidden group
                  ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}
                `}>
                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 text-neon-cyan mb-2 font-mono text-sm">
                                            <Calendar size={14} />
                                            <span>{job.period}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-text-primary mb-1">{job.title}</h3>
                                        <div className="flex items-center gap-2 text-text-secondary mb-4">
                                            <Briefcase size={14} />
                                            <span>{job.company}</span>
                                        </div>

                                        <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                                            {job.description}
                                        </p>

                                        {/* Metrics Grid */}
                                        <div className="grid grid-cols-2 gap-4">
                                            {job.metrics.map((metric, i) => (
                                                <div key={i} className="glass-panel p-3 rounded-lg">
                                                    <div className="text-electric-blue font-bold text-lg">{metric.value}</div>
                                                    <div className="text-xs text-text-secondary uppercase tracking-wider">{metric.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Empty Space for Layout Balance */}
                            <div className="hidden md:block w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceTimeline;
