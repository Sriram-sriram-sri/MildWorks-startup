import React from 'react';

const TestimonialIllustration = () => (
    <svg viewBox="0 0 400 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#eff6ff', stopOpacity:1}} />
          <stop offset="100%" style={{stopColor: '#dbeafe', stopOpacity:1}} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#grad1)" />
      
      {/* Buildings */}
      <rect x="50" y="150" width="80" height="150" fill="#fca5a5" />
      <rect x="140" y="100" width="100" height="200" fill="#f87171" />
      <rect x="250" y="120" width="70" height="180" fill="#60a5fa" />
      <rect x="330" y="80" width="60" height="220" fill="#3b82f6" />
      
      {/* Windows */}
      <rect x="60" y="160" width="15" height="20" fill="white" />
      <rect x="85" y="160" width="15" height="20" fill="white" />
      <rect x="60" y="190" width="15" height="20" fill="white" />
      <rect x="85" y="190" width="15" height="20" fill="white" />
      
      <rect x="155" y="115" width="20" height="30" fill="white" />
      <rect x="185" y="115" width="20" height="30" fill="white" />
      <rect x="155" y="155" width="20" height="30" fill="white" />
      <rect x="185" y="155" width="20" height="30" fill="white" />
    </svg>
);


export const Testimonial = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="p-8">
                        <TestimonialIllustration />
                        <blockquote className="relative mt-8 text-xl font-semibold text-gray-900 bg-gray-100 p-6 rounded-lg">
                             <span className="absolute -top-4 -left-4 text-8xl text-gray-200 font-serif">“</span>
                             "With our complete business under control, our productivity is up by 80% in the last year that we have been using Mild Works."
                        </blockquote>
                        <div className="mt-6 flex items-center space-x-4">
                            <img className="w-14 h-14 rounded-full object-cover" src="https://picsum.photos/101/101?grayscale" alt="Thomas John" />
                            <div>
                                <p className="font-bold text-gray-900">Thomas John</p>
                                <p className="text-sm text-gray-600">Managing Director, Agappe Diagnostics</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-8 md:p-12 border border-gray-200">
                         <div className="flex items-center space-x-2">
                            <div className="grid grid-cols-2 gap-0.5">
                                <span className="w-5 h-5 bg-red-500"></span>
                                <span className="w-5 h-5 bg-green-500"></span>
                                <span className="w-5 h-5 bg-yellow-500"></span>
                                <span className="w-5 h-5 bg-blue-500"></span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">for Enterprise</h3>
                        </div>
                        <p className="mt-4 text-gray-600">
                           Experience the breadth and depth of the Mild Works ecosystem, with the professional services, infrastructure, support, and security that a large business needs. Streamline complex business processes, build strong relationships with your customers, and drive growth at scale.
                        </p>
                         <div className="mt-8">
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                                LEARN MORE &gt;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};