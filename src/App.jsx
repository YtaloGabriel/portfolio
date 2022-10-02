import React from 'react';
import './config.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { GlobalStorage } from './GlobalContext';

function App() {
  return (
    <div className="App">
      <GlobalStorage>
        <Header />
        <Main />
        <Footer />
      </GlobalStorage>
    </div>
  );
}

export default App;
