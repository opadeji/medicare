import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Malaria", value: 50, fill: "#EF4444" },
  { name: "COVID", value: 15, fill: "#3B82F6" },
  { name: "Typhoid", value: 20, fill: "#F59E0B" },
  { name: "Others", value: 15, fill: "#10B981" },
];

export const DiagnosisChart = () => {
  return (
    <div className="p-3 rounded-2xl font-sans w-60 border border-gray-300 shadow-lg dark:shadow-gray-600">
      {/* TITLE */}
      <h3 className="text-xs font-bold text-gray-800 mb-1 dark:text-white">
        DIAGNOSTICS
      </h3>

      <div className="relative">
        {/* RESPONSIVE CONTAINER – smaller height */}
        <ResponsiveContainer width="100%" height={130}>
          {" "}
          {/* ← reduced */}
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={38} // ← smaller hole
              outerRadius={54} // ← smaller ring
              paddingAngle={2}
              cornerRadius={6}
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, i) => (
                <Cell key={`cell-${i}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* CENTER LABEL – smaller font */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <div className="text-lg font-bold text-red-500 dark:text-white">
              187.2K
            </div>
            <div className="text-[12px] text-gray-500 dark:text-white">
              Patients
            </div>
          </div>
        </div>
      </div>

      {/* LEGEND – tighter spacing, smaller text */}
      <div className="flex flex-wrap justify-around gap-1 mt-1 text-xs dark:text-white">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-1">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: item.fill }}
            />
            <span className="font-medium">{item.name}</span>
            <span className="font-bold ml-1">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiagnosisChart;
