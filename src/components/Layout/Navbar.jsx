import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme, setTheme } = useTheme();
    const navigate = useNavigate();

    const navLinks = [
        { name: 'ABOUT', href: '#about' },
        { name: 'SKILLS', href: '#skills' },
        { name: 'JOURNEY', href: '#journey' },
        { name: 'CONTACT', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 mix-blend-difference text-white">
            <div className="max-w-[90rem] mx-auto flex justify-between items-center">

                {/* Left: Theme Dropdown */}
                <div className="relative group">
                    <button className="flex items-center gap-3 font-mono text-sm font-bold tracking-widest hover:text-neo-primary transition-colors py-2">
                        <div className={`w-8 h-8 border-2 border-white flex items-center justify-center transition-all duration-300 ${theme === 'marathon' ? 'bg-neo-primary border-neo-primary text-black' : 'group-hover:bg-white group-hover:text-black'}`}>
                            <Zap size={16} className={theme === 'marathon' ? 'fill-current' : ''} />
                        </div>
                        <span className="hidden md:block">
                            {theme === 'tavus' ? 'MODE: OK GUY' : 'MODE: MARATHON'}
                        </span>
                        <motion.div
                            animate={{ rotate: 0 }}
                            whileHover={{ rotate: 180 }}
                            className="hidden md:block"
                        >
                            <Menu size={14} className="group-hover:hidden" />
                            <ChevronDown size={14} className="hidden group-hover:block" />
                        </motion.div>
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-72 bg-black border-2 border-white p-2 hidden group-hover:block shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
                        <div className="flex flex-col gap-1">
                            <button
                                onClick={() => setTheme('tavus')}
                                className={`text-left px-4 py-3 font-mono text-xs font-bold hover:bg-white hover:text-black transition-colors ${theme === 'tavus' ? 'bg-zinc-800 text-white border-l-2 border-white' : 'text-gray-400'}`}
                            >
                                [1] OK GUY
                                <span className="block text-[10px] opacity-60 font-normal mt-1">Buffs: Caffeine, Anxiety</span>
                            </button>
                            <button
                                onClick={() => setTheme('marathon')}
                                className={`text-left px-4 py-3 font-mono text-xs font-bold hover:bg-white hover:text-black transition-colors ${theme === 'marathon' ? 'bg-zinc-800 text-neo-primary border-l-2 border-neo-primary' : 'text-gray-400'}`}
                            >
                                [2] MARATHON
                                <span className="block text-[10px] opacity-60 font-normal mt-1">Protocol: Tryhard</span>
                            </button>
                            <button
                                onClick={() => setTheme('debug')}
                                className={`text-left px-4 py-3 font-mono text-xs font-bold hover:bg-white hover:text-black transition-colors ${theme === 'debug' ? 'bg-zinc-800 text-red-500 border-l-2 border-red-500' : 'text-gray-400'}`}
                            >
                                [3] DEBUG VIEW
                                <span className="block text-[10px] opacity-60 font-normal mt-1">Status: It works on my machine</span>
                            </button>
                            <div className="h-px bg-white/20 my-1"></div>
                            <button
                                onClick={() => navigate('/mockup')}
                                className="text-left px-4 py-3 font-mono text-xs font-bold text-blue-400 hover:bg-blue-500 hover:text-white transition-colors"
                            >
                                [4] SECRET LAB
                                <span className="block text-[10px] opacity-60 font-normal mt-1">Experimental: Shader Mockup</span>
                            </button>
                        </div>
                        <div className="mt-2 border-t border-white/20 pt-2 px-2">
                            <p className="text-[10px] text-gray-500 font-mono">Select functionality...</p>
                        </div>
                    </div>
                </div>

                {/* Center: Navigation Links Removed as per user request */}
                <div className="hidden md:flex items-center gap-12">
                    {/* Links hidden/removed */}
                </div>

                {/* Right: Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white hover:text-neo-primary transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-24 left-6 right-6 bg-black border-2 border-white p-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {/* Navigation Links Removed 
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="font-mono text-xl font-bold text-white hover:text-neo-primary transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            */}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
