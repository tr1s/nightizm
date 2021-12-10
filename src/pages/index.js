import Image from 'next/image';

import Helmet from '../components/helmet';
import Layout from '../components/layout';
import Spacer from '../components/spacer';

import { TitleWrapper, Title, SubTitle, Logo } from '../styles/styled-pages/styled-index.js';

import { Article, Content } from '../styles/styled-pages/styled-post';

export default function Home() {
  return (
    <Layout>
      <Helmet title="The Lair" />
      <TitleWrapper>
        <SubTitle>SEIZE the NIGHT</SubTitle>
        <Title>NIGHTIZM</Title>
      </TitleWrapper>

      <Logo>
        <Image src="/logo-white.png" width="66" height="66" alt="" />
      </Logo>

      <Article>
        <Content className="inner-wrapper" homepage>
          <h2>Hello...</h2>
          <p>...I’m almost ready, I promise. Have a look around in the meantime.</p>
          <blockquote>
            <p>
              One can have no smaller or greater mastery than mastery of oneself.{' '}
              <strong>― Leonardo da Vinci**</strong>
            </p>
          </blockquote>
          <p
            style={{
              fontSize: '1.6rem',
              fontStyle: 'italic',
              fontFamily: 'var(--font-body)',
              color: 'var(--grey-200)',
              fontWeight: 'bold',
              textAlign: 'left',
            }}
          >
            2021<span style={{ color: 'var(--grey-400)' }}> ~ </span>12
            <span style={{ color: 'var(--grey-400)' }}> ~ </span>08
          </p>
        </Content>
      </Article>

      <Spacer axis="vertical" size="40" />
    </Layout>
  );
}
