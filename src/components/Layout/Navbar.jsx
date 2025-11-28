import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const navLinks = [
        { name: 'ABOUT', href: '#about' },
        { name: 'SKILLS', href: '#skills' },
        { name: 'JOURNEY', href: '#journey' },
        { name: 'CONTACT', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 mix-blend-difference text-white">
            <div className="max-w-[90rem] mx-auto flex justify-between items-center">

                {/* Left: Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="group flex items-center gap-3 font-mono text-sm font-bold tracking-widest hover:text-neo-primary transition-colors"
                >
                    <div className={`w-8 h-8 border-2 border-white flex items-center justify-center transition-all duration-300 ${theme === 'marathon' ? 'bg-neo-primary border-neo-primary text-black' : 'group-hover:bg-white group-hover:text-black'}`}>
                        <Zap size={16} className={theme === 'marathon' ? 'fill-current' : ''} />
                    </div>
                    <span className="hidden md:block">
                        {theme === 'tavus' ? 'MODE: OK GUY (buffs active: Coffee, Copium)' : 'MODE: MARATHON'}
                    </span>
                </button>

                {/* Center: Navigation */}
                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-mono text-sm font-bold tracking-widest hover:text-neo-primary transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-neo-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
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
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
