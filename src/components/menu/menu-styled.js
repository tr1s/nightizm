import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

const overlayShow = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`;

const contentShow = keyframes`
  0% {
    opacity: 0; transform: translate(-50%, -48%) scale(.96);
  }
  100% {
    opacity: 1; transform: translate(-50%, -50%) scale(1);
  }
`;

export const DialogOverlay = styled(Dialog.Overlay)`
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
  /* border: 10px solid yellow; */
  overflow: auto;
  /* animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1); */

  /* @media screen and (max-height: 700px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 60px 0;
  } */

  button {
    cursor: pointer;
    padding: 0;
    width: 35px;
    @media screen and (${(props) => props.theme.phone}) {
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
    right: 30px;
  }
`;

export const DialogContent = styled(Dialog.DialogContent)`
  background-color: 'white';
  border-radius: 6;
  box-shadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px';
  position: 'fixed';
  top: '50%';
  left: '50%';
  transform: 'translate(-50%, -50%)';
  width: '90vw';
  max-width: '450px';
  max-height: '85vh';
  padding: 25;
  /* animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1); */
  /* & focus {
    outline: 'none';
  } */
`;

export const MenuLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 20px;
`;

export const MenuLink = styled(Link)`
  align-self: center; /* allows focus state to only span the width of text. */
  color: var(--grey-400);
  &:hover,
  &:focus {
    color: var(--white-true);
    text-shadow: var(--text-shadow);
  }
  @media screen and (${(props) => props.theme.phone}) {
    & > h3 {
      font-size: 2.2rem;
      margin-bottom: 0.4rem;
    }
  }
`;

export const Paragraph = styled.p`
  max-width: 900px;
  margin: 0 auto;
  color: var(--grey-300);
  font-family: var(--font-body);
  text-align: center;
  margin-bottom: 3rem;
  padding: 1.5rem;
  @media screen and (${(p) => p.theme.phone}) {
    display: none;
  }
  span {
    font-weight: bold;
    color: var(--grey-400);
  }
  a {
    color: var(--blue);
    font-weight: bold;
    text-decoration: underline var(--grey-400);
    &:hover,
    &:focus {
      text-shadow: var(--text-shadow);
    }
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  @media screen and (${(props) => props.theme.phone}) {
    display: none;
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

export const SocialLink = styled(Link)`
  line-height: 1.9;
  display: inline-block;
  color: var(--grey-200);
  margin: 0 1rem;
  @media screen and (${(props) => props.theme.phone}) {
    font-size: 1.3rem;
    line-height: 2.4;
  }
  &:hover,
  &:focus {
    color: var(--white-true);
    text-shadow: var(--text-shadow);
    font-weight: bold;
  }
`;
