import React from "react";
import { LuBed } from "react-icons/lu";

const Chart = () => {
  return (
    <div className=" w-88 h-60 rounded-2xl border border-gray-200 dark:bg-linear-to-br from-[#0f172a] to-[#1e293b] shadow-lg dark:shadow-gray-700 p-2 flex flex-col justify-between">
      <div className="flex items-center justify-between bg-blue-900/50 rounded-xl p-3 hover:bg-gray-800/70 transition">
        <div className="flex items-center  gap-3">
          <div className="p-2 bg-blue-500 rounded-full text-blue-300 text-2xl">
            <LuBed />
          </div>
          <div>
            <h1 className="text-gray-100 text-lg font-semibold">
              Total Bedspace
            </h1>
            <p className="text-gray-700 text-sm  dark:text-gray-200 font-bold">
              3,000
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3  bg-green-900/50 rounded-xl p-3 hover:bg-gray-800/60 transition">
        <div className="p-2 bg-green-500 rounded-full text-green-300 text-xl">
          <LuBed />
        </div>
        <div>
          <h1 className="text-gray-100 text-lg font-semibold">Available</h1>
          <p className="text-gray-700 font-bold text-sm dark:text-gray-200">
            300
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 bg-red-900/50 rounded-xl p-3 hover:bg-gray-800/60 transition">
        <div className="p-2 bg-red-500 rounded-full text-red-300 text-xl">
          <LuBed />
        </div>
        <div>
          <h1 className="text-gray-100 text-lg font-semibold">Occupied</h1>
          <p className="text-gray-700 font-bold  dark:text-gray-200 text-sm">
            2,700
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chart;
