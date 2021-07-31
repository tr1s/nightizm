import styled from 'styled-components';

export const Article = styled.article`
  font-family: var(--font-body);
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 9.5rem;
    font-size: clamp(5.8rem, 9.5rem, 7vw);
    text-align: center;
    color: var(--black-soft);
    padding: 8rem 5%;
    padding-bottom: 2rem;
    width: 100%;
    margin: 0 auto;
    grid-column: 1 / 4;
    @media screen and (${(props) => props.theme.mobileLarge}) {
      font-size: 4rem;
    }
  }
  time {
    text-align: center;
    font-family: var(--font-mono);
    line-height: 1.6;
  }
  time:last-of-type {
    margin-bottom: 8rem;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns:
    1fr
    min(69ch, 100%)
    1fr;
  margin-bottom: 10rem;

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
    line-height: 2.9rem;
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
    color: var(--accent);
    font-weight: bolder;
    font-size: 1.8rem;
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
