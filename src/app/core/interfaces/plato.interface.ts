export interface Result {
  results: Plato[];
  offset: number;
  number: number;
  totalResults: number;
}
export interface Plato {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: number;
  cookingMinutes: number;
  aggregateLikes: number;
  healthScore: number;
  creditsText?: string;
  license?: string;
  sourceName?: string;
  pricePerServing: number;
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: any[];
  analyzedInstructions: AnalyzedInstruction[];
  spoonacularSourceUrl: string;
}


interface AnalyzedInstruction {
  name: string;
  steps: Step[];
}

interface Step {
  number: number;
  step: string;
  ingredients: (Ingredient | Ingredient)[];
  equipment: Equipment[][];
  length?: Temperature;
}

interface Equipment {
  id: number;
  name: string;
  localizedName: string;
  image: string;
  temperature?: Temperature;
}

interface Temperature {
  number: number;
  unit: string;
}

interface Ingredient {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}