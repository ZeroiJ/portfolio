import React, { useState, useEffect } from 'react';
import { ShaderAnimation } from '../ui/shader-animation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, Mail, Terminal, Minimize2, Maximize2, Crosshair, ChevronRight } from 'lucide-react';

const NewDesignMockup = () => {
  const [introState, setIntroState] = useState('playing'); // playing, frozen, revealed

  useEffect(() => {
    // Stage 1: Play animation for 4 seconds
    const freezeTimer = setTimeout(() => {
        setIntroState('frozen');
        
        // Stage 2: Reveal content shortly after freeze
        setTimeout(() => {
            setIntroState('revealed');
        }, 500); 

    }, 4000);

    return () => clearTimeout(freezeTimer);
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white font-sans perspective-1000">
      {/* Background Shader - Controlled by introState */}
      <ShaderAnimation paused={introState !== 'playing'} />

      {/* Intro Text Overlay (Fades out) */}
      <AnimatePresence>
        {introState === 'playing' && (
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
            >
                <div className="flex flex-col items-center gap-4">
                    <h2 className="text-xl font-mono tracking-[1rem] text-white/50 animate-pulse">
                        WAKING_UP...
                    </h2>
                    <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 3.5, ease: "linear" }}
                            className="h-full bg-white"
                        />
                    </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Overlay (Fades in with 3D Tilt) */}
      <AnimatePresence>
        {introState === 'revealed' && (
            <motion.div 
                initial={{ opacity: 0, rotateY: 15, rotateX: 5, scale: 0.9, x: 100 }}
                animate={{ opacity: 1, rotateY: -12, rotateX: 5, scale: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}
                className="relative z-20 w-full max-w-6xl h-[75vh] flex items-center justify-center"
            >
                {/* 3D Tilted Container - Arknights / PGR Aesthetic */}
                <div className="relative w-full h-full bg-black/60 backdrop-blur-xl border border-white/10 rounded-sm overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] transform transition-transform duration-500 hover:rotate-y-[-10deg] hover:rotate-x-[2deg]">
                    
                    {/* Decorative Corner Markers */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-neo-primary z-30"></div>
                    <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-neo-primary z-30"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-neo-primary z-30"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-neo-primary z-30"></div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-12 h-full">
                        
                        {/* Sidebar / Identity Rail */}
                        <div className="col-span-3 border-r border-white/10 bg-black/40 p-8 flex flex-col justify-between relative overflow-hidden">
                            {/* Animated Scanner Line */}
                            <motion.div 
                                animate={{ top: ['0%', '100%'] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                                className="absolute left-0 w-full h-[2px] bg-neo-primary/30 blur-sm pointer-events-none"
                            />

                            <div>
                                <h3 className="font-mono text-4xl font-bold tracking-tighter mb-1 text-white">
                                    ZERO<span className="text-neo-primary">IJ</span>
                                </h3>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-12">
                                    Operator ID: 001
                                </p>

                                <nav className="flex flex-col gap-6">
                                    {['MISSION_LOG', 'ARSENAL', 'ALLIANCE', 'SIGNAL'].map((item, i) => (
                                        <div key={item} className="group cursor-pointer flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity">
                                            <div className="w-1 h-1 bg-neo-primary rotate-45 group-hover:bg-white transition-colors"></div>
                                            <span className="font-mono text-sm tracking-widest">{item}</span>
                                        </div>
                                    ))}
                                </nav>
                            </div>

                            <div className="font-mono text-[10px] text-gray-600 space-y-2">
                                <p>SYS_VER: 4.2.0</p>
                                <p>CONN: STABLE</p>
                                <p>PING: 8ms</p>
                            </div>
                        </div>

                        {/* Main Display Area */}
                        <div className="col-span-9 p-12 relative flex flex-col justify-center">
                            
                            {/* Header Tech Elements */}
                            <div className="absolute top-8 right-8 flex gap-4 text-white/30">
                                <Minimize2 size={16} />
                                <Maximize2 size={16} />
                                <Crosshair size={16} />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-neo-primary/10 border border-neo-primary/30 text-neo-primary text-xs font-mono mb-6">
                                    <div className="w-2 h-2 bg-neo-primary animate-pulse"></div>
                                    SYSTEM_NORMAL
                                </div>

                                <h1 className="text-7xl font-bold uppercase tracking-tighter mb-4 leading-[0.9]">
                                    Visual <br/>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Reconstruction</span>
                                </h1>

                                <div className="h-1 w-32 bg-neo-primary mb-8"></div>

                                <p className="text-xl text-gray-400 font-light max-w-lg leading-relaxed mb-10 border-l border-white/20 pl-6">
                                    Deploying experimental interfaces. Analyzing user behavior patterns. Optimizing for style and efficiency.
                                </p>

                                <div className="flex gap-4">
                                    <button className="bg-white text-black pl-8 pr-6 py-4 font-bold text-sm tracking-widest hover:bg-neo-primary transition-colors flex items-center gap-4 clip-diagonal">
                                        INITIATE PROTOCOL
                                        <ChevronRight size={16} />
                                    </button>
                                    <button className="border border-white/30 text-white px-8 py-4 font-bold text-sm tracking-widest hover:bg-white/5 transition-colors">
                                        VIEW_DOCS
                                    </button>
                                </div>
                            </motion.div>

                            {/* Background Tech Graphic Grid */}
                            <div className="absolute bottom-8 right-8 border border-white/10 p-4 w-64 h-32 opacity-50 flex items-end justify-between">
                                <div className="text-[10px] font-mono text-gray-500 h-full flex flex-col justify-between">
                                    <span>FREQ: 98.4</span>
                                    <span>AMP: 32.1</span>
                                    <span>MOD: A-4</span>
                                </div>
                                <div className="flex gap-1 items-end h-full">
                                    {[40, 60, 30, 80, 50, 90, 20].map((h, i) => (
                                        <motion.div 
                                            key={i}
                                            animate={{ height: `${h}%` }}
                                            transition={{ duration: 1, repeat: Infinity, repeatType: 'mirror', delay: i * 0.1 }}
                                            className="w-2 bg-neo-primary/50"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>

      {/* Footer / Overlay UI */}
      <div className="absolute bottom-10 left-10 flex gap-8 z-20 font-mono text-xs text-white/40">
         <span>[ MOCKUP_VIEW ]</span>
         <span>[ PRESS ESC TO ABORT ]</span>
      </div>
    </div>
  );
};
export default NewDesignMockup;
