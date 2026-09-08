"use client";

import { StickyHeader } from "@/components/sticky-header";
import { Footer } from "@/components/footer";
import { SelectedProduct } from "@/components/selected-product";
import { MainSection } from "@/components/main-section";

import { Product } from "@/types/product";

import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProUser, setIsProUser] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <StickyHeader
        isProUser={isProUser}
        onTogglePro={() => setIsProUser((prev) => !prev)}
        selectedLanguage={selectedLanguage}
        onLanguageChange={(langCode) => setSelectedLanguage(langCode)}
      />

      <MainSection
        searchQuery={searchQuery}
        onSetSearchQuery={(searchQuery) => setSearchQuery(searchQuery)}
        isProUser={isProUser}
        onSetSelectedProduct={(product) => setSelectedProduct(product)}
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
