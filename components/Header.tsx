import React, { useState, useRef, useEffect } from 'react';
import { Logo } from './Logo';

// Data for dropdowns
const dropdownData: Record<string, { name: string; description: string }[]> = {
    Products: [
        { name: 'CRM', description: 'Comprehensive CRM platform' },
        { name: 'Mail', description: 'Secure email service' },
        { name: 'Books', description: 'Powerful accounting platform' },
        { name: 'People', description: 'Simplify your HR processes' },
        { name: 'Projects Plus', description: 'Unified project management' },
        { name: 'Service Plus', description: 'Customer service platform' },
    ],
    Customers: [
        { name: 'Customer Stories', description: 'See how businesses succeed' },
        { name: 'User Community', description: 'Connect with other users' },
        { name: 'Training & Certification', description: 'Become a certified professional' },
    ],
    Partners: [
        { name: 'Work with a Partner', description: 'Find an expert to help you' },
        { name: 'Become a Partner', description: 'Join our partner ecosystem' },
        { name: 'Affiliate Program', description: 'Earn by referring customers' },
    ],
    Resources: [
        { name: 'Learn', description: 'Training, blogs, and more' },
        { name: 'Support', description: 'Get help from our team' },
        { name: 'Knowledge Base', description: 'Find answers to your questions' },
        { name: 'Developer Center', description: 'Build on our platform' },
        { name: 'Newsletter', description: 'Stay up to date' },
    ],
};

interface HeaderProps {
    navigateTo: (page: string) => void;
}

export const Header = ({ navigateTo }: HeaderProps) => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const handleDropdown = (name: string) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };
    
    const handleMobileNav = (page: string) => {
        navigateTo(page);
        setIsMobileMenuOpen(false);
    }

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-8">
                        <div className="flex-shrink-0">
                            <button onClick={() => navigateTo('home')}>
                                <Logo className="h-10 w-auto" />
                            </button>
                        </div>
                        <nav className="hidden md:flex space-x-6">
                            {Object.keys(dropdownData).map((key) => (
                                <div key={key} className="relative">
                                    <button
                                        onClick={() => handleDropdown(key)}
                                        className="text-gray-500 hover:text-gray-900 group inline-flex items-center text-base font-medium"
                                    >
                                        <span>{key}</span>
                                        <svg className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    {openDropdown === key && (
                                        <div ref={dropdownRef} className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {dropdownData[key].map((item) => (
                                                        <a key={item.name} href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                             <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Contact Sales</a>
                        </nav>
                    </div>

                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-4">
                        <button onClick={() => navigateTo('signin')} className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                            Sign in
                        </button>
                        <button onClick={() => navigateTo('signup')} className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-600">
                            Sign up
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                            <span className="sr-only">Open menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {Object.keys(dropdownData).map((key) => (
                             <a key={key} href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">{key}</a>
                        ))}
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact Sales</a>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="px-2 space-y-1">
                            <button onClick={() => handleMobileNav('signup')} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-white bg-red-500 hover:bg-red-600">Sign up</button>
                            <button onClick={() => handleMobileNav('signin')} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Sign in</button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};