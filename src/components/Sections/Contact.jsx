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
        className="flex flex-col items-center gap-6 p-12 bg-gray-800 border-2 border-gray-600 hover:border-retro-primary hover:bg-gray-700 transition-all group"
    >
        <Icon className="w-16 h-16 text-white group-hover:text-retro-primary transition-colors" />
        <span className="font-pixel text-lg md:text-xl text-gray-400 group-hover:text-retro-text">{label}</span>
    </motion.a>
);

const Contact = () => {
    return (
        <section id="contact" className="py-40 px-6 bg-retro-bg relative">
            <div className="max-w-[80rem] mx-auto text-center">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="bg-gray-900/80 p-20 md:p-32 border-4 border-retro-text shadow-[12px_12px_0_#000]"
                >
                    <h2 className="text-5xl md:text-7xl font-pixel text-retro-primary mb-12">
                        MULTIPLAYER LOBBY
                    </h2>
                    <p className="font-mono text-2xl md:text-3xl text-retro-secondary mb-20 max-w-4xl mx-auto leading-relaxed">
                        Ready to team up? Whether it's for a Data Science project or a Game Jam,
                        I'm always looking for new party members.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
                        <SocialButton icon={Github} label="GITHUB" href="https://github.com" />
                        <SocialButton icon={Linkedin} label="LINKEDIN" href="https://linkedin.com" />
                        <SocialButton icon={Twitter} label="TWITTER" href="https://twitter.com" />
                        <SocialButton icon={Mail} label="EMAIL" href="mailto:example@email.com" />
                    </div>

                    <div className="inline-block">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-16 py-8 bg-retro-primary text-white font-pixel text-xl md:text-2xl border-4 border-white shadow-[8px_8px_0_#000] hover:shadow-[12px_12px_0_#000] transition-all"
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
