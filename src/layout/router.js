import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from '../pages/home/HomePage';
import Index  from '../pages/smart-notes/Index';
import About from '../pages/about/about';

export default(
    <Switch>
        <Route exact  component={HomePage} path={HomePage.path}/>
        <Route component={Index} path={Index.path} />
        <Route component={About} path={About.path}/>
    </Switch>
);
