import React from 'react';
import { motion } from 'framer-motion';
import { Map, CheckCircle2, Circle } from 'lucide-react';

const QuestItem = ({ title, subtitle, status, date, description, index }) => (
    <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        className="relative pl-16 pb-20 border-l-4 border-gray-700 last:border-0"
    >
        <div className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4 ${status === 'completed' ? 'bg-retro-primary border-retro-primary' : 'bg-retro-bg border-retro-secondary'}`}></div>

        <div className="bg-gray-900/50 p-10 border-2 border-gray-700 hover:border-retro-secondary transition-colors">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h4 className="font-pixel text-xl md:text-2xl text-retro-text mb-3">{title}</h4>
                    <p className="text-retro-secondary text-xl md:text-2xl font-mono">{subtitle}</p>
                </div>
                <span className="text-lg font-mono text-gray-500">{date}</span>
            </div>

            <p className="text-gray-400 font-mono text-2xl mb-8 leading-relaxed">
                {description}
            </p>

            <div className="flex items-center gap-4 text-lg font-pixel">
                {status === 'completed' ? (
                    <span className="text-green-500 flex items-center gap-2"><CheckCircle2 size={24} /> QUEST COMPLETE</span>
                ) : (
                    <span className="text-yellow-500 flex items-center gap-2"><Circle size={24} /> IN PROGRESS</span>
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
        <section id="journey" className="py-40 px-6 bg-retro-bg relative border-t-4 border-retro-text">
            <div className="max-w-[80rem] mx-auto">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-8 mb-24"
                >
                    <Map className="text-retro-primary w-16 h-16 md:w-20 md:h-20" />
                    <h2 className="text-5xl md:text-7xl font-pixel text-retro-text">
                        QUEST LOG
                    </h2>
                </motion.div>

                <div className="space-y-12">
                    {quests.map((quest, index) => (
                        <QuestItem key={index} index={index} {...quest} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;
