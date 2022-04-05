import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from './App';
import './index.css';
import './i18n';

ReactDOM.render (
<Router>
    <Suspense fallback="Loading...">
        <App />
    </Suspense>
</Router>, 
document.getElementById('root'));
