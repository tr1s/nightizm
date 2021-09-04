import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '../menu/';

import { Wrapper, Nav, NavLink, MenuButton, Logo } from './header-styled';

export default function Header() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!menu);
  const close = () => setMenu(false);

  return (
    <Wrapper>
      <Nav>
        <Link href="/" passHref>
          <img src="/moon.png" alt="" />
        </Link>

        <Link href="/" passHref>
          <NavLink>Home</NavLink>
        </Link>

        <Link href="/writings" passHref>
          <NavLink>Writings</NavLink>
        </Link>

        <Link href="/" passHref>
          <a>
            <Logo>
              <Image src="/logo-white.png" width="66" height="66" alt="" />
              {/* 🔱 */}
            </Logo>
          </a>
        </Link>
        <MenuButton onClick={toggleMenu}>
          <img src="/menu-icon.svg" alt="" />
        </MenuButton>

        {/* Modal Menu */}
        {menu && <Menu menu={menu} setMenu={setMenu} close={close} />}
      </Nav>
    </Wrapper>
  );
}
