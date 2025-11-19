import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onStart }) => {
    return (
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
            {/* Grid Background Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 max-w-[90rem] mx-auto flex flex-col items-center"
            >
                <h2 className="text-3xl md:text-5xl text-retro-secondary font-pixel mb-12 tracking-widest">
                    HELLO WORLD, I AM
                </h2>
                <h1 className="text-7xl md:text-9xl lg:text-[12rem] leading-none font-pixel text-retro-primary mb-16 drop-shadow-[10px_10px_0_rgba(0,0,0,1)]">
                    SUJAL
                </h1>

                <div className="text-3xl md:text-5xl text-retro-text font-mono mb-20 h-16">
                    <span className="mr-4">&gt;</span>
                    <span className="typing-effect">Data Scientist...</span>
                </div>

                <motion.button
                    onClick={onStart}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-20 py-10 bg-retro-primary text-white font-pixel text-2xl md:text-3xl border-4 border-white shadow-[10px_10px_0_#000] hover:shadow-[14px_14px_0_#000] hover:-translate-y-2 transition-all"
                >
                    PRESS START
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Hero;
