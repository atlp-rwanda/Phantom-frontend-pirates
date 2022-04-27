import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./container/LandingPage";
import Login from "./container/Login";
import { NotFound } from "./components";
import ViewBus from "./components/ViewBus";
import Notifications from "./container/Notifications";
import Rout from "./container/Routes";
import Employees from "./container/Employees";

const App = () => {
  return (
    <div>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/viewBus" element={<ViewBus />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notification" element={<Notifications />} />
          <Route path="/routes" element={<Rout />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
        <ToastContainer />
      </React.StrictMode>
    </div>
  );
};

export default App;
