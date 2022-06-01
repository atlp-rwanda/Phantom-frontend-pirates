import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './container/LandingPage';
import Login from "./container/Login";
import Admin from "./container/Admin";
import DriverMenu from "./container/DriverMenu";
import OperatorPage from "./container/OperatorPage";
import { NotFound } from './components';
import ViewBus from './components/ViewBus';
import Notifications from './container/Notifications';
import Rout from './container/Routes';
import Company from './container/Company';
import Bus from './container/Bus';
import { Simulation, UserMap } from './components';
import { SocketContext, socket } from './context/socket';

const App = () => {
  return (
    <div>
      <React.StrictMode>
      <SocketContext.Provider value={socket}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/viewBus" element={<ViewBus />} />
          <Route path="/*" element={<NotFound />} />
          <Route path='/login' element={<Login />} />
          <Route path='/notification' element={<Notifications />} />
          <Route path='/routes' element={<Rout />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/operator" element={<OperatorPage />} />
          <Route path="/driver" element={<DriverMenu />} />
          <Route path="/company" element={<Company />} />
          <Route path="/bus" element={<Bus />} />
          <Route path='/simulation' element={<Simulation />} />
          <Route path='/user-map' element={<UserMap />} />
        </Routes>
        <ToastContainer />
        </SocketContext.Provider>
      </React.StrictMode>
    </div>
  );
};

export default App;
