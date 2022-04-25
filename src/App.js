import React from 'react';
import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
=======
// import { Provider } from 'react-redux';
>>>>>>> 924d7d7d2b0b9e37d705f0b0c0541ab09a605aee
import { ApiProvider } from '@reduxjs/toolkit/query/react';

import LandingPage from './container/LandingPage';
import { NotFound } from './components';
<<<<<<< HEAD
import ViewBus from './components/ViewBus';
import { phantomApi } from './services/phantomApi';
=======
import { phantomApi } from './services/phantomApi';
// import store from './state/store';
>>>>>>> 924d7d7d2b0b9e37d705f0b0c0541ab09a605aee

const App = () => {

  return (
    <ApiProvider api={ phantomApi }>
<<<<<<< HEAD
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
=======
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
>>>>>>> 924d7d7d2b0b9e37d705f0b0c0541ab09a605aee

export default App;
