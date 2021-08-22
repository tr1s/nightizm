import { useState } from 'react';
import Link from '../activeLink';
import Image from 'next/image';
import Menu from '../menu/';

import { Wrapper, Nav, NavLink, MenuButton, Logo } from './header-styled';

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <Wrapper>
      <Nav>
        <ul>
          <li>
            <Link href="/">
              <NavLink>Home</NavLink>
            </Link>
          </li>
          <li>
            <Link href="/writings">
              <NavLink>Writings</NavLink>
            </Link>
          </li>
          <li></li>
        </ul>
        <Link href="/">
          <a>
            <Logo>
              <Image src="/logo-white.png" width="66" height="66" alt="" />
              {/* 🔱 */}
            </Logo>
          </a>
        </Link>
        <MenuButton onClick={() => setMenu(!menu)}>
          <img src="/menu-icon.svg" alt="" />
        </MenuButton>

        {/* Modal Menu */}
        {menu && <Menu menu={menu} setMenu={setMenu} />}
      </Nav>
    </Wrapper>
  );
}
