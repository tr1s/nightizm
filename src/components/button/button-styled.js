/* Button styles
========================================================================== */

import styled from 'styled-components';

export const ButtonLink = styled.button`
  background: var(--black);
  color: var(--grey-400);
  font-weight: bold;
  padding: 14px 19px;
  border: 2px dashed var(--accent);
  border-radius: var(--border-radius);
  font-size: 1.9rem;
  position: relative;
  transition: 0.1s all ease;
  &:hover,
  &:focus {
    color: var(--white-true);
    text-shadow: 0px 1px 11px var(--white-true);
    background: var(--black-200);
    transition: 0.1s all ease;
  }
  &:active {
    border: 2px dashed var(--red);
  }
`;
