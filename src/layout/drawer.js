import React, { Component } from 'react';
import {Drawer as MDLDrawer, Navigation} from 'react-mdl';

class Drawer extends Component {
    
    state = {  };
    
    render() {
        // const {title} = { this.props };
        return (
            <MDLDrawer title={this.props.title}>
            <Navigation>
              <a href="#2">Link</a>
              <a href="#3">Link</a>
              <a href="#4">Link</a>
              <a href="#5">Link</a>
            </Navigation>
          </MDLDrawer>
        );
    }
}

export default Drawer;

