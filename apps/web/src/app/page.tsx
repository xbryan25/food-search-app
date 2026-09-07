"use client";

import * as React from "react";
import Image from "next/image";
import {
  IconSearch,
  IconAdjustmentsHorizontal,
  IconLock,
  IconSparkles,
  IconX,
  IconInfoCircle,
  IconChevronRight,
  IconBarcode,
  IconFlame,
} from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { StickyHeader } from "@/components/sticky-header";
import { Footer } from "@/components/footer";

// Mock Product Type
interface Product {
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

// Dummy Data matching Open Food Facts API structure
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

export default function Home() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(
    null,
  );
  const [isProUser, setIsProUser] = React.useState(false); // Toggle to test Free vs Pro UI
  const [selectedLanguage, setSelectedLanguage] = React.useState("EN");

  const getNutriscoreBadgeColor = (score: string) => {
    switch (score) {
      case "A":
        return "bg-emerald-600 text-white dark:bg-emerald-500";
      case "B":
        return "bg-lime-600 text-white dark:bg-lime-500";
      case "C":
        return "bg-amber-500 text-white dark:bg-amber-400";
      case "D":
        return "bg-orange-500 text-white dark:bg-orange-400";
      case "E":
        return "bg-red-600 text-white dark:bg-red-500";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <StickyHeader
        isProUser={isProUser}
        onTogglePro={() => setIsProUser((prev) => !prev)}
        selectedLanguage={selectedLanguage}
        onLanguageChange={(langCode) => setSelectedLanguage(langCode)}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
        <section className="flex flex-col items-center text-center max-w-2xl mx-auto gap-3 pt-4 sm:pt-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Search Food & Nutritional Data
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Explore Open Food Facts dataset. Unlock instant macro insights,
            Nutri-Score analysis, and ingredients breakdown.
          </p>

          {/* Search Bar Input Control */}
          <div className="relative w-full mt-4">
            <div className="relative flex items-center">
              <IconSearch className="absolute left-4 h-5 w-5 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by product name, brand, or barcode..."
                className="w-full h-12 rounded-xl border border-input bg-card pl-11 pr-24 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shadow-sm transition-all"
              />
              <div className="absolute right-2 flex items-center gap-1">
                <Button size="sm" className="h-8 px-3 text-xs">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Results Metadata & Filters Header */}
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              Search Results
            </h2>
            <p className="text-xs text-muted-foreground">
              Showing {MOCK_PRODUCTS.length} products
            </p>
          </div>

          <Button variant="outline" size="sm" className="gap-2 text-xs">
            <IconAdjustmentsHorizontal className="h-4 w-4" />
            <span>Filter</span>
          </Button>
        </div>

        {/* 🟡 Product Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {MOCK_PRODUCTS.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              {/* Card Image Container */}
              <div className="relative h-48 w-full bg-muted/30 p-4 flex items-center justify-center border-b border-border/50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />

                {/* Nutri-Score Badge */}
                <span
                  className={`absolute top-3 left-3 px-2 py-0.5 text-xs font-black rounded-md shadow-xs ${getNutriscoreBadgeColor(
                    product.nutriscore,
                  )}`}
                >
                  {product.nutriscore}
                </span>

                {/* Pro Feature Lock Overlay Indicator on Product Card */}
                {!isProUser && (
                  <span className="absolute top-3 right-3 flex items-center gap-1 bg-background/80 backdrop-blur-xs text-foreground px-2 py-0.5 rounded-full text-[10px] font-medium border border-border shadow-xs">
                    <IconLock className="h-3 w-3 text-amber-500" />
                    Macros Locked
                  </span>
                )}
              </div>

              {/* Card Details */}
              <div className="flex flex-col flex-1 p-4 gap-2">
                <div>
                  <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                    {product.brand}
                  </span>
                  <h3 className="font-semibold text-sm line-clamp-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </div>

                <div className="mt-auto pt-2 flex items-center justify-between border-t border-border/40 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <IconBarcode className="h-3.5 w-3.5" />
                    {product.id}
                  </span>
                  <span className="flex items-center gap-0.5 text-primary font-medium group-hover:translate-x-0.5 transition-transform">
                    Details
                    <IconChevronRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 🔴 Product Detail Modal Overlay */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <IconX className="h-5 w-5" />
              <span className="sr-only">Close modal</span>
            </button>

            {/* Modal Header Details */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="relative h-40 w-40 rounded-xl bg-muted/40 border border-border shrink-0 p-2 flex items-center justify-center">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {selectedProduct.brand}
                  </span>
                  <span
                    className={`px-2 py-0.5 text-[10px] font-bold rounded-md ${getNutriscoreBadgeColor(
                      selectedProduct.nutriscore,
                    )}`}
                  >
                    Nutri-Score {selectedProduct.nutriscore}
                  </span>
                </div>

                <h2 className="text-xl font-bold tracking-tight">
                  {selectedProduct.name}
                </h2>

                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <IconBarcode className="h-4 w-4" /> Barcode:{" "}
                  {selectedProduct.id}
                </p>

                <div className="mt-2 flex flex-wrap gap-1.5">
                  <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                    Category: {selectedProduct.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Section: Ingredients (Free for all) */}
            <div className="mt-6 border-t border-border pt-4">
              <h3 className="text-sm font-semibold mb-2 flex items-center gap-1.5">
                <IconInfoCircle className="h-4 w-4 text-primary" />
                Ingredients List
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed bg-muted/30 p-3 rounded-lg border border-border/50">
                {selectedProduct.ingredients.join(", ")}
              </p>
            </div>

            {/* Modal Section: Nutritional Data (Locked behind Stripe Pro) */}
            <div className="mt-6 border-t border-border pt-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold flex items-center gap-1.5">
                  <IconFlame className="h-4 w-4 text-amber-500" />
                  Nutritional Values (Per 100g)
                </h3>
                {!isProUser && (
                  <span className="flex items-center gap-1 text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                    <IconLock className="h-3.5 w-3.5" />
                    Pro Subscription Required
                  </span>
                )}
              </div>

              {isProUser ? (
                /* Unlocked Pro View: Full Macros Table */
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-muted/40 border border-border text-center">
                    <span className="text-[11px] text-muted-foreground block">
                      Calories
                    </span>
                    <span className="text-lg font-bold">
                      {selectedProduct.macros.calories} kcal
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/40 border border-border text-center">
                    <span className="text-[11px] text-muted-foreground block">
                      Protein
                    </span>
                    <span className="text-lg font-bold">
                      {selectedProduct.macros.protein}g
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/40 border border-border text-center">
                    <span className="text-[11px] text-muted-foreground block">
                      Carbs
                    </span>
                    <span className="text-lg font-bold">
                      {selectedProduct.macros.carbs}g
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/40 border border-border text-center">
                    <span className="text-[11px] text-muted-foreground block">
                      Fat
                    </span>
                    <span className="text-lg font-bold">
                      {selectedProduct.macros.fat}g
                    </span>
                  </div>
                </div>
              ) : (
                /* Locked Free View: Blurred Placeholder + CTA */
                <div className="relative rounded-xl border border-dashed border-border bg-muted/20 p-6 text-center overflow-hidden">
                  <div className="filter blur-xs opacity-30 select-none grid grid-cols-4 gap-2 mb-2">
                    <div className="p-2 bg-muted rounded">539 kcal</div>
                    <div className="p-2 bg-muted rounded">6.3g</div>
                    <div className="p-2 bg-muted rounded">57.5g</div>
                    <div className="p-2 bg-muted rounded">30.9g</div>
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-background/60 backdrop-blur-2xs">
                    <IconLock className="h-6 w-6 text-amber-500 mb-1" />
                    <p className="text-xs font-semibold">
                      Macro Insights are Locked
                    </p>
                    <p className="text-[11px] text-muted-foreground mb-3 max-w-xs">
                      Subscribe to Pro plan to unlock nutritional macros,
                      detailed breakdown, and custom export options.
                    </p>
                    <Button
                      size="sm"
                      onClick={() => setIsProUser(true)}
                      className="gap-1.5 text-xs bg-amber-600 hover:bg-amber-700 text-white"
                    >
                      <IconSparkles className="h-3.5 w-3.5" />
                      Unlock Pro Access
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="mt-6 flex justify-end gap-2 border-t border-border pt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedProduct(null)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
