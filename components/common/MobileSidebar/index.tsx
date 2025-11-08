"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { CloseIcon } from "../icons";
import Sidebar from "../Sidebar";

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  isOpen,
  onClose,
  navItems,
}) => {
  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay/Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] max-w-[80vw] bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Header with Close Button */}
        <div className="sticky top-0 bg-white border-b border-gray-extra-light px-4 py-4 flex items-center justify-between z-99">
          <h2 className="text-lg font-semibold text-gray-dark">Menu</h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 hover:bg-gray-secondary rounded-full transition-colors"
            aria-label="Close menu"
          >
            <CloseIcon width={20} height={20} className="text-gray-dark" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="p-4">
          <Sidebar />
        </div>
        {/* Navigation Links */}
        <nav className="px-4 py-4 border-b border-gray-extra-light">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`block py-2.5 px-3 rounded-md transition-colors ${
                    item.active
                      ? "text-blue text-base font-semibold leading-[100%] tracking-[0%] bg-blue/10"
                      : "text-gray-light text-base font-medium tracking-[0%] hover:text-gray-dark hover:bg-gray-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileSidebar;
