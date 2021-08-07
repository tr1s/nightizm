/* Index/Home page styles
========================================================================== */

import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  flex: 1 0 auto;
  padding-top: 20rem;
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
