import React from 'react';
import Styles from './TitleContent.module.css';

const TitleContent = ({ children, colorTheme }) => {
  return (
    <h3 className={`${Styles.titleContent} ${colorTheme || 'titleTheme1'}`}>
      {children}
    </h3>
  );
};

export default TitleContent;
