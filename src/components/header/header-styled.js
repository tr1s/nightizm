/* Header styles
========================================================================== */

import styled from 'styled-components';

export const Wrapper = styled.header`
  /* z-index: 1; */
`;

export const Nav = styled.nav`
  height: 6.7rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  backdrop-filter: saturate(180%) blur(14px);
  border-bottom: 1px solid var(--grey-100);
  @media screen and (${(props) => props.theme.phone}) {
    background: var(--black-100);
    backdrop-filter: none;
  }
`;

export const NavLink = styled.a`
  color: var(--grey-200);
  font-family: var(--font-mono);
  font-size: 1.6rem;
  cursor: pointer;
  margin-right: 3rem;
  @media screen and (${(props) => props.theme.phone}) {
    display: none;
  }
  &:hover,
  &:focus {
    color: var(--white-true);
    text-shadow: var(--text-shadow);
    font-weight: bold;
  }
`;

export const MenuButton = styled.button`
  width: 35px;
  padding: 0;
  margin: 0;
  margin-left: auto;
  cursor: pointer;
  background: none;
  border: none;
`;

export const Logo = styled.figure`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: var(--black);
  border: 2px dashed var(--grey-200);
  border-radius: var(--border-radius);
  padding-top: 14px;
  padding-bottom: 7px;
  @media screen and (${(props) => props.theme.phone}) {
    display: none;
  }
  &:hover,
  &:focus {
    border: 2px dashed var(--grey-300);
  }
  &:active {
    border: 2px dashed var(--blue);
  }
`;
