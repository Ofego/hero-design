import React from 'react';

interface IntentSelectorProps {
  selectedIntent?: 'creators' | 'traders' | 'investors';
  onChange?: (intent: string) => void;
}

const IntentSelector: React.FC<IntentSelectorProps> = ({ 
  selectedIntent = 'traders', 
  onChange 
}) => {
  const options = [
    { label: 'NFT Creators', value: 'creators' },
    { label: 'Traders', value: 'traders' },
    { label: 'RWA Investors', value: 'investors' },
  ];

  return (
    <div className="mt-8">
      <div className="text-xs text-gray-500 mb-2">I'm here as a</div>
      <div className="inline-flex gap-1 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full p-1">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange?.(option.value)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium cursor-pointer transition-all duration-200 border ${
              selectedIntent === option.value
                ? 'text-white bg-[rgba(37,87,236,0.2)] border-[rgba(37,87,236,0.3)]'
                : 'text-gray-400 bg-transparent hover:bg-white/5 border-transparent'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default IntentSelector;