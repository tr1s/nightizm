import Link from 'next/link';
import useKeypress from '../../hooks/useKeypress';
import VisuallyHidden from '../visuallyHidden';

import { Wrapper, SubMenu } from './menu-styled';

export default function Menu({ menu, setMenu }) {
  useKeypress('Escape', () => {
    setMenu(!menu);
  });

  return (
    <Wrapper>
      <SubMenu>
        <h2>Social</h2>
        {/* MAKE A LINK COMPONENT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
        <a href="">Facebook</a>
        <a href="">Twitter</a>
        <a href="">Instagram</a>
      </SubMenu>
      <SubMenu>
        <h2>Website</h2>
        <Link href="/">
          <a>Nightizm</a>
        </Link>
        <Link href="/discography">
          <a>Discography</a>
        </Link>
        <Link href="/writings">
          <a>Writings</a>
        </Link>
      </SubMenu>
      <SubMenu>
        <h2>Music</h2>
        <a href="">Facebook</a>
        <a href="">Twitter</a>
        <a href="">Instagram</a>
      </SubMenu>

      <button onClick={() => setMenu(!menu)}>
        <img src="/close.svg" alt="" />
        <VisuallyHidden>Close menu.</VisuallyHidden>
      </button>
      <button onClick={() => setMenu(!menu)}>
        <img src="/close.svg" alt="" />
        <VisuallyHidden>Close menu.</VisuallyHidden>
      </button>
    </Wrapper>
  );
}
