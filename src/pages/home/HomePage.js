import React, { Component } from 'react';

class HomePage extends Component {

    static path = '/';

    state = {  };
    
    render() {
        return (
            <div style={{background: 'url(https://goo.gl/mGkpd6) center / cover'}}>
                <h1>Главное не что делаешь а как!</h1>
            </div>
        );
    }
}

export default HomePage;
