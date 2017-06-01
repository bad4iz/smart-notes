import React, {Component} from 'react';

import Note from './Note';

class NotesGrid extends Component {
    state = {}

    render() {
        console.log(this.props.notes);
        return (
            <div style={{margin: '10px auto'}}>
                {
                    this.props.notes.map((note) => {
                        return (
                            <Note
                                key={note.id}
                                title={note.title}
                            > {note.text} </Note>
                        );
                    })
                }
                <Note/>
            </div>
        );
    }
}

export default NotesGrid;
