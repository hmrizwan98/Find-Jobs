import Button from "@/components/ui/button";
import Image from "next/image";
import { MarkerIcon, TagIcon, WatchIcon } from "../icons";

const JobCard = () => {
  return (
    <div className="w-full outline outline-gray-extra-light rounded-[10px] px-5 py-[10px] bg-white flex flex-col gap-2.5">
      <div className="flex flex-col gap-[5px]">
        <h3 className="font-semibold text-[10px] text-gray-dark">Promoted</h3>
        <div className="flex gap-[10px]">
          <div className="rounded-[9px] bg-gray-secondary border-[0.76px] border-white w-10 h-10 py-[6px] px-2 flex items-center justify-center">
            <Image
              src="/icons/job.svg"
              alt="Teams Logo"
              width={23}
              height={21}
            />
          </div>
          <div>
            <h1 className="text-sm text-gray-dark">UI/UX Designer</h1>
            <p className="text-xs text-gray-dark">Teams</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2.5">
            <MarkerIcon />{" "}
            <span className="text-gray-medium text-xs">
              Seattle, USA (Remote)
            </span>
          </div>
          <div className="flex items-center flex-1">
            <WatchIcon />
            <div className="flex items-center ml-2.5">
              <span className="text-gray-medium text-xs border-r border-gray-medium pr-1">
                1 day ago
              </span>{" "}
              <span className="text-blue text-xs pl-1">22 applicant</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Button size="xs">Apply Now</Button>
        <TagIcon />
      </div>
    </div>
  );
};
export default JobCard;
