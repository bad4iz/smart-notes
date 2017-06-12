import React, {Component} from 'react';
import {Button, Card, CardActions, CardText, CardTitle, Cell, Chip, ChipContact, Grid, Icon} from "react-mdl";

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
                id: 5,
                title: 'ES6 и не только',
                image: '/files/img/books/1015269939.jpg',
                url: 'http://www.ozon.ru/context/detail/id/137473815/'
            },
            {
                id: 6,
                title: 'драйв',
                image: '/files/img/books/drive.jpg',
                url: 'https://www.ozon.ru/context/detail/id/22524686/'
            },
            {
                id: 7,
                title: 'Все мы врём. Как ложь, жульничество и самообман делают нас людьми',
                image: '/files/img/books/liar.png',
                url: 'http://www.ozon.ru/context/detail/id/137366623/'
            }
        ]
    };
    
    render() {
        return (
            <div >
                <Grid>
                    <Cell col={12}>
                        <h2>Мной осилиная книга</h2>
                    </Cell>
                    { this.state.books.map(book => {
                        // console.log(book); `url(${book.image}) center / contain no-repeat`
                        return (
                            <Card key={book.id} shadow={2} style={{
                                margin: '10px',
                                width: '200px',
                                height: '300px',
                                background: `url(${book.image}) top / contain no-repeat`                            }}>
                                <CardTitle expand/>
                                <CardActions style={{padding: '16px', background: 'rgba(0,0,0,0.4)'}}>
                                    <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                        {book.title}
                                    </span>
                                </CardActions>
                                <CardActions style={{ padding: '0px', background: 'rgba(0,0,0,0.9)'}}>
                                    <a href={book.url} target="_blank">
                                        <Button raised colored ripple> Просмотреть на Ozon</Button>
                                           
                                           </a>
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
