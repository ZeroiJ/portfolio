import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cpu, Gamepad2 } from 'lucide-react';

const SkillBar = ({ name, level, color }) => (
    <div className="mb-10">
        <div className="flex justify-between mb-3 font-pixel text-sm md:text-lg">
            <span>{name}</span>
            <span>{level}%</span>
        </div>
        <div className="h-6 bg-gray-800 border-2 border-gray-600 relative overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`h-full ${color} relative`}
            >
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[size:1.5rem_1.5rem] opacity-50"></div>
            </motion.div>
        </div>
    </div>
);

const Skills = () => {
    const skills = [
        { name: "PYTHON", level: 90, color: "bg-retro-primary" },
        { name: "DATA ANALYSIS", level: 85, color: "bg-retro-secondary" },
        { name: "MACHINE LEARNING", level: 75, color: "bg-retro-accent" },
        { name: "GAME DESIGN", level: 40, color: "bg-green-500" },
        { name: "REACT / WEB", level: 60, color: "bg-purple-500" },
    ];

    return (
        <section id="skills" className="py-32 px-6 bg-retro-bg relative">
            <div className="max-w-[80rem] mx-auto">
                <div className="flex items-center gap-6 mb-20">
                    <Code className="text-retro-primary w-12 h-12 md:w-16 md:h-16" />
                    <h2 className="text-4xl md:text-6xl font-pixel text-retro-text">
                        PLAYER STATS
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-20">
                    {/* Main Stats */}
                    <div className="bg-gray-900/80 p-10 border-4 border-retro-text shadow-[12px_12px_0_#000]">
                        <h3 className="font-pixel text-2xl text-retro-secondary mb-10 border-b-2 border-gray-700 pb-4">
                            SKILL TREE
                        </h3>
                        {skills.map((skill) => (
                            <SkillBar key={skill.name} {...skill} />
                        ))}
                    </div>

                    {/* Inventory / Tools */}
                    <div>
                        <h3 className="font-pixel text-2xl text-retro-accent mb-10 border-b-2 border-gray-700 pb-4">
                            INVENTORY
                        </h3>
                        <div className="grid grid-cols-2 gap-6">
                            {['VS Code', 'Jupyter', 'Unity (Learning)', 'Git', 'SQL', 'Pandas'].map((item) => (
                                <motion.div
                                    key={item}
                                    whileHover={{ scale: 1.05, backgroundColor: '#333' }}
                                    className="bg-gray-800 p-6 border-2 border-gray-600 flex items-center gap-4 cursor-help"
                                >
                                    <div className="w-3 h-3 bg-retro-secondary animate-pulse"></div>
                                    <span className="font-mono text-lg">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12 bg-gray-900 p-8 border-2 border-retro-primary/50">
                            <h4 className="font-pixel text-base text-retro-primary mb-4">CURRENT QUEST</h4>
                            <p className="font-mono text-lg text-gray-400">
                                "Mastering the Art of Game Physics"
                            </p>
                            <div className="mt-4 h-4 bg-gray-800 rounded-full overflow-hidden border border-gray-600">
                                <div className="h-full bg-retro-primary w-1/3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
