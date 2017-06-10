import React, {Component} from 'react';
import {Button, Card, CardActions, CardText, CardTitle, Cell, Grid, Icon} from "react-mdl";

class About extends Component {
    static path = '/about';
    state = {
        books: [
            {
                id: 1,
                title: 'Изучаем программирование на JavaScript',
                image: 'files/img/books/1011395255.jpg',
                url: 'http://www.ozon.ru/context/detail/id/31057355/'
            },
            {
                id: 2,
                title: 'JavaScript. Карманный справочник',
                image: '/files/img/books/1005870139.jpg',
                url: 'http://www.ozon.ru/context/detail/id/31100361/'
            },
            {
                id: 3,
                title: 'Паттерны проектирования',
                image: '/files/img/books/1011447861.jpg',
                url: 'http://www.ozon.ru/context/detail/id/31079082/'
            },
            {
                id: 4,
                title: 'Новая большая книга CSS',
                image: '/files/img/books/1014337293.jpg',
                url: 'http://www.ozon.ru/context/detail/id/135731189/'
            },
            {
                id: 1,
                title: 'ES6 и не только',
                image: 'public/files/img/books/1015269939.jpg',
                url: 'http://www.ozon.ru/context/detail/id/137473815/'
            }
        ]
    };
    
    render() {
        return (
            <div style={{width: '80%', margin: 'auto'}}>
                <Grid>
                    <Cell col={12}>
                        <h2>Осилиная литература</h2>
                    </Cell>
                    { this.state.books.map(book => {
                        // console.log(book); `url(${book.image}) center / contain no-repeat`
                        return (
                                <Card key={book.id} shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                                    <CardTitle expand style={{color: '#fff', background: `url(${book.image}) center / contain no-repeat`}}/>
                                    <CardText >
                                        {book.title}
                                    </CardText>
                                    <CardActions border>
                                        <a href={book.url}>Просмотреть на Озоне</a>
                                    </CardActions>
                                </Card>
                        );
                    })}
                </Grid>
            </div>
        );
    }
}

export default About;
