import { useState } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';

import styles from './layout.module.scss';

export default function Layout({ children }) {
  const [menu, setMenu] = useState(false);
  console.log(menu);

  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
      <Footer menu={menu} setMenu={setMenu} />
      {menu && <Menu menu={menu} setMenu={setMenu} />}
    </div>
  );
}
