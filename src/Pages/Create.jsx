import React, { useContext, useState } from "react";
import { ReducerContext } from "../Context/TaskContext";
import { NotificationContext } from "../Context/TaskContext";

const Create = () => {
  const [data, setData] = useState({ title: "", description: "" });
  const dispatch = useContext(ReducerContext);
  const { notificationHandler } = useContext(NotificationContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleCreate = () => {
    dispatch({
      type: "Create",
      title: data.title,
      description: data.description,
    });
    setData({ title: "", description: "" });
    notificationHandler({
      type: "success",
      message: "Task added successfully.",
    });
  };
  return (
    <div>
      <div className="flex flex-col gap-5 items-center">
        <input
          name="title"
          value={data.title}
          onChange={handleChange}
          placeholder="Title"
          type="text"
          className="border w-[20rem] border-slate-300 rounded-[0.22rem] px-2 caret-indigo-500 outline-none focus:ring-1 ring-sky-500/50 py-2 focus:border-sky-500 md:w-[44rem]"
        />
        <textarea
          name="description"
          value={data.description}
          onChange={handleChange}
          placeholder="Description"
          className="resize-none border w-[20rem] border-slate-300 rounded-[0.22rem] px-2 caret-indigo-500 outline-none focus:ring-1 ring-sky-500/50 py-2 focus:border-sky-500 md:w-[44rem]"
          rows={10}
        />
        <button
          className="mt-2 ring-2 ring-sky-500/75 px-6 py-2 rounded-[0.22rem] bg-sky-400 text-white md:px-10 hover:bg-gradient-to-r hover:from-sky-400 hover:to-indigo-400 active:bg-indigo-700"
          onClick={handleCreate}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default Create;
