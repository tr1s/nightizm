import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  border-top: 1px solid var(--grey-100);
  border-bottom: 1px solid var(--grey-100);
  &:hover,
  &:focus {
    border-top: 1px solid var(--black-soft);
    border-bottom: 1px solid var(--black-soft);
  }
  img {
    filter: saturate(69%);
  }
`;

export const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: var(--container-inner-width);
  margin: 0 auto;
`;

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 4rem 2rem;
  cursor: pointer;
  @media screen and (${(props) => props.theme.phone}) {
    padding: 3rem 1rem;
  }
  &:hover,
  &:focus {
    background: hsl(0, 0%, 4%);
    & p span {
      color: var(--white-true);
      text-shadow: var(--text-shadow);
    }
  }
  &:hover p,
  &:focus p {
    color: var(--grey-400);
  }
  &:first-child:hover img,
  &:first-child:focus img {
    filter: saturate(166%);
  }
  &:last-child:hover img,
  &:last-child:focus img {
    filter: saturate(166%);
  }
  p span {
    display: table;
    margin: auto;
    font-weight: bold;
    color: var(--grey-400);
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

export const ImageContainer = styled.span`
  width: 30px;
  margin: 0 auto 2rem;
  line-height: 0;
  @media screen and (${(props) => props.theme.phone}) {
    width: 23px;
    margin-bottom: 1rem;
  }

  ${(p) =>
    p.apple &&
    css`
      ${'' /* width: 30px; */}
    `}
`;

export const Text = styled.p`
  color: var(--grey-300);
  @media screen and (${(props) => props.theme.phone}) {
    font-size: 1.3rem;
    line-height: 1.6;
  }
`;
