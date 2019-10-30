import React from 'react';

import styles from './Footer.module.css';
import logo from '../assets/images/pergouras.svg';
import fb from '../assets/images/facebook-square.svg';
import ig from '../assets/images/instagram-logo.png';
import pa from '../assets/images/Patreon_Mark_White.png';
import sp from '../assets/images/Spotify_Icon_RGB_White.png';
import vi from '../assets/images/vimeo_icon_white.png';
import yt from '../assets/images/youtube-square.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="">
            <img src={logo} alt="Per Gouras" />
          </a>
        </div>
        <div className={styles.icons}>
          <a href="http://www.facebook.com/pergouras">
            <img src={fb} width="24px" />
          </a>
          <a href="http://www.instagram.com/pergouras">
            <img src={ig} width="24px" />
          </a>
          <a href="https://www.youtube.com/channel/UCzgvJXUCCijiXLLfh9zYvbg">
            <img src={yt} width="24px" />
          </a>
          <a href="https://open.spotify.com/artist/4Qz0eU8Ym4kTSADW5wbOKo?si=aa9jDzfcQN2GVidI6nJDqw">
            <img src={sp} width="24px" />
          </a>
          <a href="http://www.patreon.com/pergouras">
            <img src={pa} width="24px" />
          </a>
          <a href="http://www.vimeo.com/pergouras">
            <img src={vi} width="24px" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
