import { useState } from 'react';

import Header from './header';
import Footer from './footer';
import Menu from './menu';

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
