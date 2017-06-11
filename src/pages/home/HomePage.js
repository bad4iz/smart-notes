import React, {Component} from 'react';
import {Button, Card, CardActions, CardMenu, CardText, CardTitle, Grid, IconButton} from "react-mdl";


class HomePage extends Component {
    
    static path = '/';
    
    state = {};
    
    render() {
        return (
            <div style={{background: 'url(https://goo.gl/mGkpd6) center / cover'}}>
                <h1>Главное не что делаешь а как!</h1>
                <Grid className="demo-grid-ruler" shadow={1}>
                    <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                        <CardTitle style={{
                            color: '#fff',
                            height: '176px',
                            background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'
                        }}>Welcome</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Get Started</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </Grid>
            </div>
        );
    }
}

export default HomePage;
