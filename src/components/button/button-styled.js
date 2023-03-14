/* Button styles
========================================================================== */

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const ButtonLink = styled.button`
  display: inline-block;
  color: var(--white-true);
  background: var(--black-200);
  border: 1px dashed var(--grey-200);
  padding: 14px 19px;
  border: 1px solid inherit;
  text-shadow: 0 1px 11px black;
  position: relative;
  border-radius: var(--border-radius);
  font-size: 1.9rem;
  position: relative;
  transition: 0.2s all ease;
  @media screen and (${(props) => props.theme.phone}) {
    font-size: 1.6rem;
  }
  ${(props) =>
    props.type === 'secondary' &&
    css`
      background: var(--blue-100);
      border: 1px dashed var(--grey-400);
    `}
  &:hover,
  &:focus {
    background: var(--black-200);
    border: 1px dashed var(--grey-400);
    font-weight: bold;
    color: var(--white-true);
    text-shadow: var(--text-shadow);
    transition: 0.6s all ease;
    ${(props) =>
      props.type === 'secondary' &&
      css`
        background: var(--blue-100);
        border: 2px dashed var(--red);
      `}
  }
  &:hover ~ span,
  &:focus ~ span {
    top: -2.4rem;
    transition: 0.6s all ease;
  }
  &:active {
    border: 2px dashed var(--accent);
    transition: 0.1s all ease;
  }
`;

export const Emoji = styled.span`
  z-index: -1;
  font-size: 3.5rem;
  position: absolute;
  top: -1.5rem;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.2s all ease;
`;
