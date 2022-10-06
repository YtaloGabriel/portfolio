import React from 'react';
import Styles from './MyLinks.module.css';

import URLImage from '../../assets/img/social/link.svg';
import whatsapp from '../../assets/img/social/whatsapp.svg';
import linkedin from '../../assets/img/social/linkedin.svg';
import github from '../../assets/img/social/github.svg';
import email from '../../assets/img/social/email.svg';
import instagram from '../../assets/img/social/instagram.svg';

const MyLinks = () => {
  return (
    <section className={Styles.container}>
      <a
        href="https://api.whatsapp.com/send?phone=5582981895621"
        target="_blank"
        className={Styles.link}
      >
        <img className={Styles.linkImage} src={whatsapp} alt="WhatsApp logo" />
        <span className={`${Styles.linkTitle} ${Styles.whatsapp}`}>
          WhatsApp
        </span>
        <img src={URLImage} alt="Ícone de Link" />
      </a>

      <a
        href="https://linkedin.com/in/YtaloGabriel"
        target="_blank"
        className={Styles.link}
      >
        <img className={Styles.linkImage} src={linkedin} alt="LinkedIn logo" />
        <span className={`${Styles.linkTitle} ${Styles.linkedin}`}>
          LinkedIn
        </span>
        <img src={URLImage} alt="Ícone de Link" />
      </a>

      <a
        href="https://github.com/YtaloGabriel"
        target="_blank"
        className={Styles.link}
      >
        <img className={Styles.linkImage} src={github} alt="Github  logo" />
        <span className={`${Styles.linkTitle} ${Styles.github}`}>Github</span>
        <img src={URLImage} alt="Ícone de Link" />
      </a>

      <a
        href="mailto:ytalogabr@gmail.com"
        target="_blank"
        className={Styles.link}
      >
        <img className={Styles.linkImage} src={email} alt="E-mail  @ logo" />
        <span className={`${Styles.linkTitle} ${Styles.email}`}>
          ytalogabr@gmail.com
        </span>
        <img src={URLImage} alt="Ícone de Link" />
      </a>

      <a
        href="https://instagram.com/ytalogabr"
        target="_blank"
        className={Styles.link}
      >
        <img
          className={Styles.linkImage}
          src={instagram}
          alt="Instagram logo"
        />
        <span className={`${Styles.linkTitle} ${Styles.instagram}`}>
          Instagram
        </span>
        <img src={URLImage} alt="Ícone de Link" />
      </a>
    </section>
  );
};

export default MyLinks;
