export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  nutriscore: "A" | "B" | "C" | "D" | "E";
  ingredients: string[];
  macros: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}
