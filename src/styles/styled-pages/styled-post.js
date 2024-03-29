import styled, { css } from 'styled-components';

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  font-family: var(--font-body);
  color: var(--blue);
  ${(props) =>
    props.homepage &&
    css`
      padding: 11.6rem 0 2rem 0;
      @media screen and (${(props) => props.theme.phone}) {
        padding: 3rem 0 0 0;
      }
    `};

  time {
    text-align: center;
    font-family: var(--font-mono);
    line-height: 1.6;
    color: var(--grey-400);
  }
  time:last-of-type {
    margin-bottom: 6rem;
    color: var(--accent);
    font-weight: bold;
  }
`;

export const Title = styled.h1`
  min-height: 0vh; /* fixes clamp bug in safari */
  font-size: clamp(5.8rem, 17.1rem, 7vw);
  text-align: center;
  color: var(--black-soft);
  color: var(--black-200);
  padding: 10rem 5% 2rem 5%;
  width: 100%;
  margin: 0 auto;
  grid-column: 1 / 4;
  @media screen and (${(props) => props.theme.phone}) {
    padding: 5rem 0 4.2rem 0;
  }
  @media screen and (${(props) => props.theme.phoneSmall}) {
    font-size: 4rem;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns:
    1fr
    min(69ch, 100%)
    1fr;

  & > * {
    grid-column: 2;
    margin-bottom: 3rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--grey-400);
    &:hover {
      color: var(--white);
    }
  }

  h1 {
    min-height: 0vh; /* fixes clamp bug in safari */
    font-size: clamp(5.8rem, 9.5rem, 7vw);
    text-align: center;
  }

  h2 {
    font-size: 5.8rem;
    margin-left: -4rem;
    @media screen and (${(props) => props.theme.tablet}) {
      margin-left: 0;
    }
  }
  p,
  a,
  li {
    font-size: 1.9rem;
    letter-spacing: 0.06rem;
    color: var(--grey-300);
  }

  ul {
    padding-left: 4rem;
    list-style-type: initial;
  }
  ol {
    padding-left: 4rem;
    list-style-type: decimal;
  }

  a {
    color: var(--blue);
    font-weight: bolder;
    font-size: 1.8rem;
    text-decoration: underline var(--grey-400);
    &:hover,
    &:focus {
      color: var(--pink);
      text-decoration: underline var(--white);
    }
  }

  strong {
    color: var(--grey-400);
  }

  blockquote {
    position: relative;
    font-style: italic;
    &::before {
      content: url('/quote-white.svg');
      position: absolute;
      left: -4rem;
    }
  }
`;

export const Back = styled.a`
  border: 2px solid var(--black-200);
  border-radius: var(--border-radius);
  padding: 2rem;
  font-size: 1.9rem;
  margin-bottom: 6.6rem;
  text-decoration: none !important;
  &:hover,
  &:focus {
    border: 2px solid var(--black-300);
  }
  h3 span {
    color: var(--blue);
    text-decoration: underline;
    text-decoration-color: var(--grey-400);
  }
  &:hover h3 span,
  &:focus h3 span {
    color: var(--pink);
    text-decoration: underline var(--white);
  }
  h3,
  p,
  a {
    font-size: 1.9rem;
  }
`;
