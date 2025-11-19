import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
            {/* Grid Background Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10"
            >
                <h2 className="text-xl md:text-2xl text-retro-secondary font-pixel mb-4">
                    HELLO WORLD, I AM
                </h2>
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-pixel text-retro-primary mb-6 drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
                    SUJAL
                </h1>

                <div className="text-lg md:text-2xl text-retro-text font-mono mb-8 h-8">
                    <span className="mr-2">&gt;</span>
                    <span className="typing-effect">Data Scientist...</span>
                    {/* We can add a typing/deleting effect here later */}
                </div>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-8 py-4 bg-retro-primary text-white font-pixel text-sm md:text-base border-4 border-white shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] hover:-translate-y-1 transition-all"
                >
                    PRESS START
                </motion.button>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 text-retro-secondary font-pixel text-xs animate-pulse"
            >
                SCROLL TO CONTINUE
            </motion.div>
        </section>
    );
};

export default Hero;
