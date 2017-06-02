/**
 * Created by bad4iz on 02.06.2017.
 */
import React from 'react';
import {Route, Switch} from 'react-router-dom';

import SmartNotes from './smartNotes';
import SmartNote from './smartNote';

export default(
        <Switch>
            <Route exact path="/smart-notes" component={SmartNotes}/>
            <Route path= "/smart-notes/:number" component={SmartNote}/>
        </Switch>
);
