import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink>Contactanos!</SidebarLink>
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="https://www.instagram.com/kandtarte/" target="_blank">Instagram</a>
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="https://www.facebook.com/kandtarte/" target="_blank">Facebook</a>
        <SidebarLink to='/'>Tel. 95560045</SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
