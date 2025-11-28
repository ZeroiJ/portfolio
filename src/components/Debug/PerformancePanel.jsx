import React from 'react';

const TimelineEvent = ({ name, start, duration, color }) => (
    <div className="flex items-center gap-4 mb-2 group">
        <div className="w-32 text-xs text-gray-500 text-right truncate">{name}</div>
        <div className="flex-grow h-6 bg-gray-800 relative rounded overflow-hidden">
            <div
                className={`absolute top-0 bottom-0 ${color} opacity-60 group-hover:opacity-100 transition-opacity`}
                style={{ left: `${start}%`, width: `${duration}%` }}
            ></div>
            <div className="absolute inset-0 flex items-center px-2 text-[10px] text-white opacity-0 group-hover:opacity-100">
                {duration * 10}ms
            </div>
        </div>
    </div>
);

const PerformancePanel = () => {
    return (
        <div className="p-4 font-mono">
            <h3 className="text-xs font-bold text-gray-400 mb-4 uppercase">Main Thread Activity (Experience)</h3>

            <TimelineEvent name="B.Tech (CSE-DS)" start={0} duration={80} color="bg-blue-500" />
            <TimelineEvent name="Data Science" start={20} duration={60} color="bg-green-500" />
            <TimelineEvent name="Game Dev" start={50} duration={40} color="bg-purple-500" />
            <TimelineEvent name="Web Dev" start={60} duration={30} color="bg-yellow-500" />

            <div className="mt-8 grid grid-cols-4 gap-4">
                <div className="bg-gray-800 p-4 rounded text-center">
                    <div className="text-2xl font-bold text-green-400">60 FPS</div>
                    <div className="text-xs text-gray-500">Frame Rate</div>
                </div>
                <div className="bg-gray-800 p-4 rounded text-center">
                    <div className="text-2xl font-bold text-blue-400">12ms</div>
                    <div className="text-xs text-gray-500">Latency</div>
                </div>
                <div className="bg-gray-800 p-4 rounded text-center">
                    <div className="text-2xl font-bold text-yellow-400">450MB</div>
                    <div className="text-xs text-gray-500">Memory</div>
                </div>
                <div className="bg-gray-800 p-4 rounded text-center">
                    <div className="text-2xl font-bold text-red-400">3</div>
                    <div className="text-xs text-gray-500">Errors</div>
                </div>
            </div>
        </div>
    );
};

export default PerformancePanel;
