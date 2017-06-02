/**
 * Created by bad4iz on 02.06.2017.
 */
import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import SmartNotes from './smartNotes';
import SmartNote from './smartNote';

class SmartNotesRout extends Component {
    state = {};
    
    render() {
        return (
            <Switch>
                <Route exact path="/smart-notes" component={SmartNotes}/>
                <Route path= "/smart-notes/:number" component={SmartNote}/>
            </Switch>
        );
    }
}

export default SmartNotesRout;

