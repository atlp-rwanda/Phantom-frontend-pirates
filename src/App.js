import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './container/LandingPage';
import { NotFound } from './components';

const App = () => {
  return (
    <Routes>
      <Route path='/' element = { <LandingPage /> } />
      <Route path='/*' element = { <NotFound /> } />
    </Routes>
  )
}

export default App