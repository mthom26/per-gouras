import React from 'react';

import styles from './Main.module.css';
import logo from '../../assets/images/pergouras.svg';

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <img src={logo} alt="Per Gouras logo" />
      </div>
    </div>
  );
};

export default Main;
