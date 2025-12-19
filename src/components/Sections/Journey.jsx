import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const QuestEntry = ({ type, title, subtitle, description, tech }) => {
    // Tavus Style - Simplified
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
    return (
        <section id="journey" className="py-32 px-6 bg-neo-bg">
            <div className="max-w-[90rem] mx-auto">
                <div className="mb-20">
                    <h2 className="font-serif text-5xl md:text-7xl font-bold mb-4">Quest Log</h2>
                    <p className="font-mono text-xl text-gray-500">Campaign Progress</p>
                </div>

                <div className="max-w-3xl">
                    <QuestEntry
                        type="main"
                        title="B.Tech in CSE (Data Science)"
                        subtitle="MGMCET | 2024 - 2028"
                        description='Current Objective: Survive the "Maths" boss fight without using a revive token. Status: Grinding XP.'
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
                        tech={['C++', 'Raylib', 'Pure Spite']}
                        description="Built a simple movement shooter engine from scratch. No Unity, no Unreal. Just raw C++ and math. Performance: It runs at 144fps... as long as you don't move the mouse too fast. (PS: Havent uploaded on github as i am still min-maxing it on performance)"
                    />
                </div>
            </div>
        </section>
    );
};

export default Journey;
