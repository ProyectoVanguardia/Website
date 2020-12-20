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
        <SidebarLink href='https://www.instagram.com/kandtarte/' > Instagram</SidebarLink>
        <SidebarLink href='https://www.instagram.com/kandtarte/' > Facebook</SidebarLink>
        <SidebarLink to='/'>Tel. 95560045</SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
