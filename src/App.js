import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import { Layout } from 'react-mdl';

import SmartFooter from './layout/footer';
import Header from './layout/header';
import Content from './layout/content';
import Drawer from './layout/drawer';



class App extends Component {
    state = {
        title: 'Smart notes'
    };

    render() {
        return (
          <div className="App">
            
           <Layout style={{ background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover' }}>
                <Header />
                <Drawer title="Title" />
                <Content >
                  { this.props.children }
                </Content>
              <SmartFooter />
            </Layout>
          </div >
        );
    }
}

export default App;
