import React from 'react';
import {Route, Switch} from 'react-router-dom';

import SmartNotes from './smartNotes';
import SmartNote from './smartNote';

const SmartNotesRout  = () => (
            <Switch>
                dsfsfadf
                <Route exact path="/" component={SmartNotes}/>
                <Route path= "/smart-notes/:number" component={SmartNote}/>
            </Switch>
        );
    
export default SmartNotesRout;

