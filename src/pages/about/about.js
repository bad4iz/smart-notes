import React, { Component } from 'react';
import {Grid} from "react-mdl";

class About extends Component {
    static path = '/about';
    state = {
        books: [
            {
                id: 1,
                title: 'Изучаем программирование на JavaScript',
                image: 'public/files/img/books/1011395255.jpg',
                url: 'http://www.ozon.ru/context/detail/id/31057355/'
            },
            {
                id: 1,
                title: '',
                image: ''
            },
            {
                id: 1,
                title: '',
                image: ''
            },
            {
                id: 1,
                title: '',
                image: ''
            },
            {
                id: 1,
                title: '',
                image: ''
            },
        ]
    };
    
    render() {
        return (
            <div style={{width: '80%', margin: 'auto'}}>
                <Grid shadow="1">
                    <h2>Осилиная литература</h2>
                    
                </Grid>
            </div>
        );
    }
}

export default About;
