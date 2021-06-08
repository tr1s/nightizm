/* Discography styles
========================================================================== */

import styled from 'styled-components';

export const Wrapper = styled.div`
  border-bottom: 4px solid var(--black);
`;

export const Album = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  border-bottom: 4px solid var(--black);
`;

export const Title = styled.h1`
  color: #252525;
  text-align: center;
  padding: 7.5rem 0;
  text-transform: uppercase;
  @media screen and (${(props) => props.theme.tabletLarge}) {
    padding: 6rem 0;
  }
  @media screen and (${(props) => props.theme.tablet}) {
    font-size: 5.8rem;
    padding: 8rem 0;
    margin-bottom: 0rem;
  }
`;

export const ArtworkLink = styled.a`
  margin-bottom: 3.5rem;
`;

export const Artwork = styled.figure`
  position: relative;
  img {
    border: 1px solid #fff !important;
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
    background: var(--black);
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
    background: var(--black);
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
    background: var(--black);
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
    background: var(--black);
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
  max-width: 464px;
  text-align: center;
  margin: 0 auto;
  @media screen and (${(props) => props.theme.awkward}) {
    padding: 0 5%;
  }
  p {
    margin-bottom: 4rem;
    color: var(--grey-400);
  }
`;

export const ButtonWrapper = styled.div`
  margin-bottom: 5.3rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  a:first-of-type {
    margin-bottom: 4rem;
    align-self: center;
  }
  a:last-of-type {
    background: #1b9cbd;
    background: var(--accent);
  }
`;
