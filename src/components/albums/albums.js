import Image from "next/legacy/image";
import Spacer from '../spacer';
import { albums } from '../../data/music';

import { AlbumsWrapper, Album, ArtworkLink, Artwork, InnerTitle, Title } from './albums-styled.js';

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
                  <InnerTitle dangerouslySetInnerHTML={{ __html: album.title }} />
                  <Image src={album.artwork} alt="Album artwork." width={464} height={464} />
                </Artwork>
              </ArtworkLink>
            </Album>
          );
        })}
      </AlbumsWrapper>
      <Spacer axis="vertical" size="60" />
    </>
  );
}
