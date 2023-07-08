import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./Component/Menu";
import Create from "./Pages/Create";
import ViewTasks from "./Pages/ViewTasks";

function App() {
  return (
    <div className="space-y-5 selection:text-violet-700 selection:bg-indigo-100/80">
      <Menu />
      <Routes>
        <Route exact path="/" element={<Create />} />
        <Route path="/view" element={<ViewTasks />} />
      </Routes>
    </div>
  );
}

export default App;
