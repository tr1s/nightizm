import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background: var(--black);
  color: var(--white);
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
    /* flex-direction: row;
    justify-content: space-between;
    align-items: flex-end; */
  }

  button {
    cursor: pointer;
    padding: 0;
    img {
      width: 69px;
    }
  }
  button:first-of-type {
    border: 1px dashed white;
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
    border: 1px dashed white;
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

export const MenuLinkWrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const MenuLink = styled.a`
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
  }
`;
export const StreamingLink = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 4rem 2rem;
  cursor: pointer;
  &:hover,
  &:focus {
    background: hsl(0, 0%, 4%);
    & span {
      color: var(--white-true);
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
export const StreamingParagraph = styled.p`
  margin-bottom: 3rem;
  max-width: var(--container-width);
  color: var(--grey-300);
  text-align: center;
  padding: 0 2rem;
  text-align: justify;
  a {
    color: var(--blue);
    font-weight: bold;
  }
  span {
    color: var(--yellow);
    font-weight: bold;
  }
`;

export const ButtonWrapper = styled.div`
  margin-bottom: 4rem;
  a {
    border: 2px dashed var(--accent);
  }
  a:active {
    border: 2px dashed var(--green);
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  figure:not(:last-of-type) {
    margin-right: 2rem;
    border: 1px solid var(--black-soft);
    border-radius: var(--border-radius);
  }
  figure {
    width: 69px;
    padding: 20px;
    border: 1px solid var(--grey-100);
  }
`;

export const SocialLink = styled.a`
  font-weight: bold;
`;
