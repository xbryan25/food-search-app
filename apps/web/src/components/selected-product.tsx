import { IconX, IconInfoCircle } from "@tabler/icons-react";

import { Product } from "@/types/product";

import { SelectedProductDetails } from "./selected-product-details";
import { SelectedProductNutrition } from "./selected-product-nutrition";

interface SelectedProductProps {
  isProUser: boolean;
  onTogglePro: () => void;
  selectedProduct: Product;
  onSetSelectedProduct: (product: Product | null) => void;
}

export function SelectedProduct({
  isProUser,
  onTogglePro,
  selectedProduct,
  onSetSelectedProduct,
}: SelectedProductProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => onSetSelectedProduct(null)}
          className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          <IconX className="h-5 w-5" />
          <span className="sr-only">Close modal</span>
        </button>

        <SelectedProductDetails selectedProduct={selectedProduct} />

        {/* <div className="mt-6 border-t border-border pt-4">
          <h3 className="text-sm font-semibold mb-2 flex items-center gap-1.5">
            <IconInfoCircle className="h-4 w-4 text-primary" />
            Ingredients List
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed bg-muted/30 p-3 rounded-lg border border-border/50">
            {selectedProduct.ingredients.join(", ")}
          </p>
        </div> */}

        <SelectedProductNutrition
          isProUser={isProUser}
          onTogglePro={onTogglePro}
          selectedProduct={selectedProduct}
        />
      </div>
    </div>
  );
}
