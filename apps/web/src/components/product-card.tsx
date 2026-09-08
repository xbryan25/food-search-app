import Image from "next/image";
import { IconLock, IconChevronRight, IconBarcode } from "@tabler/icons-react";

import { getNutriscoreBadgeColor } from "@/utils/get-nutriscore-badge-color";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  isProUser: boolean;
  onSetSelectedProduct: (selectedProduct: Product) => void;
}

export function ProductCard({
  product,
  isProUser,
  onSetSelectedProduct,
}: ProductCardProps) {
  return (
    <div
      key={product.id}
      onClick={() => onSetSelectedProduct(product)}
      className="group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
    >
      <div className="relative h-48 w-full bg-muted/30 p-4 flex items-center justify-center border-b border-border/50">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
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

        <span
          className={`absolute top-3 left-3 px-2 py-0.5 text-xs font-black rounded-md shadow-xs ${getNutriscoreBadgeColor(
            product.nutriscore,
          )}`}
        >
          {product.nutriscore}
        </span>

        {!isProUser && (
          <span className="absolute top-3 right-3 flex items-center gap-1 bg-background/80 backdrop-blur-xs text-foreground px-2 py-0.5 rounded-full text-[10px] font-medium border border-border shadow-xs">
            <IconLock className="h-3 w-3 text-amber-500" />
            Macros Locked
          </span>
        )}
      </div>

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
  );
}
