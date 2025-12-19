import React from 'react';
import { motion } from 'framer-motion';
import { User, ArrowRight, Database, Code } from 'lucide-react';
import profileImg from '../../assets/profile.jpg';
import { useTheme } from '../../context/ThemeContext';

const About = () => {
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
                                The Narrative: <span className="text-neo-primary">My Toxic Ex (Destiny 2)</span>
                            </h3>

                            <div className="font-mono text-lg text-gray-600 space-y-6 leading-relaxed border-l-4 border-neo-accent pl-8">
                                <p>
                                    For years, I was in a committed, toxic relationship with Destiny 2. We’re on a break. It still checks my playtime. It taught me how to grind and how to cope when the loot gods queue-dodge your account. But eventually, the 'content vaulting' felt like cleaning bad datasets—necessary, but it hurts my soul.
                                </p>
                                <p>
                                    Then, I met Warframe. Same addiction, better market economy. Now the only thing I farm is my own bad decisions.
                                </p>
                                <p className="font-bold text-black">
                                    I’ve taken my Data Science foundation—my obsession with mechanics, numbers, and optimization—and bullet-jumped into Game Development. I don’t just write code; I write bugs that look like features.
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
