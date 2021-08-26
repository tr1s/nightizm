/* Header styles
========================================================================== */

import styled from 'styled-components';

export const Wrapper = styled.header`
  /* z-index: 1; */
`;

export const Nav = styled.nav`
  height: 7.6rem;
  padding: 1.3rem 2rem;
  padding-bottom: 1.5rem;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--grey-200);
`;

export const NavLink = styled.a`
  color: var(--grey-400);
  font-family: var(--font-mono);
  font-size: 1.6rem;
  cursor: pointer;
  margin-right: 3rem;
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
  text-align: center;
  font-size: 4rem;
  border: 1px dashed var(--grey-300);
  border-radius: var(--border-radius);
  padding-top: 14px;
  padding-bottom: 13px;
  background: black;
  @media screen and (${(props) => props.theme.mobileLarge}) {
    display: none;
  }
  &:hover,
  &:focus {
    border: 1px dashed var(--grey-400);
  }
  &:active {
    border: 1px dashed var(--blue);
  }
`;
