import React from 'react';
import { Logo } from './Logo';

const SocialButton = ({ children, label }: { children: React.ReactNode, label: string }) => (
    <button aria-label={label} className="w-10 h-10 border rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
        {children}
    </button>
);

const SignInPage = ({ navigateTo }: { navigateTo: (page: string) => void }) => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
                {/* Form Section */}
                <div className="w-full md:w-1/2 p-8 md:p-12">
                    <Logo className="h-12 w-auto" />
                    <h1 className="mt-8 text-3xl font-bold text-gray-900">Sign In</h1>
                    <p className="mt-2 text-gray-600">to access Mild Works Home</p>
                    
                    <form className="mt-8 space-y-6">
                        <div>
                            <label htmlFor="email" className="sr-only">Email address or mobile number</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Email address or mobile number"
                            />
                        </div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Next
                        </button>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Sign in using</span>
                            </div>
                        </div>

                        <div className="mt-6 flex justify-center gap-4">
                           <SocialButton label="Sign in with Google"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /></svg></SocialButton>
                           <SocialButton label="Sign in with Facebook"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 5.07 3.67 9.27 8.44 9.94v-7.03H7.9v-2.9h2.54V9.82c0-2.5 1.5-3.88 3.77-3.88 1.1 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.9h-2.33v7.03c4.77-.67 8.44-4.87 8.44-9.94C22 6.53 17.5 2.04 12 2.04z" /></svg></SocialButton>
                           <SocialButton label="Sign in with LinkedIn"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.5 1.5 4s1-2.5 2.5-2.5c1.6 0 2.5 1 2.5 2.5S5.6 6.5 4 6.5zM21.5 21.5h-5v-6.6c0-1.6-.6-2.7-2-2.7c-1.1 0-1.7.7-2 1.4c-.1.2-.1.5-.1.8v7.1h-5v-13h5v2.2c.6-1.1 1.6-2.6 4.5-2.6c3.3 0 5.5 2.2 5.5 7v6.4z" /></svg></SocialButton>
                           <SocialButton label="Sign in with Twitter"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.67.3-1.4.5-2.18.6.77-.46 1.36-1.2 1.64-2.1a7.7 7.7 0 01-2.4 1 3.84 3.84 0 00-6.5 3.5A10.9 10.9 0 013.5 5.5a3.8 3.8 0 001.2 5.1 3.8 3.8 0 01-1.7-.4v.1c0 1.9 1.3 3.4 3.1 3.8a3.8 3.8 0 01-1.7.1c.5 1.5 2 2.6 3.7 2.6A7.7 7.7 0 012 18.1a10.9 10.9 0 005.9 1.7c7.1 0 11-5.9 11-11v-.5a8.4 8.4 0 002.06-2.1z" /></svg></SocialButton>
                        </div>
                    </div>
                     <p className="mt-8 text-center text-sm text-gray-600">
                        Don't have a Mild Works account?{' '}
                        <button onClick={() => navigateTo('signup')} className="font-medium text-blue-600 hover:text-blue-500">
                            Sign up now
                        </button>
                    </p>
                </div>
                {/* Info Section */}
                <div className="hidden md:flex w-1/2 bg-gray-50 p-12 flex-col justify-center items-center text-center">
                    <Logo className="h-40 w-auto text-blue-500" />
                    <h2 className="mt-6 text-2xl font-bold text-gray-900">Passwordless sign-in</h2>
                    <p className="mt-2 text-gray-600">
                        Move away from risky passwords and experience one-tap access to Mild Works.
                    </p>
                    <button className="mt-6 font-semibold text-blue-600 hover:text-blue-800">Learn more</button>
                </div>
            </div>
             <p className="absolute bottom-4 text-xs text-gray-500">
                &copy; 2024, Mild Works Corporation Pvt. Ltd. All Rights Reserved.
            </p>
        </div>
    );
};

export default SignInPage;