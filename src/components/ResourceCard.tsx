import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Resource, ResourceMode } from '@/lib/resourceData';
import { Clock } from 'lucide-react';

interface ResourceCardProps {
  resource: Resource;
  mode: ResourceMode;
}

interface TimeRemaining {
  years: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ResourceCard = ({ resource, mode }: ResourceCardProps) => {
  const [counter, setCounter] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    years: 0, days: 0, hours: 0, minutes: 0, seconds: 0,
  });
  const depletionDateRef = useRef<Date>(new Date());

  // Calculate depletion date when mode changes
  useEffect(() => {
    setCounter(0);
    const totalReserves = resource.totalReserves[mode];
    const consumptionRate = resource.ratePerSecond[mode];
    const secondsRemaining = totalReserves / consumptionRate;
    const msRemaining = secondsRemaining * 1000;
    depletionDateRef.current = new Date(Date.now() + msRemaining);
  }, [resource.totalReserves, resource.ratePerSecond, mode]);

  // Tick every second
  useEffect(() => {
    const tick = () => {
      // Update counter
      setCounter((prev) => prev + resource.ratePerSecond[mode]);

      // Update countdown from depletion date
      const distance = depletionDateRef.current.getTime() - Date.now();
      if (distance > 0) {
        const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365.25));
        const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeRemaining({ years, days, hours, minutes, seconds });
      }
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [resource.ratePerSecond, mode]);

  const formatNumber = (num: number): string => {
    if (num < 1) return num.toFixed(4);
    return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
  };

  const pad = (v: number) => String(v).padStart(2, '0');
  const yearsRemaining = resource.estimatedYearsRemaining?.[mode];

  return (
    <Card className="p-4 sm:p-5 shadow-card backdrop-blur-sm bg-card/80 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
      <div className="space-y-3 sm:space-y-4">
        {/* Header */}
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl flex-shrink-0" role="img" aria-label={resource.name}>
            {resource.icon}
          </span>
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-bold text-foreground">{resource.name}</h3>
            <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">{resource.description}</p>
          </div>
        </div>

        {/* Countdown Timer */}
        {yearsRemaining && (
          <div className="bg-background/70 rounded-lg p-2 sm:p-3 border border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              <p className="text-[10px] sm:text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                Time Until Depletion
              </p>
            </div>
            <div className="flex items-center justify-center gap-0.5 sm:gap-1 font-mono text-sm sm:text-lg font-bold">
              <span className={resource.color}>{pad(timeRemaining.years)}</span>
              <span className="text-muted-foreground">:</span>
              <span className={resource.color}>{pad(timeRemaining.days)}</span>
              <span className="text-muted-foreground">:</span>
              <span className={resource.color}>{pad(timeRemaining.hours)}</span>
              <span className="text-muted-foreground">:</span>
              <span className={resource.color}>{pad(timeRemaining.minutes)}</span>
              <span className="text-muted-foreground">:</span>
              <span className={resource.color}>{pad(timeRemaining.seconds)}</span>
            </div>
            <div className="flex justify-center gap-2 sm:gap-3 text-[8px] sm:text-[10px] text-muted-foreground mt-1 uppercase tracking-wider">
              <span>Yrs</span>
              <span>Days</span>
              <span>Hrs</span>
              <span>Min</span>
              <span>Sec</span>
            </div>
          </div>
        )}

        {/* Consumption Rate */}
        <div className="bg-background/50 rounded-lg p-2 sm:p-3 border border-primary/10">
          <p className="text-[10px] sm:text-xs text-muted-foreground mb-1">Consumption Rate:</p>
          <p className={`text-lg sm:text-xl font-mono font-bold ${resource.color}`}>
            {formatNumber(resource.ratePerSecond[mode])} <span className="text-xs sm:text-sm">{resource.unit}/sec</span>
          </p>
        </div>

        {/* Counter */}
        <div className="bg-background/50 rounded-lg p-2 sm:p-3 border border-primary/10">
          <p className="text-[10px] sm:text-xs text-muted-foreground mb-1">Consumed since page load:</p>
          <p className="text-lg sm:text-xl font-mono font-bold text-foreground">
            {formatNumber(counter)}
          </p>
          <p className="text-[9px] sm:text-[10px] text-muted-foreground mt-1">{resource.unit}</p>
        </div>

        {/* Scientific Note */}
        <div className="pt-2 sm:pt-3 border-t border-primary/10">
          <p className="text-[10px] sm:text-[11px] text-muted-foreground leading-relaxed">
            {resource.scientificNote}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ResourceCard;
