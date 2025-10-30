import React from "react";
import { NavLink } from "react-router-dom";

const DrDashboardSidebar = () => {
  return (
    <div
      className="bg-linear-to-b from-black via-gray-800 to-gray-600 text-white
     h-screen w-[250px] px-6 py-8 shadow-lg flex flex-col gap-16"
    >
      <NavLink to={"/dashboard"}>
        {" "}
        <h1>Overview </h1>
      </NavLink>
      <NavLink to={"appointment"}>
        {" "}
        <h1>Appointment </h1>
      </NavLink>
      <NavLink to={"patients"}>
        {" "}
        <h1>Patients </h1>
      </NavLink>
      <NavLink to={"results"}>
        {" "}
        <h1>Results </h1>
      </NavLink>
      <NavLink to={"settings"}>
        {" "}
        <h1>Settings </h1>
      </NavLink>
      <h1>Logout </h1>
    </div>
  );
};

export default DrDashboardSidebar;
