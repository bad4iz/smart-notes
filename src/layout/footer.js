import React from 'react';
import { Footer as MDLFooter, FooterSection, FooterLinkList} from 'react-mdl';


const Footer = (title) => {
    return (
        <MDLFooter size="mini">
            <FooterSection type="left" logo={title.title}>
                <FooterLinkList>
                    <a href="#Help">Help</a>
                    <a href="#Privacy">Privacy & Terms</a>
                </FooterLinkList>
            </FooterSection>
        </MDLFooter>
    );}

export default Footer;

