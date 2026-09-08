// apps/web/hooks/use-product-search.ts
"use client";

import { useState, useCallback } from "react";
import { api } from "@/lib/api";

import { Product } from "@/types/product";

export function useProductSearch(language: string = "EN") {
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(
    async (query: string) => {
      if (!query.trim()) {
        setProducts([]);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        setHasSearched(true);
        const data = await api.searchProducts(query, language);
        setProducts(data.products);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "An unexpected error occurred";
        setError(message);
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    },
    [language],
  );

  return {
    products,
    isLoading,
    error,
    hasSearched,
    search,
    setProducts,
    setHasSearched,
  };
}
