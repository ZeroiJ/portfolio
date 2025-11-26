import React from 'react';
import { motion } from 'framer-motion';

const WeaponSlot = ({ title, subtitle, items, color }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white border-2 border-black p-8 shadow-[8px_8px_0_#000] hover:shadow-[12px_12px_0_#000] transition-all h-full"
    >
        <div className="mb-6 border-b-2 border-gray-100 pb-4">
            <h3 className={`font-mono text-sm font-bold uppercase tracking-wider ${color}`}>
                {title}
            </h3>
            <p className="font-serif text-xl font-bold mt-1">{subtitle}</p>
        </div>

        <div className="space-y-6">
            {items.map((item) => (
                <div key={item.name} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                        <span className="font-bold font-mono group-hover:text-neo-primary transition-colors">{item.name}</span>
                        <span className="text-xs text-gray-400 font-mono">{item.type}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed font-sans">
                        {item.desc}
                    </p>
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
                        The Loadout
                    </h2>
                    <span className="font-mono text-xl text-gray-500 mb-2">/ SKILLS_&_TECH</span>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-stretch">

                    {/* Primary Weapon */}
                    <WeaponSlot
                        title="Primary Weapon"
                        subtitle="The Data Science Arsenal"
                        color="text-neo-primary"
                        items={[
                            { name: "Python", type: "The Exotic", desc: "My daily driver. Best-in-slot for automation and crunching massive datasets." },
                            { name: "Data Wrangling & EDA", type: "Inventory Management", desc: "Cleaning and restructuring messy raw data into actionable insights." },
                            { name: "Power BI & Viz", type: "The HUD", desc: "Turning complex queries into visual storytelling so stakeholders know where to aim." }
                        ]}
                    />

                    {/* Heavy Weapon */}
                    <WeaponSlot
                        title="Heavy Weapon"
                        subtitle="The Technical Foundation"
                        color="text-neo-accent"
                        items={[
                            { name: "C++", type: "The Prime Warframe", desc: "The backbone of performance. Learning low-level memory management because Python isn't fast enough for the swarm." }
                        ]}
                    />

                    {/* Class Ability */}
                    <WeaponSlot
                        title="Class Ability"
                        subtitle="Game Dev (The New Passion)"
                        color="text-neo-secondary"
                        items={[
                            { name: "Status: Rank 10/30", type: "Still Leveling", desc: "Applying Data Science logic to game engines. Understanding that a game is just a database moving at 60fps." },
                            { name: "Current Grind", type: "Mechanics & Loops", desc: "Learning physics, game loops, and object-oriented systems." }
                        ]}
                    />
                </div>

            </div>
        </section>
    );
};

export default Skills;
