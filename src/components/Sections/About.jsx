import React from 'react';
import { motion } from 'framer-motion';
import { User, ArrowRight, Database, Code } from 'lucide-react';
import profileImg from '../../assets/profile.jpg';
import { useTheme } from '../../context/ThemeContext';

const About = () => {
    const { theme } = useTheme();

    if (theme === 'marathon') {
        return (
            <section id="about" className="py-32 px-6 bg-neo-bg text-neo-text relative border-t border-neo-border">
                <div className="max-w-[90rem] mx-auto">
                    {/* Marathon Header */}
                    <div className="mb-20 flex items-center justify-between border-b border-neo-border pb-6">
                        <h2 className="font-sans font-black text-5xl md:text-7xl uppercase tracking-tighter">
                            Runner <span className="text-neo-primary">Dossier</span>
                        </h2>
                        <span className="font-mono text-sm text-neo-primary border border-neo-primary px-4 py-1 rounded-full">
                            ID: SUJAL_B
                        </span>
                    </div>

                    <div className="grid md:grid-cols-12 gap-12">
                        {/* Profile Image - Marathon Style */}
                        <div className="md:col-span-5">
                            <div className="relative group">
                                <div className="absolute -inset-2 bg-neo-primary opacity-20 blur-lg group-hover:opacity-40 transition-opacity"></div>
                                <div className="aspect-[4/5] bg-black border border-neo-border relative overflow-hidden">
                                    <img src={profileImg} alt="Sujal Birwadkar" className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500" />

                                    {/* HUD Overlay */}
                                    <div className="absolute inset-0 border-[1px] border-neo-primary/30 m-4 pointer-events-none">
                                        <div className="absolute top-0 left-0 w-2 h-2 bg-neo-primary"></div>
                                        <div className="absolute top-0 right-0 w-2 h-2 bg-neo-primary"></div>
                                        <div className="absolute bottom-0 left-0 w-2 h-2 bg-neo-primary"></div>
                                        <div className="absolute bottom-0 right-0 w-2 h-2 bg-neo-primary"></div>
                                    </div>

                                    <div className="absolute bottom-8 left-8 font-mono text-xs text-neo-primary">
                                        <p>SCANNING...</p>
                                        <p>MATCH FOUND: 99.9%</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bio Content - Marathon Style */}
                        <div className="md:col-span-7 flex flex-col justify-center">
                            <div className="space-y-8">
                                <div className="font-mono text-lg text-gray-400 space-y-6 leading-relaxed">
                                    <p className="border-l-2 border-neo-primary pl-6">
                                        <span className="text-neo-primary font-bold">&gt;&gt; DECRYPTING LOG:</span><br />
                                        Subject originated in the <span className="text-white">Destiny 2</span> ecosystem.
                                        Observed behavior: Excessive grinding, pattern recognition, and optimization of RNG mechanics.
                                    </p>
                                    <p>
                                        <span className="text-neo-primary font-bold">&gt;&gt; CURRENT STATUS:</span><br />
                                        Subject has migrated to the <span className="text-white">Warframe</span> sector.
                                        Now utilizing Data Science protocols to engineer outcomes rather than awaiting probability.
                                        <br /><br />
                                        <span className="text-white italic">"I don't just visualize data; I mod it."</span>
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    <div className="bg-neo-border/20 p-4 border border-neo-border">
                                        <Database className="text-neo-primary mb-2" />
                                        <h4 className="font-bold text-white">DATA_ARCHITECT</h4>
                                        <p className="text-xs text-gray-500 font-mono">Python, SQL, Pandas</p>
                                    </div>
                                    <div className="bg-neo-border/20 p-4 border border-neo-border">
                                        <Code className="text-neo-secondary mb-2" />
                                        <h4 className="font-bold text-white">SYSTEM_BUILDER</h4>
                                        <p className="text-xs text-gray-500 font-mono">C++, React, Game Dev</p>
                                    </div>
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
        <section id="about" className="py-32 px-6 bg-neo-bg relative">
            <div className="max-w-[90rem] mx-auto">

                {/* Section Header */}
                <div className="mb-20 flex items-end gap-6 border-b-4 border-black pb-6">
                    <h2 className="font-serif text-5xl md:text-7xl font-bold">
                        About Me
                    </h2>
                    <span className="font-mono text-xl text-gray-500 mb-2">/ THE_LORD_HIMSELF_SUJAL_BIRWADKAR</span>
                </div>

                <div className="grid md:grid-cols-12 gap-12">
                    {/* Profile Card */}
                    <div className="md:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white border-2 border-black shadow-[12px_12px_0_#FF4D4D] p-2"
                        >
                            <div className="aspect-[4/5] bg-gray-100 border-2 border-black flex items-center justify-center overflow-hidden relative">
                                <img src={profileImg} alt="Sujal Birwadkar" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                                <div className="absolute inset-0 bg-neo-primary/10 mix-blend-overlay pointer-events-none"></div>
                            </div>
                            <div className="p-6 border-t-2 border-black mt-2">
                                <h3 className="font-serif text-2xl font-bold">Sujal Birwadkar</h3>
                                <p className="font-mono text-sm text-gray-500">LVL 21 • DATA SCIENTIST</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bio Content */}
                    <div className="md:col-span-7 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h3 className="font-serif text-3xl md:text-4xl font-bold">
                                The Narrative: <span className="text-neo-primary">Breaking Up with RNG</span>
                            </h3>

                            <div className="font-mono text-lg text-gray-600 space-y-6 leading-relaxed border-l-4 border-neo-accent pl-8">
                                <p>
                                    For years, I was in a committed, toxic relationship with Destiny 2. We’re on a break. It still checks my playtime. It taught me how to grind,
                                    how to analyze patterns in the chaos, and how to cope when the loot gods queue-dodge your account.
                                    But eventually, the 'content vaulting' and rigid seasonal models felt like cleaning bad datasets—necessary, but exhausting.
                                </p>
                                <p>
                                    Then, I met Warframe. Same addiction, more control. Now the only thing I farm is my own bad decisions. If Destiny was about hoping for the right drop, Warframe is about engineering the right outcome.
                                    That’s where I am now. I’ve taken my Data Science foundation—my obsession with mechanics, numbers, and optimization—and
                                    bullet-jumped into Game Development.
                                </p>
                                <p className="font-bold text-black">
                                    I don’t just visualize data; I mod it like it dropped with the wrong polarity. I don’t just write code; I’m building the Foundry.
                                    A Data Science student reverse‑engineering yesterday’s systems to make tomorrow’s games slightly less grindy.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
