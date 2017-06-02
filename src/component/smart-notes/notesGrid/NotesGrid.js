import React, {Component} from 'react';

import Note from './Note';

class NotesGrid extends Component {
    state = {};
    
    render() {
        return (
            <div style={{margin: '10px auto'}}>
                {
                    this.props.notes.map( (note) => {
                        if (note.lenght) {
                            return (
                                <Note
                                    key={note.id}
                                    title={note.title}
                                > {note.text} </Note>
                            );
                        }
                    })
                }
            
            </div>
        );
    }
}

export default NotesGrid;
