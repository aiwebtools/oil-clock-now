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
  estimatedYearsRemaining: {
    'business-as-usual': number;
    'moderate-conservation': number;
    'radical-sustainability': number;
  } | null;
  description: string;
  contextQuote: string;
  visualCue: string;
  color: string; // semantic token
}

export const resources: Resource[] = [
  {
    id: 'oil',
    name: 'Oil',
    icon: '🛢️',
    unit: 'barrels',
    ratePerSecond: {
      'business-as-usual': 1100,
      'moderate-conservation': 880,
      'radical-sustainability': 550,
    },
    estimatedYearsRemaining: {
      'business-as-usual': 47,
      'moderate-conservation': 59,
      'radical-sustainability': 94,
    },
    description: 'Global crude oil depletion at current consumption rates.',
    contextQuote: 'A child born today may see the last drop burned.',
    visualCue: 'Drops of black vanishing into desert sand',
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
    estimatedYearsRemaining: {
      'business-as-usual': 52,
      'moderate-conservation': 65,
      'radical-sustainability': 104,
    },
    description: 'Natural gas being consumed worldwide.',
    contextQuote: 'Demand projected to rise before decline.',
    visualCue: 'A flickering blue flame dimming',
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
    estimatedYearsRemaining: {
      'business-as-usual': 132,
      'moderate-conservation': 165,
      'radical-sustainability': 264,
    },
    description: 'Coal combustion across the globe.',
    contextQuote: 'Mountain slowly eroding to dust.',
    visualCue: 'Mountain slowly eroding to dust',
    color: 'text-muted-foreground',
  },
  {
    id: 'freshwater',
    name: 'Freshwater',
    icon: '💧',
    unit: 'liters',
    ratePerSecond: {
      'business-as-usual': 900000,
      'moderate-conservation': 720000,
      'radical-sustainability': 450000,
    },
    estimatedYearsRemaining: {
      'business-as-usual': 50,
      'moderate-conservation': 63,
      'radical-sustainability': 100,
    },
    description: 'Fresh groundwater withdrawal from critical aquifers.',
    contextQuote: 'How deep must we drill before we ask why?',
    visualCue: 'Water level in a glass dropping every second',
    color: 'text-blue-400',
  },
  {
    id: 'topsoil',
    name: 'Topsoil',
    icon: '🌱',
    unit: 'hectares',
    ratePerSecond: {
      'business-as-usual': 0.76,
      'moderate-conservation': 0.53,
      'radical-sustainability': 0.30,
    },
    estimatedYearsRemaining: {
      'business-as-usual': 60,
      'moderate-conservation': 86,
      'radical-sustainability': 152,
    },
    description: 'Loss of arable land due to erosion and degradation.',
    contextQuote: 'We are mining the future to eat the present.',
    visualCue: 'Earth cracking beneath crops',
    color: 'text-amber-600',
  },
  {
    id: 'forests',
    name: 'Forests',
    icon: '🌲',
    unit: 'hectares',
    ratePerSecond: {
      'business-as-usual': 0.32,
      'moderate-conservation': 0.19,
      'radical-sustainability': 0.05,
    },
    estimatedYearsRemaining: {
      'business-as-usual': 200,
      'moderate-conservation': 337,
      'radical-sustainability': 1280,
    },
    description: 'Deforestation globally, affecting biodiversity and climate.',
    contextQuote: 'Rainforests contain irreplaceable biodiversity.',
    visualCue: 'Tree shadows shrinking',
    color: 'text-green-500',
  },
  {
    id: 'biodiversity',
    name: 'Biodiversity',
    icon: '🐾',
    unit: 'species',
    ratePerSecond: {
      'business-as-usual': 0.00057,
      'moderate-conservation': 0.00034,
      'radical-sustainability': 0.00011,
    },
    estimatedYearsRemaining: null,
    description: 'Estimated species going extinct at 1,000× background rate.',
    contextQuote: 'Extinction is permanent. Awareness is not.',
    visualCue: 'Disappearing silhouettes of animals',
    color: 'text-purple-400',
  },
  {
    id: 'copper',
    name: 'Copper',
    icon: '🔋',
    unit: 'tons',
    ratePerSecond: {
      'business-as-usual': 16,
      'moderate-conservation': 13,
      'radical-sustainability': 8,
    },
    estimatedYearsRemaining: {
      'business-as-usual': 40,
      'moderate-conservation': 49,
      'radical-sustainability': 80,
    },
    description: 'Copper extraction worldwide for electronics and infrastructure.',
    contextQuote: 'Powers cars, phones, and batteries.',
    visualCue: 'Circuit board fracturing',
    color: 'text-orange-400',
  },
];
