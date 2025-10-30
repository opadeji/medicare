import React, { useState } from "react";
import Toggle from "../Components/Reusable/Toggle";
import { LuSearch, LuFilter, LuPlus } from "react-icons/lu";
const Patients = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const filters = ["ALL", "FEMALE", "MALE", "CHILDREN"];

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-6 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="flex justify-between items-center gap-4">
        <h1 className="text-indigo-800 dark:text-indigo-200 font-extrabold">
          Patients
        </h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search patients by name "
            className="border  border-gray-300 w-[500px] dark:border-gray-700 dark:text-gray-200 text-gray-600 rounded-lg px-3 py-1 outline-none"
          />
          <span className="absolute top-2 right-2 text-gray-700 dark:text-gray-300">
            <LuSearch />
          </span>
        </div>

        {/* Filter Buttons */}
        <div className=" flex gap-2 items-center">
          <span className="text-gray-700 dark:text-gray-300">
            <LuFilter />
          </span>

          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2  text-xs font-bold rounded-lg  transition-colors duration-200 
                ${
                  activeFilter === filter
                    ? "bg-indigo-900 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <Toggle />
      </div>
      <div className="mt-5">
        <button className="flex items-center bg-indigo-900 p-3 rounded-xl gap-2 text-white">
          <span>
            <LuPlus />
          </span>
          New patient
        </button>
      </div>
    </div>
  );
};

export default Patients;
