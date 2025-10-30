import React from "react";
import DrDashboardSidebar from "../Components/Reusable/DrDashboardSidebar";
import { Outlet } from "react-router-dom";
const DrDashboardLayout = () => {
  return (
    <div className="flex h-screen max-w-[1900px] mx-auto">
      <div>
        <DrDashboardSidebar />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DrDashboardLayout;
