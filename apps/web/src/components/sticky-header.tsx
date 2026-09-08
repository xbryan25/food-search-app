"use client";

import { useState } from "react";
import {
  IconLanguage,
  IconCheck,
  IconSparkles,
  IconMeat,
} from "@tabler/icons-react";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { Button } from "@/components/ui/button";

import { useI18n } from "@/context/i18n-context";
import { Language } from "@/i18n/dictionaries";

import { cn } from "@/lib/utils";

interface StickyHeaderProps {
  isProUser: boolean;
  onTogglePro: () => void;
}

const languages = [
  { code: "EN", name: "English" },
  { code: "NL", name: "Nederlands" },
  { code: "DE", name: "Deutsch" },
  { code: "FR", name: "Français" },
];

export function StickyHeader({ isProUser, onTogglePro }: StickyHeaderProps) {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const { language, setLanguage, t } = useI18n();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold shadow-sm">
            <IconMeat className="h-6 w-6" />
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight">FoodSearch</span>
            <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs font-semibold uppercase text-muted-foreground">
              Demo
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center gap-1.5 px-2.5 text-xs font-medium"
            >
              <IconLanguage className="h-4 w-4 text-muted-foreground" />
              <span>{language}</span>
            </Button>

            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-lg border border-border bg-card p-1 shadow-lg ring-1 ring-black/5 dark:ring-white/10 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as Language);
                      setIsLangMenuOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-left text-xs transition-colors ",
                      language === lang.code
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                    )}
                  >
                    <span>{lang.name}</span>
                    {language === lang.code && (
                      <IconCheck className="h-3.5 w-3.5 text-accent" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Button
            variant={isProUser ? "default" : "outline"}
            size="sm"
            onClick={onTogglePro}
            className="gap-1.5 text-xs font-medium"
          >
            <IconSparkles className="h-3.5 w-3.5 text-amber-500" />
            <span>{isProUser ? t("proPlan") : t("upgradeToPro")}</span>
          </Button>

          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
}
