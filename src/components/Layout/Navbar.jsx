import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, User, Code, Map, Mail } from 'lucide-react';

const NavItem = ({ label, href }) => (
    <motion.a
        href={href}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        className="px-6 py-2 font-mono text-sm font-bold border-2 border-transparent hover:border-neo-border hover:bg-neo-secondary transition-all cursor-pointer"
    >
        {label}
    </motion.a>
);

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-neo-bg/90 border-b-2 border-neo-border backdrop-blur-sm">
            <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <div className="w-10 h-10 bg-neo-primary border-2 border-neo-border flex items-center justify-center shadow-[4px_4px_0_#000]">
                            <Terminal className="text-white w-6 h-6" />
                        </div>
                        <span className="font-serif font-bold text-2xl tracking-tighter">
                            TAVUS_CLONE
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-2">
                        <NavItem label="PROFILE" href="#about" />
                        <NavItem label="SPECS" href="#skills" />
                        <NavItem label="LOGS" href="#journey" />
                        <NavItem label="CONNECT" href="#contact" />
                    </div>

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.02, boxShadow: "6px 6px 0px #000" }}
                        whileTap={{ scale: 0.98, boxShadow: "2px 2px 0px #000" }}
                        className="hidden md:block px-6 py-2 bg-neo-text text-white font-mono font-bold border-2 border-transparent shadow-[4px_4px_0_#4D4DFF]"
                    >
                        GET STARTED
                    </motion.button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
