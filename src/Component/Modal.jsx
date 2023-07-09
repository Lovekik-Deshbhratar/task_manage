import React, { useContext, useEffect, useState } from "react";
import {
  ReducerContext,
  TasksContext,
  NotificationContext,
} from "../Context/TaskContext";

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "This is a required field";
  } else if (values.title.length < 15) {
    errors.title = "Must be 15 characters or more";
  }

  if (!values.description) {
    errors.description = "This is a Required field";
  } else {
  }

  return errors;
};

const Modal = ({ setModal, modal, item, id }) => {
  const [data, setData] = useState({ title: "", description: "" });
  const { notificationHandler } = useContext(NotificationContext);
  const [error, setError] = useState({});

  useEffect(() => {
    setData({ ...data, title: item.title, description: item.description });
  }, [item]);
  const dispatch = useContext(ReducerContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
    setError(validate({ ...data, [name]: value }));
  };

  const handleEdit = () => {
    const errors = validate(data);
    if (Object.keys(errors).length > 0) {
      setError(errors);
    } else {
      dispatch({
        type: "Update",
        task: data,
        id: id,
      });
      notificationHandler({
        type: "success",
        message: "Task edited successfully.",
      });
      setModal(!modal);
    }
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
        <div>
          <input
            value={data.title}
            onChange={handleChange}
            name="title"
            placeholder="Title"
            type="text"
            className={
              error?.title
                ? "border w-[20rem] border-red-300 rounded-[0.22rem] px-2 caret-red-500 outline-none focus:ring-1 ring-red-500/50 py-2 focus:border-red-500 md:w-[44rem]"
                : "border w-[20rem] border-slate-300 rounded-[0.22rem] px-2 caret-indigo-500 outline-none focus:ring-1 ring-sky-500/50 py-2 focus:border-sky-500 md:w-[44rem]"
            }
          />
          {error?.title && (
            <p className="text-sm mt-1 mb-2 text-red-500">{error.title}</p>
          )}
        </div>
        <div>
          <textarea
            value={data.description}
            onChange={handleChange}
            name="description"
            placeholder="Description"
            className={
              error?.description
                ? "border w-[20rem] border-red-300 rounded-[0.22rem] px-2 caret-red-500 outline-none focus:ring-1 ring-red-500/50 py-2 focus:border-red-500 md:w-[44rem]"
                : "resize-none border w-[20rem] border-slate-300 rounded-[0.22rem] px-2 caret-indigo-500 outline-none focus:ring-1 ring-sky-500/50 py-2 focus:border-sky-500 md:w-[44rem]"
            }
            rows={10}
          />
          {error?.description && (
            <p className="text-sm mt-1 mb-2 text-red-500">
              {error.description}
            </p>
          )}
        </div>
        <button
          className="mt-2 ring-2 ring-sky-500/75 px-6 py-2 rounded-[0.22rem] bg-sky-400 text-white md:px-10 hover:bg-gradient-to-r hover:from-sky-400 hover:to-indigo-400 active:bg-indigo-700"
          onClick={handleEdit}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default Modal;
