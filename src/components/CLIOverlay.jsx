import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal } from 'lucide-react';

const CLIOverlay = ({ isOpen, onClose, portfolioData }) => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'info', content: 'Welcome to SwarajOS v1.0.0' },
        { type: 'info', content: 'Type "help" to see available commands.' },
    ]);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (cmd) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        const newHistory = [...history, { type: 'input', content: cmd }];

        switch (trimmedCmd) {
            case 'help':
                newHistory.push({
                    type: 'response',
                    content: `Available commands:
  help        - Show this help message
  ls          - List all sections
  cat about   - Display bio
  ls projects - List all projects
  clear       - Clear terminal
  exit        - Close terminal`
                });
                break;
            case 'ls':
            case 'menu':
                newHistory.push({ type: 'response', content: 'about  skills  experience  projects  contact' });
                break;
            case 'cat about':
            case 'about':
            case 'bio':
                newHistory.push({ type: 'response', content: portfolioData.profile.bio });
                break;
            case 'ls projects':
            case 'projects':
            case 'work':
                const projectList = portfolioData.projects.map(p => `- ${p.title} (${p.category})`).join('\n');
                newHistory.push({ type: 'response', content: projectList });
                break;
            case 'skills':
            case 'stack':
                const skillList = portfolioData.skills.map(s => s.name).join(', ');
                newHistory.push({ type: 'response', content: `Tech Stack: ${skillList}` });
                break;
            case 'experience':
            case 'jobs':
                const jobList = portfolioData.experience.map(j => `${j.period}: ${j.title} @ ${j.company}`).join('\n');
                newHistory.push({ type: 'response', content: jobList });
                break;
            case 'contact':
            case 'email':
                newHistory.push({ type: 'response', content: `Email: ${portfolioData.profile.socials.email}\nGitHub: ${portfolioData.profile.socials.github}\nLinkedIn: ${portfolioData.profile.socials.linkedin}` });
                break;
            case 'clear':
            case 'cls':
                setHistory([]);
                setInput('');
                return;
            case 'exit':
            case 'quit':
                onClose();
                setInput('');
                return;
            case '':
                break;
            default:
                newHistory.push({ type: 'error', content: `Command not found: ${trimmedCmd}. Type "help" for assistance.` });
        }

        setHistory(newHistory);
        setInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="w-full max-w-3xl bg-zinc-900 rounded-lg border border-zinc-700 shadow-2xl overflow-hidden font-mono text-sm md:text-base"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="bg-zinc-800 px-4 py-2 flex items-center justify-between border-b border-zinc-700">
                            <div className="flex items-center gap-2 text-gray-400">
                                <Terminal size={16} />
                                <span>swaraj@portfolio: ~</span>
                            </div>
                            <button onClick={onClose} className="text-gray-400 hover:text-white">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Terminal Body */}
                        <div className="h-[400px] overflow-y-auto p-4 text-gray-300" onClick={() => inputRef.current?.focus()}>
                            {history.map((entry, i) => (
                                <div key={i} className="mb-2 whitespace-pre-wrap">
                                    {entry.type === 'input' && (
                                        <span className="text-neon-cyan mr-2">$</span>
                                    )}
                                    <span className={`
                    ${entry.type === 'error' ? 'text-red-400' : ''}
                    ${entry.type === 'info' ? 'text-blue-400' : ''}
                    ${entry.type === 'input' ? 'text-white' : 'text-gray-300'}
                  `}>
                                        {entry.content}
                                    </span>
                                </div>
                            ))}

                            <div className="flex items-center mt-2">
                                <span className="text-neon-cyan mr-2">$</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="bg-transparent border-none outline-none text-white w-full"
                                    autoFocus
                                />
                            </div>
                            <div ref={bottomRef} />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CLIOverlay;
