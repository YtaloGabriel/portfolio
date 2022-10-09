import React from 'react';
import '../../config.css';
import Styles from './ToggleOptions.module.css';
import { GlobalContext } from '../../GlobalContext';

export const ToggleOptions = () => {
  const { contentActive, setContentActive } = React.useContext(GlobalContext);
  const [sliderPosition, setSliderPosition] = React.useState('sliderLeft');

  const aboutButtonActive = (event) => {
    event.preventDefault();
    if (contentActive === 'projects') {
      setContentActive('about');
      setSliderPosition('sliderLeft');
    }
  };

  const projectsButtonActive = (event) => {
    event.preventDefault();
    if (contentActive === 'about') {
      setContentActive('projects');
      setSliderPosition('sliderRight');
    }
  };

  return (
    <section className={Styles.container}>
      <div className={`${Styles.slider} ${sliderPosition}`}></div>
      <button className={Styles.button} onClick={aboutButtonActive}>
        Sobre Mim
      </button>
      <button className={Styles.button} onClick={projectsButtonActive}>
        Meus Projetos
      </button>
    </section>
  );
};

export default ToggleOptions;
