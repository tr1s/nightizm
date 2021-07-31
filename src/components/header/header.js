import Link from '../activeLink';
import Image from 'next/image';

import { Wrapper, Nav, NavLink, Logo } from './header-styled';

export default function Header({ menu, setMenu }) {
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
            <Link href="/discography">
              <NavLink>Discography</NavLink>
            </Link>
          </li>
          <li>
            <Link href="/writings">
              <NavLink>Writings</NavLink>
            </Link>
          </li>
        </ul>
      </Nav>

      <Logo>
        <Image src="/logo-white.png" width="66" height="66" alt="" />
        {/* 🔱 */}
      </Logo>
    </Wrapper>
  );
}
