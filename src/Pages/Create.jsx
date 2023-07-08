import React from "react";

const Create = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 items-center">
        <input
          placeholder="Title"
          type="text"
          className="border w-[20rem] border-slate-300 rounded-[0.22rem] px-2 caret-indigo-500 outline-none focus:ring-1 ring-sky-500/50 py-2 focus:border-sky-500 md:w-[44rem]"
        />
        <textarea
          placeholder="Description"
          className="resize-none border w-[20rem] border-slate-300 rounded-[0.22rem] px-2 caret-indigo-500 outline-none focus:ring-1 ring-sky-500/50 py-2 focus:border-sky-500 md:w-[44rem]"
          rows={10}
        />
        <button className="mt-2 ring-2 ring-sky-500/75 px-6 py-2 rounded-[0.22rem] bg-sky-400 text-white active:bg-sky-500 md:px-10 ">
          Add Task
        </button>
      </div>
    </div>
  );
};

export default Create;
