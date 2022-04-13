import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import React,{ Suspense} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';

import App from './App';
import store from './app/store';
import './index.css';

ReactDOM.render (
<Router>
    <Provider store={store}>
    <Suspense fallback="Loading...">
        <App />
    </Suspense>
    </Provider>
</Router>, 
document.getElementById('root'));
