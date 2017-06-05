import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from '../pages/home/HomePage';
import About from '../pages/about/about';
import SmartNotesRout from '../pages/smart-notes/smartNotesRout';

export default(
    <Switch>
        <Route exact  component={HomePage} path={HomePage.path}/>
        <Route component={SmartNotesRout} path="/smart-notes" />
        <Route component={About} path={About.path}/>
    </Switch>
);

