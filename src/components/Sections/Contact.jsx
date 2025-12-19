import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileText, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ContactLink = ({ icon: Icon, label, subLabel, href }) => {
    const { theme } = useTheme();

    if (theme === 'marathon') {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="block group">
                <div className="flex items-center justify-between border-b border-neo-border py-6 hover:bg-neo-border/10 transition-colors px-4">
                    <div className="flex items-center gap-6">
                        <Icon className="text-neo-primary" size={24} />
                        <div>
                            <h3 className="font-sans font-bold text-2xl text-white uppercase tracking-wider group-hover:text-neo-primary transition-colors">{label}</h3>
                            <p className="font-mono text-xs text-gray-500">{subLabel}</p>
                        </div>
                    </div>
                    <ArrowUpRight className="text-gray-600 group-hover:text-neo-primary transition-colors" />
                </div>
            </a>
        );
    }

    // Tavus Style
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block group">
            <div className="bg-white border-2 border-black p-6 shadow-[8px_8px_0_#000] hover:translate-y-1 hover:shadow-[4px_4px_0_#000] transition-all flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="bg-neo-bg p-3 border-2 border-black">
                        <Icon size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-xl">{label}</h3>
                        <p className="font-mono text-xs text-gray-500">{subLabel}</p>
                    </div>
                </div>
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
        </a>
    );
};

const Contact = () => {
    const { theme } = useTheme();

    return (
        <section id="contact" className={`py-32 px-6 ${theme === 'marathon' ? 'bg-neo-bg text-neo-text' : 'bg-neo-secondary'}`}>
            <div className="max-w-[90rem] mx-auto">
                <div className="grid md:grid-cols-2 gap-20">
                    <div>
                        {theme === 'marathon' ? (
                            <>
                                <h2 className="font-sans font-black text-6xl md:text-8xl uppercase tracking-tighter leading-[0.85] mb-8">
                                    Extraction <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-primary to-neo-secondary">Signal</span>
                                </h2>
                                <p className="font-mono text-gray-400 max-w-md mb-12 border-l-2 border-neo-primary pl-6">
                                    Ready to squad up? Send the invite. <br />
                                    My comms are open for new missions.
                                </p>
                            </>
                        ) : (
                            <>
                                <h2 className="font-serif text-6xl md:text-8xl font-bold mb-8 leading-none">
                                    Looking for <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-primary to-neo-accent">a Clan?</span> <span className="text-4xl block mt-2">(Or Just a Job?)</span>
                                </h2>
                                <p className="font-mono text-xl mb-12 max-w-md">
                                    Whether it's a raid boss (complex project) or a quick skirmish (freelance), I'm ready to join the fireteam. I promise my code has better documentation than Destiny's lore.
                                </p>
                            </>
                        )}
                    </div>

                    <div className="space-y-6">
                        <ContactLink icon={Github} label="GITHUB" subLabel="My Spaghetti Code" href="https://github.com/ZeroiJ" />
                        <ContactLink icon={Mail} label="EMAIL" subLabel="Direct Message / Pls no spam" href="mailto:sujalbirwadkar19@gmail.com" />
                        <ContactLink icon={Linkedin} label="LINKEDIN" subLabel="Global Chat / Corporate Mask On" href="#" />
                        {/* Resume removed as per user request */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
