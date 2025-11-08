"use client";

import FiltrationBar from "@/components/common/FiltrationBar";
import JobCard from "@/components/common/JobCard";

const FindJobs = () => {
  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <FiltrationBar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <JobCard />
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
