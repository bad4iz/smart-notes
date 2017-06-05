import React, { Component } from 'react';
import {CardTitle, CardActions, Button, Card, CardText } from 'react-mdl';

import { Link } from 'react-router-dom';

class Note extends Component {
    state = { 
        title: this.props.title || 'Заголовок'
    }
    
    render() {
        return (
             <Card shadow={1} style={{display: 'inline-block', margin: '5px', width: '200px'}} >
                    <CardTitle> <Link to={`/smart-notes/${this.props.id}`}>{this.state.title}</Link></CardTitle>
                    <CardText>
                       {this.props.children}
                    </CardText>
                    {/*<CardActions border>*/}
                        {/*<Button colored>View Updates</Button>*/}
                    {/*</CardActions>*/}
                </Card>
        );
    }
}

export default Note;
