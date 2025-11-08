"use client";

import Button from "@/components/ui/button";
import React from "react";

interface QuickFiltersProps {
  filters?: string[];
  onFilterClick?: (filter: string) => void;
}

const QuickFilters: React.FC<QuickFiltersProps> = ({
  filters = ["Frontend", "Backend", "Graphic Designer"],
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2 mt-4">
      <span className="text-sm text-gray-dark mr-2">Similar:</span>
      {filters.map((filter) => (
        <Button
          key={filter}
          variant="outline"
          size="sm"
          className="px-[15px] py-2 text-xs"
        >
          {filter}
        </Button>
      ))}
    </div>
  );
};

export default QuickFilters;
