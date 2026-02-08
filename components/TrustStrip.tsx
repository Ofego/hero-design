import React from 'react';

const TrustStrip: React.FC = () => {
  return (
    <div className="flex gap-8 items-center justify-center flex-wrap mt-12">
      {/* Signal 1 */}
      <div className="flex gap-2 items-center">
        <svg className="w-4 h-4 text-[#F7D051]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-sm text-gray-400 font-medium">On-Chain Verified Activity</span>
      </div>

      {/* Signal 2 */}
      <div className="flex gap-2 items-center">
        <svg className="w-4 h-4 text-[#F7D051]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-sm text-gray-400 font-medium">Asset Transparency & Clear Reward Logic</span>
      </div>

      {/* Signal 3 */}
      <div className="flex gap-2 items-center">
        <svg className="w-4 h-4 text-[#F7D051]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-sm text-gray-400 font-medium">Secure by Modern Web3 Standards</span>
      </div>
    </div>
  );
};

export default TrustStrip;