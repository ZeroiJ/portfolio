import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const QuestEntry = ({ type, title, subtitle, description, tech }) => {
    const { theme } = useTheme();

    if (theme === 'marathon') {
        return (
            <div className="relative pl-8 border-l border-neo-border pb-12 last:pb-0">
                <div className={`absolute -left-[5px] top-0 w-2 h-2 ${type === 'main' ? 'bg-neo-primary' : 'bg-neo-secondary'}`}></div>
                <div className="mb-2 flex items-center gap-3">
                    <span className={`text-xs font-mono px-2 py-0.5 border ${type === 'main' ? 'border-neo-primary text-neo-primary' : 'border-neo-secondary text-neo-secondary'}`}>
                        {type === 'main' ? 'MAIN_OP' : 'SIDE_OP'}
                    </span>
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                </div>
                <p className="font-mono text-sm text-gray-400 mb-4">{subtitle}</p>
                <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mb-4">{description}</p>
                {tech && (
                    <div className="flex gap-2 flex-wrap">
                        {tech.map((t, i) => (
                            <span key={i} className="text-[10px] font-mono bg-neo-border/30 text-gray-400 px-2 py-1">{t}</span>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    // Tavus Style
    return (
        <div className="relative pl-8 border-l-4 border-black pb-12 last:pb-0">
            <div className={`absolute -left-[10px] top-0 w-4 h-4 rounded-full border-2 border-black ${type === 'main' ? 'bg-neo-primary' : 'bg-white'}`}></div>

            <div className="bg-white border-2 border-black shadow-[8px_8px_0_#000] p-6">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <span className={`text-xs font-bold px-2 py-1 border border-black mb-2 inline-block ${type === 'main' ? 'bg-neo-primary text-white' : 'bg-neo-secondary text-black'}`}>
                            {type === 'main' ? 'MAIN QUEST' : 'SIDE QUEST'}
                        </span>
                        <h3 className="text-xl font-bold">{title}</h3>
                    </div>
                </div>
                <p className="font-mono text-sm text-gray-500 mb-4">{subtitle}</p>
                <p className="text-gray-700 mb-4">{description}</p>
                {tech && (
                    <div className="flex gap-2 flex-wrap">
                        {tech.map((t, i) => (
                            <span key={i} className="text-xs font-bold bg-gray-100 px-2 py-1 border border-black">{t}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const Journey = () => {
    const { theme } = useTheme();

    return (
        <section id="journey" className={`py-32 px-6 ${theme === 'marathon' ? 'bg-neo-bg text-neo-text' : 'bg-neo-bg'}`}>
            <div className="max-w-[90rem] mx-auto">
                {theme === 'marathon' ? (
                    <div className="mb-20 border-b border-neo-border pb-6">
                        <h2 className="font-sans font-black text-5xl md:text-7xl uppercase tracking-tighter">
                            Operation <span className="text-neo-accent">History</span>
                        </h2>
                    </div>
                ) : (
                    <div className="mb-20">
                        <h2 className="font-serif text-5xl md:text-7xl font-bold mb-4">Quest Log</h2>
                        <p className="font-mono text-xl text-gray-500">Campaign Progress</p>
                    </div>
                )}

                <div className="max-w-3xl">
                    <QuestEntry
                        type="main"
                        title="B.Tech in CSE (Data Science)"
                        subtitle="MGMCET | 2024 - 2028"
                        description="Acquiring the source code for statistical analysis and machine learning. Currently optimizing algorithms and managing big data structures."
                    />
                    <QuestEntry
                        type="side"
                        title='The "God Roll" Analysis'
                        subtitle="Data Science Focus"
                        tech={['Python', 'Pandas', 'Matplotlib']}
                        description="You know that feeling when you calculate the exact DPS output of a build? I did that, but for real-world data. Built a dashboard to visualize trends in massive datasets."
                    />
                    <QuestEntry
                        type="side"
                        title="Prototype Game Loop"
                        subtitle="Game Dev Focus"
                        tech={['C++', 'Raylib']}
                        description="Built a simple movement shooter engine from scratch. No Unity, no Unreal. Just raw C++ and math. It's janky, but it runs at 144fps."
                    />
                </div>
            </div>
        </section>
    );
};

export default Journey;
