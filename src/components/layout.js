import { useState, useContext } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

import { ThemeContext } from 'styled-components';

import Header from './header';
import Footer from './footer';
import Menu from './menu';

export default function Layout({ children }) {
  const size = useWindowSize();
  const [menu, setMenu] = useState(false);

  const themeContext = useContext(ThemeContext);
  const awkwardBreakpoint = parseInt(themeContext.awkward.match(/\d/g).join(''));

  return (
    <div className="wrapper">
      {size.width > awkwardBreakpoint && <Header menu={menu} setMenu={setMenu} />}
      <main style={{ height: '100%' }}>{children}</main>
      <Footer menu={menu} setMenu={setMenu} />
      {menu && <Menu menu={menu} setMenu={setMenu} />}
    </div>
  );
}
