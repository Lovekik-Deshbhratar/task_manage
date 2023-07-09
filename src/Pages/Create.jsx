import React, { useContext, useState } from "react";
import { ReducerContext } from "../Context/TaskContext";
import { NotificationContext } from "../Context/TaskContext";

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

const Create = () => {
  const [data, setData] = useState({ title: "", description: "" });
  const dispatch = useContext(ReducerContext);
  const { notificationHandler } = useContext(NotificationContext);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
    setError(validate({ ...data, [name]: value }));
  };

  const handleCreate = () => {
    const errors = validate(data);
    if (Object.keys(errors).length > 0) {
      setError(errors);
    } else {
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
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-5 items-center">
        <div>
          <input
            name="title"
            value={data.title}
            onChange={handleChange}
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
            name="description"
            value={data.description}
            onChange={handleChange}
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
          onClick={handleCreate}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default Create;
