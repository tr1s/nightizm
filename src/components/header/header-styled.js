/* Header styles
========================================================================== */

import styled from 'styled-components';

export const Wrapper = styled.header`
  /* background: var(--black); */
`;

export const Nav = styled.nav`
  display: flex;
  padding: 1.3rem 2rem;
  position: fixed;

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

export const Logo = styled.figure`
  text-align: center;
  font-size: 4rem;
  /* border: 1px solid white; */
  padding: 11rem;
  padding-bottom: 0;
`;
