/* Header styles
========================================================================== */

import styled from 'styled-components';

export const Wrapper = styled.header`
  background: var(--black-200);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  position: relative;
  button {
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    color: var(--grey-400);
    padding: 0.7rem 1.2rem;
    background: var(--black-soft);
    border-radius: var(--border-radius);
    border: none;
    font-weight: bold;
    &:hover {
      color: var(--grey-400);
    }
  }
  ul {
    display: flex;
    @media screen and (${(props) => props.theme.mobileLarge}) {
      text-align: center;
      flex-direction: column;
    }
  }
  li:not(:last-child) {
    margin-right: 3rem;
    @media screen and (${(props) => props.theme.mobileLarge}) {
      margin-right: 0;
    }
  }
`;

export const NavLink = styled.a`
  color: var(--grey-300);
  font-family: var(--font-mono);
  font-size: 1.6rem;
  &:hover,
  &:focus {
    color: var(--grey-400);
  }
`;

export const Logo = styled.figure`
  text-align: center;
  margin-bottom: -1rem;
`;
