import React from 'react';

const AiIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 58C46.3594 58 58 46.3594 58 32C58 17.6406 46.3594 6 32 6C17.6406 6 6 17.6406 6 32C6 46.3594 17.6406 58 32 58Z" stroke="#4F46E5" strokeWidth="4" strokeMiterlimit="10"/>
        <path d="M42 26H22" stroke="#4F46E5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M36 38H22" stroke="#4F46E5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 22L22 26L26 30" stroke="#4F46E5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 34L22 38L26 42" stroke="#4F46E5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


export const AiAssistant = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
                <div className="relative">
                    <div className="inline-block">
                        <AiIcon />
                    </div>
                    <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
                        Multiply the impact of your workforce with Milo,
                        <br/>
                        Mild Works' powerful AI assistant
                    </h2>
                    <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
                        Built into the fabric of the Mild Works app ecosystem, Milo makes recommendations, generates insights, and takes action based on the full context of your business operations.
                    </p>
                    <div className="mt-8">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg">
                            EXPLORE MILO &gt;
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};