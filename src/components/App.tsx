import React, { useContext } from 'react';

import { Context } from './Context';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const App: React.FCX = ({ className }) => {
  // const context: any = useContext(Context);

  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
};

export default App;
