/* Discography styles
========================================================================== */

import styled from 'styled-components';

export const Wrapper = styled.div`
  border-bottom: 4px solid var(--black);
  padding-bottom: 140px;

  @media screen and (${(props) => props.theme.awkward}) {
    padding-bottom: 80px;
  }
`;

export const Logo = styled.div`
  display: none;
  @media screen and (${(props) => props.theme.awkward}) {
    display: block;
    margin-top: 70px;
    margin-bottom: -10px;
    text-align: center;
  }
`;

export const Album = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  padding-bottom: 40px;
  border-bottom: 4px solid var(--grey-100);
`;

export const Title = styled.h1`
  color: var(--grey-200);
  text-align: center;
  padding: 7.5rem 0;
  text-transform: uppercase;
  @media screen and (${(props) => props.theme.tabletLarge}) {
    padding: 6rem 0;
  }
  @media screen and (${(props) => props.theme.tablet}) {
    font-size: 5.8rem;
    padding: 5.8rem 0;
    padding-top: 5.9rem;
    margin-bottom: 0rem;
  }
`;

export const ArtworkLink = styled.a`
  margin-bottom: 2rem;
`;

export const Artwork = styled.figure`
  position: relative;
  img {
    border: 1px solid var(--grey-100) !important;
    border-radius: var(--border-radius);
    @media screen and (${(props) => props.theme.mobileLarge}) {
      border: none !important;
      border-radius: 0;
    }
  }
`;

export const StripesLeft = styled.div`
  &::before {
    content: '';
    position: absolute;
    background: var(--grey-100);
    border: 1px solid var(--grey);
    border-radius: 4px;
    width: 1000px;
    height: 26px;
    top: calc(50% + 2.3rem);
    right: 548px;
    transform: translateY(-50%);
  }
  &::after {
    content: '';
    position: absolute;
    background: var(--grey-100);
    border: 1px solid var(--grey);
    border-radius: 4px;
    width: 1000px;
    height: 26px;
    top: calc(50% - 2.3rem);
    right: 548px;
    transform: translateY(-50%);
  }
`;
export const StripesRight = styled.div`
  &::before {
    content: '';
    position: absolute;
    background: var(--grey-100);
    border: 1px solid var(--grey);
    border-radius: 4px;
    width: 1000px;
    height: 26px;
    top: calc(50% + 2.3rem);
    left: 548px;
    transform: translateY(-50%);
  }
  &::after {
    content: '';
    position: absolute;
    background: var(--grey-100);
    border: 1px solid var(--grey);
    border-radius: 4px;
    width: 1000px;
    height: 26px;
    top: calc(50% - 2.3rem);
    left: 548px;
    transform: translateY(-50%);
  }
`;

export const Description = styled.div`
  max-width: 666px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  @media screen and (${(props) => props.theme.awkward}) {
    padding: 0 5%;
  }
  p {
    margin-bottom: 1rem;
    color: var(--grey-300);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  a {
    margin-bottom: 3rem;
  }
  a:first-of-type {
    align-self: center;
  }
  a:last-of-type {
    border: 2px dashed var(--blue);
  }
`;
