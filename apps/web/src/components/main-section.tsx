import { Product } from "@/types/product";
import { SearchSection } from "./search-section";
import { ProductsGrid } from "./products-grid";
import { Spinner } from "./ui/spinner";
import { useState } from "react";

interface MainSectionProps {
  searchQuery: string;
  onSetSearchQuery: (searchQuery: string) => void;
  onClickSearch: () => void;
  isProUser: boolean;
  onSetSelectedProduct: (product: Product | null) => void;

  products: Product[];
  isProductsLoading: boolean;
  productsError: string | null;
  hasSearched: boolean;
}

export function MainSection({
  searchQuery,
  onSetSearchQuery,
  onClickSearch,
  isProUser,
  onSetSelectedProduct,
  products,
  isProductsLoading,
  productsError,
  hasSearched,
}: MainSectionProps) {
  return (
    <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
      <SearchSection
        searchQuery={searchQuery}
        onSetSearchQuery={(searchQuery: string) =>
          onSetSearchQuery(searchQuery)
        }
        onClickSearch={onClickSearch}
      />

      {isProductsLoading && (
        <div className="py-12 flex flex-col items-center w-full gap-1">
          <Spinner className="size-12  text-muted-foreground" />
          <h4 className="text-muted-foreground text-sm">
            Loading search results...
          </h4>
        </div>
      )}

      {!isProductsLoading && productsError && (
        <div className="rounded-md border border-destructive/20 bg-destructive/10 p-4 text-center text-sm text-destructive">
          <p>Failed to load products: {productsError || "Unknown error."}</p>
        </div>
      )}

      {!isProductsLoading &&
        hasSearched &&
        !productsError &&
        products?.length === 0 && (
          <div className="py-12 text-center text-muted-foreground">
            <p className="text-sm">No products found matching your search.</p>
          </div>
        )}

      {!hasSearched && (
        <div className="py-12 text-center text-muted-foreground">
          <p className="text-sm">Search for food products by name.</p>
        </div>
      )}

      {!isProductsLoading &&
        !productsError &&
        products &&
        products.length > 0 && (
          <>
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div>
                <h2 className="text-lg font-semibold tracking-tight">
                  Search Results
                </h2>
                <p className="text-xs text-muted-foreground">
                  Showing {products.length} products
                </p>
              </div>
            </div>

            <ProductsGrid
              products={products}
              isProUser={isProUser}
              onSetSelectedProduct={(selectedProduct: Product) =>
                onSetSelectedProduct(selectedProduct)
              }
            />
          </>
        )}
    </main>
  );
}
