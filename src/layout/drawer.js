import React, { Component } from 'react';
import {Drawer as MDLDrawer, Navigation} from 'react-mdl';

import { Link } from 'react-router-dom';
class Drawer extends Component {
    
    state = {  };
    
    render() {
        // const {title} = { this.props };
        return (
            <MDLDrawer title={this.props.title}>
            <Navigation>
                 <Link to="/">Home</Link>
                 <Link to="/me">Me</Link>
              <a href="/">Link</a>
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

