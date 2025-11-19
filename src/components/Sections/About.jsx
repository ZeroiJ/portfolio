import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-40 px-6 bg-retro-bg relative border-t-4 border-retro-text">
            <div className="max-w-[80rem] mx-auto">
                <div className="flex items-center gap-8 mb-24">
                    <User className="text-retro-primary w-16 h-16 md:w-20 md:h-20" />
                    <h2 className="text-5xl md:text-7xl font-pixel text-retro-text">
                        CHARACTER BIO
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-24 items-center">
                    {/* Avatar / Image Placeholder */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="border-4 border-retro-secondary p-6 bg-black/50"
                    >
                        <div className="aspect-square bg-gray-800 flex items-center justify-center overflow-hidden relative group">
                            <span className="font-pixel text-3xl text-gray-600">AVATAR_IMG</span>
                            <div className="absolute inset-0 bg-retro-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    </motion.div>

                    {/* Bio Text */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="space-y-12 font-mono text-2xl md:text-3xl"
                    >
                        <div className="bg-gray-900/50 p-12 border-l-8 border-retro-accent">
                            <p className="text-retro-text mb-8">
                                <span className="text-retro-accent font-bold">CLASS:</span> Data Scientist (Student)
                            </p>
                            <p className="text-retro-text mb-8">
                                <span className="text-retro-primary font-bold">SUB-CLASS:</span> Aspiring Game Dev
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Currently grinding XP in the Data Science realm, mastering algorithms and predictive models.
                                However, my true quest lies in the world of Game Development. I'm looking to combine my
                                analytical skills with creativity to build immersive digital experiences.
                            </p>
                        </div>

                        <div className="flex gap-10">
                            <div className="flex-1 bg-gray-800 p-8 text-center border-2 border-gray-600">
                                <div className="text-lg text-gray-400 mb-4">LEVEL</div>
                                <div className="text-5xl font-pixel text-retro-secondary">21</div>
                            </div>
                            <div className="flex-1 bg-gray-800 p-8 text-center border-2 border-gray-600">
                                <div className="text-lg text-gray-400 mb-4">EXP</div>
                                <div className="text-5xl font-pixel text-retro-accent">85%</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
