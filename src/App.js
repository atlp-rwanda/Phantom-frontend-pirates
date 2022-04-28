import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './container/LandingPage';
import { NotFound } from './components';
import ViewBus from './components/ViewBus';
import Login from './container/Login';
import Notifications from './container/Notifications';
import CreateRole from './components/CreateRole';

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
          <Route path="/role" element={<CreateRole />} />
        </Routes>
      </React.StrictMode>
    </div>
  );
};

export default App;
