import StreamingSpotlight from '../streamingSpotlight/streamingSpotlight';
import { Wrapper, Footnotes } from './footer-styled';

export default function Footer() {
  return (
    <>
      <Wrapper>
        <StreamingSpotlight />
        <Footnotes>Much Love, Seize the Night...</Footnotes>
      </Wrapper>
    </>
  );
}
