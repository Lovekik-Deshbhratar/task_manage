import { Route, Routes, json } from "react-router-dom";
import "./App.css";
import Menu from "./Component/Menu";
import { useEffect, useReducer, useState } from "react";
import Create from "./Pages/Create";
import ViewTasks from "./Pages/ViewTasks";
import { ReducerContext, TasksContext } from "./Context/TaskContext";
import taskReducer from "./Reduce/taskReducer";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [items, setItems] = useState([]);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));

    const data = JSON.parse(localStorage.getItem("task"));
    if (items) {
      setItems(data);
    }
  }, [tasks]);
  return (
    <div className="space-y-5 selection:text-violet-700 selection:bg-indigo-100/80">
      <ReducerContext.Provider value={dispatch}>
        <TasksContext.Provider value={items}>
          <Menu />
          <Routes>
            <Route exact path="/" element={<Create />} />
            <Route path="/view" element={<ViewTasks />} />
          </Routes>
        </TasksContext.Provider>
      </ReducerContext.Provider>
    </div>
  );
}

export default App;
