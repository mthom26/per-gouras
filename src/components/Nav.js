import React, { Fragment, useState } from 'react';
import { Link } from 'gatsby';

import NavButton from './NavButton';

import styles from './Nav.module.css';
import logo from '../assets/images/pergouras.svg';

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navClasses = `${styles.nav} ${navOpen ? '' : styles.navHidden}`;

  return (
    <Fragment>
      <NavButton navOpen={navOpen} toggleNav={() => setNavOpen(!navOpen)} />
      <nav className={navClasses}>
        <div className={styles.container}>
          <Link className={styles.link} to="#">
            about
          </Link>
          <Link className={styles.logoLink} to="#">
            <img src={logo} alt="" />
          </Link>
          <Link className={styles.link} to="#">
            contact
          </Link>
        </div>
      </nav>
    </Fragment>
  );
};

export default Nav;
