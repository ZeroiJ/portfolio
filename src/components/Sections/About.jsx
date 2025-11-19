import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 px-4 bg-retro-bg relative border-t-4 border-retro-text">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <User className="text-retro-primary w-8 h-8 md:w-12 md:h-12" />
                    <h2 className="text-2xl md:text-4xl font-pixel text-retro-text">
                        CHARACTER BIO
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Avatar / Image Placeholder */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="border-4 border-retro-secondary p-2 bg-black/50"
                    >
                        <div className="aspect-square bg-gray-800 flex items-center justify-center overflow-hidden relative group">
                            <span className="font-pixel text-gray-600">AVATAR_IMG</span>
                            <div className="absolute inset-0 bg-retro-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    </motion.div>

                    {/* Bio Text */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="space-y-6 font-mono text-lg"
                    >
                        <div className="bg-gray-900/50 p-6 border-l-4 border-retro-accent">
                            <p className="text-retro-text mb-4">
                                <span className="text-retro-accent font-bold">CLASS:</span> Data Scientist (Student)
                            </p>
                            <p className="text-retro-text mb-4">
                                <span className="text-retro-primary font-bold">SUB-CLASS:</span> Aspiring Game Dev
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Currently grinding XP in the Data Science realm, mastering algorithms and predictive models.
                                However, my true quest lies in the world of Game Development. I'm looking to combine my
                                analytical skills with creativity to build immersive digital experiences.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-1 bg-gray-800 p-2 text-center border border-gray-600">
                                <div className="text-xs text-gray-400 mb-1">LEVEL</div>
                                <div className="text-xl font-pixel text-retro-secondary">21</div>
                            </div>
                            <div className="flex-1 bg-gray-800 p-2 text-center border border-gray-600">
                                <div className="text-xs text-gray-400 mb-1">EXP</div>
                                <div className="text-xl font-pixel text-retro-accent">85%</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
