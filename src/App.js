import "./app.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <div className="">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
