import React from "react";
import { LuAward, LuVote } from "react-icons/lu";

const Eotm = () => {
  return (
    <div className="w-full max-w-sm bg-white dark:bg-linear-to-br from-[#0f172a] to-[#1e293b] border border-gray-200 dark:shadow-gray-600 rounded-2xl shadow-lg px-6 py-4 text-white backdrop-blur-md">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <LuAward className="text-yellow-400 w-7 h-7" />
        <h2 className="text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-300">
          Employee of the Month
        </h2>
      </div>

      {/* Profile */}
      <div className="flex flex-col items-center text-center">
        <div className="relative w-28 h-28 mb-2">
          <img
            src="https://media.istockphoto.com/id/2201087559/photo/smiling-female-nurse-in-scrubs-takes-notes-while-standing-in-a-hospital-waiting-room-during-a.jpg?s=612x612&w=0&k=20&c=X_8U7z02ivkZsByekOfSaqbWV7bEmju4nYjuDJkbynA="
            alt="Employee"
            className="w-full h-full rounded-full object-cover border-4 border-indigo-500 shadow-md"
          />
          <div className="absolute bottom-2 right-2 bg-green-500 w-4 h-4 rounded-full animate-pulse z-10"></div>
        </div>
        <h3 className="text-xl font-bold  text-gray-800 dark:text-gray-300">
          Aisha Bello
        </h3>
        <p className="text-sm  text-gray-800 dark:text-gray-300">
          Senior Nurse
        </p>
      </div>

      {/* Achievement Card */}
      <div className="mt-5  dark:bg-slate-800/50 border border-slate-300 rounded-xl p-2">
        <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
          Recognized for her <span className="text-pink-500"> exceptional</span>{" "}
          <span className="text-indigo-500">patient care</span>,{" "}
          <span className="text-red-500">teamwork</span>, and{" "}
          <span className="text-purple-500">leadership</span> throughout October
          2025. Her dedication has greatly improved patient satisfaction.
        </p>
      </div>

      {/* Badge */}
      <div className="mt-4 flex justify-center">
        <span className="bg-linear-to-r from-indigo-500 to-purple-500 text-xs font-semibold px-4 py-2 rounded-full shadow-md">
          🏆 Outstanding Performance
        </span>
      </div>
      <div className="mt-5 flex justify-center">
        <button className="flex items-center gap-2 bg-linear-to-r from-indigo-500 to-purple-500 text-xs font-semibold px-4 py-2 rounded-full shadow-md">
          Vote{" "}
          <span className="text-yellow-400">
            <LuVote />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Eotm;
