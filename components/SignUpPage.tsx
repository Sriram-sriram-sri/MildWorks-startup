import React, { useState } from 'react';
import { Logo } from './Logo';

const SocialButton = ({ children, label }: { children: React.ReactNode, label: string }) => (
    <button aria-label={label} className="w-10 h-10 border rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
        {children}
    </button>
);

const SignUpPage = ({ navigateTo }: { navigateTo: (page: string) => void }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (email) {
            alert(`Email sent to ${email}. Please check your inbox.`);
            // In a real app, you'd also navigate them away or clear the form
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-12">
                <Logo className="h-12 w-auto mx-auto" />
                <h1 className="mt-6 text-center text-3xl font-bold text-gray-900">Create Account</h1>
                <p className="mt-2 text-center text-gray-600">Start your journey with us</p>
                
                <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="fullname" className="sr-only">Full Name</label>
                        <input
                            id="fullname"
                            name="fullname"
                            type="text"
                            autoComplete="name"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Full Name"
                        />
                    </div>
                     <div>
                        <label htmlFor="email-signup" className="sr-only">Email address</label>
                        <input
                            id="email-signup"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                     <div>
                        <label htmlFor="password-signup" className="sr-only">Password</label>
                        <input
                            id="password-signup"
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                        CREATE ACCOUNT
                    </button>
                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or sign up with</span>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-center gap-4">
                       <SocialButton label="Sign up with Google"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /></svg></SocialButton>
                       <SocialButton label="Sign up with Facebook"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 5.07 3.67 9.27 8.44 9.94v-7.03H7.9v-2.9h2.54V9.82c0-2.5 1.5-3.88 3.77-3.88 1.1 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.9h-2.33v7.03c4.77-.67 8.44-4.87 8.44-9.94C22 6.53 17.5 2.04 12 2.04z" /></svg></SocialButton>
                    </div>
                </div>
                 <p className="mt-8 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <button onClick={() => navigateTo('signin')} className="font-medium text-blue-600 hover:text-blue-500">
                        Sign In
                    </button>
                </p>
            </div>
             <p className="mt-6 text-xs text-gray-500">
                &copy; 2024, Mild Works Corporation Pvt. Ltd. All Rights Reserved.
            </p>
        </div>
    );
};

export default SignUpPage;