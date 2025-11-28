import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Box, Layers, Cpu } from 'lucide-react';

const TreeNode = ({ label, children, defaultOpen = false, icon: Icon, meta }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="ml-4">
            <div
                className="flex items-center gap-2 py-1 hover:bg-white/5 cursor-pointer select-none group relative"
                onClick={() => setIsOpen(!isOpen)}
            >
                {children ? (
                    isOpen ? <ChevronDown size={14} className="text-gray-500" /> : <ChevronRight size={14} className="text-gray-500" />
                ) : <div className="w-[14px]" />}

                {Icon && <Icon size={14} className="text-blue-400" />}
                <span className="text-gray-300 group-hover:text-white transition-colors">{label}</span>

                {meta && (
                    <span className="ml-auto mr-4 text-xs text-gray-600 font-mono hidden group-hover:inline-block">
                        {JSON.stringify(meta).replace(/"/g, '').replace(/,/g, ', ')}
                    </span>
                )}
            </div>
            {isOpen && children && (
                <div className="border-l border-gray-800 ml-[7px]">
                    {children}
                </div>
            )}
        </div>
    );
};

const InspectorPanel = () => {
    return (
        <div className="font-mono text-sm p-4">
            <TreeNode label="root" defaultOpen={true} icon={Box}>
                <TreeNode label="DataScience" defaultOpen={true} icon={Layers}>
                    <TreeNode label="Python" icon={Cpu} meta={{ level: 90, xp: '4000h' }} />
                    <TreeNode label="Pandas" icon={Cpu} meta={{ status: 'optimized' }} />
                    <TreeNode label="NumPy" icon={Cpu} />
                    <TreeNode label="SQL" icon={Cpu} meta={{ query_speed: 'fast' }} />
                    <TreeNode label="PowerBI" icon={Cpu} />
                </TreeNode>

                <TreeNode label="GameDev" defaultOpen={true} icon={Layers}>
                    <TreeNode label="C++" icon={Cpu} meta={{ memory_leaks: 'occasional' }} />
                    <TreeNode label="Raylib" icon={Cpu} />
                    <TreeNode label="Unity" icon={Cpu} meta={{ deprecated: true }} />
                    <TreeNode label="Unreal" icon={Cpu} meta={{ status: 'learning' }} />
                </TreeNode>

                <TreeNode label="WebDev" defaultOpen={true} icon={Layers}>
                    <TreeNode label="React" icon={Cpu} meta={{ components: 'functional' }} />
                    <TreeNode label="Tailwind" icon={Cpu} />
                    <TreeNode label="Node.js" icon={Cpu} />
                </TreeNode>

                <TreeNode label="Attributes" defaultOpen={true} icon={Box}>
                    <TreeNode label="Coffee_Addiction" meta={{ value: 'CRITICAL' }} />
                    <TreeNode label="Sleep_Schedule" meta={{ value: 'NaN' }} />
                    <TreeNode label="Social_Battery" meta={{ value: '15%' }} />
                </TreeNode>
            </TreeNode>
        </div>
    );
};

export default InspectorPanel;
