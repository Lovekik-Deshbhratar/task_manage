import React, { useState, useContext } from "react";
import Modal from "./Modal";
import { ReducerContext, TasksContext } from "../Context/TaskContext";

const Task = ({ item, index }) => {
  const [modal, setModal] = useState(false);
  const [color, setColor] = useState(
    "border-2 border-red-300 text-red-700 outline-none px-2 text-sm rounded-[0.2rem]"
  );
  const dispatch = useContext(ReducerContext);

  const handleDelete = (key) => {
    dispatch({
      type: "Delete",
      id: key,
    });
  };

  const handleColor = (e) => {
    if (e.target.value == "To Do")
      setColor(
        "border-2 border-red-300 text-red-700 outline-none px-2 text-sm rounded-[0.2rem]"
      );
    else if (e.target.value == "In Progress")
      setColor(
        "border-2 border-yellow-300 text-yellow-600 outline-none px-2 text-sm rounded-[0.2rem]"
      );
    else if (e.target.value == "Completed")
      setColor(
        "border-2 border-green-300 text-green-700 outline-none px-2 text-sm rounded-[0.2rem]"
      );
  };
  return (
    <>
      {modal && (
        <Modal setModal={setModal} modal={modal} item={item} id={index} />
      )}
      <div className="dropdown-container w-[20rem] space-y-4 p-2 border-t-4 border-indigo-300/80 shadow-md rounded-bl-md rounded-br-md lg:hover:shadow-xl transition ease-in-out">
        <h1 className="bg-indigo-100/80 text-[1.04rem] w-fit px-2 py-1 rounded-lg font-semibold text-gray-700">
          {item.title}
        </h1>

        <p className="text-[0.99rem] text-gray-700">{item.description}</p>
        <div className="flex justify-between ">
          <select className={color} onChange={handleColor}>
            <option value="To Do" className="text-red-500 bg-red-50">
              To Do
            </option>
            <option
              value="In Progress"
              className="text-yellow-500 bg-yellow-50"
            >
              In Progress
            </option>
            <option value="Completed" className="text-green-600 bg-green-100">
              Completed
            </option>
          </select>

          <div className="flex gap-3">
            <svg
              className="w-7 stroke-indigo-500 lg:hover:stroke-amber-600 transition ease-in-out active:stroke-amber-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              onClick={() => {
                setModal(!modal);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
            <svg
              className="w-7 stroke-indigo-500 lg:hover:stroke-red-400 transition ease-in-out active:stroke-red-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              onClick={() => handleDelete(index)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
