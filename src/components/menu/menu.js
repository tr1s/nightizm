import Link from 'next/link';
import useKeypress from '../../hooks/useKeypress';

import Button from '../button/';
import StreamingSpotlight from '../streamingSpotlight/';
import VisuallyHidden from '../visuallyHidden';
import Spacer from '../spacer';

import {
  Wrapper,
  WrapperContent,
  MenuLinkWrapper,
  MenuLink,
  Paragraph,
  ButtonWrapper,
  SocialWrapper,
  SocialLink,
} from './menu-styled';

export default function Menu({ menu, setMenu, close }) {
  useKeypress('Escape', () => {
    setMenu(!menu);
  });

  return (
    <Wrapper>
      {/* Close X Button */}
      <button onClick={close}>
        <img src="/close-icon.svg" alt="" />
        <VisuallyHidden>Close menu.</VisuallyHidden>
      </button>

      <WrapperContent aria-label="Main menu.">
        {/* Menu Links */}
        <MenuLinkWrapper>
          <Link href="/" passHref>
            <MenuLink>
              <h3>HOME</h3>
            </MenuLink>
          </Link>
          <Link href="/discography" passHref>
            <MenuLink>
              <h3>DISCOGRAPHY</h3>
            </MenuLink>
          </Link>
          <Link href="/writings" passHref>
            <MenuLink>
              <h3>WRITINGS</h3>
            </MenuLink>
          </Link>
        </MenuLinkWrapper>

        {/* Streaming Links */}
        <StreamingSpotlight />

        <Spacer size="20" />

        {/* Paragraph */}
        <Paragraph>
          <span>Don’t use Spotify or Apple Music?</span> Choose from a list of streaming services{' '}
          <a href="https://songwhip.com/nightizm">here</a>. Prefer local copies of my music?
          Download everything at once by <span>joining the Night Faction</span> below:
        </Paragraph>

        {/* Call to Action */}
        <ButtonWrapper>
          <Button element="hrefOpenNew" href="https://nightizm.bandcamp.com/vip-membership">
            † Join Night Faction †
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
      </WrapperContent>
    </Wrapper>
  );
}
