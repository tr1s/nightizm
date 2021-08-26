import styled from 'styled-components';
import { DialogOverlay, DialogContent } from '@reach/dialog';

export const Wrapper = styled(DialogOverlay)`
  color: var(--white);
  background: var(--black);
  border-bottom: 2px dashed var(--blue);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: auto;

  @media screen and (max-height: 700px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 60px 0;
  }

  button {
    cursor: pointer;
    padding: 0;
    width: 35px;
    @media screen and (${(props) => props.theme.awkward}) {
      width: 30px;
    }
    img {
      width: 100%;
    }
  }
  button:first-of-type {
    border: none;
    border-top-left-radius: 0;
    background: transparent;
    position: absolute;
    top: 20px;
    right: 20px;
  }
  button:last-of-type {
    border: none;
    border-bottom-right-radius: 0;
    background: transparent;
    position: absolute;
    bottom: 20px;
    left: 20px;
    @media screen and (max-height: 700px) {
      display: none;
    }
    @media screen and (${(props) => props.theme.awkward}) {
      display: none;
    }
  }
`;

export const WrapperContent = styled(DialogContent)``;

export const MenuLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 20px;
`;

export const MenuLink = styled.a`
  align-self: center; // allows focus state to only span the text.
  color: var(--grey-200);
  line-height: 1.4;
  &:hover,
  &:focus {
    color: var(--blue);
  }
`;

export const StreamingWrapper = styled.div`
  width: 100%;
  border-top: 1px solid var(--grey-100);
  border-bottom: 1px solid var(--grey-100);
  margin-bottom: 4rem;
  &:hover,
  &:focus {
    border-top: 1px solid var(--black-soft);
    border-bottom: 1px solid var(--black-soft);
  }
  img {
    width: 30px;
    margin: 0 auto;
    margin-bottom: 2rem;
    @media screen and (${(props) => props.theme.awkward}) {
      width: 23px;
      margin-bottom: 1rem;
    }
  }
  div {
    /* border: 1px solid red; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: var(--container-width);
    margin: 0 auto;
  }
  p {
    color: var(--grey-400);
    @media screen and (${(props) => props.theme.awkward}) {
      font-size: 1.3rem;
      line-height: 1.6;
    }
  }
`;

export const StreamingLink = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 4rem 2rem;
  cursor: pointer;
  @media screen and (${(props) => props.theme.awkward}) {
    padding: 3rem 1rem;
  }
  &:hover,
  &:focus {
    background: hsl(0, 0%, 4%);
    & span {
      color: var(--white-true);
      text-shadow: 0px 1px 11px var(--white-true);
    }
  }
  span {
    display: table;
    margin: auto;
    font-weight: bold;
  }
  &:first-of-type {
    border-right: 1px solid var(--grey-100);
    &:hover,
    &:focus {
      border-left: 1px solid var(--black-soft);
      border-right: 1px solid var(--black-soft);
    }
  }
  &:last-of-type {
    &:hover,
    &:focus {
      border-left: 1px solid var(--black-soft);
      border-right: 1px solid var(--black-soft);
    }
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  a {
    border: 2px dashed var(--accent);
  }
  a:active {
    border: 2px dashed var(--green);
  }
`;

export const SocialWrapper = styled.div`
  padding: 0 2rem;
  text-align: center;
  figure:not(:last-of-type) {
    margin-right: 0rem;
  }
  figure {
    width: 69px;
    border-radius: var(--border-radius);
  }
`;

export const SocialLink = styled.a`
  line-height: 1.9;
  color: var(--grey-400);
  &:not(:last-child) {
    margin-right: 2rem;
  }
  &:hover,
  &:focus {
    color: var(--white-true);
    text-shadow: 0px 1px 11px var(--white-true);
    font-weight: bold;
  }
`;
