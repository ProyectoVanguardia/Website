import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';
import sweet3 from '../../images/logo.png';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'><img src="https://i.gyazo.com/20a13d5375c9b1e881f9e6b73c482694.png" alt="animated burger" /></NavLink>
        <NavIcon onClick={toggle}>
          <p>Contastanos</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
