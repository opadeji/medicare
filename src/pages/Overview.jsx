import React from "react";
import { LuBell } from "react-icons/lu";
import Toggle from "../Components/Reusable/Toggle";
import DiagnosisChart from "../Components/Block/OverviewCharts/DiagnosisChart";
import PatientsChart from "../Components/Block/OverviewCharts/PatientsChart";
import HealthIndexChart from "../Components/Block/OverviewCharts/HealthIndexChart";
import Announcement from "../Components/Block/OverviewCharts/Announcement";
import Eotm from "../Components/Block/OverviewCharts/Eotm";
import Chart from "../Components/Block/OverviewCharts/Chart";
import Motivation from "../Components/Block/OverviewCharts/Motivation";

const Overview = () => {
  return (
    <div className="">
      {/* Top Bar */}
      <header className="bg-gray-200 dark:bg-indigo-950 rounded-2xl p-4 shadow-md transition-colors duration-300">
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
          <input
            type="text"
            placeholder="Search pathology results..."
            className="w-[900px] border border-gray-300 dark:border-gray-700 rounded-xl py-2 px-4 bg-white dark:bg-white text-gray-800  text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
          />

          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full border border-gray-400 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-indigo-800 transition">
              <LuBell className="text-gray-600 dark:text-gray-200 text-lg" />
            </button>
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gray-400 rounded-full"></div>
              <div className="leading-tight hidden sm:block">
                <h1 className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                  Ayo Ogunrinde
                </h1>
                <p className="text-xs text-indigo-600 dark:text-indigo-300">
                  Doctor
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Greeting + Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
        <div>
          <h1 className="text-xl font-extrabold text-indigo-700 dark:text-indigo-300">
            Welcome, Ayo
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            How are you feeling today?
          </p>
        </div>
        <Toggle />
      </div>

      {/* Charts - Responsive Grid */}
      <div className="flex gap-6 ">
        <div>
          <div className="flex gap-6 mt-2">
            <DiagnosisChart />
            <PatientsChart />
            <HealthIndexChart />
          </div>
          <div className="flex mt-2 gap-6">
            <Announcement />
            <Chart />
          </div>
        </div>
        <div className="mt-2">
          <Eotm />
        </div>
      </div>
      <div>
        <Motivation />
      </div>
    </div>
  );
};

export default Overview;
