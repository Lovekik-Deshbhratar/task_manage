import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="flex justify-center py-5 mt-[4rem] h-[5rem] md:mt-[2rem] gap-[3rem] md:gap-[6rem] lg:gap-[9rem]">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-xl text-[#3498db] border-b  border-[#3498db]"
            : "text-gray-500 text-lg"
        }
        to={"/"}
      >
        Create Task
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-xl text-[#3498db] border-b border-[#3498db]"
            : "text-gray-500 text-lg"
        }
        to={"/view"}
      >
        View Tasks
      </NavLink>
    </div>
  );
};

export default Menu;
