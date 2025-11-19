import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, User, Code, Map, Mail } from 'lucide-react';

const NavItem = ({ icon: Icon, label, href }) => (
    <motion.a
        href={href}
        whileHover={{ scale: 1.1, color: '#ff0055' }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 px-6 py-3 text-retro-text hover:text-retro-primary transition-colors cursor-pointer"
    >
        <Icon size={24} className="text-white" />
        <span className="hidden md:inline font-pixel text-base md:text-lg">{label}</span>
    </motion.a>
);

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-retro-bg/90 border-b-4 border-retro-text backdrop-blur-sm">
            <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between h-28">
                    {/* Logo / Player Name */}
                    <div className="flex-shrink-0 flex items-center gap-4">
                        <Terminal className="text-white w-10 h-10 md:w-12 md:h-12" />
                        <span className="font-pixel text-retro-primary text-xl md:text-2xl">
                            PLAYER_1
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-center space-x-4 md:space-x-8">
                        <NavItem icon={User} label="CHAR_BIO" href="#about" />
                        <NavItem icon={Code} label="STATS" href="#skills" />
                        <NavItem icon={Map} label="QUESTS" href="#journey" />
                        <NavItem icon={Mail} label="CONNECT" href="#contact" />
                    </div>

                    {/* HP Bar (Visual Decoration) */}
                    <div className="hidden lg:flex items-center gap-3 w-56">
                        <span className="text-base font-pixel text-retro-secondary">HP</span>
                        <div className="h-8 flex-1 bg-gray-700 border-2 border-retro-text relative">
                            <div className="absolute top-0 left-0 h-full w-full bg-retro-primary animate-pulse origin-left"></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
