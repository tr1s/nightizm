import Helmet from '../components/helmet';
import Layout from '../components/layout';
import Button from '../components/button/';
import Albums from '../components/albums/';
import Spacer from '../components/spacer';

import {
  Container,
  MainTitle,
  TitleWrapper,
  Title,
  SubTitle,
  Paragraph,
  ButtonWrapper,
  Crosses,
} from '../pages-styled/index-styled';

export default function Home() {
  return (
    <Layout>
      <Helmet title="The Lair" />

      <Container>
        <Spacer axis="vertical" size="100" />

        <MainTitle>DISCOGRAPHY</MainTitle>

        <ButtonWrapper>
          <Button element="hrefOpenNew" type="primary" href="https://songwhip.com/nightizm">
            Stream Discography
          </Button>
          <Spacer axis="horizontal" size="20" />
          <Button element="hrefOpenNew" type="secondary" href="https://nightizm.bandcamp.com">
            Download Discography
          </Button>
        </ButtonWrapper>

        <Paragraph>
          Here is a collection of music... Download or stream for your pleasure. Seize the Night
          baby fuck yeah. Woooo. It's Friday baby fuck.
        </Paragraph>
      </Container>

      <Albums />

      <TitleWrapper>
        <SubTitle>SEIZE the NIGHT</SubTitle>
        <Title>NIGHTIZM</Title>
      </TitleWrapper>

      <Spacer axis="vertical" size="40" />
    </Layout>
  );
}
