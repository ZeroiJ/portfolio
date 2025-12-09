import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Database, Cpu, Layers, Wrench } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const WeaponSlot = ({ title, subtitle, items, color }) => {
    const { theme } = useTheme();

    if (theme === 'marathon') {
        return (
            <div className="mb-12">
                <div className="flex items-center gap-4 mb-6 border-b border-neo-border pb-2">
                    <div className={`w-3 h-3 ${color.replace('text-', 'bg-')}`}></div>
                    <h3 className="font-mono text-xl text-white tracking-widest">{title} // {subtitle}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((item, index) => (
                        <div key={index} className="bg-neo-border/10 border border-neo-border p-4 hover:bg-neo-border/30 transition-colors group">
                            <div className="flex justify-between items-start mb-2">
                                <span className={`font-bold ${color}`}>{item.name}</span>
                                <span className="text-[10px] font-mono text-gray-500">{item.type}</span>
                            </div>
                            <p className="text-xs text-gray-400 font-mono leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Tavus Style
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
    const { theme } = useTheme();

    return (
        <section id="skills" className={`py-32 px-6 ${theme === 'marathon' ? 'bg-neo-bg text-neo-text' : 'bg-white'}`}>
            <div className="max-w-[90rem] mx-auto">
                {theme === 'marathon' ? (
                    <div className="mb-20 border-b border-neo-border pb-6">
                        <h2 className="font-sans font-black text-5xl md:text-7xl uppercase tracking-tighter">
                            System <span className="text-neo-secondary">Augmentations</span>
                        </h2>
                    </div>
                ) : (
                    <div className="mb-20">
                        <h2 className="font-serif text-5xl md:text-7xl font-bold mb-4">The Loadout</h2>
                        <p className="font-mono text-xl text-gray-500">Current Meta Build <span className="text-sm block mt-1">(Subject to nerfs by future semesters.)</span></p>
                    </div>
                )}

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
