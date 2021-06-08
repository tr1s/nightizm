import styled from 'styled-components';

export const Wrapper = styled.div`
  background: blue;
  background: var(--white);
  color: var(--black);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (prefers-color-scheme: dark) {
    background: var(--black);
    color: var(--white);
  }

  button {
    cursor: pointer;
    padding: 0;
    img {
      width: 69px;
    }
  }
  button:first-of-type {
    border: none;
    border-radius: 4px;
    border-top-left-radius: 0;
    background: transparent;
    position: absolute;
    top: 23px;
    left: 23px;
  }
  button:last-of-type {
    border: none;
    border-radius: 4px;
    border-bottom-right-radius: 0;
    background: transparent;
    position: absolute;
    bottom: 23px;
    right: 23px;
  }
`;

export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-of-type) {
    margin-bottom: 7.5rem !important;
  }
  h2 {
    color: var(--grey-400);
  }
  h2:hover {
    @media (prefers-color-scheme: dark) {
      color: var(--white);
    }
  }
  a {
    color: var(--black);
    @media (prefers-color-scheme: dark) {
      color: var(--grey-300);
    }
  }
  a:hover {
    @media (prefers-color-scheme: dark) {
      color: var(--grey-400);
    }
  }
`;
