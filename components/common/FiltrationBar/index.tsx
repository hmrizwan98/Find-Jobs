"use client";

import Button from "@/components/ui/button";
import React from "react";
import { ChevronDownIcon, SearchIcon } from "../icons";

const FiltrationBar: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-[10px] p-5">
      <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-0">
        {/* Search Input */}
        <div className="flex-1 min-w-0">
          <input
            type="text"
            placeholder="Job Title, Company, or Keywords"
            className="w-full h-[36px] px-3 bg-white  rounded-[5px] outline-none text-xs text-gray-dark placeholder:text-gray-light"
          />
        </div>

        {/* Location Dropdown */}
        <div className="flex items-center justify-center flex-1 lg:flex-initial lg:w-[178px] min-w-0 mx-0 lg:mx-3 border border-y-0 border-x-gray-outline">
          <button
            type="button"
            className="w-full max-w-[116px]  h-[36px]  bg-white text-sm text-gray-medium flex items-center justify-between cursor-default"
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
