/* Index/Home page styles
========================================================================== */

import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainTitle = styled.h2`
  color: var(--black-200);
  font-size: clamp(5.8rem, 17.1rem, 11vw);
  min-height: 0vh; /* fixes clamp bug in safari */
  font-weight: 100;
  margin-bottom: 4rem;
  @media screen and (${(props) => props.theme.phone}) {
    font-size: 15vw;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  margin-bottom: 2.5rem;
  @media screen and (${(props) => props.theme.tablet}) {
    flex-direction: column-reverse;
  }
`;

export const Title = styled.h1`
  min-height: 0vh; /* fixes clamp bug in safari */
  font-size: clamp(5.8rem, 17.3rem, 11vw);
  color: var(--black);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--grey-300);
  text-align: center;
  margin-bottom: 0rem;
  @media screen and (${(props) => props.theme.tablet}) {
    color: var(--black-200);
    -webkit-text-stroke-width: 0;
  }
  @media screen and (${(props) => props.theme.phoneSmall}) {
    margin-bottom: 0;
  }
`;

export const SubTitle = styled.h2`
  min-height: 0vh; /* fixes clamp bug in safari */
  font-size: clamp(5.8rem, 17.1rem, 11vw);
  color: var(--black-200);
  margin-bottom: -10.5rem;
  text-align: center;
  @media screen and (${(props) => props.theme.laptopSmall}) {
    margin-bottom: -8rem;
  }
  @media screen and (${(props) => props.theme.tabletLarge}) {
    margin-bottom: -6rem;
  }
  @media screen and (${(props) => props.theme.tablet}) {
    font-size: 13vw;
    margin-bottom: 0rem;
  }
  @media screen and (${(props) => props.theme.phoneSmall}) {
    display: none;
  }
`;

export const Paragraph = styled.p`
  max-width: var(--container-inner-width);
  color: var(--grey-400);
  text-align: center;
  padding: 0 2rem;
  line-height: 1.7;
  @media screen and (${(props) => props.theme.phone}) {
    text-align: justify;
  }
  a {
    color: var(--blue);
    font-weight: bold;
  }
  span {
    display: block;
    text-align: center;
    @media screen and (${(props) => props.theme.phone}) {
      font-size: 1.4rem;
    }
  }
  span:first-of-type {
    color: var(--slate);
  }
  span:last-of-type {
    color: var(--grey-400);
  }
`;

export const ButtonWrapper = styled.div`
  margin-bottom: 7rem;
  display: flex;
  justify-content: center;
  width: 100%;
`;
