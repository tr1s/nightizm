import Link from './activeLink';
import Image from 'next/image';

import styles from './header.module.scss';

export default function Header({ menu, setMenu }) {
  return (
    <header className={styles.header}>
      <div className="inner-wrapper">
        <nav className={styles.nav}>
          <button onClick={() => setMenu(!menu)}>Menu</button>

          <ul>
            <li>
              <Link href="/">
                <a className={styles.navLink}>Nightizm</a>
              </Link>
            </li>
            <li>
              <Link href="/discography">
                <a className={styles.navLink}>Discography</a>
              </Link>
            </li>
            <li>
              <Link href="/writings">
                <a className={styles.navLink}>Writings</a>
              </Link>
            </li>
          </ul>
        </nav>

        <figure className={styles.logo}>
          <Image src="/logo-white.png" width="66" height="66" alt="" />
        </figure>
      </div>
    </header>
  );
}
