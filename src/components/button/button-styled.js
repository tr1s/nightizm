/* Button styles
========================================================================== */

import styled from 'styled-components';

export const HrefLink = styled.a`
  color: black;
  background: var(--white);
  padding: 7px 20px;
  border: 4px solid var(--black);
  border-radius: var(--border-radius);
  font-weight: 900;
  position: relative;
  top: -2px;
  transition: 0.1s all ease;
  box-shadow: 0 3px 0 var(--white);
  &:hover {
    transition: 0.1s all ease;
    box-shadow: 0 1px 0 var(--white);
    top: 0;
  }
  &:active {
    background: var(--grey-400);
  }
`;

export const ButtonLink = styled.button`
  color: black;
  background: var(--white);
  padding: 7px 20px;
  border: 4px solid var(--black);
  border-radius: var(--border-radius);
  font-weight: 900;
  position: relative;
  top: -2px;
  transition: 0.1s all ease;
  box-shadow: 0 3px 0 var(--white);
  &:hover {
    transition: 0.1s all ease;
    box-shadow: 0 1px 0 var(--white);
    top: 0;
  }
  &:active {
    background: var(--grey-400);
  }
`;
