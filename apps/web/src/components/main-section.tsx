import { Product } from "@/types/product";
import { SearchSection } from "./search-section";
import { ProductsGrid } from "./products-grid";
import { Spinner } from "./ui/spinner";
import { useState } from "react";
import { useI18n } from "@/context/i18n-context";

interface MainSectionProps {
  searchQuery: string;
  onSetSearchQuery: (searchQuery: string) => void;
  onClickSearch: () => void;
  onClickClearResults: () => void;
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
  onClickClearResults,
  isProUser,
  onSetSelectedProduct,
  products,
  isProductsLoading,
  productsError,
  hasSearched,
}: MainSectionProps) {
  const { t } = useI18n();

  return (
    <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
      <SearchSection
        searchQuery={searchQuery}
        onSetSearchQuery={(searchQuery: string) =>
          onSetSearchQuery(searchQuery)
        }
        onClickSearch={onClickSearch}
        onClickClearResults={onClickClearResults}
        productsCount={products.length}
      />

      {isProductsLoading && (
        <div className="py-12 flex flex-col items-center w-full gap-1">
          <Spinner className="size-12  text-muted-foreground" />
          <h4 className="text-muted-foreground text-sm">{t("loading")}</h4>
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
          <div className="flex flex-col gap-1 py-12 text-center text-muted-foreground">
            <p className="text-lg">{t("noResults")}</p>
            <p className="text-xs">{t("noResultsSub")}</p>
          </div>
        )}

      {!hasSearched && (
        <div className="py-12 text-center text-muted-foreground">
          <p className="text-lg">{t("initialState")}</p>
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
                  {t("searchResults")}
                </h2>
                <p className="text-xs text-muted-foreground">
                  {t("showingResults", { count: products.length })}
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
