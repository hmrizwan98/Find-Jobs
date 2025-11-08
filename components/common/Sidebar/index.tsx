"use client";

import NextImage from "next/image";
import { useState } from "react";
import { ChevronDownIcon } from "../icons";

const Sidebar = () => {
  const [isCalendarExpanded, setIsCalendarExpanded] = useState(false);

  const stats = [
    { label: "Profile Visitors", count: 140 },
    { label: "Resume Viewers", count: 20 },
    { label: "My Jobs", count: 88 },
  ];

  return (
    <aside className="w-full lg:w-[280px] grid gap-[10px]">
      {/* Profile Card */}
      <div className="bg-white rounded-[10px] overflow-hidden relative pt-16 pb-4 px-4 w-full">
        {/* Background Image */}
        <div className="absolute top-0 left-0 right-0 h-24">
          <NextImage
            src="/images/bg-img.png"
            alt="Background"
            width={280}
            height={96}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 from-transparent via-transparent to-white h-[100px]" />
        </div>

        {/* Profile Picture */}
        <div className="relative flex justify-center -mt-3 mb-1 z-10">
          <div className="w-[86px] h-[86px] rounded-full overflow-hidden bg-gray-secondary relative shadow-md">
            <NextImage
              src="/images/profile.png"
              alt="Albert Flores"
              width={80}
              height={80}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="text-center space-y-1.5 relative z-10">
          <h3 className="text-lg font-semibold text-gray-dark leading-tight">
            Albert Flores
          </h3>
          <p className="text-sm text-gray-dark whitespace-normal max-w-[236px]">
            Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
          </p>
          <p className="text-xs text-gray-medium">Clinton, Maryland</p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white rounded-[10px] p-0 lg:p-5">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex items-center justify-between py-[6px] ${
              index < stats.length - 1
                ? "border-b border-gray-extra-light"
                : "py-0 "
            }`}
          >
            <span className="text-sm font-normal text-gray-dark">
              {stat.label}
            </span>
            <span className="text-md font-normal text-blue">{stat.count}</span>
          </div>
        ))}
      </div>

      {/* My Calendar Section */}
      <div className="bg-white rounded-[10px] p-[10px] hidden lg:block">
        <button
          type="button"
          onClick={() => setIsCalendarExpanded(!isCalendarExpanded)}
          className="w-full flex items-center justify-between hover:opacity-80 transition-opacity"
        >
          <div className="flex flex-col items-start">
            <span className="text-md font-semibold text-gray-dark">
              My calendar
            </span>
            <span className="text-sm font-normal text-gray-medium">
              Upcoming Interviews
            </span>
          </div>
          <ChevronDownIcon
            width={12}
            height={12}
            className={`text-gray-medium transition-transform ${
              isCalendarExpanded ? "rotate-180" : ""
            }`}
          />
        </button>

        {isCalendarExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-extra-light">
            <p className="text-sm text-gray-medium">
              Calendar content goes here...
            </p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
