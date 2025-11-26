import React from 'react';
import { motion } from 'framer-motion';

const SpecCard = ({ title, items, color }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white border-2 border-black p-8 shadow-[8px_8px_0_#000] hover:shadow-[12px_12px_0_#000] transition-all"
    >
        <h3 className={`font-mono text-sm font-bold mb-6 uppercase tracking-wider ${color}`}>
            {title}
        </h3>
        <div className="space-y-4">
            {items.map((item) => (
                <div key={item.name} className="group">
                    <div className="flex justify-between font-serif text-xl font-bold mb-1 group-hover:text-neo-primary transition-colors">
                        <span>{item.name}</span>
                        <span className="font-mono text-sm text-gray-400">{item.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 border border-black overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.level}%` }}
                            transition={{ duration: 1, ease: "circOut" }}
                            className="h-full bg-black"
                        ></motion.div>
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    return (
        <section id="skills" className="py-32 px-6 bg-neo-bg">
            <div className="max-w-[90rem] mx-auto">

                {/* Section Header */}
                <div className="mb-20 flex items-end gap-6 border-b-4 border-black pb-6">
                    <h2 className="font-serif text-5xl md:text-7xl font-bold">
                        Tech Specs
                    </h2>
                    <span className="font-mono text-xl text-gray-500 mb-2">/ CAPABILITIES</span>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <SpecCard
                        title="Core Processing"
                        color="text-neo-primary"
                        items={[
                            { name: "Python", level: 95 },
                            { name: "SQL", level: 85 },
                            { name: "C++", level: 70 }
                        ]}
                    />
                    <SpecCard
                        title="Data Synthesis"
                        color="text-neo-secondary"
                        items={[
                            { name: "Pandas/NumPy", level: 90 },
                            { name: "Scikit-Learn", level: 80 },
                            { name: "TensorFlow", level: 65 }
                        ]}
                    />
                    <SpecCard
                        title="Visual Rendering"
                        color="text-neo-accent"
                        items={[
                            { name: "Unity Engine", level: 60 },
                            { name: "React.js", level: 75 },
                            { name: "Tailwind CSS", level: 85 }
                        ]}
                    />
                </div>

                {/* Inventory / Tools Marquee */}
                <div className="mt-20 border-y-2 border-black py-6 overflow-hidden bg-white">
                    <div className="flex gap-12 animate-marquee whitespace-nowrap font-mono text-xl font-bold text-gray-400">
                        <span>VS CODE</span>
                        <span>•</span>
                        <span>JUPYTER</span>
                        <span>•</span>
                        <span>GIT</span>
                        <span>•</span>
                        <span>FIGMA</span>
                        <span>•</span>
                        <span>BLENDER</span>
                        <span>•</span>
                        <span>POSTGRESQL</span>
                        <span>•</span>
                        <span>VS CODE</span>
                        <span>•</span>
                        <span>JUPYTER</span>
                        <span>•</span>
                        <span>GIT</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
