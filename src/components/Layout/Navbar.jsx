import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, User, Code, Map, Mail } from 'lucide-react';

const NavItem = ({ icon: Icon, label, href }) => (
    <motion.a
        href={href}
        whileHover={{ scale: 1.1, color: '#ff0055' }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-4 py-2 text-retro-text hover:text-retro-primary transition-colors cursor-pointer"
    >
        <Icon size={18} />
        <span className="hidden md:inline font-pixel text-xs">{label}</span>
    </motion.a>
);

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-retro-bg/90 border-b-4 border-retro-text backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo / Player Name */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Terminal className="text-retro-primary" />
                        <span className="font-pixel text-retro-primary text-sm md:text-base">
                            PLAYER_1
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-center space-x-2 md:space-x-4">
                        <NavItem icon={User} label="CHAR_BIO" href="#about" />
                        <NavItem icon={Code} label="STATS" href="#skills" />
                        <NavItem icon={Map} label="QUESTS" href="#journey" />
                        <NavItem icon={Mail} label="CONNECT" href="#contact" />
                    </div>

                    {/* HP Bar (Visual Decoration) */}
                    <div className="hidden md:flex items-center gap-2 w-32">
                        <span className="text-xs font-pixel text-retro-secondary">HP</span>
                        <div className="h-4 flex-1 bg-gray-700 border-2 border-retro-text relative">
                            <div className="absolute top-0 left-0 h-full w-full bg-retro-primary animate-pulse origin-left"></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
