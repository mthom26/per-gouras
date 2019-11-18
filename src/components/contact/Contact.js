import React, { useState } from 'react';

import styles from './Contact.module.css';
import spinner from '../../assets/images/spinner.svg';
import fb from '../../assets/images/facebook-square.svg';
import ig from '../../assets/images/instagram-logo.png';
import pa from '../../assets/images/Patreon_Mark_White.png';
import sp from '../../assets/images/Spotify_Icon_RGB_White.png';
import vi from '../../assets/images/vimeo_icon_white.png';
import yt from '../../assets/images/youtube-square.svg';

const initialFormData = {
  name: '',
  email: '',
  message: '',
};

const initialFormStatus = {
  success: false,
  failure: false,
  loading: false
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formStatus, setFormStatus] = useState(initialFormStatus);

  const updateFormData = event => {
    const { target } = event;
    setFormData({ ...formData, [target.name]: target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();

    setFormStatus({ ...formStatus, loading: true });

    return fetch(process.env.GATSBY_AWS_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(formData)
    })
    .then(response => {
      // console.log(response);
      setFormData(initialFormData);
      setFormStatus({ ...initialFormStatus, success: true });
    })
    .catch(err => {
      // console.log(err);
      setFormData(initialFormData);
      setFormStatus({ ...initialFormStatus, failure: true });
    });
  };

  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        
        <div className={styles.form}>
          <h1>Get In Touch</h1>
          <div className={styles.divider} />
          <form>
            <div className={`${styles.inputBlock} contactFormInputBlock`}>
              <label htmlFor="name">Name</label>
              <input
                onChange={updateFormData}
                value={formData.name}
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className={`${styles.inputBlock} contactFormInputBlock`}>
              <label htmlFor="email">Email</label>
              <input
                onChange={updateFormData}
                value={formData.email}
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className={`${styles.inputBlock} contactFormInputBlock`}>
              <label htmlFor="message">Message</label>
              <textarea
                onChange={updateFormData}
                rows={4}
                value={formData.message}
                name="message"
                id="message"
              />
            </div>
            <button
              onClick={submitForm}
              className={styles.button}
            >
              <span style={{ margin: '0 1rem' }}>Send</span>
              {formStatus.loading && (
                <img
                  src={spinner}
                  className={styles.loader}
                  width="22px"
                  height="22px"
                  alt=""
                />
              )}
            </button>

            <div className={styles.formStatus}>
              {formStatus.success && <span className={styles.formSuccess}>Message Sent!</span>}
              {formStatus.failure && <span className={styles.formFailure}>Form Not Sent!</span>}
            </div>
          </form>
        </div>

        <div className={styles.details}>
          <h1>Contact</h1>
          <div className={styles.divider} />
          <p className={styles.detailsText}>Email</p>
          <a className={styles.detailsLink} href="mailto:pergouras@gmail.com">pergouras@gmail.com</a>
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

      </div>
    </div>
  );
};

export default Contact;
