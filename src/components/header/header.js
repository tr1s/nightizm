import Link from '../ActiveLink';
import Image from 'next/image';

import { Wrapper, Nav, NavLink, Logo } from './header-styled';

export default function Header({ menu, setMenu }) {
  return (
    <Wrapper>
      <div className="inner-wrapper">
        <Nav>
          <button onClick={() => setMenu(!menu)}>Menu</button>

          <ul>
            <li>
              <Link href="/">
                <NavLink>Nightizm</NavLink>
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
        </Logo>
      </div>
    </Wrapper>
  );
}
