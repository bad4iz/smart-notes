import React from 'react';
import { Footer as MDLFooter, FooterSection, FooterLinkList} from 'react-mdl';


const Footer = (title) => (
        <MDLFooter size="mini">
            <FooterSection type="left" logo="Bad4iz">
                <FooterLinkList>
                    <a href="#Help">Help</a>
                    <a href="#Privacy">Privacy & Terms</a>
                </FooterLinkList>
            </FooterSection>
        </MDLFooter>
    );

export default Footer;

