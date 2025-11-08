"use client";

import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { SearchIcon } from "../icons";

const Header = () => {
  const navItems = [
    { label: "Find Jobs", href: "/", active: true },
    { label: "Top Companies", href: "/companies" },
    { label: "Job Tracker", href: "/tracker" },
    { label: "My Calendar", href: "/calendar" },
    { label: "Documents", href: "/documents" },
    { label: "Messages", href: "/messages" },
    { label: "Notifications", href: "/notifications" },
  ];

  return (
    <header className="bg-gray-100 w-full">
      <div className="bg-white border-b border-gray-extra-light shadow-sm">
        <div className="px-8 py-4 flex items-center gap-8">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center">
              <div className="flex items-center justify-center">
                <Image
                  src="/icons/logo.svg"
                  alt="Logo"
                  width={41}
                  height={38}
                />
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-[25px]">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`transition-colors ${
                  item.active
                    ? "text-blue text-base font-semibold leading-[100%] tracking-[0%]"
                    : "text-gray-light text-base font-medium tracking-[0%] hover:text-gray-dark"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Search, Button, and Avatar */}
          <div className="flex items-center gap-4 shrink-0 ">
            {/* Search Bar */}
            <div className="flex items-center gap-2.5 w-[261px] h-[39px] px-4 py-[6px] bg-search-bg text-sm text-gray-light rounded-[8px]">
              <SearchIcon
                width={15.5}
                height={15.5}
                className="text-gray-medium"
              />

              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none"
              />
            </div>

            {/* Resume Builder Button */}
            <Button variant="primary" size="md">
              Resume Builder
            </Button>

            {/* User Avatar */}
            <div className="w-[38px] h-[38px] rounded-full overflow-hidden shrink-0 cursor-pointer bg-blue/20 flex items-center justify-center text-blue font-semibold text-sm">
              <Image
                src="/images/avatar.png"
                alt="User Avatar"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
