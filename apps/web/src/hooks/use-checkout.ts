"use client";

import { useState, useCallback } from "react";
import { api } from "@/lib/api";

export function useCheckout() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const checkout = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const { checkoutUrl } = await api.createCheckoutSession();

      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        throw new Error("No checkout URL returned from server");
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to initiate checkout";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    checkout,
    isLoading,
    error,
  };
}
