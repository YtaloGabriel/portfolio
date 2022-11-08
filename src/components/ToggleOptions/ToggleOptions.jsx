import React from 'react';
import '../../config.css';
import Styles from './ToggleOptions.module.css';
import { GlobalContext } from '../../GlobalContext';
import { Link, animateScroll as scroll } from 'react-scroll';

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
    <section className={Styles.container} id="toggleOptions">
      <div className={`${Styles.slider} ${sliderPosition}`}></div>
      <Link
        className={Styles.button}
        onClick={aboutButtonActive}
        to="toggleOptions"
        spy={false}
        offset={-50}
        smooth={true}
        duration={500}
      >
        Sobre Mim
      </Link>
      <Link
        className={Styles.button}
        onClick={projectsButtonActive}
        to="toggleOptions"
        spy={true}
        offset={-50}
        smooth={true}
        duration={500}
      >
        Meus Projetos
      </Link>
    </section>
  );
};

export default ToggleOptions;
