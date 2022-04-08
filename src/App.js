import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './container/LandingPage';
import { NotFound } from './components';
import ViewBus from './components/ViewBus';
import Login from './container/Login';
import Notifications from './container/Notifications';

const App = () => {
  return (
    <>
    <Router>
      <div className='container'>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/viewBus" element={<ViewBus />} />
            <Route path="/*" element={<NotFound />} />
            <Route path='/login' element={<Login />} />
            <Route path='/notification' element={<Notifications />} />
        </Routes>
      </div>
    </Router>
   </>
  );
};

export default App;
