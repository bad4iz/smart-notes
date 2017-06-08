import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// import { Layout } from 'react-mdl';
//
// import Header from './layout/header';
// import Content from './layout/content';
// import Drawer from './layout/drawer';
// import Footer from './layout/footer';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import {cyan500} from 'material-ui/styles/colors';
const muiTheme = getMuiTheme({
    palette: {
        textColor: cyan500,
    },
    appBar: {
        height: 50,
    },
});

class App extends Component {
    state = {
        title: 'Bad4iz'
    };

    render() {
        return (
          <div className="App">
              <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                  <AppBar title="My AppBar" />
              </MuiThemeProvider>
             
            {/**/}
           {/*<Layout style={{ background: 'url(https://www.firestock.ru/wp-content/uploads/2014/09/photodune-1464507-700x466.jpg) center / cover' }}>*/}
                {/*<Header title={this.state.title}/>*/}
                {/*<Drawer title={this.state.title} />*/}
                {/*<Content >*/}
                  {/*{ this.props.children }*/}
                {/*</Content>*/}
              {/*<Footer title={this.state.title}/>*/}
            {/*</Layout>*/}
          </div >
        );
    }
}

export default App;
