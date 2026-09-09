import { IconLock, IconSparkles, IconFlame } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { useI18n } from "@/context/i18n-context";
import { useCheckout } from "@/hooks/use-checkout";

interface SelectedProductNutritionProps {
  isProUser: boolean;
  selectedProduct: Product;
}

export function SelectedProductNutrition({
  isProUser,
  selectedProduct,
}: SelectedProductNutritionProps) {
  const roundMaxTwo = (num: number) => Number(Math.fround(num).toFixed(2));

  const { checkout, isLoading: isCheckoutLoading } = useCheckout();

  const { t } = useI18n();

  return (
    <div className="mt-6 border-t border-border pt-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold flex items-center gap-1.5">
          <IconFlame className="h-4 w-4 text-amber-500" />
          {t("nutritionOverview")} ({t("per100g")})
        </h3>
        {!isProUser && (
          <span className="flex items-center gap-1 text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
            <IconLock className="h-3.5 w-3.5" />
            {t("proSubscriptionRequired")}
          </span>
        )}
      </div>

      {isProUser ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 rounded-xl bg-muted/40 border border-border text-center">
            <span className="text-[11px] text-muted-foreground block">
              {t("calories")}
            </span>
            <span className="text-lg font-bold">
              {roundMaxTwo(selectedProduct.nutrition.calories)} kcal
            </span>
          </div>
          <div className="p-3 rounded-xl bg-muted/40 border border-border text-center">
            <span className="text-[11px] text-muted-foreground block">
              {t("protein")}
            </span>
            <span className="text-lg font-bold">
              {roundMaxTwo(selectedProduct.nutrition.protein)} g
            </span>
          </div>
          <div className="p-3 rounded-xl bg-muted/40 border border-border text-center">
            <span className="text-[11px] text-muted-foreground block">
              {t("carbs")}
            </span>
            <span className="text-lg font-bold">
              {roundMaxTwo(selectedProduct.nutrition.carbs)} g
            </span>
          </div>
          <div className="p-3 rounded-xl bg-muted/40 border border-border text-center">
            <span className="text-[11px] text-muted-foreground block">
              {t("fat")}
            </span>
            <span className="text-lg font-bold">
              {roundMaxTwo(selectedProduct.nutrition.fat)} g
            </span>
          </div>
          <div className="p-3 rounded-xl bg-muted/40 border border-border text-center">
            <span className="text-[11px] text-muted-foreground block">
              {t("saturatedFat")}
            </span>
            <span className="text-lg font-bold">
              {roundMaxTwo(selectedProduct.nutrition.saturatedFat)} g
            </span>
          </div>
          <div className="p-3 rounded-xl bg-muted/40 border border-border text-center">
            <span className="text-[11px] text-muted-foreground block">
              {t("sugars")}
            </span>
            <span className="text-lg font-bold">
              {roundMaxTwo(selectedProduct.nutrition.sugars)} g
            </span>
          </div>
          <div className="p-3 rounded-xl bg-muted/40 border border-border text-center">
            <span className="text-[11px] text-muted-foreground block">
              {t("salt")}
            </span>
            <span className="text-lg font-bold">
              {roundMaxTwo(selectedProduct.nutrition.salt)} g
            </span>
          </div>
        </div>
      ) : (
        <div className="relative rounded-xl border border-dashed border-border bg-muted/20 p-10 text-center overflow-hidden">
          <div className="filter blur-xs opacity-30 select-none grid grid-cols-4 gap-2 mb-2">
            <div className="p-2 bg-muted rounded">539 kcal</div>
            <div className="p-2 bg-muted rounded">6.3g</div>
            <div className="p-2 bg-muted rounded">57.5g</div>
            <div className="p-2 bg-muted rounded">30.9g</div>
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-background/60 backdrop-blur-2xs">
            <IconLock className="h-6 w-6 text-amber-500 mb-1" />
            <p className="text-xs font-semibold">
              {t("macroInsightsLockedTitle")}
            </p>
            <p className="text-[11px] text-muted-foreground mb-3 max-w-xs">
              {t("macroInsightsLockedDescription")}
            </p>
            <Button
              size="sm"
              onClick={async () => {
                await checkout();
              }}
              className="gap-1.5 text-xs bg-amber-600 hover:bg-amber-700 text-white"
            >
              <IconSparkles className="h-3.5 w-3.5" />
              {isCheckoutLoading
                ? t("checkoutLoading") || "Redirecting..."
                : t("unlockProAccess")}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
