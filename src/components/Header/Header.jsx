import React from 'react';
import '../../config.css';
import Styles from './Header.module.css';
import greetings from '../../assets/img/illustrations/emoji.svg';
import ScrollArrow from '../Subcomponents/ScrollArrow/ScrollArrow';

const Header = () => {
  return (
    <header className={Styles.header}>
      <section className={Styles.headerInfo}>
        <small className={Styles.small}>
          <img src={greetings} alt="Emoji de mão abanando" />
          Olá, mundo! Eu sou
        </small>
        <h1 className={Styles.title}>YTALO GABRIEL</h1>
        <span className={Styles.subtitle}>{'<Front End Developer />'}</span>
        <ScrollArrow />
      </section>
    </header>
  );
};

export default Header;
