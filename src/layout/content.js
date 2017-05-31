import React, { Component } from 'react';
import { Content as MDLContent } from 'react-mdl';

import routes from './Router';

class Content extends Component {
    state = {}
    render() {
        console.log(this.props);
        return (
                <MDLContent>
                     { routes }
                </MDLContent>
        );
    }
}

export default Content;
