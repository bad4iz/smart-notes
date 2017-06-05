import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// import './index.css';

import { BrowserRouter as Router } from 'react-router-dom';

 
import App from './App';

// React-MDL
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

ReactDOM.render(
    <Router>
       <App/>
    </Router>
, document.getElementById('root'));

registerServiceWorker();
