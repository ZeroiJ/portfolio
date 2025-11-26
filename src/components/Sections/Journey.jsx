import React from 'react';
import { motion } from 'framer-motion';

const LogEntry = ({ year, title, subtitle, description }) => (
    <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-12 gap-12 group">
        {/* Timeline Line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 md:left-auto md:right-0 md:col-span-3 md:border-r-2 md:border-black md:bg-transparent md:w-auto">
            <div className="absolute top-0 left-[-5px] md:right-[-6px] md:left-auto w-3 h-3 bg-white border-2 border-black rounded-full group-hover:bg-neo-primary transition-colors"></div>
        </div>

        {/* Content */}
        <div className="md:col-span-9 pb-16">
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-4">
                <span className="font-mono text-neo-accent font-bold text-lg">{year}</span>
                <h3 className="font-serif text-3xl font-bold">{title}</h3>
            </div>
            <p className="font-mono text-sm text-gray-500 mb-4 uppercase tracking-widest">{subtitle}</p>
            <p className="font-sans text-lg text-gray-700 leading-relaxed max-w-2xl">
                {description}
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
                        System Logs
                    </h2>
                    <span className="font-mono text-xl text-gray-500 mb-2">/ HISTORY</span>
                </div>

                <div className="max-w-5xl">
                    <LogEntry
                        year="2023 - NOW"
                        title="Bachelor of Data Science"
                        subtitle="University / College Name"
                        description="Acquiring the source code for statistical analysis and machine learning. Currently optimizing algorithms and managing big data structures."
                    />
                    <LogEntry
                        year="2024 - NOW"
                        title="Game Dev Fundamentals"
                        subtitle="Self-Taught / Online"
                        description="Side-loading knowledge in Unity and C#. Experimenting with physics engines and game loops to create interactive simulations."
                    />
                    <LogEntry
                        year="2023"
                        title="Python Mastery"
                        subtitle="Certification"
                        description="Completed full system upgrade in Python programming. Installed libraries: Pandas, NumPy, Matplotlib."
                    />
                </div>

            </div>
        </section>
    );
};

export default Journey;
