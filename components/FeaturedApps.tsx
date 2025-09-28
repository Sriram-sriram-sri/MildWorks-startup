
import React from 'react';

const apps = [
    {
        name: 'CRM',
        description: 'Comprehensive CRM platform for customer-facing teams.',
        icon: (
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-5.197-5.977M9 21a6 6 0 01-6-6v-1a6 6 0 016-6h6a6 6 0 016 6v1a6 6 0 01-6 6H9z"></path></svg>
        )
    },
    {
        name: 'Mail',
        description: 'Secure email service for teams of all sizes.',
        icon: (
           <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        )
    },
    {
        name: 'Books',
        description: 'Powerful accounting platform for growing businesses.',
        icon: (
           <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v11.494m-9-5.494h18a2 2 0 012 2v4a2 2 0 01-2 2H3a2 2 0 01-2-2v-4a2 2 0 012-2z"></path></svg>
        )
    },
    {
        name: 'People',
        description: 'Organize, automate, and simplify your HR processes.',
        icon: (
           <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
        )
    },
];

export const FeaturedApps = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="bg-gray-50 rounded-lg p-8 md:p-12 border border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Featured Apps</h3>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {apps.map((app) => (
                             <a href="#" key={app.name} className="group flex items-start space-x-6 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all">
                                <div>{app.icon}</div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900">{app.name}</h4>
                                    <p className="mt-1 text-gray-600">{app.description}</p>
                                </div>
                                <div className="ml-auto self-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className="mt-10">
                         <a href="#" className="font-semibold text-blue-600 hover:text-blue-800 flex items-center space-x-2">
                             <span>EXPLORE ALL PRODUCTS</span>
                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                         </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
