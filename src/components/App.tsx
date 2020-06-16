import React, { useContext } from 'react';

import { Context } from './Context';

import { GlobalCSS } from '../styles/global-style';
import { ResetCSS } from '../styles/reset-style';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

// import HtmlSample from './PracticeHtml';

const App: React.FC = () => {
  // const context: any = useContext(Context);

  return (
    <>
      <ResetCSS />
      <GlobalCSS />
      <Header />
      <Main />
      <Footer />
      {/* <HtmlSample /> */}
    </>
  );
};

export default App;
