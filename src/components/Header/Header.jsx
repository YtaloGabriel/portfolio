import React from 'react';
import '../../config.css';
import Styles from './Header.module.css';
import Me from '../../assets/img/profile.png';

const Header = () => {
  return (
    <header className={Styles.header}>
      <h1 className={Styles.title}>HELLO</h1>
      <div className={Styles.profileImage}>
        <img
          className={Styles.image}
          src={Me}
          alt="Uma foto minha em preto e branco, olhando para o lado esquerdo, com um fundo azul em formato de losango."
        />
      </div>
    </header>
  );
};

export default Header;
