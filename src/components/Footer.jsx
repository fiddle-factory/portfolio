import React from 'react';

/**
 * Footer Component
 * Contains joke, social links, and copyright
 */
const Footer = () => {
  const links = [
    {
      label: 'EMAIL',
      href: 'mailto:meghagraw@gmail.com?subject=Here%27s%20my%20hot%20take&body=',
      external: false
    },
    {
      label: 'LINKEDIN',
      href: 'https://www.linkedin.com/in/meghagr/',
      external: true
    },
    {
      label: 'RESUME',
      href: 'https://drive.google.com/file/d/12H1tcSYqOzUfwOu0EK9ntj0vFqDBRxVO/view?usp=sharing',
      external: true
    }
  ];

  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        {/* Joke */}
        <p className="italic text-sm text-gray-500 text-center">
          What do you call a fly with no wings?
        </p>

        {/* Links */}
        <div className="flex justify-center gap-8 mt-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="uppercase text-sm font-medium tracking-wider hover:text-gray-600 transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center mt-4">
          © 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
