import React from 'react';
import { motion } from 'framer-motion';
import { User, ArrowRight } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-32 px-6 bg-neo-bg relative">
            <div className="max-w-[90rem] mx-auto">

                {/* Section Header */}
                <div className="mb-20 flex items-end gap-6 border-b-4 border-black pb-6">
                    <h2 className="font-serif text-5xl md:text-7xl font-bold">
                        Profile
                    </h2>
                    <span className="font-mono text-xl text-gray-500 mb-2">/ WHO_AM_I</span>
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
                                {/* Placeholder for real image */}
                                <span className="font-mono text-2xl font-bold text-gray-300">IMG_PLACEHOLDER</span>
                                <div className="absolute inset-0 bg-neo-primary/10 mix-blend-overlay"></div>
                            </div>
                            <div className="p-6 border-t-2 border-black mt-2">
                                <h3 className="font-serif text-2xl font-bold">Sujal</h3>
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
                            <p className="font-serif text-3xl md:text-4xl leading-tight">
                                I'm a Data Science student with a secret weapon: <span className="bg-neo-secondary px-2">Creativity.</span>
                            </p>

                            <div className="font-mono text-lg text-gray-600 space-y-6 leading-relaxed border-l-4 border-neo-accent pl-8">
                                <p>
                                    While others are just crunching numbers, I'm looking for ways to visualize them in 3D space.
                                    My background in algorithms gives me the logic, but my passion for game dev gives me the vision.
                                </p>
                                <p>
                                    I don't just build models; I build experiences.
                                </p>
                            </div>

                            <div className="pt-8">
                                <button className="group flex items-center gap-4 font-mono font-bold text-xl hover:text-neo-primary transition-colors">
                                    READ FULL BIO <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
