"use client";

import { useState, useCallback, useEffect } from "react";
import { api } from "@/lib/api";

import { User } from "@/types/user";

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await api.getUser();
      setUser(data);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to load user profile";
      setError(message);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return {
    user,
    isLoading,
    error,
    refetchUser: fetchUser,
    isSubscribed: !!user?.isSubscribed,
  };
}
