import React from 'react';

import LogoAnim from './LogoAnim';

import styles from './Main.module.css';

const Main = () => {
  return (
    <div className={styles.main}>
      <LogoAnim />
    </div>
  );
};

export default Main;
