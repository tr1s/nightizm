/* Button styles
========================================================================== */

import styled from 'styled-components';

export const ButtonLink = styled.button`
  background: var(--black);
  color: var(--grey-500);
  padding: 9px 21px;
  border: 2px solid var(--grey-500);
  border: 2px dashed var(--red);
  border-radius: var(--border-radius);
  font-size: 1.9rem;
  position: relative;
  transition: 0.1s all ease;
  &:hover {
    transition: 0.1s all ease;
    background: var(--black-200);
    color: var(--white-true);
  }
  &:active {
    color: var(--accent);
    color: #fbed68;
    border: 2px dashed var(--red);
  }
`;
