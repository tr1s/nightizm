/* Albums styles
========================================================================== */

import styled from 'styled-components';

export const AlbumsWrapper = styled.div`
  display: flex;
  /* margin: -10px; */
  display: none;
`;

export const Album = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  padding: 40px;
  /* margin: 20px; */
  border-bottom: 2px dashed var(--grey-200);
  border: 2px solid white;
`;

export const Title = styled.h3`
  color: var(--grey-400);
  text-align: center;
  padding: 7.5rem 0;
  padding-bottom: 2rem;
  text-transform: uppercase;
  font-family: var(--font-mono);
  font-size: 1.9rem;
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
  z-index: -1;
  img {
    border: 1px solid var(--grey-100) !important;
    border-radius: var(--border-radius);
    @media screen and (${(props) => props.theme.mobileLarge}) {
      border: none !important;
      border-radius: 0;
    }
  }
`;

export const Description = styled.div`
  max-width: 456px;
  /* text-align: center; */
  /* margin: 0 auto; */
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
  /* text-align: center; */
  a {
    margin-bottom: 3rem;
  }
  a:first-of-type {
    /* align-self: center; */
  }
  a:last-of-type {
    border: 2px solid var(--grey-200);
  }
  a:last-of-type:hover,
  a:last-of-type:focus {
    border: 2px solid var(--grey-300);
  }
`;
