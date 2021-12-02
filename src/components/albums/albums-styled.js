/* Albums styles
========================================================================== */

import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const AlbumsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;
  margin: 0 4rem 0 4rem;
  @media screen and (${(props) => props.theme.phone}) {
    gap: 8rem;
    margin: 0 2rem 0 2rem;
  }
`;

export const Album = styled.div`
  width: 400px;
  @media screen and (${(props) => props.theme.phone}) {
    width: 100%;
  }
`;

export const ArtworkLink = styled.a`
  /* margin-bottom: 2rem; */
`;

export const Artwork = styled.figure`
  position: relative;
  background: black;
  /* border: 2px dashed var(--black-soft) !important; */
  /* border-radius: calc(var(--border-radius) + 2px) !important; */

  /* Below fixes white-space underneath Next.js Image Component images */
  /* Ref: https://github.com/vercel/next.js/issues/21914#issuecomment-777886877 */
  font-size: 0;
  line-height: 0;

  &:hover img,
  &:focus img {
    /* transition: border-radius 0.3s ease; */
    /* transition: all 0.3s ease; */
    /* border-radius: var(--border-radius) !important; */
    /* border-radius: 50% !important; */
    /* animation: ${rotate} 4s linear infinite; */
    /* animation-delay: 0.3s; */
  }
  img {
    filter: grayscale(40%);
    z-index: -1;
    border: 2px dashed var(--black-soft) !important;
    border-radius: var(--border-radius) !important;
    /* transition: border-radius 0.3s ease; */
    @media screen and (${(props) => props.theme.phone}) {
      width: 1500px !important;
    }
  }
`;

export const InnerTitle = styled.h3`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h5`
  display: none;
  @media screen and (${(props) => props.theme.phone}) {
    display: block;
    margin-bottom: 1.6rem;
  }
`;
