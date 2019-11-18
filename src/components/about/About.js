import React from 'react';
import Img from 'gatsby-image';
import { useInView } from 'react-intersection-observer';

import styles from './About.module.css';

import philipImage from '../../assets/images/philip-fehrecke.jpg';
import reneImage from '../../assets/images/rene-wellmann.jpg';
import sorchaImage from '../../assets/images/sorcha-thompson.jpg';

const About = ({ data }) => {
  const { perGourasImage } = data;

  const [refOne, inViewOne] = useInView({ triggerOnce: true, threshold: 0.7 });
  const [refTwo, inViewTwo] = useInView({ triggerOnce: true, threshold: 0.7 });
  const [refThree, inViewThree] = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  const classOneLeft = !inViewOne
    ? `${styles.itemContent} ${styles.fadeInLeft}`
    : styles.itemContent;
  const classOneRight = !inViewOne
    ? `${styles.itemImgContainer} ${styles.fadeInRight}`
    : styles.itemImgContainer;

  const classTwoLeft = !inViewTwo
    ? `${styles.itemContent} ${styles.fadeInRight}`
    : styles.itemContent;
  const classTwoRight = !inViewTwo
    ? `${styles.itemImgContainer} ${styles.fadeInLeft}`
    : styles.itemImgContainer;

  const classThreeLeft = !inViewThree
    ? `${styles.itemContent} ${styles.fadeInLeft}`
    : styles.itemContent;
  const classThreeRight = !inViewThree
    ? `${styles.itemImgContainer} ${styles.fadeInRight}`
    : styles.itemImgContainer;

  console.log(classTwoLeft);
  return (
    <div className={styles.about}>
      <div className={styles.header}>
        <div className={styles.imgContainer}>
          <Img fluid={perGourasImage.childImageSharp.fluid} />
        </div>

        <div className={styles.container}>
          <h1>per gouras</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh
            ante, congue semper interdum facilisis, sagittis vel nunc. Morbi
            mollis condimentum diam in malesuada. Suspendisse vestibulum blandit
            pharetra. Aenean a semper nisi. Donec ut elementum dolor. Etiam nec
            posuere elit, eget imperdiet ligula. Sed in risus libero. Cras eget
            justo malesuada, pharetra nisi a, sagittis sem. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae; Maecenas gravida finibus ultrices. Nulla eget.
          </p>
        </div>
      </div>

      <div className={styles.items}>
        <div ref={refOne} className={styles.item}>
          <div className={classOneLeft}>
            <div className={styles.itemContentContainer}>
              <h2>philip fehrecke</h2>
              <p>
                Suspendisse vestibulum blandit pharetra. Aenean a semper nisi.
                Donec ut elementum dolor. Etiam nec posuere elit, eget imperdiet
                ligula. Sed in risus libero. Cras eget justo malesuada, pharetra
                nisi a, sagittis sem. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia Curae; Maecenas gravida
                finibus ultrices.
              </p>
            </div>
          </div>

          <div className={classOneRight}>
            <img src={philipImage} />
          </div>
        </div>

        <div ref={refTwo} className={styles.item}>
          <div className={classTwoLeft}>
            <div className={`${styles.itemContentContainer}`}>
              <h2>rene wellmann</h2>
              <p>
                Suspendisse vestibulum blandit pharetra. Aenean a semper nisi.
                Donec ut elementum dolor. Etiam nec posuere elit, eget imperdiet
                ligula. Sed in risus libero. Cras eget justo malesuada, pharetra
                nisi a, sagittis sem. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia Curae; Maecenas gravida
                finibus ultrices.
              </p>
            </div>
          </div>

          <div className={`${classTwoRight} ${styles.itemOdd}`}>
            <img src={reneImage} />
          </div>
        </div>

        <div ref={refThree} className={styles.item}>
          <div className={classThreeLeft}>
            <div className={styles.itemContentContainer}>
              <h2>sorcha thompson</h2>
              <p>
                Suspendisse vestibulum blandit pharetra. Aenean a semper nisi.
                Donec ut elementum dolor. Etiam nec posuere elit, eget imperdiet
                ligula. Sed in risus libero. Cras eget justo malesuada, pharetra
                nisi a, sagittis sem. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia Curae; Maecenas gravida
                finibus ultrices.
              </p>
            </div>
          </div>

          <div className={classThreeRight}>
            <img src={sorchaImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
