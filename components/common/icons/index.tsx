import React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & {
  width?: string | number;
  height?: string | number;
};

const MarkerIcon = ({ width = 9.6, height = 12, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 10 12"
    {...props}
  >
    <path
      fill="#585D6E"
      d="M4.8 0C2.16 0 0 2.16 0 4.8c0 3.24 4.2 6.9 4.38 7.08.12.06.3.12.42.12s.3-.06.42-.12C5.4 11.7 9.6 8.04 9.6 4.8 9.6 2.16 7.44 0 4.8 0m0 10.62C3.54 9.42 1.2 6.84 1.2 4.8c0-1.98 1.62-3.6 3.6-3.6s3.6 1.62 3.6 3.6-2.34 4.62-3.6 5.82m0-8.22c-1.32 0-2.4 1.08-2.4 2.4s1.08 2.4 2.4 2.4 2.4-1.08 2.4-2.4-1.08-2.4-2.4-2.4m0 3.6c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2S6 4.14 6 4.8 5.46 6 4.8 6"
    ></path>
  </svg>
);

const WatchIcon = ({ width = 12, height = 12, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      fill="#585D6E"
      d="M6 10.8a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6M6 0a6 6 0 1 1 0 12A6 6 0 0 1 6 0m.3 3v3.15L9 7.752l-.45.738L5.4 6.6V3z"
    ></path>
  </svg>
);

const TagIcon = ({ width = 12, height = 16, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 13 18"
    {...props}
  >
    <path
      stroke="#AAA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M.75 3.665c0-1.02 0-1.53.208-1.92.182-.343.474-.622.832-.796C2.198.75 2.731.75 3.798.75H9.13c1.067 0 1.6 0 2.008.199.358.174.65.453.832.796.208.39.208.9.208 1.92v12.119c0 .443 0 .664-.097.785a.47.47 0 0 1-.352.18c-.159.01-.351-.113-.736-.358l-4.53-2.889-4.53 2.888c-.384.246-.576.369-.736.36a.5.5 0 0 1-.352-.18c-.096-.122-.096-.343-.096-.786z"
    ></path>
  </svg>
);

const SearchIcon = ({ width = 17, height = 18, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 17 18"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="m16.25 16.27-2.594-2.593M12.848 6.82a6.048 6.048 0 1 1-1.467-3.97"
    ></path>
  </svg>
);

const NotificationIcon = ({ width = 20, height = 20, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M10 2.5a6.25 6.25 0 0 0-6.25 6.25v3.75L2.5 15h15l-1.25-2.5V8.75A6.25 6.25 0 0 0 10 2.5M10 17.5a2.5 2.5 0 0 1-2.5-2.5h5a2.5 2.5 0 0 1-2.5 2.5"
    />
  </svg>
);

const MessageIcon = ({ width = 20, height = 20, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M17.5 10a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0M10 5.833v4.167M10 13.333h.008"
    />
  </svg>
);

const ChevronDownIcon = ({ width = 12, height = 12, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M3 4.5l3 3 3-3"
    />
  </svg>
);

export {
  ChevronDownIcon,
  MarkerIcon,
  MessageIcon,
  NotificationIcon,
  SearchIcon,
  TagIcon,
  WatchIcon,
};
