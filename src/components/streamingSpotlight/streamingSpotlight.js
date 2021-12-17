import { useContext } from 'react';
import Image from 'next/image';
import { ThemeContext } from 'styled-components';
import { Wrapper, InnerWrapper, Link, ImageContainer, Text } from './streamingSpotlight-styled';

export default function StreamingSpotlight() {
  const themeContext = useContext(ThemeContext);

  const spotify = themeContext.nightizmSpotify;
  const appleMusic = themeContext.nightizmAppleMusic;

  return (
    <Wrapper>
      <InnerWrapper>
        <Link href={spotify} target="_blank" rel="noopener noreferrer">
          <ImageContainer>
            <Image src="/spotify.svg" width="30" height="30" alt="" />
          </ImageContainer>
          <Text>
            Listen on <span>Spotify</span>
          </Text>
        </Link>
        <Link href={appleMusic} target="_blank" rel="noopener noreferrer">
          <ImageContainer>
            <Image src="/apple-rainbow.svg" width="857.529" height="1000" alt="" />
          </ImageContainer>

          <Text>
            Listen on <span>Apple Music</span>
          </Text>
        </Link>
      </InnerWrapper>
    </Wrapper>
  );
}
