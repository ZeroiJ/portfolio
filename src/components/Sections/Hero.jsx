import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send, Terminal } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { FlickeringGrid } from '../ui/flickering-grid';

const Hero = () => {
    const { theme } = useTheme();

    if (theme === 'marathon') {
        return (
            <section className="min-h-screen flex flex-col justify-center px-6 pt-20 relative overflow-hidden bg-neo-bg text-neo-text">
                {/* Background Grid */}
                <div className="absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none">
                    <FlickeringGrid
                        squareSize={4}
                        gridGap={6}
                        color="#CCFF00"
                        maxOpacity={0.2}
                        flickerChance={0.3}
                        className="w-full h-full"
                    />
                </div>

                <div className="max-w-[90rem] mx-auto w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="mb-6 flex items-center gap-4 text-neo-primary font-mono text-sm tracking-widest"
                        >
                            <Terminal size={16} />
                            <span>SYSTEM_OVERRIDE // AUTHORIZED</span>
                        </motion.div>

                        <h1 className="font-sans font-black text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter mb-8 uppercase">
                            Wake Up, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-primary to-neo-secondary">Runner.</span>
                        </h1>

                        <p className="font-mono text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed border-l-2 border-neo-primary pl-6">
                            The meta has shifted. The grind is over. <br />
                            I am a <span className="text-white font-bold">Data Scientist</span> engineering the future of <span className="text-white font-bold">Game Development</span>.
                        </p>
                    </div>

                    <div className="lg:col-span-4 hidden lg:block">
                        <div className="border border-neo-border bg-black/50 p-6 backdrop-blur-sm relative">
                            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-neo-primary"></div>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-neo-primary"></div>

                            <div className="space-y-4 font-mono text-sm text-neo-primary">
                                <div className="flex justify-between border-b border-neo-border pb-2">
                                    <span>STATUS</span>
                                    <span className="text-white">ONLINE</span>
                                </div>
                                <div className="flex justify-between border-b border-neo-border pb-2">
                                    <span>CLASS</span>
                                    <span className="text-white">TECH-MANCER</span>
                                </div>
                                <div className="flex justify-between border-b border-neo-border pb-2">
                                    <span>CURRENT_OBJECTIVE</span>
                                    <span className="text-white">DEPLOY_PORTFOLIO</span>
                                </div>
                                <div className="mt-4 p-4 bg-neo-primary/10 border border-neo-primary/30 text-xs leading-relaxed">
                                    &gt; INITIALIZING NEURAL LINK...<br />
                                    &gt; ACCESSING ARCHIVES...<br />
                                    &gt; WELCOME TO THE NETWORK.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // Default Tavus Theme
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 pt-32 relative overflow-hidden bg-neo-bg text-neo-text">
            <div className="max-w-[90rem] mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 relative z-10">
                    {/* Chat Bubble 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block bg-white border-2 border-black shadow-[8px_8px_0_#000] p-4 mb-8 rounded-tr-3xl rounded-bl-3xl rounded-br-3xl"
                    >
                        <p className="font-mono text-sm font-bold">Hey! I'm Sujal.</p>
                    </motion.div>

                    <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-8">
                        Data Scientist Main. <br />
                        <span className="text-neo-primary italic">Game Dev Sub-Class.</span> <br />
                        Min-Maxing Reality.
                    </h1>

                    <p className="font-mono text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0">
                        Transitioning from the RNG struggle of Destiny 2 to the optimized freedom of Warframe.
                        I analyze the meta, and now I’m learning to build it.
                    </p>

                    {/* Chat Input Simulation */}
                    <div className="bg-white border-2 border-black p-2 flex items-center gap-4 shadow-[8px_8px_0_#000] max-w-md">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center border-2 border-black">
                            <MessageSquare size={16} />
                        </div>
                        <span className="font-mono text-gray-400 flex-1">Tell me about your projects...</span>
                        <button className="bg-neo-primary text-white p-2 border-2 border-black hover:bg-neo-accent transition-colors">
                            <Send size={16} />
                        </button>
                    </div>
                </div>

                {/* Right Side Visuals */}
                <div className="lg:col-span-5 relative hidden lg:block h-[600px]">
                    {/* Floating Elements */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 right-10 bg-white/80 backdrop-blur-md border-2 border-black p-6 shadow-[12px_12px_0_#4DFF4D] w-64 z-20"
                    >
                        <div className="flex items-center gap-3 mb-4 border-b-2 border-black pb-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full border border-black"></div>
                            <span className="font-mono text-xs font-bold">LIVE_FEED</span>
                        </div>
                        <div className="space-y-2">
                            <div className="h-2 bg-gray-200 w-full"></div>
                            <div className="h-2 bg-gray-200 w-3/4"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 30, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-20 left-0 bg-neo-accent text-white border-2 border-black p-6 shadow-[-12px_12px_0_#000] w-72 z-10"
                    >
                        <h3 className="font-serif text-2xl font-bold mb-2">System Online</h3>
                        <p className="font-mono text-xs opacity-80">Ready to deploy next-gen experiences.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
