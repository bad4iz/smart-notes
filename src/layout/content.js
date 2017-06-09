import React, { Component } from 'react';
import { Content as MDLContent } from 'react-mdl';

import routes from './router';

class Content extends Component {
    state = {};
    
    render() {
        return (
                <MDLContent style={{width: '80%', margin: 'auto'}}>
                     { routes  }
                </MDLContent>
        );
    }
}

export default Content;

