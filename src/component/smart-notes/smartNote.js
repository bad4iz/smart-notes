import React, { Component } from 'react';

import NoteEdinor from './noteEditor/NoteEditor';
import NotesGrid from './notesGrid/NotesGrid';

class SmartNotes extends Component {
    static path = '/smart-notes/:number';

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.match.params.number}</h1>
                ffffffffffffffffff
            </div>
        );
    }
}

export default SmartNotes;
