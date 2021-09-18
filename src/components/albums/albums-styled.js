/* Albums styles
========================================================================== */

import styled from 'styled-components';

export const AlbumsWrapper = styled.div`
  /* background: var(--black-200); */
  /* border: 1px solid var(--grey-200); */
  /* border-radius: var(--border-radius); */
  /* padding: 4rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;
  margin: 0 4rem 0 4rem;
  padding-bottom: 3.3rem;
  @media screen and (${(props) => props.theme.phone}) {
    /* gap: 2rem; */
    margin: 0 2rem 0 2rem;
  }
`;

export const Album = styled.div`
  /* flex: 1 1 800px; */
`;

export const ArtworkLink = styled.a`
  /* margin-bottom: 2rem; */
`;

export const Artwork = styled.figure`
  position: relative;
  border: 2px dashed var(--black-soft) !important;
  border-radius: calc(var(--border-radius) + 2px) !important;
  &:hover img,
  &:focus img {
    transition: border-radius 0.3s ease;
    border-radius: var(--border-radius) !important;
  }
  img {
    transition: border-radius 0.3s ease;
    border-radius: 50%;
    @media screen and (${(props) => props.theme.phone}) {
      width: 1500px !important;
    }
  }
`;
