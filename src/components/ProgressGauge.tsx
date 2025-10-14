import { Progress } from '@/components/ui/progress';

interface ProgressGaugeProps {
  label: string;
  value: number;
  maxValue: number;
  unit: string;
  description?: string;
}

const ProgressGauge = ({ label, value, maxValue, unit, description }: ProgressGaugeProps) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-baseline">
        <h3 className="text-lg md:text-xl font-semibold text-foreground">{label}</h3>
        <span className="text-sm text-muted-foreground">{percentage.toFixed(1)}%</span>
      </div>
      <Progress value={percentage} className="h-3 md:h-4" />
      <div className="flex flex-col gap-1">
        <p className="text-sm text-muted-foreground">
          {value.toLocaleString()} / {maxValue.toLocaleString()} {unit}
        </p>
        {description && (
          <p className="text-xs text-muted-foreground/70">{description}</p>
        )}
      </div>
    </div>
  );
};

export default ProgressGauge;
