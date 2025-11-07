import React from "react";

const Announcement = () => {
  const ann = [
    { title: "DR Bayode pls report to the admin office (ASAP)" },
    { title: "Nurse Titi don kill person ooo abeg help us find am" },
    {
      title:
        "General strike ends tomorrow. Everyone is expected to be at work.",
    },
    {
      title:
        "OR 203 is currently undergoing renovation. No one is allowed in there.",
    },
    { title: "General nurses meeting holds on Friday. Pls be reminded." },
  ];

  return (
    <div className="w-full max-w-lg h-60  border border-gray-200 shadow-lg  dark:bg-linear-to-br from-[#0f172a] to-[#1e293b] dark:shadow-gray-600 rounded-2xl p-5  overflow-auto">
      <h1 className="text-center text-xl font-semibold mb-4 dark:text-gray-200">
        Hospital Notice Board
      </h1>

      <div className="space-y-3">
        {ann.map((data, i) => (
          <div
            key={i}
            className="p-3 bg-indigo-50 border dark:bg-blue-900/20 border-gray-100 rounded-xl transition"
          >
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
              {data.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
