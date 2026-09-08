import { useI18n } from "@/context/i18n-context";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border bg-card/50 py-6 text-center text-xs text-muted-foreground mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>{t("footerText")}</p>
      </div>
    </footer>
  );
}
