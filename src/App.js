import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './container/LandingPage';
import { NotFound } from './components';
import { store } from './app/store';
import ViewBus from './components/ViewBus';
import Login from './container/Login';
import Notifications from './container/Notifications';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <React.StrictMode>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/viewBus" element={<ViewBus />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </React.StrictMode>
      </div>
    </Provider>
  );
};

export default App;
