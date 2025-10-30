import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
  { name: "Men", uv: 25, fill: "#3B82F6" },
  { name: "Women", uv: 35, fill: "#EF4444" },
  { name: "Children", uv: 40, fill: "#F59E0B" },
];

export const PatientsChart = () => {
  return (
    <div className="border border-gray-300 p-3 rounded-2xl  font-sans w-60 shadow-lg dark:shadow-gray-600">
      <h3 className="text-xs font-bold text-gray-800 mb-1 dark:text-white">
        PATIENTS
      </h3>

      {/* CHART + CENTER LABEL */}
      <div className="relative">
        <ResponsiveContainer width="100%" height={130}>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius={38} // ← slightly reduced
            outerRadius={54} // ← reduced to fit smaller canvas
            barSize={18} // ← thinner bar
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <RadialBar
              background={{ fill: "#f3f4f6" }}
              dataKey="uv"
              cornerRadius={8}
            />
          </RadialBarChart>
        </ResponsiveContainer>

        {/* Center Label – smaller font */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <div className="text-lg font-bold text-blue-600 dark:text-white">
              11M
            </div>
            <div className="text-[12px] text-gray-500 dark:text-white">
              Patients
            </div>
          </div>
        </div>
      </div>

      {/* STATS BELOW – tighter & smaller */}
      <div className="flex flex-wrap gap-2 justify-center items-center mt-1">
        {data.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-1 text-xs dark:text-white"
          >
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: item.fill }}
            />
            <span className="font-medium">{item.name}</span>
            <span className="font-bold text-gray-700 dark:text-white ml-1">
              {item.uv}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientsChart;
