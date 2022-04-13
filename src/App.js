import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react';

import LandingPage from './container/LandingPage';
import { NotFound } from './components';
import { phantomApi } from './services/phantomApi';
// import store from './state/store';

const App = () => {

  return (
    <ApiProvider api={ phantomApi }>
      <div>
          <React.StrictMode>
          <Routes>
            <Route path='/' element = { <LandingPage /> } />
            <Route path='/*' element = { <NotFound /> } />
          </Routes>
          </React.StrictMode>
      </div>
    </ApiProvider>
    
    
  )
}

export default App