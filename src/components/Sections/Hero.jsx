import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Video } from 'lucide-react';

const ChatBubble = ({ text, isUser = false, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className={`p-4 max-w-[80%] mb-4 font-mono text-sm border-2 border-black shadow-[4px_4px_0_#000] ${isUser ? 'bg-neo-primary text-white self-end ml-auto' : 'bg-white text-black self-start'
            }`}
    >
        {text}
    </motion.div>
);

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center relative overflow-hidden">

            {/* Background Elements */}
            <div className="absolute top-1/4 left-10 w-64 h-64 bg-neo-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-1/3 right-10 w-64 h-64 bg-neo-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="max-w-[90rem] mx-auto w-full grid lg:grid-cols-2 gap-16 items-center z-10">

                {/* Text Content */}
                <div className="text-center lg:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-8"
                    >
                        Data Scientist Main. <br />
                        <span className="text-neo-primary italic">Game Dev Sub-Class.</span> <br />
                        Min-Maxing Reality.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="font-mono text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0"
                    >
                        Transitioning from the RNG struggle of Destiny 2 to the optimized freedom of Warframe.
                        I analyze the meta, and now I’m learning to build it.
                    </motion.p>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "8px 8px 0px #000" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-black text-white font-mono font-bold text-lg border-2 border-transparent shadow-[4px_4px_0_#FF4D4D]"
                    >
                        START COLLABORATING
                    </motion.button>
                </div>

                {/* Conversational UI / Window */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="relative"
                >
                    {/* Main Chat Window */}
                    <div className="bg-neo-bg border-2 border-black shadow-[12px_12px_0_#000] overflow-hidden">
                        {/* Window Header */}
                        <div className="bg-white border-b-2 border-black p-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500 border border-black"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500 border border-black"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500 border border-black"></div>
                            </div>
                            <span className="font-mono text-xs font-bold">CHAT_SESSION_01.log</span>
                        </div>

                        {/* Chat Content */}
                        <div className="p-6 h-[400px] flex flex-col bg-gray-50/50">
                            <ChatBubble text="So you analyze data... like drop rates?" isUser={true} delay={0.8} />
                            <ChatBubble text="Exactly. I treat datasets like loot tables. Finding the pattern in the chaos." delay={1.5} />
                            <ChatBubble text="And the Game Dev part?" isUser={true} delay={2.5} />
                            <ChatBubble text="That's my new main. Building the systems instead of just farming them." delay={3.5} />

                            {/* Typing Indicator */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 4.5 }}
                                className="mt-auto flex gap-2 items-center text-gray-400 font-mono text-xs"
                            >
                                <span>Sujal is typing...</span>
                            </motion.div>
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t-2 border-black bg-white flex gap-4">
                            <div className="flex-1 bg-gray-100 border-2 border-gray-300 p-2 font-mono text-sm text-gray-400">
                                Write a message...
                            </div>
                            <button className="p-2 bg-neo-accent text-white border-2 border-black shadow-[2px_2px_0_#000]">
                                <MessageSquare size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="absolute -top-10 -right-10 bg-white p-4 border-2 border-black shadow-[8px_8px_0_#4DFF4D] z-20 hidden md:block"
                    >
                        <div className="flex items-center gap-3 font-mono font-bold">
                            <Video className="text-neo-primary" />
                            <span>VIDEO_CALL_ACTIVE</span>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
