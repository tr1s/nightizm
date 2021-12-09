import Image from 'next/image';

import Helmet from '../components/helmet';
import Layout from '../components/layout';
import Spacer from '../components/spacer';

import heroImage from '/public/night.jpg';

import {
  HeroTitleWrapper,
  HeroTitle,
  HeroImageWrapper,
  TitleWrapper,
  Title,
  SubTitle,
} from '../styles/styled-pages/styled-index.js';

import { Article, Content } from '../styles/styled-pages/styled-post';

export default function Home() {
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

      <TitleWrapper>
        <SubTitle>SEIZE the NIGHT</SubTitle>
        <Title>NIGHTIZM</Title>
      </TitleWrapper>

      <Article>
        <Content className="inner-wrapper">
          <h2>Hello...</h2>
          <p>...almost ready, I promise.</p>
          <blockquote>
            <p>
              One can have no smaller or greater mastery than mastery of oneself.{' '}
              <strong>― Leonardo da Vinci**</strong>
            </p>
          </blockquote>
          <time style={{ textAlign: 'left', color: 'var(--blue)' }}>2021/12/08</time>
        </Content>
      </Article>

      <Spacer axis="vertical" size="40" />
    </Layout>
  );
}
