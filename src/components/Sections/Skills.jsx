import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cpu, Gamepad2 } from 'lucide-react';

const SkillBar = ({ name, level, color }) => (
    <div className="mb-6">
        <div className="flex justify-between mb-2 font-pixel text-xs md:text-sm">
            <span>{name}</span>
            <span>{level}%</span>
        </div>
        <div className="h-4 bg-gray-800 border border-gray-600 relative overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`h-full ${color} relative`}
            >
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[size:1rem_1rem] opacity-50"></div>
            </motion.div>
        </div>
    </div>
);

const Skills = () => {
    const skills = [
        { name: "PYTHON", level: 90, color: "bg-retro-primary" },
        { name: "DATA ANALYSIS", level: 85, color: "bg-retro-secondary" },
        { name: "MACHINE LEARNING", level: 75, color: "bg-retro-accent" },
        { name: "GAME DESIGN", level: 40, color: "bg-green-500" }, // Lower level as aspiring
        { name: "REACT / WEB", level: 60, color: "bg-purple-500" },
    ];

    return (
        <section id="skills" className="py-20 px-4 bg-retro-bg relative">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <Code className="text-retro-primary w-8 h-8 md:w-12 md:h-12" />
                    <h2 className="text-2xl md:text-4xl font-pixel text-retro-text">
                        PLAYER STATS
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Main Stats */}
                    <div className="bg-gray-900/80 p-6 border-4 border-retro-text shadow-[8px_8px_0_#000]">
                        <h3 className="font-pixel text-retro-secondary mb-6 border-b border-gray-700 pb-2">
                            SKILL TREE
                        </h3>
                        {skills.map((skill) => (
                            <SkillBar key={skill.name} {...skill} />
                        ))}
                    </div>

                    {/* Inventory / Tools */}
                    <div>
                        <h3 className="font-pixel text-retro-accent mb-6 border-b border-gray-700 pb-2">
                            INVENTORY
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {['VS Code', 'Jupyter', 'Unity (Learning)', 'Git', 'SQL', 'Pandas'].map((item) => (
                                <motion.div
                                    key={item}
                                    whileHover={{ scale: 1.05, backgroundColor: '#333' }}
                                    className="bg-gray-800 p-4 border border-gray-600 flex items-center gap-2 cursor-help"
                                >
                                    <div className="w-2 h-2 bg-retro-secondary animate-pulse"></div>
                                    <span className="font-mono text-sm">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-8 bg-gray-900 p-4 border border-retro-primary/50">
                            <h4 className="font-pixel text-xs text-retro-primary mb-2">CURRENT QUEST</h4>
                            <p className="font-mono text-sm text-gray-400">
                                "Mastering the Art of Game Physics"
                            </p>
                            <div className="mt-2 h-2 bg-gray-800 rounded-full overflow-hidden">
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
