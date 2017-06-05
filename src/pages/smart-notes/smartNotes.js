import React, { Component } from 'react';


import NoteEdinor from './noteEditor/NoteEditor';
import NotesGrid from './notesGrid/NotesGrid';

const SmartNotes = () =>(
            <div>
                dfgdsgfdsgf
               <NoteEdinor
                   onNoteAdd={this.handleNoteAdd.bind(this)}
               />
               <NotesGrid notes={this.state.notes}/>
            </div>
        );
    
export default SmartNotes;
