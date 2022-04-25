import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/query/react';

import LandingPage from './container/LandingPage';
import { NotFound } from './components';
import ViewBus from './components/ViewBus';
import { phantomApi } from './services/phantomApi';

const App = () => {

  return (
    <ApiProvider api={ phantomApi }>
    <div>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/viewBus" element={<ViewBus />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </React.StrictMode>
    </div>
    </ApiProvider>
  );
};

export default App;
