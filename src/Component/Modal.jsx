import React, { useContext, useEffect, useState } from "react";
import { ReducerContext, TasksContext } from "../Context/TaskContext";

const Modal = ({ setModal, modal, item, id }) => {
  const [data, setData] = useState({ title: "", description: "" });
  useEffect(() => {
    setData({ ...data, title: item.title, description: item.description });
  }, [item]);
  const dispatch = useContext(ReducerContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleEdit = () => {
    dispatch({
      type: "Update",
      task: data,
      id: id,
    });
    console.log(data);
    setModal(!modal);
  };
  return (
    <div className="absolute w-full flex justify-center md:-ml-2 xl:mt-[17rem]">
      <div className="flex flex-col gap-5 items-center bg-white p-5 shadow-sm border">
        <div className="w-full flex justify-end">
          <svg
            className="w-7 lg:hover:stroke-red-400 transition ease-in-out "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            onClick={() => setModal(!modal)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <input
          value={data.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
          type="text"
          className="border w-[20rem] border-slate-300 rounded-[0.22rem] px-2 caret-indigo-500 outline-none focus:ring-1 ring-sky-500/50 py-2 focus:border-sky-500 md:w-[44rem]"
        />
        <textarea
          value={data.description}
          onChange={handleChange}
          name="description"
          placeholder="Description"
          className="resize-none border w-[20rem] border-slate-300 rounded-[0.22rem] px-2 caret-indigo-500 outline-none focus:ring-1 ring-sky-500/50 py-2 focus:border-sky-500 md:w-[44rem]"
          rows={10}
        />
        <button
          className="mt-2 ring-2 ring-sky-500/75 px-6 py-2 rounded-[0.22rem] bg-sky-400 text-white md:px-10 hover:bg-gradient-to-r hover:from-sky-400 hover:to-indigo-400 active:bg-indigo-700"
          onClick={handleEdit}
        >
          {" "}
          Add Task
        </button>
      </div>
    </div>
  );
};

export default Modal;
