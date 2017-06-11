import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { Layout } from 'react-mdl';

import Header from './layout/header';
import Content from './layout/content';
import Drawer from './layout/drawer';
import Footer from './layout/footer';

class App extends Component {
    state = {
        title: 'Bad4iz'
    };
    hendlerTitle = (titl = 'Bad4iz') => {
        this.setState({ title: titl });
    };
    
    render() {
        return (
          <div className="App">
           
           <Layout style={{ background: 'url(https://www.firestock.ru/wp-content/uploads/2014/09/photodune-1464507-700x466.jpg) center / cover' }}>
                <Header title={this.state.title}/>
                <Drawer title={this.state.title} />
                <Content 
                hendlerTitle={this.hendlerTitle}
                >
                  { this.props.children }
                </Content>
              <Footer title={this.state.title}/>
            </Layout>
          </div >
        );
    }
}

export default App;
