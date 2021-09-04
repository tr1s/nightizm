/* Footer styles
========================================================================== */

import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  backdrop-filter: blur(14px);
  border-bottom: 2px dashed var(--grey-300);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const MenuButton = styled.button`
  height: 140px;
  background: var(--black);
  cursor: pointer;
  color: var(--grey-300);
  opacity: 0.6;
  border: none;
  width: 100%;
  &:hover,
  &:focus {
    color: var(--grey-400);
    background: var(--grey-100);
  }
  @media screen and (${(props) => props.theme.awkward}) {
    height: 80px;
  }
  h2 {
    @media screen and (${(props) => props.theme.awkward}) {
      font-size: 4rem;
    }
  }
`;
