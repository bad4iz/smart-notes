import React, { Component } from 'react';
import {CardTitle, CardActions, Button, Card, CardText } from 'react-mdl';


class Note extends Component {
    state = {  }
    
    render() {
        return (
             <Card shadow={1} style={{display: 'inline-block', margin: '5px', width: '200px'}} >
                    <CardTitle>{this.props.title}</CardTitle>
                    <CardText>
                       {this.props.children}
                    </CardText>
                    <CardActions border>
                        <Button colored>View Updates</Button>
                    </CardActions>
                </Card>
        );
    }
}

export default Note;
