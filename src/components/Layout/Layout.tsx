import { ReactNode } from 'react';
import Header from '../Common/Header/Header';
import './Layout.module.css';
import Footer from '../Common/Footer/Footer';

interface Props {
  children: ReactNode;
  title: string | undefined;
  copyright: string | undefined;
}

function Layout({ children, copyright, title }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer copyright={copyright} title={title} />
    </>
  );
}

export default Layout;
