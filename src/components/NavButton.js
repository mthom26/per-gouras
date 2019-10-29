import React from 'react';

import styles from './NavButton.module.css';

const NavButton = ({ toggleNav, navOpen }) => {
  const openClass = navOpen ? styles.open : '';

  return (
    <div onClick={toggleNav} className={`${styles.navButton} ${openClass}`}>
      <div className={`${styles.line} ${styles.one} ${openClass}`} />
      <div className={`${styles.line} ${styles.two} ${openClass}`} />
      <div className={`${styles.line} ${styles.three} ${openClass}`} />
    </div>
  );
};

export default NavButton;
