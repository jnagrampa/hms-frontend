"use client";

import { FileText, Home, Settings } from "lucide-react";

const LeftNavbar = () => {
  return (
    <nav className="border-r p-4 flex flex-col gap-6">
      <div className="flex items-center gap-3 cursor-pointer hover:text-gray-500">
        <Home size={20} />
        <span className="text-sm md:text-md hidden sm:block">Home</span>
      </div>

      <div className="text-sm md:text-md flex items-center gap-3 cursor-pointer hover:text-gray-500">
        <FileText size={20} />
        <span className="hidden sm:block">Ticket Report</span>
      </div>

      <div className="text-sm md:text-md flex items-center gap-3 cursor-pointer hover:text-gray-500">
        <Settings size={20} />
        <span className="hidden sm:block">Settings</span>
      </div>
    </nav>
  );
};

export default LeftNavbar;
