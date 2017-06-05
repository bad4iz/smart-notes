import React, {Component} from 'react';
import {CardTitle, CardActions, Button, Card, CardText, Textfield} from 'react-mdl';

class NoteEditor extends Component {
    
    state = {};

    handleTextChange = (event) => {
        this.setState({
            text: event.target.value
        });
    };

    handleNoteAdd = () => {
        if (this.state.text.length) {
            const newNote = {
                text: this.state.text,
                color: this.state.backgroundColor,
                id: Date.now(),
                seconds: 0,
                isDone: false
            };

            this.setState({ text: '' });
            this.props.onNoteAdd(newNote);
        }
    };
    
    render() {
        return (
            <Card
                shadow={0}
                style={{
                    width: '520px',
                    margin: '10px auto'
                }}>
                <CardTitle expand>Добавте заметку</CardTitle>
                <CardText>
                    <Textfield
                        value={this.state.text}
                        onChange={this.handleTextChange}
                        label="Text lines..."
                        rows={3}
                        style={{
                            width: '200px'
                        }}/>
                </CardText>
                <CardActions border>
                    <Button  onClick={this.handleNoteAdd} colored>добавить</Button>
                </CardActions>
            </Card>
        );
    }
}

export default NoteEditor;
