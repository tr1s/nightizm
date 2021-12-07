import { useContext } from 'react';
import Image from 'next/image';
import { useWindowSize } from '../hooks/useWindowSize';
import { ThemeContext } from 'styled-components';

import Helmet from '../components/helmet';
import Layout from '../components/layout';
import Button from '../components/button';
import Albums from '../components/albums';
import Spacer from '../components/spacer';

import heroImage from '/public/night.jpg';

import {
  HeroTitleWrapper,
  HeroTitle,
  HeroImageWrapper,
  DiscographyContainer,
  DiscographyTitle,
  DiscographyDescription,
  TitleWrapper,
  Title,
  SubTitle,
  ButtonWrapper,
} from '../styles/styled-pages/styled-index.js';

export default function Home() {
  const themeContext = useContext(ThemeContext);
  const windowSize = useWindowSize();
  const phone = themeContext.phone_PIXELS;

  return (
    <Layout>
      <Helmet title="The Lair" />

      <HeroTitleWrapper>
        <HeroTitle>NIGHTIZM</HeroTitle>
        <HeroTitle>SEIZE the NIGHT</HeroTitle>
      </HeroTitleWrapper>

      <HeroImageWrapper>
        <Image src={heroImage} alt="Photo of Nightizm." layout="responsive" />
      </HeroImageWrapper>

      <DiscographyContainer>
        <DiscographyTitle>DISCOGRAPHY</DiscographyTitle>

        <ButtonWrapper>
          <Button element="hrefOpenNew" type="primary" href="https://songwhip.com/nightizm">
            Stream Discography
          </Button>
          {windowSize.width < phone && <Spacer axis="vertical" size="40" />}
          {windowSize.width > phone && <Spacer axis="horizontal" size="20" />}
          <Button element="hrefOpenNew" type="secondary" href="https://nightizm.bandcamp.com">
            Download Discography
          </Button>
        </ButtonWrapper>

        <Spacer axis="vertical" size="100" />
      </DiscographyContainer>

      <Albums />

      <TitleWrapper>
        <SubTitle>SEIZE the NIGHT</SubTitle>
        <Title>NIGHTIZM</Title>
      </TitleWrapper>

      <Spacer axis="vertical" size="40" />
    </Layout>
  );
}
