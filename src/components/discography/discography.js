import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useWindowSize } from '../../hooks/useWindowSize';

import Spacer from '../spacer';
import Button from '../button/';

import { DiscographyContainer, DiscographyTitle, ButtonWrapper } from './discography-styled.js';

export default function Discography() {
  const themeContext = useContext(ThemeContext);
  const phone = themeContext.phone_PIXELS;
  const windowSize = useWindowSize();

  return (
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

      <Spacer axis="vertical" size="90" />
    </DiscographyContainer>
  );
}
