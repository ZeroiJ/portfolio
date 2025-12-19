import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Database, Cpu, Layers, Wrench } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const WeaponSlot = ({ title, subtitle, items, color }) => {
    // Tavus Style - Simplified
    return (
        <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full">
                    <Cpu size={24} />
                </div>
                <div>
                    <h3 className={`font-serif text-3xl font-bold ${color}`}>{title}</h3>
                    <p className="font-mono text-gray-500">{subtitle}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -4 }}
                        className="bg-white border-2 border-black shadow-[8px_8px_0_#000] p-6"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h4 className="font-bold text-xl">{item.name}</h4>
                            <span className="bg-gray-100 px-2 py-1 text-xs font-mono border border-black">{item.type}</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-32 px-6 bg-white">
            <div className="max-w-[90rem] mx-auto">
                <div className="mb-20">
                    <h2 className="font-serif text-5xl md:text-7xl font-bold mb-4">The Loadout</h2>
                    <p className="font-mono text-xl text-gray-500">Current Meta Build <span className="text-sm block mt-1">(Subject to nerfs by future semesters.)</span></p>
                </div>

                <WeaponSlot
                    title="Primary Weapon"
                    subtitle="The Data Science Arsenal"
                    color="text-neo-primary"
                    items={[
                        { name: "Python", type: "The Exotic", desc: "My daily driver. Like Telesto, it breaks the game in new and exciting ways." },
                        { name: "Pandas & NumPy", type: "Legendary Perks", desc: "The essential mods. Because Excel is for NPCs." },
                        { name: "SQL", type: "Ammo Reserves", desc: "Querying the void. SELECT * FROM Brain WHERE Knowledge = 'Gone'." }
                    ]}
                />

                <WeaponSlot
                    title="Heavy Weapon"
                    subtitle="The Technical Foundation"
                    color="text-neo-accent"
                    items={[
                        { name: "C++", type: "The Prime Warframe", desc: "The backbone of performance. Currently causing memory leaks in my brain." },
                        { name: "CSS", type: "Fashion Frame", desc: "The true endgame. Centering a div is harder than a Day 1 Raid." },
                        { name: "Linux", type: "OS Main", desc: "(I use Arch, btw. Had to mention it.)" }
                    ]}
                />
            </div>
        </section>
    );
};

export default Skills;
