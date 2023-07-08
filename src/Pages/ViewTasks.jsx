import React, { useContext } from "react";
import Task from "../Component/Task";
import { TasksContext } from "../Context/TaskContext";

const ViewTasks = () => {
  const value = useContext(TasksContext);
  return (
    <div className="flex flex-col items-center gap-6 pb-4 md:flex-row md:flex-wrap md:justify-center lg:justify-normal lg:mx-2">
      {value.map((item, key) => (
        <Task item={item} key={key} index={key} />
      ))}
    </div>
  );
};

export default ViewTasks;
