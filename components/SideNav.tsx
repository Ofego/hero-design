'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface MenuItem {
  name: string;
  href: string;
  icon: string;
}

const SideNav: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('Dashboard');

  const menuItems: MenuItem[] = [
    { name: 'Dashboard', href: '#dashboard', icon: '📊' },
    { name: 'Analytics', href: '#analytics', icon: '📈' },
    { name: 'Settings', href: '#settings', icon: '⚙️' },
    { name: 'Profile', href: '#profile', icon: '👤' },
  ];

  return (
    <aside className="hidden md:block fixed left-0 top-0 bottom-0 w-72 bg-[#0f0f14] z-40 border-r border-white/10 pt-20">
      <nav className="flex flex-col w-full">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setActiveItem(item.name)}
            className={`
              flex items-center gap-4 px-6 py-4 text-sm font-medium transition-colors duration-200
              ${activeItem === item.name 
                ? 'text-white border-l-4 border-brand-yellow' 
                : 'text-gray-400 hover:text-white hover:bg-brand-blue/20 border-l-4 border-transparent'}
            `}
          >
            <span className="text-xl">
              {item.icon}
            </span>
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default SideNav;