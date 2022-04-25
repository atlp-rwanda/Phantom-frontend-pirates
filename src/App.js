import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './container/LandingPage';
import { NotFound } from './components';
import ViewBus from './components/ViewBus';
import Login from './container/Login';
import Notifications from './container/Notifications';
import { useTranslation } from 'react-i18next';
import { phantomApi } from './services/phantomApi';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';


const App = () => {
  const { t } = useTranslation();

  return (
    <ApiProvider api={ phantomApi }>
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
    </ApiProvider>
  );
};

export default App;
