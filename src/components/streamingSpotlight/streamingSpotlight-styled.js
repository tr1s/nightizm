import styled from 'styled-components';

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
  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: var(--container-width);
    margin: 0 auto;
  }
  a:hover p,
  a:focus p {
    color: var(--grey-400);
  }
  a:first-child:hover img,
  a:first-child:focus img {
    filter: saturate(166%);
  }
  a:last-child:hover img,
  a:last-child:focus img {
    filter: saturate(166%);
  }
  img {
    width: 30px;
    margin: 0 auto;
    margin-bottom: 2rem;
    filter: saturate(69%);
    @media screen and (${(props) => props.theme.phone}) {
      width: 23px;
      margin-bottom: 1rem;
    }
  }
  p {
    color: var(--grey-300);
    @media screen and (${(props) => props.theme.phone}) {
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
  @media screen and (${(props) => props.theme.phone}) {
    padding: 3rem 1rem;
  }
  &:hover,
  &:focus {
    background: hsl(0, 0%, 4%);
    & span {
      color: var(--white-true);
      text-shadow: var(--text-shadow);
    }
  }
  span {
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
