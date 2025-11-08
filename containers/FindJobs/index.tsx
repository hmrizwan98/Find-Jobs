"use client";

import FiltrationBar from "@/components/common/FiltrationBar";
import JobCard from "@/components/common/JobCard";
import QuickFilters from "@/components/common/QuickFilters";
import SectionHeader from "@/components/common/SectionHeader";
import Sidebar from "@/components/common/Sidebar";

const FindJobs = () => {
  // Mock data - replace with actual data fetching
  const featuredJobs = Array(5).fill(null);
  const recommendedJobs = Array(8).fill(null);
  const latestJobs = Array(10).fill(null);

  return (
    <div className="bg-gray-main min-h-screen">
      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar - Hidden on Mobile */}
          <div className="hidden lg:block lg:w-[280px] shrink-0">
            <Sidebar />
          </div>

          {/* Right Content Area */}
          <div className="flex-1 min-w-0">
            {/* Welcome Section */}
            <div className="mb-6">
              <h1 className="text-[22px] font-semibold text-gray-dark mb-2">
                Find your Dream Job,{" "}
                <span className="font-semibold text-blue">Albert!</span>
              </h1>
              <p className="text-sm text-gray-medium">
                Explore the latest job openings and apply for the best
                opportunities available today!
              </p>
            </div>

            {/* Filtration Bar */}
            <div className="mb-4">
              <FiltrationBar />
              <QuickFilters />
            </div>
            <hr className="border-gray-extra-light mb-3" />
            {/* Featured Jobs Section */}
            <section className="mb-8">
              <SectionHeader
                title="Featured Jobs"
                seeAllHref="/jobs/featured"
              />
              {/* Mobile: Horizontal Slider */}
              <div className="flex lg:hidden gap-4 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
                {featuredJobs.map((_, index) => (
                  <div
                    key={`featured-${index}`}
                    className="min-w-[280px] shrink-0"
                  >
                    <JobCard />
                  </div>
                ))}
              </div>
              {/* Desktop: Grid */}
              <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 grid-cols-5-custom gap-4 auto-rows-fr">
                {featuredJobs.map((_, index) => (
                  <JobCard key={`featured-${index}`} />
                ))}
              </div>
            </section>

            {/* Recommended Jobs Section */}
            <section className="mb-8">
              <SectionHeader
                title="Recommended Jobs"
                seeAllHref="/jobs/recommended"
              />
              {/* Mobile: Horizontal Slider */}
              <div className="flex lg:hidden gap-4 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
                {recommendedJobs.map((_, index) => (
                  <div
                    key={`recommended-${index}`}
                    className="min-w-[280px] shrink-0"
                  >
                    <JobCard />
                  </div>
                ))}
              </div>
              {/* Desktop: Grid */}
              <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 grid-cols-5-custom gap-4 auto-rows-fr">
                {recommendedJobs.map((_, index) => (
                  <JobCard key={`recommended-${index}`} />
                ))}
              </div>
            </section>

            {/* Latest Jobs Section */}
            <section className="mb-8">
              <SectionHeader title="Latest Jobs" seeAllHref="/jobs/latest" />
              {/* Responsive Grid - 1 column on mobile, grid on larger screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-5-custom gap-4 auto-rows-fr">
                {latestJobs.map((_, index) => (
                  <JobCard key={`latest-${index}`} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
