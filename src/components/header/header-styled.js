/* Header styles
========================================================================== */

import styled from 'styled-components';

export const Wrapper = styled.header`
  z-index: 1;
`;

export const Nav = styled.nav`
  padding: 1.3rem 2rem;
  padding-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--grey-200);

  ul {
    display: flex;
    flex-direction: column;
  }
  li:not(:last-child) {
    margin-right: 3rem;
    @media screen and (${(props) => props.theme.mobileLarge}) {
      margin-right: 0;
    }
  }
`;

export const NavLink = styled.a`
  color: var(--grey-400);
  font-family: var(--font-mono);
  font-size: 1.6rem;
  cursor: pointer;
  &:hover,
  &:focus {
    color: var(--grey-500);
  }
`;

export const MenuButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  width: 35px;
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
