'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface MenuItem {
  name: string;
  href: string;
  icon: string;
}

export default function SideNav({ isOpen }: { isOpen: boolean }) {
  const [activeItem, setActiveItem] = useState<string>('Discover');

  const discoverItems: MenuItem[] = [
    { name: 'Discover', href: '#discover', icon: '🔍' },
    { name: 'NFTs', href: '#nfts', icon: '🖼️' },
    { name: 'RWAs', href: '#rwas', icon: '🏛️' },
  ];

  const actionItems: MenuItem[] = [
    { name: 'Create', href: '#create', icon: '➕' },
    { name: 'List', href: '#list', icon: '📋' },
    { name: 'Feature', href: '#feature', icon: '⭐' },
    { name: 'Analytics', href: '#analytics', icon: '📊' },
  ];

  const accountItems: MenuItem[] = [
    { name: 'Portfolio', href: '#portfolio', icon: '💼' },
    { name: 'Activity', href: '#activity', icon: '🔔' },
    { name: 'Settings', href: '#settings', icon: '⚙️' },
  ];

  const renderMenuItem = (item: MenuItem) => (
    <Link
      key={item.name}
      href={item.href}
      onClick={() => setActiveItem(item.name)}
      className={`
        flex items-center h-12 px-6 gap-3 text-sm font-medium transition-colors duration-200
        ${activeItem === item.name 
          ? 'bg-brand-blue/10 text-brand-yellow border-l-2 border-brand-yellow' 
          : 'text-gray-400 hover:bg-white/5 hover:text-white border-l-2 border-transparent'}
      `}
    >
      <span className="text-xl w-5 h-5 flex items-center justify-center shrink-0">
        {item.icon}
      </span>
      <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {item.name}
      </span>
    </Link>
  );

  return (
    <aside className={`fixed left-0 top-0 bottom-0 bg-[#0f0f14] border-r border-white/10 pt-20 z-40 transition-all duration-300 ease-in-out group overflow-hidden ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} w-72 md:w-[72px] md:hover:w-72`}>
      <nav className="flex flex-col h-full w-72 pb-6">
        <div className="flex flex-col">
          {discoverItems.map(renderMenuItem)}
        </div>

        <div className="flex flex-col mt-4 pt-4 border-t border-white/10">
          {actionItems.map(renderMenuItem)}
        </div>

        <div className="flex flex-col mt-auto pt-4 border-t border-white/10">
          {accountItems.map(renderMenuItem)}
        </div>
      </nav>
    </aside>
  );
}