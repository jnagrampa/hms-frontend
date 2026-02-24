import UserDropdown from "@/components/ui/custom/user-dropdown";
import Link from "next/link";

import { Home, FileText, Settings, LogOut } from "lucide-react";

const ITSupervisorDashboardPage = async () => {
  const user = {
    name: "John Doe",
    role: "IT Supervisor",
  };

  return (
    <div className="h-screen w-[max(300px,100vw)] bg-gray-50 grid grid-cols-[250px_1fr] grid-rows-[auto_1fr] overflow-hidden">
      <header className="col-span-2 border-b flex items-center justify-between py-1 px-2 sm:px-10">
        <Link href="/" className="font-semibold text-xl">
          HMS
        </Link>
        <UserDropdown name={user.name} role={user.role} />
      </header>
      {/* Left Navbar */}
      <nav className="sticky top-0 h-screen flex flex-col items-start gap-6 p-4 border-r">
        <div className="flex items-center gap-3 cursor-pointer hover:text-gray-500">
          <Home size={20} />
          <span>Home</span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-gray-500">
          <FileText size={20} />
          <span>Generate Report</span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-gray-500">
          <Settings size={20} />
          <span>Settings</span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-red-500">
          <LogOut size={20} />
          <span>Sign Out</span>
        </div>
      </nav>
      {/* Main Content Area */}
      <main className="p-6 overflow-y-auto "></main>
    </div>
  );
};

export default ITSupervisorDashboardPage;
