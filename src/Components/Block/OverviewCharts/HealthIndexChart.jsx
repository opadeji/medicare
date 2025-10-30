import React from "react";
import { LuCalendar, LuClock, LuUser, LuArrowRight } from "react-icons/lu";

export const HealthIndexChart = () => {
  return (
    <div className="border border-gray-300 p-3 rounded-2xl shadow-lg dark:shadow-gray-600 font-sans w-60  flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xs font-bold text-gray-800 dark:text-white">
          APPOINTMENTS
        </h3>
        <LuCalendar size={20} className=" text-gray-600 dark:text-gray-300" />
      </div>

      {/* Next Appointment */}
      <div className="mt-2">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2">
          <div className="flex  items-center gap-3 text-[13px] text-blue-700 dark:text-blue-300 font-medium">
            <LuClock size={20} />
            <span>Next in 2h 15m</span>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex items-center gap-1.5 text-[14px]">
            <LuUser size={20} className=" text-gray-600 dark:text-gray-400" />
            <span className="font-medium text-gray-800 dark:text-white">
              Sarah Kim
            </span>
          </div>

          <div className="flex mt-2 items-center justify-between text-[11px] text-gray-600 dark:text-gray-300">
            <span>Cardiology • Room 204</span>
            <LuArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Footer Stats */}
      <div className="flex justify-between items-center mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
            8
          </div>
          <div className="text-[8px] text-gray-500 dark:text-gray-400">
            Today
          </div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
            42
          </div>
          <div className="text-[8px] text-gray-500 dark:text-gray-400">
            This Week
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthIndexChart;
