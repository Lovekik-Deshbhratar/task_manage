import React from "react";
import Task from "../Component/Task";

const ViewTasks = () => {
  return (
    <div className="flex flex-col items-center gap-6 pb-4 md:flex-row md:flex-wrap md:justify-center lg:justify-normal lg:mx-2">
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
};

export default ViewTasks;
