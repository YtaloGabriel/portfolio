import React from 'react';
import ProjectCard from '../Subcomponents/ProjectCard/ProjectCard';
import TitleContent from '../Subcomponents/TitleContent/TitleContent';
import Styles from './Projects.module.css';
import dogs from '../../assets/img/projects/dogs.png';
import theweather from '../../assets/img/projects/theweather.png';
import ulver from '../../assets/img/projects/ulver.png';
import link from '../../assets/img/social/link.svg';

const Projects = () => {
  return (
    <div className={`${Styles.content} slideToRight`}>
      <TitleContent colorTheme="titleTheme2">Projetos Favoritos</TitleContent>
      <div className={Styles.cards}>
        <ProjectCard
          title="Dogs"
          subtitle="Rede Social"
          image={dogs}
          link="https://ytalogabriel.github.io/dogs/"
        />
        <ProjectCard
          title="The Weather"
          subtitle="Informações do tempo/clima"
          image={theweather}
          link="https://ytalogabriel.github.io/the-weather/"
        />
        <ProjectCard
          title="Ulver"
          subtitle="Landing page Freelancer"
          image={ulver}
          link="https://ytalogabriel.github.io/ulver-project/"
        />
      </div>
      <a
        href="https://github.com/ytalogabriel"
        target="_blank"
        className={Styles.githubLink}
      >
        <img src={link} alt="Ícone de Link" />
        Ver todos os projetos
      </a>
    </div>
  );
};

export default Projects;
