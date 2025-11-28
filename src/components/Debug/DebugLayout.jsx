import React, { useState } from 'react';
import { Terminal, Activity, Globe, Layers, FileCode, AlertCircle, CheckCircle, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import ConsolePanel from './ConsolePanel';
import InspectorPanel from './InspectorPanel';
import NetworkPanel from './NetworkPanel';
import PerformancePanel from './PerformancePanel';
import SourcesPanel from './SourcesPanel';

const DebugLayout = ({ children }) => {
    const { toggleTheme } = useTheme();
    const [activeTab, setActiveTab] = useState('console');

    const tabs = [
        { id: 'console', label: 'Console', icon: Terminal },
        { id: 'inspector', label: 'Inspector', icon: Layers },
        { id: 'network', label: 'Network', icon: Globe },
        { id: 'performance', label: 'Performance', icon: Activity },
        { id: 'sources', label: 'Sources', icon: FileCode },
    ];

    const renderPanel = () => {
        switch (activeTab) {
            case 'console': return <ConsolePanel />;
            case 'inspector': return <InspectorPanel />;
            case 'network': return <NetworkPanel />;
            case 'performance': return <PerformancePanel />;
            case 'sources': return <SourcesPanel />;
            default: return <ConsolePanel />;
        }
    };

    return (
        <div className="flex flex-col h-screen bg-neo-bg text-neo-text font-mono overflow-hidden selection:bg-neo-primary selection:text-white">
            {/* Top Bar */}
            <header className="h-10 border-b border-neo-border flex items-center justify-between px-4 bg-neo-bg/50 backdrop-blur-sm select-none">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500"></div>
                    <span className="ml-2">DEBUG VIEW — zeroij:8080</span>
                </div>

                <div className="flex h-full">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-4 h-full text-xs font-bold border-r border-neo-border transition-colors ${activeTab === tab.id
                                ? 'bg-neo-primary/10 text-neo-primary border-t-2 border-t-neo-primary'
                                : 'text-gray-500 hover:bg-neo-border/10 hover:text-gray-300'
                                }`}
                        >
                            <tab.icon size={12} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-4 text-xs font-mono">
                    <div className="flex items-center gap-1 text-green-500">
                        <CheckCircle size={12} />
                        <span>STATUS: RUNNING</span>
                    </div>
                    <div className="flex items-center gap-1 text-neo-accent">
                        <AlertCircle size={12} />
                        <span>ERRORS: 3</span>
                    </div>
                    <button
                        onClick={toggleTheme}
                        className="flex items-center gap-1 text-red-400 hover:text-red-300 hover:bg-red-500/10 px-2 py-1 rounded transition-colors"
                        title="Exit Debug View"
                    >
                        <X size={12} />
                        <span>EXIT</span>
                    </button>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-grow relative overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                <div className="h-full overflow-auto p-4">
                    {renderPanel()}
                </div>
            </main>

            {/* Bottom Status Bar */}
            <footer className="h-6 border-t border-neo-border bg-neo-border/10 flex items-center px-2 text-[10px] text-gray-500 justify-between select-none">
                <div className="flex gap-4">
                    <span>master*</span>
                    <span>Ln 12, Col 45</span>
                    <span>UTF-8</span>
                    <span>JavaScript React</span>
                </div>
                <div className="flex gap-4">
                    <span>Prettier: ✓</span>
                    <span>Eslint: ✓</span>
                    <span>Copilot: Active</span>
                </div>
            </footer>
        </div>
    );
};

export default DebugLayout;
