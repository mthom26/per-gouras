import React, { Fragment } from 'react';

import Nav from './Nav';

import '../reboot.css';
import '../global.css';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Nav />
      {children}
    </Fragment>
  );
};

export default Layout;
