import { useState, useContext } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

import { ThemeContext } from 'styled-components';

import Helmet from '../components/helmet';
// import Link from '../components/activeLink';
import Link from 'next/link';
import Layout from '../components/layout';
import Albums from '../components/albums/';

import { Container, TitleWrapper, Title, SubTitle } from '../styles/pages/index-styled';

export default function Home() {
  const size = useWindowSize();
  const [menu, setMenu] = useState(false);

  const themeContext = useContext(ThemeContext);
  const awkwardBreakpoint = parseInt(themeContext.awkward.match(/\d/g).join(''));

  return (
    <Layout>
      <Helmet title="The Lair" />
      {size.width > awkwardBreakpoint && (
        <Container>
          <TitleWrapper>
            <SubTitle>SEIZE the NIGHT</SubTitle>
            <Title>NIGHTIZM</Title>
          </TitleWrapper>
          <p>
            A chronological list of releases. Please enjoy, and subscribe if you wan't updates about
            my music.
          </p>
          <p>🌙🌙🌙</p>
        </Container>
      )}

      <Albums />
    </Layout>
  );
}
