import { Product } from "@/types/product";
import { SearchSection } from "./search-section";
import { ProductsGrid } from "./products-grid";

interface MainSectionProps {
  searchQuery: string;
  onSetSearchQuery: (searchQuery: string) => void;
  onClickSearch: () => void;
  isProUser: boolean;
  onSetSelectedProduct: (product: Product | null) => void;

  products: Product[];
  isProductsLoading: boolean;
  productsError: string | null;
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

      {(products && products.length) !== 0 && (
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

            {/* <Button variant="outline" size="sm" className="gap-2 text-xs">
          <IconAdjustmentsHorizontal className="h-4 w-4" />
          <span>Filter</span>
        </Button> */}
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
