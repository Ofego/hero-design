import React from 'react';

interface Stat {
  label: string;
  value: string;
}

interface StatsRowProps {
  stats: Stat[];
}

const StatsRow: React.FC<StatsRowProps> = ({ stats }) => {
  return (
    <div className="flex gap-12 items-center justify-center flex-wrap border-t border-[rgba(255,255,255,0.08)] pt-8 mt-16">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col">
          <span className="text-xs text-gray-500 uppercase tracking-wider">
            {stat.label}
          </span>
          <span className="text-lg text-white font-semibold mt-1">
            {stat.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StatsRow;