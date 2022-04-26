import React, { Suspense } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './app/store';

import App from './App';
import './index.css';
import './i18n';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Suspense fallback="Loading...">
                <App />
            </Suspense>
        </Router>
    </Provider>,
document.getElementById('root'));
