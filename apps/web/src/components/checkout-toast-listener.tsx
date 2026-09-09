"use client";

import { useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { useI18n } from "@/context/i18n-context";

export function CheckoutToastListener({
  refetchUser,
}: {
  refetchUser?: () => void;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const hasTriggeredRef = useRef(false);

  const { t } = useI18n();

  useEffect(() => {
    if (hasTriggeredRef.current) return;

    const success = searchParams.get("success");
    const canceled = searchParams.get("canceled");

    if (success === "true") {
      hasTriggeredRef.current = true;

      toast.success(`${t("toastSuccess")}`, {
        id: "stripe-success-toast",
        duration: 5000,
      });

      if (refetchUser) {
        refetchUser();
      }

      router.replace("/", { scroll: false });
    } else if (canceled === "true") {
      hasTriggeredRef.current = true;

      toast.error(`${t("toastCanceled")}`, {
        id: "stripe-cancel-toast",
        duration: 4000,
      });

      router.replace("/", { scroll: false });
    }
  }, [searchParams, router, refetchUser]);

  return null;
}
