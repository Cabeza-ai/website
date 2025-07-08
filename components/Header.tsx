import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderBar = styled.header`
  width: 100%;
  padding: 1.5rem 2rem 1.5rem 2rem;
  background: transparent;
  border-bottom: none;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Nav = styled.nav<{ open?: boolean }>`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    right: 0;
    background: rgba(10, 10, 15, 0.98);
    flex-direction: column;
    align-items: flex-end;
    gap: 1.5rem;
    padding: 1.5rem 2rem;
    border-radius: 0 0 0 1.5rem;
    box-shadow: 0 8px 32px rgba(0,0,0,0.18);
    min-width: 60vw;
    display: ${({ open }) => (open ? 'flex' : 'none')};
  }
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
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.5rem 0;
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 101;
  @media (max-width: 768px) {
    display: block;
    margin-left: 1rem;
  }
  span {
    display: block;
    width: 28px;
    height: 4px;
    margin: 5px 0;
    background: #fff;
    border-radius: 2px;
    transition: 0.3s;
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <HeaderBar>
      <Hamburger aria-label="Toggle navigation" onClick={() => setOpen(o => !o)}>
        <span style={{ transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
        <span style={{ opacity: open ? 0 : 1 }} />
        <span style={{ transform: open ? 'rotate(-45deg) translate(7px, -6px)' : 'none' }} />
      </Hamburger>
      <Nav open={open}>
        <NavLink href="#services" onClick={() => setOpen(false)}>Services</NavLink>
        <NavLink href="#process" onClick={() => setOpen(false)}>Process</NavLink>
        <NavLink href="#faq" onClick={() => setOpen(false)}>FAQ</NavLink>
        <NavLink href="#contact" onClick={() => setOpen(false)}>Contact</NavLink>
      </Nav>
    </HeaderBar>
  );
};

export default Header; 