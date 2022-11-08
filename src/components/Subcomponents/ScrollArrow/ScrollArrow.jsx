import React from 'react';
import styles from './ScrollArrow.module.css';
import { Link, animateScroll as scroll } from 'react-scroll';

const ScrollArrow = () => {
  return (
    <section className={styles.container}>
      <Link
        className={styles.anchor}
        to="toggleOptions"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      ></Link>
      <div className={styles.arrowContainer}>
        <div className={styles.chevron}></div>
        <div className={styles.chevron}></div>
        <div className={styles.chevron}></div>
      </div>
    </section>
  );
};

export default ScrollArrow;
