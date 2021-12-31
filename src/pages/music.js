import { useContext } from 'react';
import Image from 'next/image';
import { ThemeContext } from 'styled-components';
import { useWindowSize } from '../hooks/useWindowSize';

import Layout from '../components/layout';
import Helmet from '../components/helmet';
import Albums from '../components/albums';
import Spacer from '../components/spacer';
import Button from '../components/button';

import { Container, Title, Logo, ButtonWrapper } from '../styles/styled-pages/styled-music';

export default function Music() {
  const themeContext = useContext(ThemeContext);
  const phone = themeContext.phone_PIXELS;
  const windowSize = useWindowSize();

  return (
    <Layout>
      <Helmet title="Music" description="All music released by Nightizm over the years." />
      <Container>
        <Title>DISCOGRAPHY</Title>

        <Logo>
          <Image src="/logo-white.png" width="66" height="66" alt="" />
        </Logo>

        <ButtonWrapper>
          <Button element="hrefOpenNew" type="primary" href="https://songwhip.com/nightizm">
            Streaming Platforms
          </Button>
          {windowSize.width < phone && <Spacer axis="vertical" size="40" />}
          {windowSize.width > phone && <Spacer axis="horizontal" size="20" />}
          <Button element="hrefOpenNew" type="primary" href="https://nightizm.bandcamp.com">
            Download Discography
          </Button>
        </ButtonWrapper>
      </Container>
      <Albums />
    </Layout>
  );
}
