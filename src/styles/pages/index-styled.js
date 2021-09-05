/* Index/Home page styles
========================================================================== */

import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
  @media screen and (${(props) => props.theme.tablet}) {
    flex-direction: column-reverse;
  }
`;

export const Title = styled.h2`
  font-size: clamp(5.8rem, 17.3rem, 11vw);
  color: var(--black);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--grey-300);
  text-align: center;
  @media screen and (${(props) => props.theme.tablet}) {
    /* display: none; */
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
    font-size: 13vw;
    margin-bottom: 0rem;
  }
`;

export const Paragraph = styled.p`
  max-width: var(--container-width);
  color: var(--grey-300);
  text-align: center;
  padding: 0 2rem;
  line-height: 1.7;
  @media screen and (${(props) => props.theme.awkward}) {
    text-align: justify;
  }
  a {
    color: var(--blue);
    font-weight: bold;
  }
  span {
    display: block;
  }
`;

export const ButtonWrapper = styled.div`
  margin-bottom: 7rem;
`;

export const Crosses = styled.p`
  font-size: 2.4rem;
  margin-top: 5.5rem;
  margin-bottom: 3.5rem;
`;

export const TitleTwo = styled.h2`
  color: var(--black-200);
  font-size: clamp(5.8rem, 17.1rem, 11vw);
  font-weight: 100;
  margin-bottom: 4rem;
  @media screen and (${(props) => props.theme.awkward}) {
    font-size: 4rem;
  }
`;
