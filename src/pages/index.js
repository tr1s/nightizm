import { useState, useContext } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

import { ThemeContext } from 'styled-components';

import Helmet from '../components/helmet';
// import Link from '../components/activeLink';
import Link from 'next/link';
import Layout from '../components/layout';
import Albums from '../components/albums/';
import Button from '../components/button/';

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
  const size = useWindowSize();
  const [menu, setMenu] = useState(false);

  const themeContext = useContext(ThemeContext);
  const awkwardBreakpoint = parseInt(themeContext.awkward.match(/\d/g).join(''));

  return (
    <Layout>
      {/* <Helmet title="The Lair" />
      {size.width > awkwardBreakpoint && (
        <Container>
          <StreamingWrapper>
            <div>
              <StreamingLink href="https://google.ca">
                <img src="/spotify.svg" alt="" />

                <p>
                  Listen on <span>Spotify</span>
                </p>
              </StreamingLink>
              <StreamingLink href="https://google.ca">
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
            <strong>Don’t use either?</strong> Listen through your preferred streaming service{' '}
            <a href="https://songwhip.com/nightizm"> here</a>, or{' '}
            <a href="https://nightizm.bandcamp.com">download each album separately</a> if you prefer
            to own your music. <strong>Consider using the button below</strong> as an alternative
            way to <span>support me</span> and download all my music at once:
          </StreamingParagraph>

          <ButtonWrapper>
            <Button type="hrefOpenNew" href="https://nightizm.bandcamp.com/vip-membership">
              Download Full Discography
            </Button>
          </ButtonWrapper>

          <Crosses>†††</Crosses>

          <TitleTwo>DISCOGRAPHY</TitleTwo>
        </Container>
      )}

      <Albums /> */}
    </Layout>
  );
}
