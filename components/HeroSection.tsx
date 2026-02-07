'use client';

import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 pt-32 md:pl-80">
      <div className="max-w-4xl mx-auto space-y-12 text-center z-10">
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Connect to the <br />
          <span className="bg-clip-text text-transparent bg-linear-to-r from-brand-blue via-purple-400 to-brand-yellow">
            universal lending network
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
          Access global liquidity at the best possible terms powered by open infrastructure
        </p>

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full">
          {/* Card 1 */}
          <div className="w-full md:w-64 bg-dark-surface/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center hover:border-brand-blue/50 transition-colors duration-300">
            <span className="text-gray-400 text-sm uppercase tracking-wider mb-2 font-medium">Deposits</span>
            <span className="text-3xl md:text-4xl font-bold text-white">$8.2B</span>
          </div>
          
          {/* Card 2 */}
          <div className="w-full md:w-64 bg-dark-surface/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center hover:border-brand-yellow/50 transition-colors duration-300">
            <span className="text-gray-400 text-sm uppercase tracking-wider mb-2 font-medium">Loans</span>
            <span className="text-3xl md:text-4xl font-bold text-white">$6.5B</span>
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <button className="bg-brand-yellow text-dark-bg px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-brand-blue hover:text-white hover:scale-105 shadow-lg">
            Launch App
          </button>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 md:pl-80 flex flex-col items-center animate-bounce pointer-events-none">
        <span className="text-gray-500 text-sm mb-2 font-medium">Scroll to explore</span>
        <svg 
          className="w-6 h-6 text-gray-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;