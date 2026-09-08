import { Product, SearchResponse } from "@/types/product";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetcher<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message ||
        `API Error: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}

export const api = {
  searchProducts: (query: string, lang: string = "EN") =>
    fetcher<SearchResponse>(
      `/search?query=${encodeURIComponent(query)}&lang=${lang}`,
    ),

  getProductById: (id: string, lang: string = "EN") =>
    fetcher<Product>(`/products/${id}?lang=${lang}`),
};
