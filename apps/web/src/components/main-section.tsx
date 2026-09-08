import Image from "next/image";
import {
  IconSearch,
  IconAdjustmentsHorizontal,
  IconLock,
  IconChevronRight,
  IconBarcode,
} from "@tabler/icons-react";

import { Button } from "@/components/ui/button";

import { getNutriscoreBadgeColor } from "@/utils/get-nutriscore-badge-color";
import { Product } from "@/types/product";
import { SearchSection } from "./search-section";
import { ProductsGrid } from "./products-grid";

const MOCK_PRODUCTS: Product[] = [
  {
    id: "3017620422003",
    name: "Nutella Hazelnut Spread",
    brand: "Ferrero",
    category: "Spreads & Sweets",
    image: "https://placeholder.pics/svg/300",
    nutriscore: "E",
    ingredients: [
      "Sugar",
      "Palm Oil",
      "Hazelnuts (13%)",
      "Skimmed Milk Powder (8.7%)",
      "Fat-Reduced Cocoa (7.4%)",
    ],
    macros: { calories: 539, protein: 6.3, carbs: 57.5, fat: 30.9 },
  },
  {
    id: "7622210449283",
    name: "Oreo Original Cookies",
    brand: "Mondelez",
    category: "Biscuits & Snacks",
    image: "https://placeholder.pics/svg/300",
    nutriscore: "E",
    ingredients: [
      "Wheat Flour",
      "Sugar",
      "Palm Oil",
      "Rapeseed Oil",
      "Fat Reduced Cocoa Powder 4.3%",
    ],
    macros: { calories: 476, protein: 5.3, carbs: 68, fat: 20 },
  },
  {
    id: "5449000000996",
    name: "Coca-Cola Original Taste",
    brand: "The Coca-Cola Company",
    category: "Beverages",
    image: "https://placeholder.pics/svg/300",
    nutriscore: "E",
    ingredients: [
      "Carbonated Water",
      "Sugar",
      "Color (Caramel E150d)",
      "Acid (Phosphoric Acid)",
      "Natural Flavorings",
    ],
    macros: { calories: 42, protein: 0, carbs: 10.6, fat: 0 },
  },
  {
    id: "3228857000166",
    name: "Evian Natural Mineral Water",
    brand: "Evian",
    category: "Beverages",
    image: "https://placeholder.pics/svg/300",
    nutriscore: "A",
    ingredients: ["Natural Mineral Water"],
    macros: { calories: 0, protein: 0, carbs: 0, fat: 0 },
  },
  {
    id: "322885700012344",
    name: "Evian Natural Mineral Water",
    brand: "Evian",
    category: "Beverages",
    image: "https://placeholder.pics/svg/300",
    nutriscore: "A",
    ingredients: ["Natural Mineral Water"],
    macros: { calories: 0, protein: 0, carbs: 0, fat: 0 },
  },
  {
    id: "3228857000234",
    name: "Evian Natural Mineral Water",
    brand: "Evian",
    category: "Beverages",
    image: "https://placeholder.pics/svg/300",
    nutriscore: "A",
    ingredients: ["Natural Mineral Water"],
    macros: { calories: 0, protein: 0, carbs: 0, fat: 0 },
  },
  {
    id: "3228857000123",
    name: "Evian Natural Mineral Water",
    brand: "Evian",
    category: "Beverages",
    image: "https://placeholder.pics/svg/300",
    nutriscore: "A",
    ingredients: ["Natural Mineral Water"],
    macros: { calories: 0, protein: 0, carbs: 0, fat: 0 },
  },
];

interface MainSectionProps {
  searchQuery: string;
  onSetSearchQuery: (searchQuery: string) => void;
  isProUser: boolean;
  onSetSelectedProduct: (product: Product | null) => void;
}

export function MainSection({
  searchQuery,
  onSetSearchQuery,
  isProUser,
  onSetSelectedProduct,
}: MainSectionProps) {
  return (
    <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
      <SearchSection
        searchQuery={searchQuery}
        onSetSearchQuery={(searchQuery: string) =>
          onSetSearchQuery(searchQuery)
        }
      />

      <div className="flex items-center justify-between border-b border-border pb-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">
            Search Results
          </h2>
          <p className="text-xs text-muted-foreground">
            Showing {MOCK_PRODUCTS.length} products
          </p>
        </div>

        {/* <Button variant="outline" size="sm" className="gap-2 text-xs">
          <IconAdjustmentsHorizontal className="h-4 w-4" />
          <span>Filter</span>
        </Button> */}
      </div>

      <ProductsGrid
        products={MOCK_PRODUCTS}
        isProUser={isProUser}
        onSetSelectedProduct={(selectedProduct: Product) =>
          onSetSelectedProduct(selectedProduct)
        }
      />
    </main>
  );
}
