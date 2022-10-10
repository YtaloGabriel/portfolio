import React from 'react';
import Styles from './Subtitle.module.css';

// ColorTheme css is on "config.css"

const Subtitle = ({ children, colorTheme }) => {
  return (
    <h3 className={`${Styles.subtitle} ${colorTheme || 'subtitleTheme1'}`}>
      {children}
    </h3>
  );
};

export default Subtitle;
