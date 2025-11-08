import React, { useState } from "react";
import Toggle from "../Components/Reusable/Toggle";
import { LuSearch, LuFilter, LuPlus, LuEllipsis } from "react-icons/lu";
const Patients = () => {
  const dummyPatients = [
    { id: 1, name: "Ayodeji", gender: "male" },
    { id: 2, name: "Esther", gender: "female" },
    { id: 3, name: "Daniel", gender: "male" },
    { id: 4, name: "Samuel", gender: "male" },
    { id: 5, name: "Victor", gender: "male" },
    { id: 6, name: "Subomi", gender: "male" },
    { id: 7, name: "Esesosa", gender: "female" },
    { id: 8, name: "Sewa", gender: "female" },
    { id: 9, name: "Dotun", gender: "male" },
    { id: 10, name: "Ife", gender: "male" },
  ];
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const filters = ["ALL", "FEMALE", "MALE", "CHILDREN"];
  // Filter patients
  const filteredPatients = dummyPatients.filter((patient) => {
    const matchesFilter =
      activeFilter === "ALL" ||
      (activeFilter === "FEMALE" &&
        patient.gender.toLowerCase() === "female") ||
      (activeFilter === "MALE" && patient.gender.toLowerCase() === "male") ||
      (activeFilter === "CHILDREN" && false);

    const matchesSearch = patient.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className=" mx-auto px-4 py-1  bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="flex justify-between items-center gap-4">
        <h1 className="text-indigo-800 dark:text-indigo-200 font-extrabold">
          Patients
        </h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search patients by name "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
      <div className="max-h-[540px] overflow-auto flex p-5 flex-wrap gap-6 mt-4">
        {filteredPatients.map((data, i) => (
          <div
            key={i}
            className="flex flex-col border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex-1 min-w-[calc(20%-1.2rem)] max-w-[calc(20%-1.2rem)] dark:shadow-gray-600"
          >
            <div className="flex justify-end text-gray-500 dark:text-gray-300">
              <LuEllipsis className="cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition" />
            </div>

            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-linear-to-br from-indigo-300 via-indigo-500 to-indigo-700 dark:from-indigo-800 dark:via-indigo-700 dark:to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-inner ring-2 ring-indigo-400/30 dark:ring-indigo-700/40">
                {data.name.charAt(0).toUpperCase()}
              </div>

              <h1 className="mt-2 font-bold text-gray-800 dark:text-gray-100 text-base tracking-wide text-center">
                {data.name}
              </h1>

              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-300 mb-2 capitalize text-center">
                {data.gender}
              </p>

              <div className="h-px w-24 bg-gray-200 dark:bg-gray-700 mb-2"></div>

              <div className="flex flex-col gap-2 w-full items-center">
                <button className="w-4/5 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 font-semibold rounded-full text-gray-700 dark:text-gray-200 transition">
                  Info
                </button>
                <button className="w-4/5 bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 font-semibold rounded-full transition">
                  Diagnose
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPatients.length === 0 && (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          No patients found matching your criteria.
        </div>
      )}
    </div>
  );
};

export default Patients;
