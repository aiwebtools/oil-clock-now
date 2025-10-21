import { ResourceMode } from '@/lib/resourceData';
import { Button } from '@/components/ui/button';

interface ModeSelectorProps {
  currentMode: ResourceMode;
  onModeChange: (mode: ResourceMode) => void;
}

const ModeSelector = ({ currentMode, onModeChange }: ModeSelectorProps) => {
  const modes: { value: ResourceMode; label: string; description: string }[] = [
    {
      value: 'business-as-usual',
      label: 'Business as Usual',
      description: 'Current consumption trends continue unchanged',
    },
    {
      value: 'moderate-conservation',
      label: 'Moderate Conservation',
      description: '20% reduction through efficiency improvements',
    },
    {
      value: 'radical-sustainability',
      label: 'Radical Sustainability',
      description: '50% reduction through aggressive policy changes',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold text-foreground">Projection Scenario</h3>
        <p className="text-sm text-muted-foreground">
          Choose how humanity responds to see different outcomes
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {modes.map((mode) => (
          <button
            key={mode.value}
            onClick={() => onModeChange(mode.value)}
            className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
              currentMode === mode.value
                ? 'border-primary bg-primary/10 shadow-glow'
                : 'border-primary/20 bg-card/50 hover:border-primary/40 hover:bg-card/80'
            }`}
          >
            <h4 className={`font-semibold mb-2 ${currentMode === mode.value ? 'text-primary' : 'text-foreground'}`}>
              {mode.label}
            </h4>
            <p className="text-xs text-muted-foreground">{mode.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModeSelector;
