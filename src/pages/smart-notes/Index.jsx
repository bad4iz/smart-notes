import React, { Component } from 'react';


import smartNotesRout from './smartNotesRout';

class Index extends Component {
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
                { smartNotesRout }
            </div>
        );
    }
}

export default Index;
