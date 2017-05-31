import React from 'react';
import {Route} from 'react-router-dom';

import HomePage from '../component/home/HomePage';
import SmartNotes from '../component/smart-notes/smart-notes';
import About from '../component/about/about';

export default(
    <div>
        <Route exact  component={HomePage} path={HomePage.path}/>
        <Route component={SmartNotes} path={SmartNotes.path}/>
        <Route component={About} path={About.path}/>
    </div>
);
