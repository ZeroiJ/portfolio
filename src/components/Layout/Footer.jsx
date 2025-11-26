import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-neo-bg border-t-2 border-neo-border py-20 mt-auto">
            <div className="max-w-[90rem] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <h3 className="font-serif text-2xl font-bold mb-2">TAVUS_CLONE</h3>
                    <p className="font-mono text-sm text-gray-500">
                        © 2025 Data Scientist Portfolio.
                    </p>
                </div>

                <div className="flex gap-8 font-mono text-sm font-bold">
                    <a href="#" className="hover:text-neo-primary hover:underline decoration-2 underline-offset-4">TWITTER</a>
                    <a href="#" className="hover:text-neo-primary hover:underline decoration-2 underline-offset-4">LINKEDIN</a>
                    <a href="#" className="hover:text-neo-primary hover:underline decoration-2 underline-offset-4">GITHUB</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
