import React from "react";
import { NavLink } from "react-router-dom";
import {
  LuLayoutDashboard,
  LuCalendarCheck,
  LuUsers,
  LuFile,
  LuSettings,
} from "react-icons/lu";

const DrDashboardSidebar = () => {
  const navItems = [
    {
      to: "/dashboard",
      label: "Overview",
      icon: <LuLayoutDashboard size={22} />,
    },
    {
      to: "/dashboard/appointment",
      label: "Appointment",
      icon: <LuCalendarCheck size={22} />,
    },
    {
      to: "/dashboard/patients",
      label: "Patients",
      icon: <LuUsers size={22} />,
    },
    {
      to: "/dashboard/results",
      label: "Results",
      icon: <LuFile size={22} />,
    },
    {
      to: "/dashboard/settings",
      label: "Settings",
      icon: <LuSettings size={22} />,
    },
  ];

  return (
    <div className="h-screen bg-linear-to-b from-gray-400 via-gray-200 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 flex flex-col p-6 text-gray-800 dark:text-gray-100 border-r border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          MediDash
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-3">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 rounded-lg text-base font-medium transition-all duration-200 ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <button className="mt-auto py-3 px-4 text-sm font-medium text-red-500 hover:bg-indigo-100 dark:hover:bg-gray-700 rounded-lg transition">
        Logout
      </button>
    </div>
  );
};

export default DrDashboardSidebar;
