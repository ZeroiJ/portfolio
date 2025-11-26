import React from 'react';
import { motion } from 'framer-motion';

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
                <div className="flex items-center justify-center h-20">
                    {/* Navigation Links - Centered */}
                    <div className="flex items-center space-x-2">
                        <NavItem label="PROFILE" href="#about" />
                        <NavItem label="SPECS" href="#skills" />
                        <NavItem label="LOGS" href="#journey" />
                        <NavItem label="CONNECT" href="#contact" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
