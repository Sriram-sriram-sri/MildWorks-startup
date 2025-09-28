
import React from 'react';

export const FinalCta = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
                    Ready to do your best work?
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    Let's get you started.
                </p>
                <div className="mt-8">
                    <button className="bg-red-500 text-white px-8 py-4 rounded-md font-semibold text-xl hover:bg-red-600 transition-transform transform hover:scale-105 shadow-lg">
                        SIGN UP NOW &gt;
                    </button>
                </div>
            </div>
        </section>
    );
};
