import React from "react";
import { NavLink } from "react-router-dom";

const DrDashboardSidebar = () => {
  const navItems = [
    { to: "/dashboard", label: "Overview" },
    { to: "appointment", label: "Appointment" },
    { to: "patients", label: "Patients" },
    { to: "results", label: "Results" },
    { to: "settings", label: "Settings" },
  ];

  return (
    <div className="h-full bg-linear-to-b from-black via-gray-800 to-gray-600 text-white p-6 flex flex-col">
      <div className="mb-12">
        <h1 className="text-2xl font-bold">MediDash</h1>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `block py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <button className="mt-auto py-3 px-4 text-sm font-medium text-red-400 hover:bg-gray-700 rounded-lg transition">
        Logout
      </button>
    </div>
  );
};

export default DrDashboardSidebar;
