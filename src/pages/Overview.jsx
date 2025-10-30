import React from "react";
import { LuBell } from "react-icons/lu";
import Toggle from "../Components/Reusable/Toggle";
import DiagnosisChart from "../Components/Block/OverviewCharts/DiagnosisChart";
import PatientsChart from "../Components/Block/OverviewCharts/PatientsChart";
import HealthIndexChart from "../Components/Block/OverviewCharts/HealthIndexChart";

const Overview = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-4 py-3 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Top bar */}
      <header className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center bg-gray-200 dark:bg-indigo-950 shadow-md rounded-2xl p-4">
        {/* Search */}
        <input
          type="text"
          placeholder="Search pathology results..."
          className="w-full md:w-[700px] border border-gray-300 dark:border-gray-700 rounded-xl py-2 px-4 bg-white text-gray-800  text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Right side */}
        <div className="flex items-center gap-5">
          <button className=" border border-gray-400 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-indigo-800 transition">
            <LuBell className="text-gray-600 dark:text-gray-200 text-lg" />
          </button>

          <div className="h-6 w-px bg-gray-300 dark:bg-gray-700"></div>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gray-400 rounded-full"></div>
            <div className="leading-tight">
              <h1 className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                Ayo Ogunrinde
              </h1>
              <p className="text-xs text-indigo-600 dark:text-indigo-300">
                Doctor
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Greeting + Toggle */}
      <section className="flex flex-col sm:flex-row items-center justify-between  p-4">
        <div>
          <h1 className="text-lg font-extrabold text-indigo-700 dark:text-indigo-300">
            Welcome, Ayo
          </h1>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            How are you feeling today?
          </p>
        </div>
        <div className="mt-3 sm:mt-0">
          <Toggle />
        </div>
      </section>

      {/* chart Sections */}
      <section className="flex gap-5">
        <DiagnosisChart />
        <PatientsChart />
        <HealthIndexChart />
      </section>
    </div>
  );
};

export default Overview;
