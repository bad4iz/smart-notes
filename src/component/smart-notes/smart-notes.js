import React, { Component } from 'react';
import {CardTitle, CardActions, Button, Card, CardText } from 'react-mdl';

class SmartNotes extends Component {
    static path = '/smart-notes';
    state = {}
    render() {
        return (
            <div>
                <Card shadow={0} style={{ width: '320px', height: '320px', margin: '10px auto' }}>
                    <CardTitle expand style={{ color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}>Update</CardTitle>
                    <CardText>
                        Далеко-далеко за словесными горами тексты, маленький, собрал предложения, деревни рекламных ты, инициал живет свой пояс.
                    </CardText>
                    <CardActions border>
                        <Button colored>View Updates</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default SmartNotes;
