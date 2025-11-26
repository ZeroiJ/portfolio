import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const ContactLink = ({ icon: Icon, label, href, color }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -5, boxShadow: "8px 8px 0px #000" }}
        className={`flex items-center justify-between p-8 bg-white border-2 border-black shadow-[4px_4px_0_#000] group transition-all`}
    >
        <div className="flex items-center gap-6">
            <Icon size={32} className="text-black group-hover:text-neo-primary transition-colors" />
            <span className="font-serif text-2xl font-bold">{label}</span>
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
                            Let's build <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-primary to-neo-accent">something wild.</span>
                        </h2>
                        <p className="font-mono text-xl text-gray-600 mb-12 max-w-lg">
                            Whether you need a data model trained or a game level designed, I'm ready to collaborate.
                        </p>

                        <div className="inline-block bg-white border-2 border-black p-2 shadow-[8px_8px_0_#000]">
                            <div className="bg-neo-secondary px-6 py-2 font-mono font-bold text-sm border border-black mb-2 inline-block">
                                STATUS: ONLINE
                            </div>
                            <p className="font-mono text-sm px-2">
                                Response time: &lt; 24 hours
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        <ContactLink icon={Github} label="GITHUB" href="https://github.com" />
                        <ContactLink icon={Linkedin} label="LINKEDIN" href="https://linkedin.com" />
                        <ContactLink icon={Twitter} label="TWITTER" href="https://twitter.com" />
                        <ContactLink icon={Mail} label="EMAIL" href="mailto:example@email.com" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
