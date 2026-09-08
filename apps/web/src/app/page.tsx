"use client";

import { StickyHeader } from "@/components/sticky-header";
import { Footer } from "@/components/footer";
import { SelectedProduct } from "@/components/selected-product";
import { MainSection } from "@/components/main-section";

import { Product } from "@/types/product";

import { useState } from "react";
import { useProductSearch } from "@/hooks/use-product-search";
import { useI18n } from "@/context/i18n-context";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProUser, setIsProUser] = useState(false);
  // const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const { language } = useI18n();

  const {
    products,
    isLoading: isProductsLoading,
    error: productsError,
    hasSearched,
    search,
    setProducts,
    setHasSearched,
  } = useProductSearch(language);

  const handleSearch = () => {
    search(searchQuery);
  };

  const clearResults = () => {
    setProducts([]);
    setHasSearched(false);

    setSearchQuery("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <StickyHeader
        isProUser={isProUser}
        onTogglePro={() => setIsProUser((prev) => !prev)}
      />

      <MainSection
        searchQuery={searchQuery}
        onSetSearchQuery={(searchQuery) => setSearchQuery(searchQuery)}
        isProUser={isProUser}
        onSetSelectedProduct={setSelectedProduct}
        onClickSearch={handleSearch}
        onClickClearResults={clearResults}
        products={products}
        isProductsLoading={isProductsLoading}
        hasSearched={hasSearched}
        productsError={productsError}
      />

      {selectedProduct && (
        <SelectedProduct
          isProUser={isProUser}
          onTogglePro={() => setIsProUser((prev) => !prev)}
          selectedProduct={selectedProduct}
          onSetSelectedProduct={(product) => setSelectedProduct(product)}
        />
      )}

      <Footer />
    </div>
  );
}
