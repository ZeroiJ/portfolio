import React, { useEffect, useRef } from 'react';

const ConsolePanel = () => {
    const bottomRef = useRef(null);

    const logs = [
        { time: '00:00:01', level: 'INFO', msg: 'Booting profile: zeroij@localhost' },
        { time: '00:00:02', level: 'INFO', msg: 'Loading kernel modules... [OK]' },
        { time: '00:00:02', level: 'WARN', msg: 'SleepSchedule module unstable; hotfix pending' },
        { time: '00:00:03', level: 'INFO', msg: 'Mounting file system: /home/sujal' },
        { time: '00:00:03', level: 'INFO', msg: 'Initializing DataScience subsystem...' },
        { time: '00:00:04', level: 'SUCCESS', msg: 'Python environment active (v3.12)' },
        { time: '00:00:04', level: 'INFO', msg: 'Initializing GameDev subsystem...' },
        { time: '00:00:05', level: 'SUCCESS', msg: 'GameDevSubsystem online · Destiny2_trauma=true' },
        { time: '00:00:06', level: 'INFO', msg: 'Connecting to neural link...' },
        { time: '00:00:07', level: 'ERROR', msg: 'PerfectWorkLifeBalance not found (404)' },
        { time: '00:00:08', level: 'INFO', msg: 'System ready. Waiting for input...' },
    ];

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <div className="font-mono text-sm p-4">
            {logs.map((log, index) => (
                <div key={index} className="flex gap-4 mb-1 hover:bg-white/5 p-1 rounded">
                    <span className="text-gray-600 select-none">[{log.time}]</span>
                    <span className={`font-bold w-16 ${log.level === 'INFO' ? 'text-blue-400' :
                            log.level === 'WARN' ? 'text-yellow-400' :
                                log.level === 'ERROR' ? 'text-red-400' :
                                    'text-green-400'
                        }`}>
                        [{log.level}]
                    </span>
                    <span className="text-gray-300">{log.msg}</span>
                </div>
            ))}

            <div className="flex gap-4 mt-4 p-1 animate-pulse">
                <span className="text-gray-600 select-none">[{new Date().toLocaleTimeString('en-GB')}]</span>
                <span className="text-gray-500 w-16">[INPUT]</span>
                <span className="text-neo-primary">_</span>
            </div>
            <div ref={bottomRef} />
        </div>
    );
};

export default ConsolePanel;
