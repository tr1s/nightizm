/* Index/Home page styles
========================================================================== */

import styled from 'styled-components';

export const HeroTitleWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--black-200);
  padding: 6rem 0;
  background-color: #1f1f1f;
  opacity: 1;
  background-image: radial-gradient(circle at center center, #2a2a2a, #1f1f1f),
    repeating-radial-gradient(
      circle at center center,
      #2a2a2a,
      #2a2a2a,
      17px,
      transparent 34px,
      transparent 17px
    );
  background-blend-mode: multiply;
  display: none;
  @media screen and (${(props) => props.theme.phone}) {
    display: block;
  }
`;

export const HeroTitle = styled.h1`
  color: var(--black-200);
  font-size: clamp(5.8rem, 17.1rem, 11vw);
  min-height: 0vh; /* fixes clamp bug in safari */
  font-weight: 100;
  text-align: center;
  @media screen and (${(props) => props.theme.phone}) {
    font-size: 4rem;
  }
`;

export const HeroImageWrapper = styled.div`
  display: none;
  @media screen and (${(props) => props.theme.phone}) {
    display: block;
    border: 2px dashed var(--grey-400);
    border-radius: var(--border-radius);
    margin: 2rem;
  }
  img {
    border-radius: 4px;
    opacity: 0.3;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10rem 0 5rem 0;
  @media screen and (${(props) => props.theme.phone}) {
    display: none;
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
  @media screen and (${(props) => props.theme.phoneSmall}) {
    display: none;
  }
`;

export const Title = styled.h1`
  min-height: 0vh; /* fixes clamp bug in safari */
  font-size: clamp(5.8rem, 17.3rem, 11vw);
  color: crimson;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--grey-300);
  -webkit-text-stroke-color: white;
  text-align: center;
  margin-bottom: 0rem;
  @media screen and (${(props) => props.theme.phoneSmall}) {
    margin-bottom: 0;
  }
`;
