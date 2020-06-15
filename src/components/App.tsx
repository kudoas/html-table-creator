import React, { useContext } from 'react';

import { Context } from './Context';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

// import HtmlSample from './PracticeHtml';

const App: React.FCX = ({ className }) => {
  // const context: any = useContext(Context);

  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
      {/* <HtmlSample /> */}
    </React.Fragment>
  );
};

export default App;
