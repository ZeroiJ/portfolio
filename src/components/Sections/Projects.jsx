import React from 'react';
import { motion } from 'framer-motion';
import { Database, BarChart2, Music, Film, MessageCircle } from 'lucide-react';

const ProjectCard = ({ title, subtitle, reality, tech, icon: Icon }) => {
    return (
        <div className="bg-white border-2 border-black shadow-[8px_8px_0_#000] p-6 mb-8 hover:translate-x-1 hover:-translate-y-1 transition-transform">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-neo-primary border-2 border-black flex items-center justify-center shrink-0">
                        {Icon && <Icon className="text-white" size={24} />}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold leading-tight">{title}</h3>
                        <p className="font-mono text-sm text-gray-500 mt-1">{subtitle}</p>
                    </div>
                </div>
            </div>
            
            <div className="mb-4 pl-4 border-l-4 border-gray-200">
                <p className="font-mono text-xs font-bold text-gray-400 mb-1">THE REALITY</p>
                <p className="text-gray-700 italic">"{reality}"</p>
            </div>

            {tech && (
                <div className="flex gap-2 flex-wrap mt-4">
                    {tech.map((t, i) => (
                        <span key={i} className="text-xs font-bold bg-gray-100 px-2 py-1 border border-black">{t}</span>
                    ))}
                </div>
            )}
        </div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 bg-neo-bg">
            <div className="max-w-[90rem] mx-auto">
                <div className="mb-20">
                    <h2 className="font-serif text-5xl md:text-7xl font-bold mb-4">The "It Works On My Machine" Gallery</h2>
                    <p className="font-mono text-xl text-gray-500">Things I built that actually run (mostly).</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectCard
                        title="California Housing Model"
                        subtitle='The "Can I Afford This?" Calculator'
                        reality="It told me I can't afford a house in California. Accuracy: 100% on my depression, 90% on the data."
                        tech={['Python', 'Scikit-Learn', 'Tears']}
                        icon={Database}
                    />
                    
                    <ProjectCard
                        title="COVID-19 Analysis"
                        subtitle="The 2020 Flashback"
                        reality="Reminded me of when we thought a 2-week lockdown was long. Good graphs, sad vibes."
                        tech={['Jupyter', 'Pandas', 'Matplotlib']}
                        icon={BarChart2}
                    />

                    <ProjectCard
                        title="Spotify Analysis"
                        subtitle="Why My Music Taste is Basic"
                        reality="Validated that yes, pop music is repetitive, and yes, I still listen to it."
                        tech={['Python', 'Data Viz']}
                        icon={Music}
                    />

                    <ProjectCard
                        title="Netflix vs. Amazon Prime"
                        subtitle='The "What to Watch" Dilemma'
                        reality="Spent 10 hours coding this analysis instead of just picking a movie to watch."
                        tech={['Python', 'Indecision', 'Seaborn']}
                        icon={Film}
                    />

                    <div className="md:col-span-2 max-w-xl">
                        <ProjectCard
                            title="WhatsApp Chat Analysis"
                            subtitle="Exposing My Roommates"
                            reality='Proved that 80% of our communication is just "Who ate my yogurt?" and "Rent is due." Peak activity: 2 AM.'
                            tech={['Python', 'NLP', 'Privacy Invasion']}
                            icon={MessageCircle}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
