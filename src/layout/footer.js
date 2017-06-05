import React, { Component } from 'react';
import { Footer as MDLFooter, FooterSection, FooterLinkList} from 'react-mdl';


class SmartFooter extends Component {
    state = {}
    render() {
        return (
            <MDLFooter size="mini">
                <FooterSection type="left" logo="Title">
                    <FooterLinkList>
                        <a href="#Help">Help</a>
                        <a href="#Privacy">Privacy & Terms</a>
                    </FooterLinkList>
                </FooterSection>
            </MDLFooter>
        );
    }
}

export default SmartFooter;

