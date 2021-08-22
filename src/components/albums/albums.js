import Image from 'next/image';
import { albums } from '../../data/music';
import Button from '../button/';

import {
  AlbumsWrapper,
  Album,
  Title,
  ArtworkLink,
  Artwork,
  Description,
  ButtonWrapper,
} from './albums-styled.js';

export default function Albums() {
  return (
    <>
      <AlbumsWrapper>
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
                </Artwork>
              </ArtworkLink>
            </Album>
          );
        })}
      </AlbumsWrapper>
    </>
  );
}
