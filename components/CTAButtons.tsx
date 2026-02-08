import React from 'react';

interface CTAButtonsProps {
  isWalletConnected: boolean;
}

const CTAButtons: React.FC<CTAButtonsProps> = ({ isWalletConnected }) => {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {/* Button 1 (Primary) */}
      <button className="bg-[#2557EC] text-white font-semibold text-base md:text-lg px-8 md:px-10 py-3 md:py-4 rounded-full shadow-[0_0_30px_rgba(37,87,236,0.4)] hover:bg-[#3D6EF7] hover:scale-105 hover:shadow-[0_0_40px_rgba(37,87,236,0.6)] transition-all duration-300">
        {isWalletConnected ? 'Create Your First NFT' : 'Start Minting'}
      </button>

      {/* Button 2 (Secondary) */}
      <button className="bg-transparent border-2 border-[#F7D051] text-[#F7D051] font-semibold text-base md:text-lg px-8 md:px-10 py-3 md:py-4 rounded-full hover:bg-[rgba(247,208,81,0.1)] hover:scale-105 hover:shadow-[0_0_20px_rgba(247,208,81,0.3)] transition-all duration-300">
        Invest in RWAs
      </button>
    </div>
  );
};

export default CTAButtons;