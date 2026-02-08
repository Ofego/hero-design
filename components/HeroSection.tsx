'use client';

import React from 'react';
import CTAButtons from './CTAButtons';
import TrustStrip from './TrustStrip';
import MonetizationHint from './MonetizationHint';
import IntentSelector from './IntentSelector';
import StatsRow from './StatsRow';

interface HeroSectionProps {
  isWalletConnected: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isWalletConnected }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 px-8">
      <div className="w-full z-10 max-w-5xl space-y-8 text-center flex flex-col items-center">
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-[64px] font-bold tracking-tight text-white leading-tight max-w-4xl">
          Buy, Sell, and Earn from NFTs and Real-World Assets. All in One Place.
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-[24px] text-gray-400 leading-relaxed max-w-3xl">
          Trade NFTs, invest in tokenized properties, and grow your portfolio of real-world value — all in one ecosystem.
        </p>

        {/* CTA Buttons */}
        <CTAButtons isWalletConnected={isWalletConnected} />

        {/* Additional Sections */}
        <TrustStrip />
        <MonetizationHint />
        <IntentSelector />
        <StatsRow stats={[
          { label: 'Active Collections', value: '2,847' },
          { label: 'Featured Creators', value: '1,203' },
          { label: 'RWA Listings', value: '456' },
        ]} />

      </div>
    </section>
  );
};

export default HeroSection;