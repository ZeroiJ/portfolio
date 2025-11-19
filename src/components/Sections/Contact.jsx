import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const SocialButton = ({ icon: Icon, label, href }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-col items-center gap-4 p-10 bg-gray-800 border-2 border-gray-600 hover:border-retro-primary hover:bg-gray-700 transition-all group"
    >
        <Icon className="w-12 h-12 text-gray-400 group-hover:text-retro-primary transition-colors" />
        <span className="font-pixel text-sm md:text-base text-gray-400 group-hover:text-retro-text">{label}</span>
    </motion.a>
);

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6 bg-retro-bg relative">
            <div className="max-w-[80rem] mx-auto text-center">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="bg-gray-900/80 p-16 md:p-24 border-4 border-retro-text shadow-[12px_12px_0_#000]"
                >
                    <h2 className="text-4xl md:text-6xl font-pixel text-retro-primary mb-8">
                        MULTIPLAYER LOBBY
                    </h2>
                    <p className="font-mono text-xl md:text-2xl text-retro-secondary mb-16 max-w-3xl mx-auto leading-relaxed">
                        Ready to team up? Whether it's for a Data Science project or a Game Jam,
                        I'm always looking for new party members.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                        <SocialButton icon={Github} label="GITHUB" href="https://github.com" />
                        <SocialButton icon={Linkedin} label="LINKEDIN" href="https://linkedin.com" />
                        <SocialButton icon={Twitter} label="TWITTER" href="https://twitter.com" />
                        <SocialButton icon={Mail} label="EMAIL" href="mailto:example@email.com" />
                    </div>

                    <div className="inline-block">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-5 bg-retro-primary text-white font-pixel text-lg md:text-xl border-4 border-white shadow-[6px_6px_0_#000] hover:shadow-[8px_8px_0_#000] transition-all"
                        >
                            SEND MESSAGE
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
