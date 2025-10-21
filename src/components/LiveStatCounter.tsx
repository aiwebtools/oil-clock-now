import { useState, useEffect } from 'react';
import { LiveStat } from '@/lib/liveStatsData';

interface LiveStatCounterProps {
  stat: LiveStat;
}

const LiveStatCounter = ({ stat }: LiveStatCounterProps) => {
  const [value, setValue] = useState(stat.baseValue);

  useEffect(() => {
    // Reset daily counters at midnight
    const now = new Date();
    if (stat.id.includes('today')) {
      const secondsSinceMidnight = (now.getTime() % (24 * 60 * 60 * 1000)) / 1000;
      setValue(secondsSinceMidnight * stat.ratePerSecond);
    } else if (stat.id.includes('year')) {
      const startOfYear = new Date(now.getFullYear(), 0, 1);
      const secondsSinceYearStart = (now.getTime() - startOfYear.getTime()) / 1000;
      setValue(stat.baseValue + secondsSinceYearStart * stat.ratePerSecond);
    } else {
      setValue(stat.baseValue);
    }

    const interval = setInterval(() => {
      setValue((prev) => prev + stat.ratePerSecond);
    }, 1000);

    return () => clearInterval(interval);
  }, [stat]);

  const formatValue = (num: number): string => {
    if (stat.format === 'currency') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }).format(num);
    }
    return Math.floor(num).toLocaleString('en-US');
  };

  return (
    <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-primary/10 hover:border-primary/30 transition-all duration-300">
      <div className="flex items-start gap-3">
        {stat.icon && (
          <span className="text-2xl flex-shrink-0" role="img" aria-label={stat.label}>
            {stat.icon}
          </span>
        )}
        <div className="flex-1 min-w-0">
          <div className="text-2xl md:text-3xl font-mono font-bold text-primary mb-1 animate-pulse-glow">
            {formatValue(value)}
          </div>
          <p className="text-xs text-muted-foreground">
            {stat.label}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveStatCounter;
