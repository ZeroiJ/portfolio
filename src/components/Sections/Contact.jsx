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
        className="flex flex-col items-center gap-2 p-6 bg-gray-800 border-2 border-gray-600 hover:border-retro-primary hover:bg-gray-700 transition-all group"
    >
        <Icon className="w-8 h-8 text-gray-400 group-hover:text-retro-primary transition-colors" />
        <span className="font-pixel text-xs text-gray-400 group-hover:text-retro-text">{label}</span>
    </motion.a>
);

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 bg-retro-bg relative">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="bg-gray-900/80 p-8 md:p-12 border-4 border-retro-text shadow-[8px_8px_0_#000]"
                >
                    <h2 className="text-2xl md:text-4xl font-pixel text-retro-primary mb-4">
                        MULTIPLAYER LOBBY
                    </h2>
                    <p className="font-mono text-retro-secondary mb-12 max-w-lg mx-auto">
                        Ready to team up? Whether it's for a Data Science project or a Game Jam,
                        I'm always looking for new party members.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        <SocialButton icon={Github} label="GITHUB" href="https://github.com" />
                        <SocialButton icon={Linkedin} label="LINKEDIN" href="https://linkedin.com" />
                        <SocialButton icon={Twitter} label="TWITTER" href="https://twitter.com" />
                        <SocialButton icon={Mail} label="EMAIL" href="mailto:example@email.com" />
                    </div>

                    <div className="inline-block">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-retro-primary text-white font-pixel text-sm border-2 border-white shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] transition-all"
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
