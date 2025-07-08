import React from 'react';
import styled from 'styled-components';

const HeaderBar = styled.header`
  width: 100%;
  padding: 1.5rem 2rem 1.5rem 2rem;
  background: transparent;
  border-bottom: none;
  position: absolute;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: #a8b2d1;
  font-weight: 600;
  font-size: 1.05rem;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: #ff77c6;
  }
`;

const Header = () => (
  <HeaderBar>
    <Nav>
      <NavLink href="#services">Services</NavLink>
      <NavLink href="#process">Process</NavLink>
      <NavLink href="#faq">FAQ</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </Nav>
  </HeaderBar>
);

export default Header; 