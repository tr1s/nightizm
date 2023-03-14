import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';
import * as Dialog from '@radix-ui/react-dialog';

import Menu from '../menu/';

import { Wrapper, Nav, NavLink, LogoWrapper, MenuButton } from './header-styled';

export default function Header() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!menu);
  const close = () => setMenu(false);
  console.log(menu);

  return (
    <Dialog.Root>
      <Wrapper>
        <Nav>
          <NavLink href="/" passHref>
            Home
          </NavLink>
          <NavLink href="/music" passHref>
            Music
          </NavLink>
          <NavLink href="/writings" passHref>
            Writings
          </NavLink>
          <NavLink href="/posts/now" passHref>
            Now
          </NavLink>
          <LogoWrapper>
            <Link href="/" passHref>
              <Image src="/logo-white.png" width="66" height="66" alt="" />
            </Link>
          </LogoWrapper>
          <MenuButton onClick={toggleMenu}>
            <Image src="/menu-icon.svg" width="35" height="35" alt="" />
          </MenuButton>

          {/* Modal Menu */}
          {/* {menu && <Menu menu={menu} setMenu={setMenu} close={close} />} */}
          <Menu menu={menu} setMenu={setMenu} close={close} />
        </Nav>
      </Wrapper>
    </Dialog.Root>
  );
}
