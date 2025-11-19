import React from 'react';
import { motion } from 'framer-motion';
import { Map, CheckCircle2, Circle } from 'lucide-react';

const QuestItem = ({ title, subtitle, status, date, description }) => (
    <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="relative pl-8 pb-12 border-l-2 border-gray-700 last:border-0"
    >
        <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 ${status === 'completed' ? 'bg-retro-primary border-retro-primary' : 'bg-retro-bg border-retro-secondary'}`}></div>

        <div className="bg-gray-900/50 p-6 border border-gray-700 hover:border-retro-secondary transition-colors">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h4 className="font-pixel text-sm md:text-base text-retro-text">{title}</h4>
                    <p className="text-retro-secondary text-xs md:text-sm font-mono">{subtitle}</p>
                </div>
                <span className="text-xs font-mono text-gray-500">{date}</span>
            </div>

            <p className="text-gray-400 font-mono text-sm mb-4">
                {description}
            </p>

            <div className="flex items-center gap-2 text-xs font-pixel">
                {status === 'completed' ? (
                    <span className="text-green-500 flex items-center gap-1"><CheckCircle2 size={12} /> QUEST COMPLETE</span>
                ) : (
                    <span className="text-yellow-500 flex items-center gap-1"><Circle size={12} /> IN PROGRESS</span>
                )}
            </div>
        </div>
    </motion.div>
);

const Journey = () => {
    const quests = [
        {
            title: "BACHELOR OF DATA SCIENCE",
            subtitle: "University / College Name",
            date: "2023 - Present",
            description: "Main Quest. Learning statistics, machine learning algorithms, and big data processing. Building the foundation for complex system analysis.",
            status: "active"
        },
        {
            title: "GAME DEV FUNDAMENTALS",
            subtitle: "Self-Taught / Online Courses",
            date: "2024 - Present",
            description: "Side Quest. Exploring Unity/Godot, learning C#, and understanding game loops and physics engines.",
            status: "active"
        },
        {
            title: "PYTHON MASTERY",
            subtitle: "Skill Acquisition",
            date: "2023",
            description: "Completed comprehensive training in Python programming, focusing on data libraries (Pandas, NumPy).",
            status: "completed"
        }
    ];

    return (
        <section id="journey" className="py-20 px-4 bg-retro-bg relative border-t-4 border-retro-text">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <Map className="text-retro-primary w-8 h-8 md:w-12 md:h-12" />
                    <h2 className="text-2xl md:text-4xl font-pixel text-retro-text">
                        QUEST LOG
                    </h2>
                </div>

                <div className="space-y-4">
                    {quests.map((quest, index) => (
                        <QuestItem key={index} {...quest} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;
