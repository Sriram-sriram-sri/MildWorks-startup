import React from 'react';

const StatItem = ({ value, label }: { value: string, label: string }) => (
    <div>
        <p className="text-5xl lg:text-6xl font-extrabold text-white">{value}</p>
        <p className="mt-2 text-lg text-blue-200">{label}</p>
    </div>
);

export const Stats = () => {
    return (
        <section className="bg-blue-700">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                            Made in America.
                            <br/>
                            Made for the World.
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 gap-8 text-center md:text-left">
                        <StatItem value="130M+" label="Users Globally" />
                        <StatItem value="150+" label="Countries Served" />
                        <StatItem value="18K+" label="Employees Worldwide" />
                        <StatItem value="29+" label="Years in Business" />
                        <StatItem value="55+" label="Products" />
                        <div>
                             <button className="mt-4 border-2 border-white text-white px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-blue-700 transition-colors">
                                MORE ABOUT MILD WORKS &gt;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};