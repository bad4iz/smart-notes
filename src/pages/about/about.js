import React, {Component} from 'react';
import {
    ListItem,
    ListItemContent,
    ListItemAction,
    List,
    Icon
} from 'react-mdl';

class About extends Component {
    static path = '/about';

    render() {
        return (
            <div >
                <h1>О приложении</h1>
                <h2>Технологии</h2>
                <List style={{
                    width: '650px'
                }}>
                    <ListItem threeLine>
                        <ListItemContent
                            avatar="person"
                            subtitle="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.">React</ListItemContent>
                        <ListItemAction>
                            <a href="#"><Icon name="star"/></a>
                        </ListItemAction>
                    </ListItem>
                    <ListItem threeLine>
                        <ListItemContent
                            avatar="person"
                            subtitle="React-MDL is a set of React components build on top of Material Design Litev1.2.1">React-MDL</ListItemContent>
                        <ListItemAction>
                            <a href="https://github.com/react-mdl/react-mdl"><Icon name="star"/></a>
                        </ListItemAction>
                    </ListItem>
                </List>
            </div>
        );
    }
}

export default About;
