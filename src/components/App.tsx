import React from 'react';

import { GlobalCSS, ResetCSS } from '../styles';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const App: React.FC = () => {
  return (
    <>
      <ResetCSS />
      <GlobalCSS />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
