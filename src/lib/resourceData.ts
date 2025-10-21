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
      'business-as-usual': 1100,
      'moderate-conservation': 880,
      'radical-sustainability': 550,
    },
    totalReserves: {
      'business-as-usual': 1.65e12,
      'moderate-conservation': 1.65e12,
      'radical-sustainability': 1.65e12,
    },
    estimatedYearsRemaining: {
      'business-as-usual': 47,
      'moderate-conservation': 59,
      'radical-sustainability': 94,
    },
    description: 'Proven global crude oil reserves depleting at current extraction rates.',
    scientificNote: 'Based on 1.65 trillion barrel proven reserves. Consumption: ~100M barrels/day globally.',
    color: 'text-destructive',
  },
  {
    id: 'natural-gas',
    name: 'Natural Gas',
    icon: '🔥',
    unit: 'cubic meters',
    ratePerSecond: {
      'business-as-usual': 3900,
      'moderate-conservation': 3120,
      'radical-sustainability': 1950,
    },
    totalReserves: {
      'business-as-usual': 6.4e12,
      'moderate-conservation': 6.4e12,
      'radical-sustainability': 6.4e12,
    },
    estimatedYearsRemaining: {
      'business-as-usual': 52,
      'moderate-conservation': 65,
      'radical-sustainability': 104,
    },
    description: 'Global natural gas reserves at current extraction rates.',
    scientificNote: 'Proven reserves: ~188 trillion cubic meters. Consumption rate increasing 2.6% annually.',
    color: 'text-primary',
  },
  {
    id: 'coal',
    name: 'Coal',
    icon: '🪨',
    unit: 'kilograms',
    ratePerSecond: {
      'business-as-usual': 8000,
      'moderate-conservation': 6400,
      'radical-sustainability': 4000,
    },
    totalReserves: {
      'business-as-usual': 3.3e12,
      'moderate-conservation': 3.3e12,
      'radical-sustainability': 3.3e12,
    },
    estimatedYearsRemaining: {
      'business-as-usual': 132,
      'moderate-conservation': 165,
      'radical-sustainability': 264,
    },
    description: 'Coal reserves depleting through global combustion.',
    scientificNote: 'Proven reserves: ~1.07 trillion tons. Highest CO₂ emissions per unit energy of all fossil fuels.',
    color: 'text-muted-foreground',
  },
  {
    id: 'freshwater',
    name: 'Freshwater Aquifers',
    icon: '💧',
    unit: 'liters',
    ratePerSecond: {
      'business-as-usual': 900000,
      'moderate-conservation': 720000,
      'radical-sustainability': 450000,
    },
    totalReserves: {
      'business-as-usual': 1.4e18,
      'moderate-conservation': 1.4e18,
      'radical-sustainability': 1.4e18,
    },
    estimatedYearsRemaining: {
      'business-as-usual': 50,
      'moderate-conservation': 63,
      'radical-sustainability': 100,
    },
    description: 'Critical groundwater depletion from major aquifers (Ogallala, Arabian, North China).',
    scientificNote: 'Aquifer depletion rate: 1-2 meters/year in critical zones. Groundwater accounts for 30% of freshwater.',
    color: 'text-blue-400',
  },
  {
    id: 'topsoil',
    name: 'Arable Topsoil',
    icon: '🌱',
    unit: 'hectares',
    ratePerSecond: {
      'business-as-usual': 0.76,
      'moderate-conservation': 0.53,
      'radical-sustainability': 0.30,
    },
    totalReserves: {
      'business-as-usual': 1.45e9,
      'moderate-conservation': 1.45e9,
      'radical-sustainability': 1.45e9,
    },
    estimatedYearsRemaining: {
      'business-as-usual': 60,
      'moderate-conservation': 86,
      'radical-sustainability': 152,
    },
    description: 'Agricultural land loss due to erosion, degradation, and desertification.',
    scientificNote: '24 billion tons of fertile soil lost annually. Erosion rate: 10-40x faster than regeneration.',
    color: 'text-amber-600',
  },
  {
    id: 'forests',
    name: 'Forest Cover',
    icon: '🌲',
    unit: 'hectares',
    ratePerSecond: {
      'business-as-usual': 0.32,
      'moderate-conservation': 0.19,
      'radical-sustainability': 0.05,
    },
    totalReserves: {
      'business-as-usual': 4.0e9,
      'moderate-conservation': 4.0e9,
      'radical-sustainability': 4.0e9,
    },
    estimatedYearsRemaining: {
      'business-as-usual': 200,
      'moderate-conservation': 337,
      'radical-sustainability': 1280,
    },
    description: 'Global deforestation rate affecting carbon sequestration and biodiversity.',
    scientificNote: '10 million hectares cleared annually. Forests store ~296 gigatons of carbon.',
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
      'business-as-usual': 16,
      'moderate-conservation': 13,
      'radical-sustainability': 8,
    },
    totalReserves: {
      'business-as-usual': 2.0e9,
      'moderate-conservation': 2.0e9,
      'radical-sustainability': 2.0e9,
    },
    estimatedYearsRemaining: {
      'business-as-usual': 40,
      'moderate-conservation': 49,
      'radical-sustainability': 80,
    },
    description: 'Copper extraction for electrical infrastructure, EVs, and renewable energy systems.',
    scientificNote: 'Global reserves: ~870 million tons copper content. Demand rising with green energy transition.',
    color: 'text-orange-400',
  },
];
