import Link from '../activeLink';
import Image from 'next/image';

import { Wrapper, Nav, NavLink, MenuButton, Logo } from './header-styled';

export default function Header({ menu, setMenu }) {
  return (
    <Wrapper>
      <Nav>
        <ul>
          <li>
            <Link href="/">
              <NavLink>Music</NavLink>
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
          <Image src="/menu.svg" width="40" height="30" alt="" />
        </MenuButton>
      </Nav>
    </Wrapper>
  );
}
