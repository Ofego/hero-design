'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface TopNavProps {
  onToggleSidebar: () => void;
  onConnectWallet: () => void;
  isWalletConnected: boolean;
  isSidebarOpen: boolean;
}

export default function TopNav({ onToggleSidebar, onConnectWallet, isWalletConnected, isSidebarOpen }: TopNavProps) {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-[#0B0B0C]/90 backdrop-blur-sm border-b border-white/8 px-8 flex items-center justify-between transition-all duration-300">
      
      {/* LEFT SECTION */}
      <div className="flex items-center shrink-0">
        {/* Logo */}
        <div className="w-[140px]">
          <Link 
            href="/" 
            className="text-2xl font-bold tracking-tight text-white"
          >
            BIFY
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex ml-8 bg-white/5 rounded-full p-1 gap-1">
          {['All', 'NFTs', 'RWAs'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* CENTER SECTION - Search */}
      <div className="hidden md:flex items-center justify-center flex-1 px-8">
        <div className="relative w-[500px] h-12 group">
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-500 group-focus-within:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full h-full pl-12 pr-6 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-[#F7D051]/30 transition-all duration-300"
            placeholder="Search Bify For Anything"
          />
        </div>
      </div>

      {/* RIGHT SECTION - Connect Wallet */}
      <div className="flex items-center gap-4 shrink-0">
        <style>{`
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(247, 208, 81, 0.4); }
            50% { box-shadow: 0 0 20px rgba(37, 87, 236, 0.4); }
          }
        `}</style>
        
        {/* Connect Wallet Button */}
        <button
          onClick={onConnectWallet}
          className="group relative px-8 py-3 rounded-full bg-transparent font-semibold text-base text-white transition-all duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden"
          style={{ animation: 'glow 3s infinite' }}
        >
          {/* Animated Gradient Border */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] -z-10 animate-[spin_4s_linear_infinite]"
               style={{
                 background: 'conic-gradient(from 0deg, transparent 0%, transparent 10%, #F7D051 40%, transparent 60%, transparent 70%, #2557EC 90%, transparent 100%)'
               }}
          />
          
          {/* Inner Background Mask */}
          <div className="absolute inset-px rounded-full bg-[#0B0B0C] -z-10" />

          {/* Text */}
          <span className="relative z-10">{isWalletConnected ? 'Disconnect' : 'Connect Wallet'}</span>
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={onToggleSidebar}
            className="text-gray-300 hover:text-white p-2 focus:outline-none transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isSidebarOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}