import React, {Component} from 'react';
import {CardTitle, CardActions, Button, Card, CardText, Textfield} from 'react-mdl';

class NoteEditor extends Component {
    state = {}
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
                        onChange={() => {}}
                        label="Text lines..."
                        rows={3}
                        style={{
                        width: '200px'
                    }}/>
                </CardText>
                <CardActions border>
                    <Button colored>добавить</Button>
                </CardActions>
            </Card>
        );
    }
}

export default NoteEditor;
