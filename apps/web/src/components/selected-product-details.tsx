import Image from "next/image";
import { IconBarcode } from "@tabler/icons-react";

import { getNutriscoreBadgeColor } from "@/utils/get-nutriscore-badge-color";
import { Product } from "@/types/product";

interface SelectedProductDetailsProps {
  selectedProduct: Product;
}

export function SelectedProductDetails({
  selectedProduct,
}: SelectedProductDetailsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 items-start">
      <div className="relative h-40 w-40 rounded-xl bg-muted/40 border border-border shrink-0 p-2 flex items-center justify-center">
        {selectedProduct.image ? (
          <Image
            src={selectedProduct.image}
            alt={selectedProduct.name}
            fill
            unoptimized
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
            <span className="text-xs">No image available</span>
          </div>
        )}
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
          <IconBarcode className="h-4 w-4" /> Barcode: {selectedProduct.id}
        </p>

        <div className="mt-2 flex flex-wrap gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
            Category: {selectedProduct.category || "Unknown"}
          </span>
        </div>
      </div>
    </div>
  );
}
