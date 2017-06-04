import React, { Component } from 'react';

import NoteEdinor from './noteEditor/NoteEditor';
import NotesGrid from './notesGrid/NotesGrid';

class SmartNotes extends Component {
    static path = '/smart-notes/:number';

    render() {
        return (
            <div>
                <h1>Note {this.props.match.params.number}</h1>
            </div>
        );
    }
}

export default SmartNotes;
