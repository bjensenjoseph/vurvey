import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Navbar,
  NavbarDivider,
  NavbarHeading,
  NavbarGroup,
} from '@blueprintjs/core';

const linkStyle = {
  margin: '0 .5em',
};
const routes = [{
  name: 'Home',
  link: '/',
}, {
  name: 'About',
  link: '/about-us',
}, {
  name: 'Rates',
  link: '/rates',
}, {
  name: 'Survey',
  link: '/survey',
}];

const Header = () => (
  <Navbar>
    <NavbarGroup>
      <NavbarHeading>Vurv</NavbarHeading>
      <NavbarDivider />
      {routes.map(route => (
        <Link to={route.link} style={linkStyle}>{route.name}</Link>
      ))}
    </NavbarGroup>
  </Navbar>
);

export default Header;
