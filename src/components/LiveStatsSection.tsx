import LiveStatCounter from './LiveStatCounter';
import { liveStats } from '@/lib/liveStatsData';

const LiveStatsSection = () => {
  const populationStats = liveStats.filter(s => s.category === 'population');
  const governmentStats = liveStats.filter(s => s.category === 'government');
  const productionStats = liveStats.filter(s => s.category === 'production');

  return (
    <div className="space-y-12">
      {/* Population Statistics */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-foreground">
          World Population
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {populationStats.map((stat) => (
            <LiveStatCounter key={stat.id} stat={stat} />
          ))}
        </div>
      </div>

      {/* Government & Economics */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-foreground">
          Government & Economics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {governmentStats.map((stat) => (
            <LiveStatCounter key={stat.id} stat={stat} />
          ))}
        </div>
      </div>

      {/* Production Statistics */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-foreground">
          Global Production
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {productionStats.map((stat) => (
            <LiveStatCounter key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveStatsSection;
