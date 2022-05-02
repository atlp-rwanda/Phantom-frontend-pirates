import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import LandingPage from './container/LandingPage';
import { NotFound } from './components';
import ViewBus from './components/ViewBus';
import Employees from './container/Employees';
import Registering from './components/RegisterEmployees'

const App = () => {
  return (
    <div>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/viewBus" element={<ViewBus />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/register" element={<Registering/>}/>
        </Routes>
        <ToastContainer />
      </React.StrictMode>
    </div>
  );
};

export default App;
