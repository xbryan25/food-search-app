export const getNutriscoreBadgeColor = (score: string) => {
  switch (score) {
    case "A":
      return "bg-emerald-600 text-white dark:bg-emerald-500";
    case "B":
      return "bg-lime-600 text-white dark:bg-lime-500";
    case "C":
      return "bg-amber-500 text-white dark:bg-amber-400";
    case "D":
      return "bg-orange-500 text-white dark:bg-orange-400";
    case "E":
      return "bg-red-600 text-white dark:bg-red-500";
    default:
      return "bg-muted text-muted-foreground";
  }
};
