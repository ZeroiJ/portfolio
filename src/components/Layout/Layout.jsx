import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../../context/ThemeContext';
const Layout = ({ children }) => {
    // Simplified Layout - No Debug mode, no ModeToast
    return (
        <div className="flex flex-col min-h-screen bg-retro-bg text-retro-text font-mono selection:bg-retro-primary selection:text-white">
            <Navbar />
            <main className="flex-grow pt-16">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
