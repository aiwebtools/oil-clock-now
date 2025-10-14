import { useState } from 'react';
import CountdownTimer from '@/components/CountdownTimer';
import ProgressGauge from '@/components/ProgressGauge';
import SettingsModal from '@/components/SettingsModal';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [totalReserves, setTotalReserves] = useState(1.65e12); // 1.65 trillion barrels
  const [dailyConsumption, setDailyConsumption] = useState(1.0e8); // 100 million barrels/day
  const [populationGrowthRate, setPopulationGrowthRate] = useState(1.02); // 2% annual growth

  const handleUpdateSettings = (reserves: number, consumption: number, growthRate: number) => {
    setTotalReserves(reserves);
    setDailyConsumption(consumption);
    setPopulationGrowthRate(growthRate);
  };

  const daysRemaining = totalReserves / dailyConsumption;

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
        populationGrowthRate={populationGrowthRate}
        onUpdate={handleUpdateSettings}
      />

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <header className="text-center mb-16 md:mb-24 space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Global Oil Countdown
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold max-w-3xl mx-auto animate-pulse-glow">
            How Long Until the Wells Run Dry?
          </p>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            A real-time tracker showing how much oil humanity has left — based on today's consumption rates.
          </p>
        </header>

        {/* Countdown Timer */}
        <section className="mb-16 md:mb-24">
          <CountdownTimer totalReserves={totalReserves} dailyConsumption={dailyConsumption} />
          <p className="text-xs md:text-sm text-center text-muted-foreground mt-6 max-w-2xl mx-auto">
            Estimated based on current global oil reserves and consumption trends.
          </p>
        </section>

        {/* Data Visualization Section */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Global Oil Statistics
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <Card className="p-6 md:p-8 shadow-card backdrop-blur-sm bg-card/80">
              <ProgressGauge
                label="Global Oil Remaining"
                value={totalReserves}
                maxValue={totalReserves}
                unit="barrels"
                description="Total proven oil reserves worldwide"
              />
            </Card>
            <Card className="p-6 md:p-8 shadow-card backdrop-blur-sm bg-card/80">
              <ProgressGauge
                label="Daily Consumption Rate"
                value={dailyConsumption}
                maxValue={dailyConsumption}
                unit="barrels/day"
                description="Current global daily consumption"
              />
            </Card>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mt-8">
            <Card className="p-4 md:p-6 text-center shadow-card backdrop-blur-sm bg-card/80">
              <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide mb-2">
                Total Reserves
              </p>
              <p className="text-2xl md:text-3xl font-bold text-primary">
                {(totalReserves / 1e12).toFixed(2)}T
              </p>
              <p className="text-xs text-muted-foreground mt-1">barrels</p>
            </Card>
            <Card className="p-4 md:p-6 text-center shadow-card backdrop-blur-sm bg-card/80">
              <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide mb-2">
                Days Remaining
              </p>
              <p className="text-2xl md:text-3xl font-bold text-accent">
                {Math.floor(daysRemaining).toLocaleString()}
              </p>
              <p className="text-xs text-muted-foreground mt-1">approx. {Math.floor(daysRemaining / 365)} years</p>
            </Card>
            <Card className="p-4 md:p-6 text-center shadow-card backdrop-blur-sm bg-card/80">
              <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide mb-2">
                Daily Usage
              </p>
              <p className="text-2xl md:text-3xl font-bold text-destructive">
                {(dailyConsumption / 1e6).toFixed(0)}M
              </p>
              <p className="text-xs text-muted-foreground mt-1">barrels/day</p>
            </Card>
          </div>
        </section>

        {/* Info Box */}
        <section className="max-w-4xl mx-auto mb-16">
          <Card className="p-6 md:p-8 shadow-card backdrop-blur-sm bg-card/80 border-primary/30">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2 animate-pulse-glow" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground">
                  Every Reduction Pushes the Clock Backward
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  This projection shows what happens if current trends continue unchanged. However, renewable energy adoption, 
                  efficiency improvements, and conservation efforts can extend our resources. Every barrel saved gives Earth more time 
                  to transition to sustainable energy sources.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <Separator className="my-12 max-w-4xl mx-auto" />

        {/* Footer */}
        <footer className="text-center space-y-4 text-sm text-muted-foreground max-w-4xl mx-auto">
          <p>
            This clock is a mathematical projection based on current public data sources. Future discoveries, 
            technological shifts, or policy changes may alter these outcomes.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="hover:text-primary transition-colors">Source Data</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">About the Project</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Update Log</a>
          </div>
          <p className="text-xs">
            © {new Date().getFullYear()} <a href="https://aiwebtools.ai" className="text-primary hover:underline">AIWebTools.ai</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
