import React, { useContext } from 'react';

import { Context } from './Context';
import Header from './Header';
import Input from './Input';
import Output from './Output';

const App: React.FCX = ({ className }) => {
  const context: any = useContext(Context);

  return (
    <React.Fragment>
      <Header />
      <main>
        <h2>Create your Table, INPUT & OUTPUT</h2>
        <Input />
        <Output />
      </main>
      <footer>© kudoa</footer>
    </React.Fragment>
  );
};

export default App;
