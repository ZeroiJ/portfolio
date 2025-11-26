import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, ArrowUpRight, FileText } from 'lucide-react';

const ContactLink = ({ icon: Icon, label, subLabel, href }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -5, boxShadow: "8px 8px 0px #000" }}
        className={`flex items-center justify-between p-8 bg-white border-2 border-black shadow-[4px_4px_0_#000] group transition-all`}
    >
        <div className="flex items-center gap-6">
            <Icon size={32} className="text-black group-hover:text-neo-primary transition-colors" />
            <div>
                <span className="font-serif text-2xl font-bold block">{label}</span>
                <span className="font-mono text-xs text-gray-500 uppercase tracking-wider">{subLabel}</span>
            </div>
        </div>
        <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.a>
);

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6 bg-neo-bg relative overflow-hidden">

            {/* Decorative Blob */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neo-primary rounded-full mix-blend-multiply filter blur-[100px] opacity-10 pointer-events-none"></div>

            <div className="max-w-[90rem] mx-auto relative z-10">

                <div className="grid lg:grid-cols-2 gap-20">
                    <div>
                        <h2 className="font-serif text-6xl md:text-8xl font-bold mb-8 leading-none">
                            Looking for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-primary to-neo-accent">a Clan?</span>
                        </h2>
                        <p className="font-mono text-xl text-gray-600 mb-12 max-w-lg">
                            Whether you need a Data Scientist to analyze your player retention (churn prediction is just predicting who’s quitting the league) or a Junior Dev to help build the next system, I’m ready to queue up.
                        </p>

                        <div className="inline-block bg-white border-2 border-black p-2 shadow-[8px_8px_0_#000]">
                            <div className="bg-neo-secondary px-6 py-2 font-mono font-bold text-sm border border-black mb-2 inline-block">
                                STATUS: LFG (Looking For Group)
                            </div>
                            <p className="font-mono text-sm px-2">
                                Response time: &lt; 24 hours
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        <ContactLink icon={Github} label="GITHUB" subLabel="My Codex" href="https://github.com/ZeroiJ" />
                        <ContactLink icon={Linkedin} label="LINKEDIN" subLabel="Global Chat" href="https://linkedin.com" />
                        <ContactLink icon={FileText} label="RESUME" subLabel="My Build Config" href="#" />
                        <ContactLink icon={Mail} label="EMAIL" subLabel="Direct Message" href="mailto:sujalbirwadkar19@gmail.com" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
