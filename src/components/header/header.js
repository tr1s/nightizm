import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Menu from '../menu/';

import { Wrapper, Nav, NavLink, LogoWrapper, MenuButton } from './header-styled';

export default function Header() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!menu);
  const close = () => setMenu(false);

  return (
    <Wrapper>
      <Nav>
        <Link href="/" passHref>
          <NavLink>Home</NavLink>
        </Link>

        <Link href="/discography" passHref>
          <NavLink>Discography</NavLink>
        </Link>

        <Link href="/writings" passHref>
          <NavLink>Writings</NavLink>
        </Link>

        <Link href="/posts/now" passHref>
          <NavLink>Now</NavLink>
        </Link>

        <LogoWrapper>
          <Link href="/" passHref>
            <a>
              <Image src="/logo-white.png" width="66" height="66" alt="" />
            </a>
          </Link>
        </LogoWrapper>

        <MenuButton onClick={toggleMenu}>
          <Image src="/menu-icon.svg" width="35" height="35" alt="" />
        </MenuButton>

        {/* Modal Menu */}
        {menu && <Menu menu={menu} setMenu={setMenu} close={close} />}
      </Nav>
    </Wrapper>
  );
}
