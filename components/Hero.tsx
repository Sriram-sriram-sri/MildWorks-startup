
import React from 'react';

const HeroIllustration = () => (
    <svg viewBox="0 0 500 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="300" fill="#f9fafb" />
        <g transform="translate(20, 20)">
            {/* Person 1 */}
            <circle cx="60" cy="80" r="15" fill="#fbbf24" />
            <rect x="40" y="95" width="40" height="60" rx="5" fill="#fde68a" />
            <rect x="70" y="110" width="30" height="10" fill="#d1d5db" />
            
            {/* Person 2 */}
            <circle cx="150" cy="60" r="15" fill="#60a5fa" />
            <rect x="130" y="75" width="40" height="70" rx="5" fill="#93c5fd" />
            <rect x="120" y="90" width="30" height="10" fill="#d1d5db" />

            {/* Person 3 */}
            <circle cx="240" cy="100" r="15" fill="#4ade80" />
            <rect x="220" y="115" width="40" height="65" rx="5" fill="#86efac" />
            <rect x="250" y="130" width="30" height="10" fill="#d1d5db" />

             {/* Person 4 */}
            <circle cx="330" cy="85" r="15" fill="#f87171" />
            <rect x="310" y="100" width="40" height="60" rx="5" fill="#fca5a5" />
            <rect x="300" y="115" width="30" height="10" fill="#d1d5db" />
        </g>
        <path d="M0 250 Q 125 200, 250 250 T 500 250" stroke="#e5e7eb" strokeWidth="2" fill="none" />
    </svg>
);


export const Hero = () => {
    return (
        <section className="bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                            Your life's work, powered by our life's work
                        </h1>
                        <p className="mt-6 text-lg text-gray-600">
                            A unique and powerful software suite to transform the way you work. Designed for businesses of all sizes, built by a company that values your privacy.
                        </p>
                        <div className="mt-8">
                            <button className="bg-red-500 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-red-600 transition-transform transform hover:scale-105 shadow-lg">
                                GET STARTED FOR FREE &gt;
                            </button>
                        </div>
                    </div>
                    <div>
                        <HeroIllustration />
                    </div>
                </div>
            </div>
        </section>
    );
};
