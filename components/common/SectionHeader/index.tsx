import Link from "next/link";
import React from "react";

interface SectionHeaderProps {
  title: string;
  seeAllHref?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  seeAllHref = "#",
}) => {
  return (
    <div className="flex items-center gap-[15px]  mb-4">
      <h2 className="text-lg font-normal text-gray-dark">{title}</h2>
      <Link
        href={seeAllHref}
        className="text-sm text-blue underline hover:text-blue/80 transition-colors"
      >
        See {title}
      </Link>
    </div>
  );
};

export default SectionHeader;
