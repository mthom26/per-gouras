import React, { Fragment } from 'react';

import Nav from './Nav';
import Footer from './Footer';

import '../reboot.css';
import '../global.css';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Nav />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
