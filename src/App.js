import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import LandingPage from './container/LandingPage';
import { NotFound, Login } from './components';
import store from './state/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <React.StrictMode>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/*" element={<NotFound />} />
            <Route path='/login' element = { <Login /> } />
          </Routes>
        </React.StrictMode>
      </div>
    </Provider>
  );
};

export default App;
