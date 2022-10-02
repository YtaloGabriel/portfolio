import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [contentActive, setContentActive] = React.useState('about');

  return (
    <GlobalContext.Provider value={{ contentActive, setContentActive }}>
      {children}
    </GlobalContext.Provider>
  );
};
