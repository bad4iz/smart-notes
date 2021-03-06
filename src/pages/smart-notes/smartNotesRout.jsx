import React from 'react';
import {Route, Switch} from 'react-router-dom';

import SmartNotes from './smartNotes';
import SmartNote from './SmartNote';

const SmartNotesRout  = () => (
            <Switch>
                <Route exact path="/smart-notes" component={SmartNotes}/>
                <Route path= "/smart-notes/:number" component={SmartNote}/>
            </Switch>
        );
    
export default SmartNotesRout;
