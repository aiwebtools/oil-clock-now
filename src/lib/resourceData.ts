export type ResourceMode = 'business-as-usual' | 'moderate-conservation' | 'radical-sustainability';

export interface Resource {
  id: string;
  name: string;
  icon: string;
  unit: string;
  ratePerSecond: {
    'business-as-usual': number;
    'moderate-conservation': number;
    'radical-sustainability': number;
  };
  totalReserves: {
    'business-as-usual': number;
    'moderate-conservation': number;
    'radical-sustainability': number;
  };
  estimatedYearsRemaining: {
    'business-as-usual': number;
    'moderate-conservation': number;
    'radical-sustainability': number;
  } | null;
  description: string;
  scientificNote: string;
  color: string; // semantic token
}

export const resources: Resource[] = [
  {
    id: 'oil',
    name: 'Crude Oil',
    icon: '🛢️',
    unit: 'barrels',
    ratePerSecond: {
      'business-as-usual': 1217.0139,
      'moderate-conservation': 973.6111,
      'radical-sustainability': 608.5069,
    },
    totalReserves: {
      'business-as-usual': 1572000000000.0,
      'moderate-conservation': 1572000000000.0,
      'radical-sustainability': 1572000000000.0,
    },
    estimatedYearsRemaining: {
      'business-as-usual': 40.9,
      'moderate-conservation': 51.2,
      'radical-sustainability': 81.9,
    },
    description: 'Proven global crude oil reserves depleting at current extraction rates.',
    scientificNote: 'Proven crude reserves 1.572 trillion bbl (OPEC ASB 2026, end-2025). World demand 105.15M bbl/day (2025) = 1,217 bbl/sec. Reserves-to-consumption ratio ≈ 40.9 years. Not a hard depletion date: excludes new discoveries and reserve revisions.',
    color: 'text-destructive',
  },
  {
    id: 'natural-gas',
    name: 'Natural Gas',
    icon: '🔥',
    unit: 'cubic meters',
    ratePerSecond: {
      'business-as-usual': 129923.8279,
      'moderate-conservation': 103939.0623,
      'radical-sustainability': 64961.9139,
    },
    totalReserves: {
      'business-as-usual': 188000000000000.0,
      'moderate-conservation': 188000000000000.0,
      'radical-sustainability': 188000000000000.0,
    },
    estimatedYearsRemaining: {
      'business-as-usual': 45.9,
      'moderate-conservation': 57.3,
      'radical-sustainability': 91.7,
    },
    description: 'Global natural gas reserves at current extraction rates.',
    scientificNote: 'Proven reserves ~188 trillion m³ (Energy Institute 2024). Consumption ~4.1 trillion m³/yr = ~130,000 m³/sec. R/P ≈ 46 years.',
    color: 'text-primary',
  },
  {
    id: 'coal',
    name: 'Coal',
    icon: '🪨',
    unit: 'kilograms',
    ratePerSecond: {
      'business-as-usual': 275692.025,
      'moderate-conservation': 220553.62,
      'radical-sustainability': 137846.0125,
    },
    totalReserves: {
      'business-as-usual': 1070000000000000.0,
      'moderate-conservation': 1070000000000000.0,
      'radical-sustainability': 1070000000000000.0,
    },
    estimatedYearsRemaining: {
      'business-as-usual': 123.0,
      'moderate-conservation': 153.7,
      'radical-sustainability': 246.0,
    },
    description: 'Coal reserves depleting through global combustion.',
    scientificNote: 'Proven reserves ~1.07 trillion tonnes. Consumption ~8.7 billion tonnes/yr (IEA 2023) = ~276,000 kg/sec. R/P ≈ 123 years.',
    color: 'text-muted-foreground',
  },
  {
    id: 'freshwater',
    name: 'Freshwater Aquifers',
    icon: '💧',
    unit: 'liters',
    ratePerSecond: {
      'business-as-usual': 8967913,
      'moderate-conservation': 7174330,
      'radical-sustainability': 4483956,
    },
    totalReserves: {
      'business-as-usual': 1.4e18,
      'moderate-conservation': 1.4e18,
      'radical-sustainability': 1.4e18,
    },
    estimatedYearsRemaining: null,
    description: 'Critical groundwater depletion from major aquifers (Ogallala, Arabian, North China).',
    scientificNote: 'Net global groundwater depletion ~283 km³/yr (Konikow 2011) = ~9 million L/sec. No single global depletion date exists; depletion is regional (Ogallala, NW India, North China Plain).',
    color: 'text-blue-400',
  },
  {
    id: 'topsoil',
    name: 'Arable Topsoil',
    icon: '🌱',
    unit: 'hectares',
    ratePerSecond: {
      'business-as-usual': 0.3803,
      'moderate-conservation': 0.3042,
      'radical-sustainability': 0.1901,
    },
    totalReserves: {
      'business-as-usual': 1450000000.0,
      'moderate-conservation': 1450000000.0,
      'radical-sustainability': 1450000000.0,
    },
    estimatedYearsRemaining: {
      'business-as-usual': 120.8,
      'moderate-conservation': 151.0,
      'radical-sustainability': 241.7,
    },
    description: 'Agricultural land loss due to erosion, degradation, and desertification.',
    scientificNote: '~1.45 billion ha global cropland. ~12 million ha/yr lost to degradation & desertification (UNCCD) = ~0.38 ha/sec.',
    color: 'text-amber-600',
  },
  {
    id: 'forests',
    name: 'Forest Cover',
    icon: '🌲',
    unit: 'hectares',
    ratePerSecond: {
      'business-as-usual': 0.3169,
      'moderate-conservation': 0.2535,
      'radical-sustainability': 0.1584,
    },
    totalReserves: {
      'business-as-usual': 4060000000.0,
      'moderate-conservation': 4060000000.0,
      'radical-sustainability': 4060000000.0,
    },
    estimatedYearsRemaining: {
      'business-as-usual': 406.0,
      'moderate-conservation': 507.5,
      'radical-sustainability': 812.0,
    },
    description: 'Global deforestation rate affecting carbon sequestration and biodiversity.',
    scientificNote: 'Forest area ~4.06 billion ha (FAO FRA 2020). Gross deforestation ~10 million ha/yr = ~0.32 ha/sec (net loss ~4.7M ha/yr after regrowth).',
    color: 'text-green-500',
  },
  {
    id: 'biodiversity',
    name: 'Species Diversity',
    icon: '🐾',
    unit: 'species',
    ratePerSecond: {
      'business-as-usual': 0.00057,
      'moderate-conservation': 0.00034,
      'radical-sustainability': 0.00011,
    },
    totalReserves: {
      'business-as-usual': 8.7e6,
      'moderate-conservation': 8.7e6,
      'radical-sustainability': 8.7e6,
    },
    estimatedYearsRemaining: null,
    description: 'Species extinction at 1,000× natural background rate.',
    scientificNote: 'Current extinction rate: 100-1,000 species per million per year. Natural rate: 0.1-1.',
    color: 'text-purple-400',
  },
  {
    id: 'copper',
    name: 'Copper Ore',
    icon: '🔋',
    unit: 'tons',
    ratePerSecond: {
      'business-as-usual': 0.6972,
      'moderate-conservation': 0.5577,
      'radical-sustainability': 0.3486,
    },
    totalReserves: {
      'business-as-usual': 1000000000.0,
      'moderate-conservation': 1000000000.0,
      'radical-sustainability': 1000000000.0,
    },
    estimatedYearsRemaining: {
      'business-as-usual': 45.5,
      'moderate-conservation': 56.8,
      'radical-sustainability': 90.9,
    },
    description: 'Copper extraction for electrical infrastructure, EVs, and renewable energy systems.',
    scientificNote: 'Global reserves ~1.0 billion tonnes copper content (USGS 2024). Mine output ~22 million tonnes/yr = ~0.70 t/sec. R/P ≈ 45 years.',
    color: 'text-orange-400',
  },
];
