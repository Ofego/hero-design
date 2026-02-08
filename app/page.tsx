'use client';

import { useState } from 'react';
import useWalletConnection from '../hooks/useWalletConnection';
import AnimatedBackground from '../components/AnimatedBackground';
import TopNav from '../components/TopNav';
import SideNav from '../components/SideNav';
import HeroSection from '../components/HeroSection';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isConnected, connectWallet, disconnectWallet } = useWalletConnection();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <AnimatedBackground />
      <TopNav 
        onToggleSidebar={toggleSidebar}
        onConnectWallet={isConnected ? disconnectWallet : connectWallet}
        isWalletConnected={isConnected}
        isSidebarOpen={isSidebarOpen}
      />
      <SideNav isOpen={isSidebarOpen} />
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
      <main className="relative z-10 min-h-screen">
        <HeroSection isWalletConnected={isConnected} />
      </main>
    </>
  );
}
