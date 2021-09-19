/* Albums styles
========================================================================== */

import styled from 'styled-components';

export const AlbumsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;
  margin: 0 4rem 0 4rem;
  padding-bottom: 3.3rem;
  @media screen and (${(props) => props.theme.phone}) {
    gap: 2rem;
    margin: 0 2rem 0 2rem;
  }
`;

export const Album = styled.div`
  /* flex: 1 1 800px; */
  width: 400px;
  @media screen and (${(props) => props.theme.phone}) {
    width: 300px;
  }
  @media screen and (${(props) => props.theme.phoneSmall}) {
    width: 100%;
  }
`;

export const ArtworkLink = styled.a`
  /* margin-bottom: 2rem; */
`;

export const Artwork = styled.figure`
  position: relative;
  border: 2px dashed var(--black-soft) !important;
  border-radius: calc(var(--border-radius) + 2px) !important;
  /* Below fixes white-space underneath Next.js Image Component images */
  /* Ref: https://github.com/vercel/next.js/issues/21914#issuecomment-777886877 */
  font-size: 0;
  line-height: 0;
  &:hover img,
  &:focus img {
    transition: border-radius 0.3s ease;
    border-radius: var(--border-radius) !important;
    border-radius: 50% !important;
  }
  img {
    border-radius: var(--border-radius) !important;
    transition: border-radius 0.3s ease;
    @media screen and (${(props) => props.theme.phone}) {
      width: 1500px !important;
    }
  }
`;
