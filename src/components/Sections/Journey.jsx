import React from 'react';
import { motion } from 'framer-motion';

const QuestEntry = ({ title, subtitle, tech, description, type }) => (
    <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-12 gap-12 group mb-16 last:mb-0">
        {/* Timeline Line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 md:left-auto md:right-0 md:col-span-3 md:border-r-2 md:border-black md:bg-transparent md:w-auto">
            <div className={`absolute top-0 left-[-5px] md:right-[-6px] md:left-auto w-3 h-3 border-2 border-black rounded-full transition-colors ${type === 'main' ? 'bg-neo-primary' : 'bg-white group-hover:bg-neo-secondary'}`}></div>
        </div>

        {/* Content */}
        <div className="md:col-span-9">
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-4">
                <span className={`font-mono font-bold text-sm px-3 py-1 border border-black ${type === 'main' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                    {type === 'main' ? 'MAIN QUEST' : 'SIDE QUEST'}
                </span>
                <h3 className="font-serif text-3xl font-bold">{title}</h3>
            </div>

            <p className="font-mono text-sm text-gray-500 mb-4 uppercase tracking-widest">{subtitle}</p>

            {tech && (
                <div className="flex gap-2 mb-6 flex-wrap">
                    {tech.map(t => (
                        <span key={t} className="font-mono text-xs font-bold bg-gray-100 px-2 py-1 border border-gray-300">
                            [{t}]
                        </span>
                    ))}
                </div>
            )}

            <p className="font-sans text-lg text-gray-700 leading-relaxed max-w-3xl border-l-4 border-gray-200 pl-6 italic">
                "{description}"
            </p>
        </div>
    </div>
);

const Journey = () => {
    return (
        <section id="journey" className="py-32 px-6 bg-neo-bg">
            <div className="max-w-[90rem] mx-auto">

                {/* Section Header */}
                <div className="mb-20 flex items-end gap-6 border-b-4 border-black pb-6">
                    <h2 className="font-serif text-5xl md:text-7xl font-bold">
                        Quest Log
                    </h2>
                    <span className="font-mono text-xl text-gray-500 mb-2">/ PROJECTS_&_XP</span>
                </div>

                <div className="max-w-5xl">
                    {/* Education - Main Quest */}
                    <QuestEntry
                        type="main"
                        title="B.Tech in CSE (Data Science)"
                        subtitle="MGMCET | 2024 - 2028"
                        description="Acquiring the source code for statistical analysis and machine learning. Currently optimizing algorithms and managing big data structures."
                    />

                    {/* Project 1 */}
                    <QuestEntry
                        type="side"
                        title="The 'God Roll' Analysis"
                        subtitle="Data Science Focus"
                        tech={['Python', 'Pandas', 'Matplotlib']}
                        description="You know that feeling when you calculate the exact DPS output of a build? I did that, but for real-world data. I used Exploratory Data Analysis to find the 'meta' in this dataset, visualizing trends that others missed."
                    />

                    {/* Project 2 */}
                    <QuestEntry
                        type="side"
                        title="The Dashboard"
                        subtitle="Power BI Focus"
                        tech={['Power BI', 'SQL']}
                        description="Think of this as the UI for a complex raid. I took raw user data and built a dashboard that tells a story, allowing the user to track performance metrics in real-time without needing a wiki."
                    />

                    {/* Project 3 */}
                    <QuestEntry
                        type="side"
                        title="The Prototype"
                        subtitle="Game Dev / C++ Focus"
                        tech={['C++', 'SDL/Unity']}
                        description="My first step into the Void. A simple game loop where I applied object-oriented principles. It’s not a Triple-A title yet, but the hit-boxes are tighter than Destiny’s PvP netcode."
                    />

                    {/* Self Taught - Side Quest */}
                    <QuestEntry
                        type="side"
                        title="Trying hard to be Game Dev"
                        subtitle="Self-Taught / Online"
                        description="Side-loading knowledge in Unity and C#. Experimenting with physics engines and game loops to create interactive simulations."
                    />
                </div>

            </div>
        </section>
    );
};

export default Journey;
