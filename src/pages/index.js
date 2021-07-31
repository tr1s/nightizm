import { useState, useContext } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

import { ThemeContext } from 'styled-components';

import Helmet from '../components/helmet';
// import Link from '../components/activeLink';
import Link from 'next/link';
import Layout from '../components/layout';

import Image from 'next/image';
import pic from '/public/images/artwork/renaissance.jpg';

import {
  Container,
  TitleWrapper,
  Title,
  SubTitle,
  MobileContainer,
  MobileMenu,
  MobileMenuLink,
} from './styles/index-styled';

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
        </Container>
      )}

      {size.width < awkwardBreakpoint && (
        <MobileContainer>
          <div>
            <h1>NIGHTIZM</h1>
            <h2>SEIZE the NIGHT</h2>
          </div>

          <MobileMenu>
            <Link href="/writings" passHref>
              <MobileMenuLink>Writings</MobileMenuLink>
            </Link>
            <Link href="/discography" passHref>
              <MobileMenuLink>Discography</MobileMenuLink>
            </Link>

            {/* <MobileMenuListItem>
                <Link>Donate</Link>
              </MobileMenuListItem> */}
          </MobileMenu>
        </MobileContainer>
      )}

      {/* <h2>Spotlight:</h2>
        <Image src={pic} alt="pic..." placeholder="blur" /> */}

      {/* Placeholder example, check docs again: */}
    </Layout>
  );
}
