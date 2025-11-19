import React from 'react';
import { motion } from 'framer-motion';
import { Map, CheckCircle2, Circle } from 'lucide-react';

const QuestItem = ({ title, subtitle, status, date, description }) => (
    <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="relative pl-12 pb-16 border-l-4 border-gray-700 last:border-0"
    >
        <div className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4 ${status === 'completed' ? 'bg-retro-primary border-retro-primary' : 'bg-retro-bg border-retro-secondary'}`}></div>

        <div className="bg-gray-900/50 p-8 border-2 border-gray-700 hover:border-retro-secondary transition-colors">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h4 className="font-pixel text-lg md:text-xl text-retro-text mb-2">{title}</h4>
                    <p className="text-retro-secondary text-base md:text-lg font-mono">{subtitle}</p>
                </div>
                <span className="text-sm font-mono text-gray-500">{date}</span>
            </div>

            <p className="text-gray-400 font-mono text-lg mb-6 leading-relaxed">
                {description}
            </p>

            <div className="flex items-center gap-3 text-sm font-pixel">
                {status === 'completed' ? (
                    <span className="text-green-500 flex items-center gap-2"><CheckCircle2 size={16} /> QUEST COMPLETE</span>
                ) : (
                    <span className="text-yellow-500 flex items-center gap-2"><Circle size={16} /> IN PROGRESS</span>
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
        <section id="journey" className="py-32 px-6 bg-retro-bg relative border-t-4 border-retro-text">
            <div className="max-w-[80rem] mx-auto">
                <div className="flex items-center gap-6 mb-20">
                    <Map className="text-retro-primary w-12 h-12 md:w-16 md:h-16" />
                    <h2 className="text-4xl md:text-6xl font-pixel text-retro-text">
                        QUEST LOG
                    </h2>
                </div>

                <div className="space-y-8">
                    {quests.map((quest, index) => (
                        <QuestItem key={index} {...quest} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;
