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
  ButtonWrapper,
  SocialWrapper,
  SocialLink,
} from './menu-styled';

export default function Menu({ menu, setMenu }) {
  useKeypress('Escape', () => {
    setMenu(!menu);
  });

  return (
    <Wrapper allowPinchZoom={true}>
      <WrapperContent>
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

        <button onClick={() => setMenu(!menu)}>
          <img src="/close-icon.svg" alt="" />
          <VisuallyHidden>Close menu.</VisuallyHidden>
        </button>
        <button onClick={() => setMenu(!menu)}>
          <img src="/close-icon.svg" alt="" />
          <VisuallyHidden>Close menu.</VisuallyHidden>
        </button>
      </WrapperContent>
    </Wrapper>
  );
}
