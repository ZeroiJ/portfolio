import React from 'react';
import { motion } from 'framer-motion';
import { User, ArrowRight } from 'lucide-react';
import profileImg from '../../assets/profile.jpg';

const About = () => {
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
                                    For years, I was in a committed, toxic relationship with Destiny 2. It taught me how to grind,
                                    how to analyze patterns in the chaos, and how to chase the perfect 'God Roll' (Data Wrangling).
                                    But eventually, the 'content vaulting' and rigid seasonal models felt like cleaning bad datasets—necessary, but exhausting.
                                </p>
                                <p>
                                    Then, I met Warframe. If Destiny was about hoping for the right drop, Warframe is about engineering the right outcome.
                                    That’s where I am now. I’ve taken my Data Science foundation—my obsession with mechanics, numbers, and optimization—and
                                    bullet-jumped into Game Development.
                                </p>
                                <p className="font-bold text-black">
                                    I don’t just visualize data; I mod it. I don’t just write code; I’m building the Foundry.
                                    I am a Data Science student mastering the systems of the past to build the games of the future.
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
