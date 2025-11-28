import React, { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { AnimatePresence, motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const ModeToast = () => {
    const { theme } = useTheme();
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        let msg = '';
        if (theme === 'tavus') msg = 'Switched to OK_GUY (buffs: Coffee)';
        if (theme === 'marathon') msg = 'Switched to MARATHON (protocol: override)';
        if (theme === 'debug') msg = 'Switched to DEBUG_VIEW (profiling enabled)';

        setMessage(msg);
        setShow(true);

        const timer = setTimeout(() => setShow(false), 3000);
        return () => clearTimeout(timer);
    }, [theme]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, y: 50, x: '-50%' }}
                    animate={{ opacity: 1, y: 0, x: '-50%' }}
                    exit={{ opacity: 0, y: 20, x: '-50%' }}
                    className="fixed bottom-8 left-1/2 z-[100] bg-black border border-white/20 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 font-mono text-sm"
                >
                    <Terminal size={14} className="text-neo-primary" />
                    <span>[MODE] {message}</span>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ModeToast;
