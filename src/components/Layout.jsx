import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Layout Component
 * Wraps page content with Navbar and Footer
 * @param {Object} props
 * @param {React.ReactNode} props.children - Page content
 */
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
