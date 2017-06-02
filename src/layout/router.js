import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from '../component/home/HomePage';
import SmartNotesRout  from '../component/smart-notes/smartNotesRout';
import About from '../component/about/about';

export default(
    <Switch>
        <Route exact  component={HomePage} path={HomePage.path}/>
        <Route component={SmartNotesRout} path="/smart-notes" />
        <Route component={About} path={About.path}/>
    </Switch>
);
