import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import NoteEdinor from './noteEditor/NoteEditor';
import NotesGrid from './notesGrid/NotesGrid';

class SmartNotes extends Component {
    static path = '/smart-notes';
    // state = {
    //     notes: []
    // };
    //
    // handleNoteAdd(newNote) {
    //     const newNotes = this.state.notes.slice();
    //     newNotes.unshift(newNote);
    //     this.setState({ notes: newNotes });
    // }
    //
    render() {
        return (
            <div>
                <ul>
                <Link to="/smart-notes/sdfasfd">Smart notes 1</Link>
                <Link to="/smart-notes/2">Smart notes 2</Link>
                <Link to="/smart-notes/csafda">Smart notes 3</Link>
                <Link to="/smart-notes/4">Smart notes 4</Link>
                </ul>
                    dsafasdfsafasdfsdfas <h1>{this.props.match.params.number}</h1>
               {/*<NoteEdinor*/}
                   {/*onNoteAdd={this.handleNoteAdd.bind(this)} */}
               {/*/>*/}
               {/*<NotesGrid notes={this.state.notes}/>*/}
            </div>
        );
    }
}

export default SmartNotes;
