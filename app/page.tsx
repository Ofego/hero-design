'use client';

import AnimatedBackground from '../components/AnimatedBackground';
import TopNav from '../components/TopNav';
import SideNav from '../components/SideNav';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <TopNav />
      <SideNav />
      <main className="relative z-10 min-h-screen">
        <HeroSection />
      </main>
    </>
  );
}
