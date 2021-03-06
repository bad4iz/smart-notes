import React from 'react';
import logo from '../logo.svg';
import './header.css';

import { Header as MDLHeader, HeaderRow, Textfield, Navigation } from 'react-mdl';

import { Link } from 'react-router-dom';

const Header = (title) => (
            <MDLHeader waterfall style={{ backgroundColor: '#222' }} >
           
                <HeaderRow title={ title.title }>
                    <div className="ReactLogo">
                        <img src={logo} className="App-logo" alt='bad4iz' />
                    </div>
                    <Textfield
                        value=""
                        onChange={() => { }}
                        label="Search2"
                        expandable
                        expandableIcon="search"
                    />
                </HeaderRow>
                <HeaderRow >
                    
                        <Navigation>
                            <Link to="/">Home</Link>
                            <Link to="/smart-notes">Smart notes</Link>
                            <Link to="/about">About</Link>
                        </Navigation>
                    
                    <div className="ReactLogo2">
                        <img src={logo} className="App-logo" alt="logo" />
                        <Textfield
                            value=""
                            onChange={() => { }}
                            label="Search2"
                            expandable
                            expandableIcon="search"
                        />
                    </div>
                </HeaderRow>
            </MDLHeader>


        );

export default Header;
