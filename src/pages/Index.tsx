import { useState } from 'react';
import CountdownTimer from '@/components/CountdownTimer';
import ResourceCard from '@/components/ResourceCard';
import ModeSelector from '@/components/ModeSelector';
import EarthOvershoot from '@/components/EarthOvershoot';
import SettingsModal from '@/components/SettingsModal';
import LiveStatsSection from '@/components/LiveStatsSection';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { resources } from '@/lib/resourceData';
import type { ResourceMode } from '@/lib/resourceData';

const Index = () => {
  const [mode, setMode] = useState<ResourceMode>('business-as-usual');
  
  // Oil-specific state for main countdown
  const oilResource = resources.find(r => r.id === 'oil')!;
  const [totalReserves, setTotalReserves] = useState(oilResource.totalReserves[mode]);
  const [dailyConsumption, setDailyConsumption] = useState(oilResource.ratePerSecond[mode] * 86400);

  const handleUpdateSettings = (reserves: number, consumption: number, _growthRate: number) => {
    setTotalReserves(reserves);
    setDailyConsumption(consumption);
  };

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-destructive/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <SettingsModal
        totalReserves={totalReserves}
        dailyConsumption={dailyConsumption}
        populationGrowthRate={1.02}
        onUpdate={handleUpdateSettings}
      />

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <header className="text-center mb-12 md:mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Global Oil Reserve Countdown
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold max-w-3xl mx-auto">
            How Long Until the Wells Run Dry?
          </p>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Real-time tracker based on proven reserves and current consumption rates.
          </p>
        </header>

        {/* Main Oil Countdown Timer */}
        <section className="mb-16 md:mb-20">
          <CountdownTimer totalReserves={totalReserves} dailyConsumption={dailyConsumption} />
          <p className="text-xs md:text-sm text-center text-muted-foreground mt-6 max-w-2xl mx-auto">
            Based on current global oil reserves of {(totalReserves / 1e12).toFixed(2)} trillion barrels and consumption of {(dailyConsumption / 1e6).toFixed(0)}M barrels/day
          </p>
        </section>

        {/* Mode Selector */}
        <section className="mb-12 md:mb-16 max-w-5xl mx-auto">
          <ModeSelector currentMode={mode} onModeChange={setMode} />
        </section>

        {/* Earth Overshoot Global Metric */}
        <section className="mb-12 md:mb-16 max-w-4xl mx-auto">
          <EarthOvershoot />
        </section>

        <Separator className="my-12 max-w-5xl mx-auto" />

        {/* All Resources Section */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Critical Resource Depletion Tracking
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Live countdown timers and consumption rates for Earth's essential finite resources.
            Data based on current scientific estimates and proven reserves.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {resources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} mode={mode} />
            ))}
          </div>
        </section>

        {/* Info Box */}
        <section className="max-w-4xl mx-auto mb-16">
          <Card className="p-6 md:p-8 shadow-card backdrop-blur-sm bg-card/80 border-primary/30">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2 animate-pulse-glow" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground">
                  Mathematical Projections Based on Current Data
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  These counters calculate depletion timelines using proven reserves and current extraction/consumption rates. 
                  The "Business as Usual" scenario assumes no change in behavior. "Moderate Conservation" reflects 20% reduction 
                  through efficiency gains. "Radical Sustainability" models 50% reduction through policy intervention and 
                  technological transition. Future discoveries, demand shifts, or conservation efforts will alter these projections.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <Separator className="my-16 max-w-5xl mx-auto" />

        {/* Live Statistics Section */}
        <section className="mb-16 md:mb-24 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Global Statistics</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Real-time counters tracking population changes, government spending, and industrial production.
              Values update every second based on current global averages.
            </p>
          </div>
          <LiveStatsSection />
        </section>

        <Separator className="my-12 max-w-4xl mx-auto" />

        {/* Footer */}
        <footer className="text-center space-y-4 text-sm text-muted-foreground max-w-4xl mx-auto">
          <p>
            This clock is a mathematical projection based on current public data sources from global research institutions. 
            Future discoveries, technological shifts, policy changes, or collective action may alter these outcomes. 
            The purpose is awareness, reflection, and informed choice.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="hover:text-primary transition-colors">Source Data</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">About the Project</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Methodology</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Update Log</a>
          </div>
          <p className="text-xs">
            © {new Date().getFullYear()} <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AIWebTools.ai</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
