import React from "react";
import DrDashboardSidebar from "../Components/Reusable/DrDashboardSidebar";
import { Outlet } from "react-router-dom";

const DrDashboardLayout = () => {
  return (
    <div className="flex h-screen bg-white dark:bg-gray-900">
      {/* Sidebar - Fixed width, scrollable content */}
      <aside className="hidden md:block w-64 flex-shrink-0">
        <DrDashboardSidebar />
      </aside>

      {/* Main Content - Takes remaining space */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-[1300px] mx-auto p-4 md:p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DrDashboardLayout;
