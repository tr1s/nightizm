import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';
import useKeypress from '../../hooks/useKeypress';

import Button from '../button/';
import StreamingSpotlight from '../streamingSpotlight/';
import VisuallyHidden from '../visuallyHidden';
import Spacer from '../spacer';

import {
  DialogOverlay,
  DialogContent,
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
    <Dialog.Portal>
      <DialogOverlay>
        {/* Close X Button */}
        <button onClick={close}>
          <img src="/close-icon.svg" alt="" />
          <VisuallyHidden>Close menu.</VisuallyHidden>
        </button>

        <DialogContent aria-label="Main menu.">
          {/* Menu Links */}
          <MenuLinkWrapper>
            <MenuLink href="/" passHref>
              <h3>HOME</h3>
            </MenuLink>
            <MenuLink href="/music" passHref>
              <h3>DISCOGRAPHY</h3>
            </MenuLink>
            <MenuLink href="/writings" passHref>
              <h3>WRITINGS</h3>
            </MenuLink>
          </MenuLinkWrapper>

          {/* Streaming Links */}
          <StreamingSpotlight />

          <Spacer size="20" />

          {/* Paragraph */}
          <Paragraph>
            <span>Don’t use Spotify or Apple Music?</span> Choose from a{' '}
            <a href="https://songwhip.com/nightizm">variety of other streaming services instead.</a>{' '}
            Prefer to store local copies of my music? Download everything at once by{' '}
            <span>joining the Night Faction</span> below:
          </Paragraph>

          {/* Call to Action */}
          <ButtonWrapper>
            <Button element="hrefOpenNew" href="https://nightizm.bandcamp.com/vip-membership">
              † Join Night Faction †
            </Button>
          </ButtonWrapper>

          {/* Social Links 🗣 */}
          <SocialWrapper>
            <SocialLink href="https://facebook.com/nightizm" passHref>
              Facebook
            </SocialLink>
            <SocialLink href="https://instagram.com/nightizm" passHref>
              Instagram
            </SocialLink>
            <SocialLink href="https://nightizm.bandcamp.com" passHref>
              Bandcamp
            </SocialLink>
            <SocialLink href="https://soundcloud.com/nightizm" passHref>
              SoundCloud
            </SocialLink>
            <SocialLink href="https://twitter.com/nightizm" passHref>
              Twitter
            </SocialLink>
          </SocialWrapper>
        </DialogContent>
      </DialogOverlay>
    </Dialog.Portal>
  );
}
