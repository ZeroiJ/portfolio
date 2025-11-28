import React from 'react';

const NetworkRequest = ({ method, url, status, type, size, time }) => (
    <div className="grid grid-cols-12 gap-2 py-1 px-2 hover:bg-white/5 text-xs border-b border-gray-800 cursor-pointer group">
        <div className={`col-span-1 font-bold ${method === 'GET' ? 'text-green-400' : 'text-yellow-400'
            }`}>{method}</div>
        <div className="col-span-5 text-gray-300 truncate group-hover:text-white">{url}</div>
        <div className={`col-span-2 ${status === 200 ? 'text-green-400' : 'text-red-400'
            }`}>{status} {status === 200 ? 'OK' : 'Error'}</div>
        <div className="col-span-2 text-gray-500">{type}</div>
        <div className="col-span-1 text-gray-500">{size}</div>
        <div className="col-span-1 text-gray-500">{time}</div>
    </div>
);

const NetworkPanel = () => {
    return (
        <div className="font-mono text-sm h-full flex flex-col">
            {/* Header */}
            <div className="grid grid-cols-12 gap-2 py-2 px-2 bg-gray-900 border-b border-gray-700 font-bold text-gray-400 text-xs">
                <div className="col-span-1">Method</div>
                <div className="col-span-5">Name</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2">Type</div>
                <div className="col-span-1">Size</div>
                <div className="col-span-1">Time</div>
            </div>

            {/* Requests */}
            <div className="overflow-auto flex-grow">
                <NetworkRequest method="GET" url="/api/projects/guardian-manager" status={200} type="json" size="1.2kb" time="45ms" />
                <NetworkRequest method="GET" url="/api/projects/portfolio-v1" status={200} type="json" size="850b" time="32ms" />
                <NetworkRequest method="GET" url="/api/socials/github" status={200} type="ext" size="0b" time="12ms" />
                <NetworkRequest method="GET" url="/api/socials/linkedin" status={200} type="ext" size="0b" time="15ms" />
                <NetworkRequest method="POST" url="/api/contact/send-message" status={404} type="xhr" size="0b" time="120ms" />
                <NetworkRequest method="GET" url="/assets/profile.jpg" status={200} type="img" size="24kb" time="85ms" />
                <NetworkRequest method="GET" url="/assets/fonts/JetBrainsMono.woff2" status={200} type="font" size="45kb" time="110ms" />
            </div>
        </div>
    );
};

export default NetworkPanel;
