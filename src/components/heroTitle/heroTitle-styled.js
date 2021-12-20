import styled, { css } from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 0 5rem 0;
  margin: -3rem 0 -0.3rem 0;
  @media screen and (${(props) => props.theme.phone}) {
    flex-direction: column-reverse;
    padding: 0;
    margin: 0 0 -0.3rem 0;
  }
`;

export const MarqueeTitle = styled.h2`
  display: none;
  @media screen and (${(props) => props.theme.phone}) {
    display: block;
    font-size: 17.1rem;
    color: var(--black-200);
    padding: 0 4rem;
  }
`;

export const SubTitle = styled.h2`
  min-height: 0vh; /* fixes clamp bug in safari */
  font-size: clamp(5.8rem, 17.1rem, 11vw);
  color: var(--black-200);
  margin-bottom: -12rem;
  text-align: center;
  @media screen and (${(props) => props.theme.laptopSmall}) {
    margin-bottom: -8rem;
  }
  @media screen and (${(props) => props.theme.tabletLarge}) {
    margin-bottom: -6rem;
  }
  @media screen and (${(props) => props.theme.phone}) {
    display: none;
  }
`;

export const Title = styled.h1`
  min-height: 0vh; /* fixes clamp bug in safari */
  font-size: clamp(5.8rem, 17.3rem, 11vw);
  color: var(--red);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--grey-500);
  /* -webkit-text-stroke-color: white; */
  text-align: center;
  margin-bottom: 0rem;
  @media screen and (${(props) => props.theme.phone}) {
    -webkit-text-stroke-width: 0;
    margin-bottom: -1.4rem;
  }
`;
