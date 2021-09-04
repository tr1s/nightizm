import { useState, useContext } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

import { ThemeContext } from 'styled-components';

import Helmet from '../components/helmet';
// import Link from '../components/activeLink';
import Link from 'next/link';
import Layout from '../components/layout';
import Albums from '../components/albums/';
import Button from '../components/button/';
import Spacer from '../components/spacer';

import {
  Container,
  TitleWrapper,
  Title,
  SubTitle,
  StreamingWrapper,
  StreamingLink,
  StreamingParagraph,
  ButtonWrapper,
  Crosses,
  TitleTwo,
} from '../styles/pages/index-styled';

export default function Home() {
  const themeContext = useContext(ThemeContext);

  const spotify = themeContext.nightizmSpotify;
  const appleMusic = themeContext.nightizmAppleMusic;

  // const size = useWindowSize();
  // const awkwardBreakpoint = parseInt(themeContext.awkward.match(/\d/g).join(''));

  return (
    <Layout>
      <Helmet title="The Lair" />

      <Container>
        <StreamingWrapper>
          <div>
            <StreamingLink href={spotify} target="_blank" rel="noopener noreferrer">
              <img src="/spotify.svg" alt="" />

              <p>
                Listen on <span>Spotify</span>
              </p>
            </StreamingLink>
            <StreamingLink href={appleMusic} target="_blank" rel="noopener noreferrer">
              <img src="/apple-rainbow.svg" alt="" />

              <p>
                Listen on <span>Apple Music</span>
              </p>
            </StreamingLink>
          </div>
        </StreamingWrapper>

        <TitleWrapper>
          <SubTitle>SEIZE the NIGHT</SubTitle>
          <Title>NIGHTIZM</Title>
        </TitleWrapper>

        <StreamingParagraph>
          Music Beyond Borders
          <br />
          Instrumentals for the Night
          {/* <strong>Don’t use either?</strong> Listen through your preferred streaming service{' '}
          <a href="https://songwhip.com/nightizm"> here</a>, or{' '}
          <a href="https://nightizm.bandcamp.com">download each album separately</a> if you prefer
          to own your music. <strong>Consider using the button below</strong> as an alternative way
          to <span>support me</span> and download all my music at once: */}
        </StreamingParagraph>

        <Crosses>†††</Crosses>

        <TitleTwo>DISCOGRAPHY</TitleTwo>

        <ButtonWrapper>
          <Button element="hrefOpenNew" type="primary" href="https://nightizm.bandcamp.com">
            Download Discography
          </Button>
        </ButtonWrapper>
      </Container>

      <Albums />

      <Spacer axis="vertical" size="40" />
    </Layout>
  );
}
