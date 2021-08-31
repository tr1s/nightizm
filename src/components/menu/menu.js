import { useRef } from 'react';
import Link from 'next/link';
import Button from '../button/';
import useKeypress from '../../hooks/useKeypress';
import VisuallyHidden from '../visuallyHidden';

import {
  Wrapper,
  WrapperContent,
  MenuLinkWrapper,
  MenuLink,
  StreamingWrapper,
  StreamingLink,
  Paragraph,
  ButtonWrapper,
  SocialWrapper,
  SocialLink,
} from './menu-styled';

export default function Menu({ menu, setMenu, close }) {
  const wrapperRef = useRef();

  useKeypress('Escape', () => {
    setMenu(!menu);
  });

  return (
    <Wrapper initialFocusRef={wrapperRef}>
      <WrapperContent ref={wrapperRef} aria-label="Main menu.">
        {/* Menu Links ➡ */}
        <MenuLinkWrapper>
          <Link href="/" passHref>
            <MenuLink>
              <h3>Music</h3>
            </MenuLink>
          </Link>
          <Link href="/writings" passHref>
            <MenuLink>
              <h3>Writings</h3>
            </MenuLink>
          </Link>
        </MenuLinkWrapper>

        {/* Streaming Links 🍎 */}
        <StreamingWrapper>
          <div>
            <StreamingLink href="https://google.ca">
              <img src="/spotify.svg" alt="" />

              <p>
                Listen on <span>Spotify</span>
              </p>
            </StreamingLink>
            <StreamingLink href="https://google.ca">
              <img src="/apple-rainbow.svg" alt="" />

              <p>
                Listen on <span>Apple Music</span>
              </p>
            </StreamingLink>
          </div>
        </StreamingWrapper>

        <Paragraph>
          Don’t use Spotify or Apple Music? Choose from a list of streaming services{' '}
          <a href="https://songwhip.com/nightizm">here</a>. Prefer local copies of my music?
          Download everything at once by joining the <span>Night Faction</span> below:
        </Paragraph>

        {/* Button CTA 🎬 */}
        <ButtonWrapper>
          <Button type="hrefOpenNew" href="https://nightizm.bandcamp.com/vip-membership">
            † Night Faction †
          </Button>
        </ButtonWrapper>

        {/* Social Links 🗣 */}
        <SocialWrapper>
          <Link href="https://facebook.com/nightizm" passHref>
            <SocialLink>Facebook</SocialLink>
          </Link>
          <Link href="https://instagram.com/nightizm" passHref>
            <SocialLink>Instagram</SocialLink>
          </Link>
          <Link href="https://nightizm.bandcamp.com" passHref>
            <SocialLink>Bandcamp</SocialLink>
          </Link>
          <Link href="https://soundcloud.com/nightizm" passHref>
            <SocialLink>SoundCloud</SocialLink>
          </Link>
          <Link href="https://twitter.com/nightizm" passHref>
            <SocialLink>Twitter</SocialLink>
          </Link>
        </SocialWrapper>

        <button onClick={close}>
          <img src="/close-icon.svg" alt="" />
          <VisuallyHidden>Close menu.</VisuallyHidden>
        </button>
      </WrapperContent>
    </Wrapper>
  );
}
