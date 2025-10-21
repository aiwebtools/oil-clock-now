export interface LiveStat {
  id: string;
  label: string;
  baseValue: number;
  ratePerSecond: number;
  format: 'number' | 'currency';
  icon?: string;
  category: 'population' | 'government' | 'production';
}

export const liveStats: LiveStat[] = [
  // Population Statistics
  {
    id: 'world-population',
    label: 'Current World Population',
    baseValue: 8253484249,
    ratePerSecond: 2.5, // ~2.5 people per second net growth
    format: 'number',
    icon: '🌍',
    category: 'population',
  },
  {
    id: 'births-year',
    label: 'Births this year',
    baseValue: 106233660,
    ratePerSecond: 4.3, // ~140M births/year = 4.43/sec
    format: 'number',
    icon: '👶',
    category: 'population',
  },
  {
    id: 'births-today',
    label: 'Births today',
    baseValue: 0,
    ratePerSecond: 4.3, // Resets daily
    format: 'number',
    icon: '👶',
    category: 'population',
  },
  {
    id: 'deaths-year',
    label: 'Deaths this year',
    baseValue: 50057799,
    ratePerSecond: 1.8, // ~60M deaths/year = 1.9/sec
    format: 'number',
    icon: '💀',
    category: 'population',
  },
  {
    id: 'deaths-today',
    label: 'Deaths today',
    baseValue: 0,
    ratePerSecond: 1.8,
    format: 'number',
    icon: '💀',
    category: 'population',
  },
  {
    id: 'net-growth-year',
    label: 'Net population growth this year',
    baseValue: 56175861,
    ratePerSecond: 2.5, // births - deaths
    format: 'number',
    icon: '📈',
    category: 'population',
  },
  {
    id: 'net-growth-today',
    label: 'Net population growth today',
    baseValue: 0,
    ratePerSecond: 2.5,
    format: 'number',
    icon: '📈',
    category: 'population',
  },
  
  // Government & Economics
  {
    id: 'healthcare-spending',
    label: 'Public Healthcare expenditure today',
    baseValue: 0,
    ratePerSecond: 184041.2, // ~$5.8T/year globally = $184k/sec
    format: 'currency',
    icon: '🏥',
    category: 'government',
  },
  {
    id: 'education-spending',
    label: 'Public Education expenditure today',
    baseValue: 0,
    ratePerSecond: 121139.1, // ~$3.8T/year globally = $121k/sec
    format: 'currency',
    icon: '🎓',
    category: 'government',
  },
  {
    id: 'military-spending',
    label: 'Public Military expenditure today',
    baseValue: 0,
    ratePerSecond: 49431.8, // ~$1.56T/year globally = $49k/sec
    format: 'currency',
    icon: '⚔️',
    category: 'government',
  },
  
  // Production Statistics
  {
    id: 'cars-produced',
    label: 'Cars produced this year',
    baseValue: 72474786,
    ratePerSecond: 2.5, // ~80M cars/year = 2.5/sec
    format: 'number',
    icon: '🚗',
    category: 'production',
  },
  {
    id: 'bicycles-produced',
    label: 'Bicycles produced this year',
    baseValue: 128898414,
    ratePerSecond: 4.75, // ~150M bicycles/year = 4.75/sec
    format: 'number',
    icon: '🚲',
    category: 'production',
  },
  {
    id: 'computers-produced',
    label: 'Computers produced this year',
    baseValue: 181201324,
    ratePerSecond: 10.0, // ~320M computers/year = 10/sec
    format: 'number',
    icon: '💻',
    category: 'production',
  },
];
