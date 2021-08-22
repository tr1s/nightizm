/* Index/Home page styles
========================================================================== */

import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  flex: 1 0 auto;
  padding-top: 7.6rem;
`;

export const TitleWrapper = styled.div`
  padding: 0rem 0;
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: clamp(5.8rem, 17.3rem, 11vw);
  color: var(--black);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--grey-300);
  text-align: center;
  @media screen and (${(props) => props.theme.tablet}) {
    display: none;
  }
`;

export const SubTitle = styled.h1`
  color: var(--black-200);
  margin-bottom: -10.5rem;
  text-align: center;
  @media screen and (${(props) => props.theme.desktop13}) {
    margin-bottom: -8rem;
  }
  @media screen and (${(props) => props.theme.tabletLarge}) {
    margin-bottom: -6rem;
  }
  @media screen and (${(props) => props.theme.tablet}) {
    font-size: 5.8rem;
    margin-bottom: 0rem;
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

export const StreamingParagraph = styled.p`
  margin-bottom: 3rem;
  max-width: var(--container-width);
  color: var(--grey-300);
  text-align: center;
  padding: 0 2rem;
  font-family: var(--font-body);
  line-height: 1.7;
  @media screen and (${(props) => props.theme.awkward}) {
    text-align: justify;
  }
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

export const Crosses = styled.p`
  font-size: 2.4rem;
  margin-bottom: 8.5rem;
`;

export const TitleTwo = styled.h2`
  color: var(--black-200);
  font-size: clamp(5.8rem, 17.1rem, 11vw);
  font-weight: 100;
  @media screen and (${(props) => props.theme.awkward}) {
    font-size: 4rem;
  }
`;
