import React, { Component } from 'react';

import NoteEdinor from './noteEditor/NoteEditor';
import NotesGrid from './notesGrid/NotesGrid';

class SmartNotes extends Component {
    static path = '/smart-notes';
    state = {
        notes: [
            {
                id: 1,
                text: 'dsfgdsfgdsfgdsgfsg',
                title: 'Первая'
            },
            {
                id: 2,
                text: 'sdfgdsgfdsgdsgf',
                title: 'Вторая'
            },
            {
                id: 3,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus!',
                title: 'Третья'
            },
            {
                id: 4,
                text: ' ipsum dolor sit amet, consectetur adipisicing',
                title: 'Четвертая'
            },
            {
                id: 5,
                text: ' ipsum dolor sit amet, consectetur adipisicing',
                title: 'Пятая'
            },
            {
                id: 6,
                text: 'Lorem ipsum dolor sit amet.',
                title: 'Шестая'
            },
            {
                id: 7,
                text: 'Lorem ipsum dolor sit amet, consectetur.',
                title: 'Седьмая'
            }
        ]
    }
    
    render() {
        return (
            <div>
               <NoteEdinor/>
               <NotesGrid notes={this.state.notes}/>
            </div>
        );
    }
}

export default SmartNotes;
