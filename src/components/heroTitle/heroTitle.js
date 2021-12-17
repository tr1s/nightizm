import Marquee from 'react-fast-marquee';

import { TitleWrapper, MarqueeTitle, Title, SubTitle } from './heroTitle-styled';

export default function HeroTitle() {
  return (
    <TitleWrapper>
      {/* TODO: */}
      {/* Add prefers reduced motion? */}
      <Marquee gradient={false} speed={66} style={{ overflow: 'hidden' }}>
        <MarqueeTitle>SEIZE the NIGHT</MarqueeTitle>
        <MarqueeTitle>~</MarqueeTitle>
        <MarqueeTitle>SEIZE the NIGHT</MarqueeTitle>
        <MarqueeTitle>~</MarqueeTitle>
      </Marquee>
      <SubTitle>SEIZE the NIGHT</SubTitle>
      <Title>NIGHTIZM</Title>
    </TitleWrapper>
  );
}
