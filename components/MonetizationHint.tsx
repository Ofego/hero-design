import React from 'react';

interface MonetizationHintProps {
  onViewSlots?: () => void;
}

const MonetizationHint: React.FC<MonetizationHintProps> = ({ onViewSlots }) => {
  return (
    <div className="flex items-center gap-3 mt-8">
      <span className="text-[#F7D051] text-base">✨</span>
      <p className="text-base text-gray-400">
        Creators are earning visibility daily — Feature your NFT and get discovered.
        <button
          onClick={onViewSlots}
          className="ml-1 text-[#F7D051] font-semibold hover:underline cursor-pointer transition-all duration-200"
        >
          See Featured Slots
        </button>
      </p>
    </div>
  );
};

export default MonetizationHint;