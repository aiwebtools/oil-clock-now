import { useState } from 'react';
import ResourceCard from '@/components/ResourceCard';
import ModeSelector from '@/components/ModeSelector';
import EarthOvershoot from '@/components/EarthOvershoot';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { resources } from '@/lib/resourceData';
import type { ResourceMode } from '@/lib/resourceData';

const Index = () => {
  const [mode, setMode] = useState<ResourceMode>('business-as-usual');

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-destructive/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <header className="text-center mb-16 md:mb-24 space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            🌍 The Humanity Clock
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold max-w-3xl mx-auto animate-pulse-glow">
            A Multidimensional Timepiece Tracking Earth's Essential Resources
          </p>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Real-time depletion tracking across oil, water, forests, biodiversity, and critical minerals — 
            reflecting urgency without coercion, awareness without despair.
          </p>
        </header>

        {/* Mode Selector */}
        <section className="mb-16 md:mb-20 max-w-5xl mx-auto">
          <ModeSelector currentMode={mode} onModeChange={setMode} />
        </section>

        {/* Earth Overshoot Global Metric */}
        <section className="mb-16 md:mb-20 max-w-4xl mx-auto">
          <EarthOvershoot />
        </section>

        {/* Resource Cards Grid */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Resource Depletion Counters
          </h2>
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
                  Every Reduction Pushes the Clock Backward
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  These projections show what happens if current trends continue — but they're not inevitable. 
                  Switch between scenarios above to see how conservation, efficiency, and sustainability efforts 
                  can extend our resources. Every choice matters: renewable energy adoption, water conservation, 
                  regenerative agriculture, and circular economies all give Earth more time to heal and humanity 
                  more time to transition to sustainable systems.
                </p>
              </div>
            </div>
          </Card>
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
            © {new Date().getFullYear()} <a href="https://aiwebtools.ai" className="text-primary hover:underline">AIWebTools.ai</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
