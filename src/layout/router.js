import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from '../pages/home/HomePage';
import SmartNotes  from '../pages/smart-notes/smartNotes';
import About from '../pages/about/about';

export default(
    <Switch>
        <Route exact  component={HomePage} path={HomePage.path}/>
        <Route component={SmartNotes} path={SmartNotes.path} />
        <Route component={About} path={About.path}/>
    </Switch>
);
