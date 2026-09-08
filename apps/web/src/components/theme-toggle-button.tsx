"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useState, useEffect } from "react";

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  const themeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        disabled
        className=" bg-white hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-800 border-2 dark:border-gray-200 border-gray-500 "
      >
        <IconSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-black" />
        <IconMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 " />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      size="icon"
      onClick={themeChange}
      className=" bg-white hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-800 border-2 dark:border-gray-200 border-gray-500 "
    >
      <IconSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-black" />
      <IconMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 " />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
