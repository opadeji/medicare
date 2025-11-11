import React, { useState } from "react";
import {
  LuSearch,
  LuFilter,
  LuDownload,
  LuEye,
  LuCalendar,
  LuUser,
  LuFileText,
  LuBell,
} from "react-icons/lu";
import Toggle from "../Components/Reusable/Toggle";

const Results = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  // Mock data - replace with API later
  const labResults = [
    {
      id: 1,
      patient: "Aisha Bello",
      test: "Blood Panel",
      date: "Nov 10, 2025",
      status: "abnormal",
      result: "High glucose levels",
    },
    {
      id: 2,
      patient: "Chukwudi Okeke",
      test: "Urine Analysis",
      date: "Nov 9, 2025",
      status: "normal",
      result: "All parameters normal",
    },
    {
      id: 3,
      patient: "Fatima Yusuf",
      test: "Lipid Profile",
      date: "Nov 8, 2025",
      status: "abnormal",
      result: "Elevated LDL",
    },
    {
      id: 4,
      patient: "Emeka Nwosu",
      test: "CBC",
      date: "Nov 7, 2025",
      status: "normal",
      result: "Normal counts",
    },
  ];

  const filteredResults = labResults.filter((result) => {
    const matchesSearch =
      result.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.test.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || result.status === filterType;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    return status === "abnormal"
      ? "bg-red-100 text-red-700 border-red-200"
      : "bg-green-100 text-green-700 border-green-200";
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Lab Results
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Manage and review patient test results
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            <LuDownload className="w-4 h-4" />
            Export All
          </button>
          <Toggle />
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1 relative">
          <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search patient or test..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                     dark:bg-gray-800 dark:text-white"
          />
        </div>

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                   focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                   dark:bg-gray-800 dark:text-white"
        >
          <option value="all">All Results</option>
          <option value="normal">Normal</option>
          <option value="abnormal">Abnormal</option>
        </select>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Total Tests
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {labResults.length}
              </p>
            </div>
            <LuFileText className="w-8 h-8 text-indigo-600" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg  border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Abnormal
              </p>
              <p className="text-2xl font-bold text-red-600 mt-1">
                {labResults.filter((r) => r.status === "abnormal").length}
              </p>
            </div>
            <LuBell className="w-8 h-8 text-red-600" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border shadow-lg  border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                This Week
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                4
              </p>
            </div>
            <LuCalendar className="w-8 h-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border shadow-lg  border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Pending Review
              </p>
              <p className="text-2xl font-bold text-orange-600 mt-1">1</p>
            </div>
            <LuEye className="w-8 h-8 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Results Table */}
      <div className="  bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Test Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredResults.map((result) => (
                <tr
                  key={result.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                        <LuUser className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
                        {result.patient}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                    {result.test}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                    {result.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getStatusColor(
                        result.status
                      )}`}
                    >
                      {result.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition">
                        <LuEye className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      </button>
                      <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition">
                        <LuDownload className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty State */}
      {filteredResults.length === 0 && (
        <div className="text-center py-12">
          <LuFileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-600 dark:text-gray-400">No results found</p>
        </div>
      )}
    </div>
  );
};

export default Results;
