import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    // Simplified Navbar - No links, no toggle
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 mix-blend-difference text-white pointer-events-none">
            {/* Pointer events none so it doesn't block clicks, but maybe keep pointer-events-auto on elements if we add them back */}
            <div className="max-w-[90rem] mx-auto flex justify-between items-center">
                {/* Empty Navbar for now as per user request to clean it up */}
            </div>
        </nav>
    );
};

export default Navbar;
