import React from 'react';

const SourcesPanel = () => {
    const codeSnippet = `
class Developer {
    constructor() {
        this.name = "Sujal Birwadkar";
        this.role = "Data Scientist";
        this.subClass = "Game Developer";
        this.stats = {
            coffee: Infinity,
            sleep: NaN,
            bugs_fixed: 9999
        };
    }

    async optimize() {
        while (this.alive) {
            await this.learn();
            await this.build();
            try {
                this.deploy();
            } catch (err) {
                this.debug(err);
            }
        }
    }
}

export default new Developer();
    `;

    return (
        <div className="flex h-full font-mono text-sm">
            {/* Sidebar */}
            <div className="w-48 border-r border-gray-800 bg-gray-900 p-2 text-xs">
                <div className="flex items-center gap-2 mb-2 text-gray-400 font-bold">
                    <span>▼ src</span>
                </div>
                <div className="pl-4 space-y-1 text-gray-500">
                    <div className="hover:text-white cursor-pointer text-blue-400">profile.js</div>
                    <div className="hover:text-white cursor-pointer">skills.json</div>
                    <div className="hover:text-white cursor-pointer">config.env</div>
                    <div className="hover:text-white cursor-pointer">manifest.json</div>
                </div>
            </div>

            {/* Code View */}
            <div className="flex-grow bg-[#1e1e1e] p-4 overflow-auto">
                <pre className="text-gray-300">
                    <code>{codeSnippet}</code>
                </pre>
            </div>
        </div>
    );
};

export default SourcesPanel;
