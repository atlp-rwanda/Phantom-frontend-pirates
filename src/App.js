import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useTranslation } from 'react-i18next';

import LandingPage from './container/LandingPage';
import { NotFound } from './components';
import store from './state/store';

const App = () => {
  const { t } = useTranslation();

  return (
    <Provider store={store}>
      <div>
          <React.StrictMode>
          <Routes>
            <Route path='/' element = { <LandingPage t = { t } /> } />
            <Route path='/*' element = { <NotFound /> } />
          </Routes>
          </React.StrictMode>
      </div>
    </Provider>
    
    
  )
}

export default App