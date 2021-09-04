import Image from 'next/image';
import { albums } from '../../data/music';
import Button from '../button/';

import {
  Album,
  Title,
  ArtworkLink,
  Artwork,
  StripesLeft,
  StripesRight,
  Description,
  ButtonWrapper,
} from './albums-styled.js';

export default function Albums() {
  return (
    <>
      {albums.map((album) => {
        return (
          <Album key={album.order}>
            <Title dangerouslySetInnerHTML={{ __html: album.title }} />
            {/* LEARN ABOUT RAW HTML???????????????????????????????????????????? */}
            {/* <Title rawHtml="First &middot; Second" /> */}
            {/* ARTWORK */}
            <ArtworkLink href={album.link} target="_blank" rel="noopener noreferrer">
              <Artwork>
                <Image src={album.artwork} alt="Album artwork." width={464} height={464} />

                {/* STRIPES */}
                {/* <StripesLeft></StripesLeft>
                <StripesRight></StripesRight> */}
              </Artwork>
            </ArtworkLink>
            <Description dangerouslySetInnerHTML={{ __html: album.description }} />
            <ButtonWrapper>
              <Button element="hrefOpenNew" text="Stream or Download" href={album.link} />
              <Button
                element="hrefOpenNew"
                text="Download Full Discography"
                href="https://nightizm.bandcamp.com/vip-membership"
              />
            </ButtonWrapper>
          </Album>
        );
      })}
    </>
  );
}
