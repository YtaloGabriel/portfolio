import React from 'react';
import Styles from './About.module.css';

import javascript from '../../assets/img/technologies/javascript.png';
import typescript from '../../assets/img/technologies/typescript.png';
import react from '../../assets/img/technologies/react.png';
import python from '../../assets/img/technologies/python.png';
import git from '../../assets/img/technologies/git.png';
import download from '../../assets/img/social/download.svg';
import Subtitle from '../Subcomponents/Subtitle/Subtitle';
import TitleContent from '../Subcomponents/TitleContent/TitleContent';
import MyLinks from '../MyLinks/MyLinks';
import curriculum from '../../assets/curriculum.pdf';

const About = () => {
  return (
    <section className={`${Styles.content} slideToLeft`}>
      <div className={Styles.container}>
        <h1 className={Styles.title}>Ytalo Gabriel</h1>
        <Subtitle>Web Developer</Subtitle>
        <p className={Styles.textInfo}>
          Alagoano nato, completamente apaixonado pela tecnologia, em especial o
          Front End Dev. Estou atualmente cursando Sistemas de Informação no
          Instituto Federal de Alagoas (IFAL), "brinco" com o desenvolvimento
          Front End desde 2015, mas comecei no mundo da programação,
          definitivamente, em 2018. Hoje estou e em busca da minha primeira
          oportunidade na área.
        </p>
      </div>

      {/*  */}

      <div className={Styles.container}>
        <TitleContent colorTheme="titleTheme1">Experiência DEV</TitleContent>
        <div className={Styles.technologies}>
          <div className={Styles.technology}>
            <img src={javascript} alt="JavaScript Logo" />
          </div>
          <div className={Styles.technology}>
            <img src={react} alt="React Logo" />
          </div>
          <div className={Styles.technology}>
            <img src={typescript} alt="TypeScript Logo" />
          </div>
          <div className={Styles.technology}>
            <img src={python} alt="Python Logo" />
          </div>
          <div className={Styles.technology}>
            <img src={git} alt="Git Logo" />
          </div>
        </div>
      </div>

      {/*  */}

      <div className={Styles.container}>
        <TitleContent colorTheme="titleTheme1">Conexões Sociais</TitleContent>
        <MyLinks />
      </div>

      <div className={Styles.container}>
        <a
          href={curriculum}
          className={Styles.curriculumButton}
          download="Ytalo Gabriel - CV"
          target="_blank"
        >
          <img src={download} alt="Ícone de Download" />
          <span>Baixar CV</span>
        </a>
      </div>
    </section>
  );
};

export default About;
