interface Ingredient {
  ingredientCount: number;
  unknownIngredientCount: number;
}

interface Nutrition {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  saturatedFat: number;
  sugars: number;
  salt: number;
  ingredients: Ingredient;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  nutriscore: "A" | "B" | "C" | "D" | "E" | "UNKNOWN";
  nutrition: Nutrition;
}

export interface SearchResponse {
  products: Product[];
  total: number;
}
