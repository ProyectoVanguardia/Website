import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'><img src="https://i.gyazo.com/20a13d5375c9b1e881f9e6b73c482694.png" alt="animated burger" /></NavLink>
        <NavIcon onClick={toggle}>
          <p>Contactanos</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
