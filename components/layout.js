import Header from '../components/header';
import Footer from '../components/footer';

import styles from './layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
