import React, { Component } from 'react';
import {CardTitle, CardActions, Button, Card, CardText } from 'react-mdl';


class Note extends Component {
    state = { 
        title: this.props.title || 'Заголовок'
    }
    
    render() {
        return (
             <Card shadow={1} style={{display: 'inline-block', margin: '5px', width: '200px'}} >
                    <CardTitle>{this.state.title}</CardTitle>
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
