import React from 'react';
import { ShaderAnimation } from '../ui/shader-animation';

const NewDesignMockup = () => {
    return (
        <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">
            {/* Background Shader */}
            <ShaderAnimation />

            {/* Content Overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 pointer-events-none">

                <div className="bg-black/30 backdrop-blur-md border border-white/20 p-12 rounded-2xl max-w-4xl w-full text-center shadow-2xl">
                    <h1 className="text-7xl font-sans font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                        PROTOTYPE // 01
                    </h1>
                    <p className="font-mono text-xl text-blue-200 mb-8">
                        Visualizing the next iteration.
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-left font-mono text-sm max-w-lg mx-auto">
                        <div className="p-4 border border-white/10 rounded bg-black/50">
                            <span className="text-gray-400 block text-xs mb-1">MODULE</span>
                            <span className="text-white">SHADER_CORE</span>
                        </div>
                        <div className="p-4 border border-white/10 rounded bg-black/50">
                            <span className="text-gray-400 block text-xs mb-1">STATUS</span>
                            <span className="text-green-400">ACTIVE</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer / Overlay UI */}
            <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center opacity-50 font-mono text-xs">
                [ MOCKUP VIEW ]
            </div>
        </div>
    );
};

export default NewDesignMockup;
