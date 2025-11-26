import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Terminal } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative h-full"
        >
            <div className="glass-panel p-6 rounded-xl h-full flex flex-col border border-white/5 group-hover:border-neon-cyan/30 transition-colors duration-300">

                {/* Image / Preview */}
                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden bg-black/50">
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-600">
                            <Terminal size={48} />
                        </div>
                    )}

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-void-black via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-text-primary group-hover:text-neon-cyan transition-colors duration-300">
                            {project.title}
                        </h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-neon-purple border border-neon-purple/20">
                            {project.category}
                        </span>
                    </div>

                    <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                        {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                            <span key={tag} className="text-xs text-text-secondary font-mono">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 mt-auto pt-4 border-t border-white/5">
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-text-secondary hover:text-neon-cyan transition-colors"
                        >
                            <Github size={16} />
                            <span>Source</span>
                        </a>
                    )}
                    <div className="flex items-center gap-2 text-sm text-text-secondary font-mono ml-auto">
                        <span className="text-neon-purple">$</span>
                        <span>{project.deploymentCommand || 'deploy'}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
