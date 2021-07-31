import Link from 'next/link';
import Image from 'next/image';
import useKeypress from '../../hooks/useKeypress';
import VisuallyHidden from '../visuallyHidden';

import {
  Wrapper,
  SubmenuWrapper,
  SubMenu,
  SubMenuTitle,
  SubMenuLinks,
  MobileClose,
  MobileIconWrapper,
} from './menu-styled';

export default function Menu({ menu, setMenu }) {
  useKeypress('Escape', () => {
    setMenu(!menu);
  });

  return (
    <Wrapper>
      <SubmenuWrapper>
        <SubMenu>
          <SubMenuTitle>Social</SubMenuTitle>
          <SubMenuLinks>
            {/* MAKE A LINK COMPONENT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
            <a href="">Facebook</a>
            <a href="">Twitter</a>
            <a href="">Instagram</a>
          </SubMenuLinks>
        </SubMenu>
        <SubMenu>
          <SubMenuTitle>Website</SubMenuTitle>
          <SubMenuLinks>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/discography">
              <a>Discography</a>
            </Link>
            <Link href="/writings">
              <a>Writings</a>
            </Link>
          </SubMenuLinks>
        </SubMenu>
        <SubMenu>
          <SubMenuTitle>Music</SubMenuTitle>
          <SubMenuLinks>
            <a href="">Bandcamp</a>
            <a href="">Spotify</a>
            <a href="">Apple Music</a>
            <a href="">SoundCloud</a>
          </SubMenuLinks>
        </SubMenu>
      </SubmenuWrapper>

      <MobileClose onClick={() => setMenu(!menu)}>
        <h2>Close</h2>
        <MobileIconWrapper>
          <Image src="/close.svg" alt="" width={50} height={50} layout="fixed" />
        </MobileIconWrapper>
      </MobileClose>

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
