import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Navigation Bar Component
 * Fixed header with logo and navigation links
 * Responsive with mobile hamburger menu
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { label: 'WORK', to: '/', internal: true },
    { label: 'ABOUT', to: '/about', internal: true },
    {
      label: 'RESUME',
      to: 'https://drive.google.com/file/d/12H1tcSYqOzUfwOu0EK9ntj0vFqDBRxVO/view?usp=sharing',
      internal: false
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold text-xl">
          megha
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.internal ? (
              <Link
                key={link.label}
                to={link.to}
                className="uppercase text-sm font-medium tracking-wider hover:text-gray-600 transition"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase text-sm font-medium tracking-wider hover:text-gray-600 transition"
              >
                {link.label}
              </a>
            )
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden w-6 h-6 flex flex-col justify-center items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              link.internal ? (
                <Link
                  key={link.label}
                  to={link.to}
                  className="uppercase text-sm font-medium tracking-wider hover:text-gray-600 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase text-sm font-medium tracking-wider hover:text-gray-600 transition"
                >
                  {link.label}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
