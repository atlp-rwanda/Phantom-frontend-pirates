import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { NotFound, ViewBus } from './components';
import LandingPage from './container/LandingPage';
import Notifications from './container/Notifications';
import Login from './container/Login';

const App = () => {

  return (
    <div>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/viewBus" element={<ViewBus />} />
          <Route path="/*" element={<NotFound />} />
          <Route path='/login' element={<Login />} />
          <Route path='/notification' element={<Notifications />} />
        </Routes>
      </React.StrictMode>
    </div>
  );
};
export default App;
