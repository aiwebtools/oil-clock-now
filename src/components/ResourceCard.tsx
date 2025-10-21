import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Resource, ResourceMode } from '@/lib/resourceData';

interface ResourceCardProps {
  resource: Resource;
  mode: ResourceMode;
}

const ResourceCard = ({ resource, mode }: ResourceCardProps) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(0);
    const interval = setInterval(() => {
      setCounter((prev) => prev + resource.ratePerSecond[mode]);
    }, 1000);

    return () => clearInterval(interval);
  }, [resource.ratePerSecond, mode]);

  const formatNumber = (num: number): string => {
    if (num < 1) {
      return num.toFixed(4);
    }
    return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
  };

  const yearsRemaining = resource.estimatedYearsRemaining?.[mode];

  return (
    <Card className="p-6 shadow-card backdrop-blur-sm bg-card/80 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center gap-3">
          <span className="text-4xl" role="img" aria-label={resource.name}>
            {resource.icon}
          </span>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground">{resource.name}</h3>
            <p className="text-xs text-muted-foreground">{resource.description}</p>
          </div>
        </div>

        {/* Counter */}
        <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
          <p className="text-sm text-muted-foreground mb-1">Used since page load:</p>
          <p className={`text-2xl font-mono font-bold ${resource.color} animate-pulse-glow`}>
            {formatNumber(counter)}
          </p>
          <p className="text-xs text-muted-foreground mt-1">{resource.unit}</p>
        </div>

        {/* Years Remaining */}
        {yearsRemaining && (
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Est. years remaining:</span>
            <span className="text-lg font-bold text-accent">{yearsRemaining}</span>
          </div>
        )}

        {/* Context Quote */}
        <div className="pt-3 border-t border-primary/10">
          <p className="text-xs italic text-muted-foreground leading-relaxed">
            "{resource.contextQuote}"
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ResourceCard;
