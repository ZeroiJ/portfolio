import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../../context/ThemeContext';
import DebugLayout from '../Debug/DebugLayout';
import ModeToast from '../ui/ModeToast';

const Layout = ({ children }) => {
    const { theme } = useTheme();

    if (theme === 'debug') {
        return (
            <>
                <DebugLayout>{children}</DebugLayout>
                <ModeToast />
            </>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-retro-bg text-retro-text font-mono selection:bg-retro-primary selection:text-white">
            <Navbar />
            <main className="flex-grow pt-16">
                {children}
            </main>
            <Footer />
            <ModeToast />
        </div>
    );
};

export default Layout;
