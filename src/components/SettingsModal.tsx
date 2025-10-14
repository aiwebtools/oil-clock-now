import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Settings } from 'lucide-react';

interface SettingsModalProps {
  totalReserves: number;
  dailyConsumption: number;
  populationGrowthRate: number;
  onUpdate: (reserves: number, consumption: number, growthRate: number) => void;
}

const SettingsModal = ({
  totalReserves,
  dailyConsumption,
  populationGrowthRate,
  onUpdate,
}: SettingsModalProps) => {
  const [reserves, setReserves] = useState(totalReserves);
  const [consumption, setConsumption] = useState(dailyConsumption);
  const [growthRate, setGrowthRate] = useState(populationGrowthRate);
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    onUpdate(reserves, consumption, growthRate);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="fixed top-4 right-4 z-50">
          <Settings className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adjust Parameters</DialogTitle>
          <DialogDescription>
            Modify the global oil data to see how it affects the countdown.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="reserves">Total Proven Reserves (barrels)</Label>
            <Input
              id="reserves"
              type="number"
              value={reserves}
              onChange={(e) => setReserves(Number(e.target.value))}
              className="font-mono"
            />
            <p className="text-xs text-muted-foreground">
              Current: {reserves.toExponential(2)} barrels
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="consumption">Daily Consumption Rate (barrels/day)</Label>
            <Input
              id="consumption"
              type="number"
              value={consumption}
              onChange={(e) => setConsumption(Number(e.target.value))}
              className="font-mono"
            />
            <p className="text-xs text-muted-foreground">
              Current: {consumption.toExponential(2)} barrels/day
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="growth">Population Growth Rate (%)</Label>
            <Input
              id="growth"
              type="number"
              step="0.1"
              value={(populationGrowthRate - 1) * 100}
              onChange={(e) => setGrowthRate(1 + Number(e.target.value) / 100)}
              className="font-mono"
            />
            <p className="text-xs text-muted-foreground">
              Annual multiplier: {populationGrowthRate.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsModal;
