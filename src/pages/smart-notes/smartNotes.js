import React, { Component } from 'react';

import NoteEdinor from './noteEditor/NoteEditor';
import NotesGrid from './notesGrid/NotesGrid';

class SmartNotesRout extends Component {
    static path = '/smart-notes';
    state = {
        notes: []
    };
    
    handleNoteAdd(newNote) {
        const newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({ notes: newNotes });
    }
    
    render() {
        return (
            <div>
                dfgdsgfdsgf
                <NoteEdinor
                    onNoteAdd={this.handleNoteAdd.bind(this)}
                />
                <NotesGrid notes={this.state.notes}/>
            </div>
        );
    }
}

export default SmartNotesRout;
