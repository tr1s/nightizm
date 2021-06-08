import { useState } from 'react';

import Header from './header/header';
import Footer from './footer/footer';
import Menu from './menu/menu';

export default function Layout({ children }) {
  const [menu, setMenu] = useState(false);

  return (
    <div className="wrapper">
      <Header menu={menu} setMenu={setMenu} />
      <main>{children}</main>
      <Footer menu={menu} setMenu={setMenu} />
      {menu && <Menu menu={menu} setMenu={setMenu} />}
    </div>
  );
}
