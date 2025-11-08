"use client";

import Button from "@/components/ui/button";
import React from "react";
import { ChevronDownIcon, FilterIcon, SearchIcon } from "../icons";

const FiltrationBar: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-[10px] p-4 sm:p-5">
      {/* Mobile Version - Search Input + Filter Icon */}
      <div className="flex items-center gap-3 lg:hidden">
        {/* Search Input with Icon */}
        <div className="flex-1 min-w-0 flex items-center gap-2.5 h-[44px] px-4 bg-white border border-gray-extra-light rounded-[8px] focus-within:ring-2 focus-within:ring-blue/20 focus-within:border-blue transition-all">
          <SearchIcon
            width={18}
            height={18}
            className="text-gray-medium shrink-0"
          />
          <input
            type="text"
            placeholder="Job Title, Company, or Keywords"
            className="flex-1 min-w-0 bg-transparent outline-none text-sm text-gray-dark placeholder:text-placeholder"
          />
        </div>

        {/* Filter Icon Button */}
        <button
          type="button"
          className="w-[44px] h-[44px] flex items-center justify-center bg-white border border-gray-extra-light rounded-[8px] hover:bg-gray-secondary hover:border-gray-medium transition-colors shrink-0"
          aria-label="Open filters"
        >
          <FilterIcon width={20} height={20} className="text-gray-medium" />
        </button>
      </div>

      {/* Desktop Version - Original Design */}
      <div className="hidden lg:flex flex-col lg:flex-row items-center gap-3 lg:gap-0">
        {/* Search Input */}
        <div className="flex-1 min-w-0">
          <input
            type="text"
            placeholder="Job Title, Company, or Keywords"
            className="w-full h-[36px] px-3 bg-white rounded-[5px] outline-none text-xs text-gray-dark placeholder:text-gray-light"
          />
        </div>

        {/* Location Dropdown */}
        <div className="flex items-center justify-center flex-1 lg:flex-initial lg:w-[178px] min-w-0 mx-0 lg:mx-3 border border-y-0 border-x-gray-outline">
          <button
            type="button"
            className="w-full max-w-[116px] h-[36px] bg-white text-sm text-gray-medium flex items-center justify-between cursor-default"
            tabIndex={-1}
            disabled
          >
            <span className="truncate">Select Location</span>
            <ChevronDownIcon
              width={16}
              height={16}
              className="text-gray-medium ml-2"
            />
          </button>
        </div>

        {/* Job Type Dropdown */}
        <div className="flex-1 lg:flex-initial lg:w-[120px] min-w-0 mx-0 lg:mx-3">
          <button
            type="button"
            className="w-full max-w-[116px] h-[36px] px-3 bg-white rounded-[5px] text-xs text-gray-medium flex items-center justify-between cursor-default"
            tabIndex={-1}
            disabled
          >
            <span className="truncate">Job Type</span>
            <ChevronDownIcon
              width={16}
              height={16}
              className="text-gray-medium ml-2"
            />
          </button>
        </div>

        {/* Search Button */}
        <Button
          variant="primary"
          size="md"
          className="flex items-center justify-center gap-2 px-[34px]"
          tabIndex={-1}
        >
          <SearchIcon width={15} height={15} className="text-white" />
          <span>Search</span>
        </Button>
      </div>
    </div>
  );
};

export default FiltrationBar;
