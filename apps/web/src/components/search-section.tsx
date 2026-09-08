import { IconSearch } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";

interface SearchSectionProps {
  searchQuery: string;
  onSetSearchQuery: (searchQuery: string) => void;
  onClickSearch: () => void;
}

export function SearchSection({
  searchQuery,
  onSetSearchQuery,
  onClickSearch,
}: SearchSectionProps) {
  return (
    <section className="flex flex-col items-center text-center max-w-2xl mx-auto gap-3 pt-4 sm:pt-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
        Search Food & Nutritional Data
      </h1>
      <p className="text-sm sm:text-base text-muted-foreground">
        Explore Open Food Facts dataset. Unlock instant macro insights,
        Nutri-Score analysis, and ingredients breakdown.
      </p>

      <div className="relative w-full mt-4">
        <div className="relative flex items-center">
          <IconSearch className="absolute left-4 h-5 w-5 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSetSearchQuery(e.target.value)}
            placeholder="Search by product name, brand, or barcode..."
            className="w-full h-12 rounded-xl border border-input bg-card pl-11 pr-24 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shadow-sm transition-all"
          />
          <div className="absolute right-2 flex items-center gap-1">
            <Button
              size="sm"
              className="h-8 px-3 text-xs"
              onClick={onClickSearch}
            >
              Search
            </Button>

            <Button
              size="sm"
              className="h-8 px-3 text-xs"
              onClick={onClickSearch}
            >
              Clear results
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
