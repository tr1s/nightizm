/* Header styles
========================================================================== */
import Link from 'next/link';
import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const Wrapper = styled.header`
  z-index: 1;
`;

export const Nav = styled.nav`
  height: 6.7rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  background: var(--black-see-through);
  background-image: url('/nnnoise.svg');
  backdrop-filter: saturate(180%) blur(14px);
  border-bottom: 2px solid var(--grey-100);
  @media screen and (${(props) => props.theme.phone}) {
    background: var(--black-100);
    backdrop-filter: none;
  }
`;

export const NavLink = styled(Link)`
  color: var(--grey-300);
  font-family: var(--font-mono);
  font-size: 1.6rem;
  cursor: pointer;
  margin-right: 3rem;
  @media screen and (${(props) => props.theme.phone}) {
    display: none;
  }
  &:hover,
  &:focus {
    color: var(--white-true);
    text-shadow: var(--text-shadow);
    font-weight: bold;
  }
`;

export const MenuButton = styled(Dialog.Trigger)`
  width: 35px;
  padding: 0;
  margin: 0;
  margin-left: auto;
  cursor: pointer;
  background: none;
  border: none;
  display: flex;
  place-items: center;
`;

export const LogoWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 33px;
  transform: translateX(-50%);
  background: var(--black);
  border: 2px dashed var(--grey-200);
  border-radius: var(--border-radius);
  @media screen and (${(props) => props.theme.phone}) {
    display: none;
  }
  &:hover,
  &:focus {
    border: 2px dashed var(--grey-300);
  }
  &:active {
    border: 2px dashed var(--blue);
  }
  a {
    display: inline-block;
    padding-top: 14px;
    padding-bottom: 7px;
  }
`;

export const DialogOverlay = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.7);
  position: 'fixed';
  inset: 0;
  animation: modal 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;
