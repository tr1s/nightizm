import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
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

  @media screen and (${(props) => props.theme.awkward}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  /* @media (prefers-color-scheme: dark) {
    background: var(--black) !important;
    color: var(--white);
  } */

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
    @media screen and (${(props) => props.theme.awkward}) {
      display: none;
    }
  }
  button:last-of-type {
    border: none;
    border-radius: 4px;
    border-bottom-right-radius: 0;
    background: transparent;
    position: absolute;
    bottom: 23px;
    right: 23px;
    @media screen and (${(props) => props.theme.awkward}) {
      display: none;
    }
  }
`;

export const SubmenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (${(props) => props.theme.awkward}) {
    justify-content: flex-start;
  }
`;

export const SubMenu = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 7.5rem;
    @media screen and (${(props) => props.theme.awkward}) {
      margin-bottom: 4rem;
    }
  }
`;

export const SubMenuTitle = styled.h2`
  color: var(--grey-100);
  text-align: center;
  @media screen and (${(props) => props.theme.awkward}) {
    font-size: 3.5rem;
    text-align: left;
    padding: 1.5rem;
  }
  /* &:hover {
    @media (prefers-color-scheme: dark) {
      color: var(--white);
    }
  } */
`;
export const SubMenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a:first-of-type {
    @media screen and (${(props) => props.theme.awkward}) {
      border-top: 1px solid var(--grey-400);
    }
  }
  a {
    color: var(--black);
    @media screen and (${(props) => props.theme.awkward}) {
      padding-left: 2rem;
      border-bottom: 1px solid var(--grey-400);
      display: inline-block;
      width: 100%;
      padding: 1rem;
      padding-left: 3rem;
    }
    /* @media (prefers-color-scheme: dark) {
      color: var(--grey-300);
    } */
  }
  a:hover {
    background: var(--grey-500);
    /* @media (prefers-color-scheme: dark) {
      color: var(--grey-400);
    } */
  }
`;

export const MobileClose = styled.aside`
  display: none;

  @media screen and (${(props) => props.theme.awkward}) {
    border-left: 1px solid var(--grey-400);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
    cursor: pointer;
    &:hover,
    &:focus {
      background: var(--grey-500);
    }
    h2 {
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      align-self: center;
    }
  }
`;

export const MobileIconWrapper = styled.div`
  display: none;

  @media screen and (${(props) => props.theme.awkward}) {
    display: initial;
    position: absolute;
    bottom: 1rem;
  }
`;
