import React from 'react';
import '../../config.css';
import Styles from './Main.module.css';
import ToggleOptions from '../ToggleOptions/ToggleOptions';
import { GlobalContext } from '../../GlobalContext';
import About from '../About/About';
import Projects from '../Projects/Projects';

const Main = () => {
  const { contentActive } = React.useContext(GlobalContext);

  return (
    <main className={Styles.main}>
      <ToggleOptions />
      {contentActive && contentActive === 'about' ? <About /> : <Projects />}
    </main>
  );
};

export default Main;
