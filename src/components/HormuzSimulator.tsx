import { useMemo, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Ship } from 'lucide-react';

interface Props {
  totalReserves: number;
  dailyConsumption: number;
}

// Strait of Hormuz: ~20M bbl/day transits (EIA). Bypass pipelines (Saudi East-West, UAE ADCOP) can reroute ~3.5–5.5M bbl/day.
const HORMUZ_FLOW = 20e6;
const BYPASS = 4.5e6;
const DAY_MS = 86400000;

const presets = [
  { label: 'No disruption', blocked: 0, days: 0 },
  { label: 'Partial (50%) · 1 month', blocked: 50, days: 30 },
  { label: 'Full closure · 3 months', blocked: 100, days: 90 },
  { label: 'Full closure · 1 year', blocked: 100, days: 365 },
];

const HormuzSimulator = ({ totalReserves, dailyConsumption }: Props) => {
  const [open, setOpen] = useState(false);
  const [blocked, setBlocked] = useState(100);
  const [days, setDays] = useState(90);

  const r = useMemo(() => {
    const lostPerDay = Math.max(0, (HORMUZ_FLOW * blocked) / 100 - BYPASS * (blocked / 100));
    const unburned = lostPerDay * days; // barrels left in the ground
    const extraDays = unburned / dailyConsumption;
    const base = new Date(Date.now() + (totalReserves / dailyConsumption) * DAY_MS);
    const shifted = new Date(base.getTime() + extraDays * DAY_MS);
    return { lostPerDay, unburned, extraDays, base, shifted, pct: (lostPerDay / dailyConsumption) * 100 };
  }, [blocked, days, totalReserves, dailyConsumption]);

  const fmt = (d: Date) => d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  if (!open) {
    return (
      <div className="flex justify-center">
        <Button onClick={() => setOpen(true)} size="lg" className="gap-2">
          <Ship className="h-5 w-5" /> Simulate Strait of Hormuz disruption
        </Button>
      </div>
    );
  }

  return (
    <Card className="p-5 sm:p-8 shadow-card bg-card/80 border-primary/30 space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">Strait of Hormuz Disruption Simulator</h3>
          <p className="text-sm text-muted-foreground mt-1">
            ~20M barrels/day (≈20% of world demand) pass through Hormuz. Bypass pipelines can reroute ~4.5M.
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={() => setOpen(false)}>Close</Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {presets.map((p) => (
          <Button key={p.label} variant={blocked === p.blocked && days === p.days ? 'default' : 'outline'} size="sm"
            onClick={() => { setBlocked(p.blocked); setDays(p.days); }}>
            {p.label}
          </Button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <p className="text-sm text-foreground">Flow blocked: <span className="font-mono text-primary">{blocked}%</span></p>
          <Slider value={[blocked]} min={0} max={100} step={5} onValueChange={(v) => setBlocked(v[0])} />
        </div>
        <div className="space-y-2">
          <p className="text-sm text-foreground">Duration: <span className="font-mono text-primary">{days} days</span></p>
          <Slider value={[days]} min={0} max={730} step={15} onValueChange={(v) => setDays(v[0])} />
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 text-center">
        <div className="bg-background/60 rounded-lg p-4 border border-primary/10">
          <p className="text-xs text-muted-foreground">Supply cut</p>
          <p className="font-mono text-lg font-bold text-destructive">{(r.lostPerDay / 1e6).toFixed(1)}M bbl/day</p>
          <p className="text-xs text-muted-foreground">{r.pct.toFixed(1)}% of world demand</p>
        </div>
        <div className="bg-background/60 rounded-lg p-4 border border-primary/10">
          <p className="text-xs text-muted-foreground">Oil left unburned</p>
          <p className="font-mono text-lg font-bold text-foreground">{(r.unburned / 1e9).toFixed(2)}B bbl</p>
        </div>
        <div className="bg-background/60 rounded-lg p-4 border border-primary/10">
          <p className="text-xs text-muted-foreground">Depletion date shifts</p>
          <p className="font-mono text-lg font-bold text-primary">+{r.extraDays.toFixed(0)} days later</p>
        </div>
      </div>

      <p className="text-sm text-center text-foreground">
        Baseline: <span className="font-semibold">{fmt(r.base)}</span> → With disruption: <span className="font-semibold text-primary">{fmt(r.shifted)}</span>
      </p>

      <p className="text-xs text-muted-foreground leading-relaxed">
        Why later, not sooner: a blockade doesn't destroy reserves — the oil stays in the ground. The world is forced to burn less,
        so the reserve clock slows. The real-world cost is price spikes, shortages and recession, not earlier depletion.
        Simplified model: assumes unmet supply = reduced consumption, no strategic-reserve releases, no extra output elsewhere, no infrastructure destroyed.
        Wars, sanctions and the US dollar affect price and who gets oil — they barely move the total amount left.
      </p>
    </Card>
  );
};

export default HormuzSimulator;
