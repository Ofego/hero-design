'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface NavLink {
  name: string;
  href: string;
}

const TopNav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const links: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#0f0f14]/80 backdrop-blur-lg border-b border-white/10 transition-all duration-300">
      <div className="flex items-center justify-between px-6 h-full">
        {/* Left: Logo */}
        <div className="shrink-0">
          <Link 
            href="/" 
            className="group relative text-2xl font-bold tracking-wider"
          >
            <span className="text-white transition-opacity duration-300 group-hover:opacity-0">HERO</span>
            <span className="absolute left-0 top-0 bg-clip-text text-transparent bg-linear-to-r from-brand-blue to-brand-yellow opacity-0 transition-opacity duration-300 group-hover:opacity-100">HERO</span>
          </Link>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center justify-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-brand-yellow transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
        </div>

        {/* Right: Launch App Button (Desktop) */}
        <div className="hidden md:flex items-center shrink-0">
          <button className="bg-brand-yellow text-black px-6 py-2 rounded-full font-semibold text-sm hover:bg-brand-blue hover:text-white transition-all duration-300">
            Launch App
          </button>
        </div>

        {/* Mobile: Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-white p-2 focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0f0f14] border-b border-white/10 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <button className="w-full bg-brand-yellow text-black px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue hover:text-white transition-colors">
                Launch App
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default TopNav;