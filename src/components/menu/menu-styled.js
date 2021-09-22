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
    right: 20px;
  }
`;

export const WrapperContent = styled(DialogContent)`
  /*  */
`;

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
    text-shadow: var(--text-shadow);
    text-shadow: 0 1px 11px var(--blue);
  }
`;

export const Paragraph = styled.p`
  max-width: 900px;
  margin: 0 auto;
  color: var(--grey-300);
  font-family: var(--font-body);
  text-align: center;
  margin-bottom: 5rem;
  padding: 1.5rem;
  span {
    font-weight: bold;
    color: var(--grey-400);
  }
  a {
    color: var(--accent);
    font-weight: bold;
    &:hover,
    &:focus {
      text-shadow: var(--text-shadow);
    }
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 4rem;
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
  color: var(--grey-300);
  &:not(:last-child) {
    margin-right: 2rem;
  }
  &:hover,
  &:focus {
    color: var(--white-true);
    text-shadow: var(--text-shadow);
    font-weight: bold;
  }
`;
