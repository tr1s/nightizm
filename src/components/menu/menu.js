import Link from 'next/link';
import Image from 'next/image';
import Button from '../button/';
import useKeypress from '../../hooks/useKeypress';
import VisuallyHidden from '../visuallyHidden';

import {
  Wrapper,
  MenuLinkWrapper,
  MenuLink,
  StreamingWrapper,
  StreamingLink,
  StreamingParagraph,
  ButtonWrapper,
  SocialWrapper,
} from './menu-styled';

export default function Menu({ menu, setMenu }) {
  useKeypress('Escape', () => {
    setMenu(!menu);
  });

  return (
    <Wrapper>
      <MenuLinkWrapper>
        <Link href="/" passHref>
          <MenuLink>
            <h3>Home</h3>
          </MenuLink>
        </Link>
        <Link href="/writings" passHref>
          <MenuLink>
            <h3>Writings</h3>
          </MenuLink>
        </Link>
      </MenuLinkWrapper>

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
      <StreamingParagraph>
        <strong>Don’t use either?</strong> Listen through your preferred streaming service{' '}
        <a href="https://songwhip.com/nightizm"> here</a>, or{' '}
        <a href="https://nightizm.bandcamp.com">download each album separately</a> if you prefer to
        own your music. <strong>Consider using the button below</strong> as an alternative way to{' '}
        <span>support</span> me and download all my music at once:
      </StreamingParagraph>

      <ButtonWrapper>
        <Button
          type="hrefOpenNew"
          text="Download Full Discography"
          href="https://nightizm.bandcamp.com/vip-membership"
        />
      </ButtonWrapper>

      <SocialWrapper>
        <figure>
          <img src="/apple-rainbow.svg" alt="" />
        </figure>
        <figure>
          <img src="/apple-rainbow.svg" alt="" />
        </figure>
        <figure>
          <img src="/apple-rainbow.svg" alt="" />
        </figure>
        <figure>
          <img src="/apple-rainbow.svg" alt="" />
        </figure>
        <figure>
          <img src="/apple-rainbow.svg" alt="" />
        </figure>
      </SocialWrapper>

      <button onClick={() => setMenu(!menu)}>
        <Image src="/close.svg" alt="" width={50} height={50} layout="fixed" />
        <VisuallyHidden>Close menu.</VisuallyHidden>
      </button>
      <button onClick={() => setMenu(!menu)}>
        <Image src="/close.svg" alt="" width={50} height={50} layout="fixed" />
        <VisuallyHidden>Close menu.</VisuallyHidden>
      </button>
    </Wrapper>
  );
}
