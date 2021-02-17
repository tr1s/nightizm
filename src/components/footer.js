import { useState } from 'react';

import styles from './footer.module.scss';

export default function Footer({ menu, setMenu }) {
  return (
    <>
      <footer className={styles.footer}>
        <button onClick={() => setMenu(!menu)}>
          <img src="/menu.svg" alt="" />
        </button>
      </footer>
    </>
  );
}
{
  /* <footer className={styles.footer}>
      <a className={styles.subscribe} href="https://nightizm.bandcamp.com" target="_blank">
        Subscribe to the <span>Night Faction</span> 🌙 †
      </a>
      <p>Access to full discography + weekly underground music curation.</p>
    </footer> */
}
