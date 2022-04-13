import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { useTranslation } from 'react-i18next';

import LandingPage from './container/LandingPage';
import { NotFound } from './components';
import { phantomApi } from './services/phantomApi';
// import store from './state/store';

const App = () => {
  const { t } = useTranslation();

  return (
    <ApiProvider api={ phantomApi }>
      <div>
          <React.StrictMode>
          <Routes>
            <Route path='/' element = { <LandingPage t = { t } /> } />
            <Route path='/*' element = { <NotFound /> } />
          </Routes>
          </React.StrictMode>
      </div>
    </ApiProvider>
    
    
  )
}

export default App