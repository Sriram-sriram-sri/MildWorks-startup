import React from 'react';

export const CtaSection = () => {
    return (
        <section className="bg-yellow-400">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="flex items-center space-x-2">
                            <div className="grid grid-cols-2 gap-0.5">
                                <span className="w-5 h-5 bg-red-500"></span>
                                <span className="w-5 h-5 bg-green-500"></span>
                                <span className="w-5 h-5 bg-yellow-500"></span>
                                <span className="w-5 h-5 bg-blue-500"></span>
                            </div>
                            <span className="text-sm font-semibold text-gray-800">ALL-IN-ONE SUITE</span>
                        </div>
                        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
                            Mild Works One
                        </h2>
                        <p className="mt-2 text-lg text-gray-800">
                            The operating system for business
                        </p>
                        <p className="mt-4 text-gray-700">
                            Run your entire business on Mild Works with our unified cloud software, designed to help you break down silos between departments and increase organizational efficiency.
                        </p>
                        <div className="mt-8">
                            <button className="bg-red-500 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-red-600 transition-transform transform hover:scale-105 shadow-lg">
                                TRY MILD WORKS ONE &gt;
                            </button>
                        </div>
                    </div>
                    <div className="bg-white/20 p-8 rounded-lg">
                         <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                        <blockquote className="mt-4 text-2xl font-semibold text-gray-900">
                            "You can be a startup, mid-sized company, or an enterprise—Mild Works One is a boon for all."
                        </blockquote>
                        <div className="mt-6 flex items-center space-x-4">
                            <img className="w-14 h-14 rounded-full object-cover" src="https://picsum.photos/100/100?grayscale" alt="Prakash Gagrdani" />
                            <div>
                                <p className="font-bold text-gray-900">Prakash Gagrdani</p>
                                <p className="text-sm text-gray-700">CEO, 3iware.com (a Mild Works subsidiary)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};