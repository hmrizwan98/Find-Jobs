"use client";

import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon, SearchIcon } from "../icons";
import MobileSidebar from "../MobileSidebar";

const Header = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

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
    <>
      <header className="w-full bg-white border-b border-gray-extra-light shadow-sm">
        {/* Desktop Header */}
        <div className="hidden lg:block">
          <div className="max-w-[1440px] mx-auto px-8 py-4">
            <div className="flex items-center justify-between gap-8">
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
              <nav className="flex items-center gap-[25px] flex-1 min-w-0">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`transition-colors whitespace-nowrap ${
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
              <div className="flex items-center gap-4 shrink-0">
                {/* Search Bar */}
                <div className="flex items-center gap-2.5 w-[261px] h-[39px] px-4 py-[6px] bg-search-bg text-sm text-gray-light rounded-[8px] shrink-0">
                  <SearchIcon
                    width={15.5}
                    height={15.5}
                    className="text-gray-medium shrink-0"
                  />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none flex-1 min-w-0"
                  />
                </div>

                {/* Resume Builder Button */}
                <Button variant="primary" size="md" className="shrink-0">
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
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden">
          <div className="px-4 py-3 flex items-center gap-3">
            <div className="flex items-center gap-2 shrink-0">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/icons/logo.svg"
                  alt="Logo"
                  width={32}
                  height={30}
                />
              </Link>

              {/* Burger Menu */}
              <button
                type="button"
                onClick={() => setIsMobileSidebarOpen(true)}
                className="p-2 hover:bg-gray-secondary rounded-full transition-colors"
                aria-label="Open menu"
              >
                <MenuIcon width={24} height={24} className="text-gray-dark" />
              </button>
            </div>

            {/* Search Bar */}
            <div className="flex items-center gap-2.5 flex-1 min-w-0 h-[39px] px-4 py-[6px] bg-white border border-gray-extra-light text-sm text-gray-light rounded-[8px]">
              <SearchIcon
                width={15.5}
                height={15.5}
                className="text-gray-medium shrink-0"
              />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none flex-1 min-w-0 text-gray-dark placeholder:text-placeholder"
              />
            </div>

            {/* User Avatar */}
            <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 cursor-pointer bg-blue/20 flex items-center justify-center text-blue font-semibold text-sm">
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
      </header>

      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
        navItems={navItems}
      />
    </>
  );
};

export default Header;
