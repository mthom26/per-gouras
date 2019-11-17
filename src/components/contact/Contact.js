import React, { useState } from 'react';

import styles from './Contact.module.css';

const initialFormData = {
  name: '',
  email: '',
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);

  const updateFormData = event => {
    const { target } = event;
    setFormData({ ...formData, [target.name]: target.value });
  };

  // console.log(formData);
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.details}>
          <h1>Contact</h1>
        </div>

        <div className={styles.form}>
          <h1>Form</h1>
          <form>
            <div className={styles.inputBlock}>
              <label htmlFor="name">Name</label>
              <input
                onChange={updateFormData}
                value={formData.name}
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className={styles.inputBlock}>
              <label htmlFor="email">Email</label>
              <input
                onChange={updateFormData}
                value={formData.email}
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className={styles.inputBlock}>
              <label htmlFor="message">Message</label>
              <textarea
                onChange={updateFormData}
                rows={4}
                value={formData.message}
                name="message"
                id="message"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
