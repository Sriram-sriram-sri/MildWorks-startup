import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import HomePage from './components/HomePage';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = useCallback((page: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'signin':
        return <SignInPage navigateTo={navigateTo} />;
      case 'signup':
        return <SignUpPage navigateTo={navigateTo} />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  const showHeaderFooter = currentPage === 'home';

  return (
    <div className="bg-white font-sans text-gray-800">
      {showHeaderFooter && <Header navigateTo={navigateTo} />}
      <main>
        {renderPage()}
      </main>
      {showHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
