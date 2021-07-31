/* Index/Home page styles
========================================================================== */

import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  flex: 1 0 auto;
  padding-top: 2rem;
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
  color: #252525;
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

export const MobileContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-size: 6.9rem;
    color: var(--black-soft);
    text-align: center;
    margin-top: -13px;
    padding-top: 40px;
    padding-bottom: 7px;
  }
  h2 {
    /* font-size: 7.9rem; */
    font-size: clamp(2rem, 17.1rem, 13vw);
    color: var(--black-soft);
    text-align: center;
    margin-top: -13px;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 81px;
`;

export const MobileMenuLink = styled.a`
  font-size: 4rem;
  font-family: var(--font-heading);
  border-top: 1px solid var(--grey-100);
  display: inline-block;
  width: 100%;
  line-height: 80px;
  height: 81px;
  text-align: center;
  color: var(--grey-200);
  &:hover {
    background: var(--grey-100);
    color: var(--grey-300);
    border-left: 8px solid var(--grey-200);
    border-right: 8px solid var(--grey-200);
    /* @media (prefers-color-scheme: dark) {
      color: var(--grey-400);
    } */
  }
`;
