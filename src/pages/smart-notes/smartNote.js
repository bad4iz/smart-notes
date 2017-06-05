import React, { Component } from 'react';

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
                <h1>Note {this.props.match.params.number}</h1>

            </div>
        );
    }
}

export default SmartNotesRout;
