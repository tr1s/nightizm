import Layout from '../components/Layout';
import Image from 'next/image';
import { albums } from '../data/music';
import Button from '../components/Button/button';

import {
  Wrapper,
  Album,
  Title,
  ArtworkLink,
  Artwork,
  StripesLeft,
  StripesRight,
  Description,
  ButtonWrapper,
} from './styles/discography-styled.js';

export default function Discography() {
  return (
    <Layout>
      <Wrapper>
        {albums.map((album) => {
          return (
            <Album key={album.order}>
              <Title dangerouslySetInnerHTML={{ __html: album.title }} />

              {/* ARTWORK */}
              <ArtworkLink href={album.link} target="_blank" rel="noopener noreferrer">
                <Artwork>
                  <Image src={album.artwork} alt="Album artwork." width={464} height={464} />

                  {/* STRIPES */}
                  <StripesLeft></StripesLeft>
                  <StripesRight></StripesRight>
                </Artwork>
              </ArtworkLink>

              <Description dangerouslySetInnerHTML={{ __html: album.description }} />

              <ButtonWrapper>
                <Button type="hrefOpenNew" text="Stream or Download" href={album.link} />
                <Button
                  type="hrefOpenNew"
                  text="Download Full Discography"
                  href="https://nightizm.bandcamp.com/vip-membership"
                />
              </ButtonWrapper>
            </Album>
          );
        })}
      </Wrapper>
    </Layout>
  );
}
