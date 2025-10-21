import { Card } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const EarthOvershoot = () => {
  const [earthsConsumed, setEarthsConsumed] = useState(1.7);
  const overshootDay = new Date(new Date().getFullYear(), 6, 28); // Approx July 28

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const startOfYear = new Date(now.getFullYear(), 0, 1);
      const msInYear = 365.25 * 24 * 60 * 60 * 1000;
      const msSinceStart = now.getTime() - startOfYear.getTime();
      const yearProgress = msSinceStart / msInYear;
      
      setEarthsConsumed(1.7 * (yearProgress * 1.7));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="p-8 shadow-glow backdrop-blur-sm bg-card/90 border-2 border-primary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            🌐 Global Overshoot Metric
          </h2>
          <p className="text-sm text-muted-foreground">
            Humanity currently uses ~1.7 Earths per year
          </p>
        </div>

        <div className="flex justify-center items-center gap-4">
          <div className="text-center">
            <div className="text-6xl md:text-8xl font-mono font-bold text-primary animate-pulse-glow">
              {earthsConsumed.toFixed(3)}
            </div>
            <p className="text-sm text-muted-foreground mt-2">Earths consumed this year</p>
          </div>
        </div>

        <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
          <p className="text-sm text-muted-foreground mb-2">
            <span className="font-semibold text-accent">Overshoot Day {overshootDay.getFullYear()}:</span>{' '}
            {overshootDay.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
          </p>
          <p className="text-xs text-muted-foreground">
            All annual resources used by this date. The rest of the year we borrow from the future.
          </p>
        </div>

        <div className="pt-4 border-t border-primary/10">
          <p className="text-center italic text-muted-foreground text-sm">
            "You can't grow forever inside a finite circle."
          </p>
        </div>
      </div>
    </Card>
  );
};

export default EarthOvershoot;
