import React from 'react';
import Styles from './ProjectCard.module.css';

const ProjectCard = ({ title, subtitle, image, link }) => {
  return (
    <section
      className={Styles.card}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={Styles.cardInfo}>
        <div className={Styles.cardInfoTexts}>
          <h1 className={Styles.cardTit}>{title || 'Título'}</h1>
          <p className={Styles.cardSub}>{subtitle || 'Subtítulo'}</p>
        </div>
        <a href={link || '#'} target="_blank" className={Styles.link}>
          Visitar
        </a>
      </div>
    </section>
  );
};

export default ProjectCard;
