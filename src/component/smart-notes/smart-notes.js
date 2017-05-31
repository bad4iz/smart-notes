import React, { Component } from 'react';

import NoteEdinor from './noteEditor/NoteEditor';
import NotesGrid from './notesGrid/NotesGrid';

class SmartNotes extends Component {
    static path = '/smart-notes';
    state = {}
    render() {
        return (
            <div>
               <NoteEdinor/>
               <NotesGrid/>
            </div>
        );
    }
}

export default SmartNotes;
