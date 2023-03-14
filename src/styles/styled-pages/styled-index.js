/* Index/Home page styles
========================================================================== */

import Image from 'next/image';
import styled from 'styled-components';

export const Logo = styled.div`
  display: none;
  @media screen and (${(props) => props.theme.phone}) {
    display: block;
    text-align: center;
    margin-top: 4rem;
  }
`;

export const ArtworkWrapper = styled.a`
  margin: 0 auto;
  border: 19px dashed var(--blue);
  /* border-radius: 50%; */
`;
export const Artwork = styled(Image)`
  border-radius: 0px;
  border: 1px solid var(--white);
`;
