import React from 'react';
import '../../config.css';
import Styles from './Header.module.css';
import greetings from '../../assets/img/illustrations/emoji.svg';
import dev from '../../assets/img/illustrations/developer.png';

const Header = () => {
  return (
    <header className={Styles.header}>
      <section className={Styles.myInfo}>
        <small className={Styles.small}>
          <img src={greetings} alt="Emoji de mão abanando" />
          Olá, eu sou
        </small>
        <h1 className={Styles.title}>YTALO</h1>
        <h1 className={Styles.title}>GABRIEL</h1>
        <span className={Styles.subtitle}>Front End Developer</span>
      </section>
      <img
        src={dev}
        className={Styles.devImage}
        alt="Ilustração de um desenvolvedor sentado no chão, manuseando um notebook sobre as pernas"
      />
    </header>
  );
};

export default Header;
