/* Button styles
========================================================================== */

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  &:hover span,
  &:focus span {
    top: -1.9rem;
    transition: 0.6s all ease;
  }
`;

export const Emoji = styled.span`
  z-index: -1;
  font-size: 3.5rem;
  position: absolute;
  top: -0.9rem;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.2s all ease;
`;

export const ButtonLink = styled.button`
  color: var(--black-soft);
  background: var(--white);
  color: var(--white-true);
  background: var(--black-200);
  border: 2px dashed var(--grey-200);
  padding: 14px 19px;
  border: 1px solid inherit;
  text-shadow: 0 1px 11px black;
  position: relative;
  border-radius: var(--border-radius);
  font-size: 1.9rem;
  position: relative;
  transition: 0.2s all ease;
  ${(props) =>
    props.type === 'secondary' &&
    css`
      background: var(--black);
      border: 2px dashed var(--accent);
    `}

  &:hover,
  &:focus {
    background: var(--black-200);
    border: 2px dashed var(--grey-300);
    font-weight: bold;
    color: var(--white-true);
    text-shadow: var(--text-shadow);
    transition: 0.6s all ease;
  }
  &:active {
    border: 2px dashed var(--accent);
    transition: 0.1s all ease;
  }
`;
