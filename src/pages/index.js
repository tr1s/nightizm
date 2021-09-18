import Helmet from '../components/helmet';
import Layout from '../components/layout';
import Button from '../components/button/';
import StreamingSpotlight from '../components/streamingSpotlight/';
import Albums from '../components/albums/';
import Spacer from '../components/spacer';

import {
  Container,
  TitleWrapper,
  Title,
  SubTitle,
  Paragraph,
  ButtonWrapper,
  Crosses,
  TitleTwo,
} from '../pages-styled/index-styled';

export default function Home() {
  return (
    <Layout>
      <Helmet title="The Lair" />

      <Container>
        <StreamingSpotlight />

        <TitleWrapper>
          <SubTitle>SEIZE the NIGHT</SubTitle>
          <Title>NIGHTIZM</Title>
        </TitleWrapper>

        <Paragraph>
          <span>Music Beyond Borders</span>
          <span>Instrumentals for the Night</span>
        </Paragraph>

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
