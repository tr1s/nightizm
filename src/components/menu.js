import Link from 'next/link';
import useKeypress from '../hooks/useKeypress';

import menuStyles from './menu.module.scss';

export default function Menu({ menu, setMenu }) {
  useKeypress('Escape', () => {
    setMenu(!menu);
  });

  return (
    <div className={menuStyles.menu}>
      <div className={menuStyles.subMenu}>
        <h2>Social</h2>
        {/* MAKE A LINK COMPONENT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
        <a href="">Facebook</a>
        <a href="">Twitter</a>
        <a href="">Instagram</a>
      </div>
      <div className={menuStyles.subMenu}>
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
      </div>
      <div className={menuStyles.subMenu}>
        <h2>Music</h2>
        <a href="">Facebook</a>
        <a href="">Twitter</a>
        <a href="">Instagram</a>
      </div>

      <button onClick={() => setMenu(!menu)}>
        <img src="/close.svg" alt="" />
      </button>
      <button onClick={() => setMenu(!menu)}>
        <img src="/close.svg" alt="" />
      </button>
    </div>
  );
}
